#lang typed/racket

(provide define-language)

(require (for-syntax racket/syntax
                     syntax/parse
                     syntax/stx
                     typed/racket))

;; Identifier -> Identifer
;; Given an identifier `name`, return  `name?`
(define-for-syntax (make-pred id)
  (format-id id "~a?" (syntax-e id)))

;; Macro to transform a BNF styled syntax to bunch of structs and
;; union types.
(define-syntax (define-language stx)
  ;; Syntax classes we expect after #:alias in language definition.
  ;; Rather than using define-type, generated code will use
  ;; define-type-alias
  (define-syntax-class typealias
    (pattern [name:id def]))

  ;; A BNF styled definition with types. Each case (typecase) in
  ;; defintion is either a typed racket type or a compound type, for
  ;; which structs are generated. All cases are combined with union.
  ;;
  ;; Eg.
  ;;   - [Expr Number
  ;;           Symbol
  ;;           (Plus [a : Number] [b : Number]
  ;;           (Minus [a: NUmber] [b : Number])]
  (define-syntax-class typedecl
    (pattern [name:id τ-case:typecase ...]))

  ;; Represents individual cases in type declaration.
  (define-syntax-class typecase
    (pattern name:id)
    (pattern (name:id
              [field-name:id (~datum :) field-type] ...))
    (pattern name))

  ;; Maybe<Syntax> -> Syntax
  ;; Generate type definition and predicate code for creating an alias
  (define (generate-alias stx)
    (syntax-parse stx
      [(~datum #f) #`()]
      [ta:typealias
       #`((define-type-alias ta.name ta.def)
          (define-predicate #,(make-pred #`ta.name) ta.name))]))

  ;; Syntax:typecase -> (Syntax-List Syntax Syntax)
  ;;
  ;; Generate code for given type return an identifier/syntax
  ;; representing the type and code that generates this type. For
  ;; cases where the types are already definied there is no need to
  ;; generate code.
  ;;
  ;; Structures equality has to be based on object identity.
  (define (generate-typecase stx)
    (syntax-parse stx
      [name:id #`(name)]
      [(name:id [field-name:id : field-type] ...)
       #:with (struct-accessor ...) (stx-map
                                     (λ (f)
                                       (format-id #'name "~a-~a" #'name f))
                                     #`(field-name ...))
       #`(name (struct name ([field-name : field-type] ...) #:transparent))]
      [name #`(name)]))

  ;; Syntax -> Syntax
  ;;
  ;; Generate code for type and its cases.
  (define (generate-decl stx)
    (syntax-parse stx
      [Τ:typedecl
       #:with ((τ-name τ ...) ...) (stx-map generate-typecase #`(Τ.τ-case ...))
       #:with type-predicate #`(define-predicate #,(make-pred #`Τ.name) Τ.name)
       #:with type-define
       (case (length (syntax-e #`(Τ.τ-case ...)))
         [(0) (error "Atleast one case required in declaration")]
         [(1) #`(define-type Τ.name τ-name ...)]
         [else #`(define-type Τ.name (U τ-name ...))])
       #`(type-define type-predicate τ ... ...)]))

  (define non-terminals
    (syntax-parse stx
      [(define-language lang-name:id
         (~or (~seq #:alias
                    α:typealias ...+)
              (~seq #:forms
                    T:typedecl ...+)) ...)
       #`(T.name ... ...)]))

  (define language-name
    (syntax-parse stx
      [(define-language lang-name:id _ ...) #'lang-name]))

  (define (in-non-terminals stx)
    (for/or ([id (syntax->list non-terminals)])
      (equal? (syntax->datum stx)
              (syntax->datum id))))

  (define-syntax-class non-terminal
    (pattern nt:id
             #:fail-when (not (in-non-terminals #'nt))
                         "Type case is not a non-terminal"))

  (define (traversable? stx)
    (syntax-parse stx
      #:literals (Listof
                  Setof
                  U
                  Symbol
                  Number
                  Boolean)
      #:datum-literals (:)
      [Symbol #f]
      [Number #f]
      [Boolean #f]
      [(Listof var:traversable) #t]
      [(Setof var:non-terminal) #t]
      [(struct-name:id [struct-field : struct-field-type] ...) #t]
      [(U var ...)
       (ormap traversable? (syntax->list #'(var ...)))]
      [else
       #t]))

  (define-syntax-class traversable
    (pattern stx
             #:fail-when (not (traversable? #'stx))
                         "Type not traversable"))

  (define (generate-traverse stx)
    (syntax-parse stx
      #:literals (define-type U)
      [((define-type type-name (U (~or τ-case-name:traversable
                                       non-traversable) ...)) _ struct-type ...)
       #:with traversal-name (generate-traversal-name #'type-name)
       #:with ((predicate-name cond-traversal) ...) (map get-clause (append (filter traversable? (syntax->list #'(τ-case-name ...)))
                                                                            (syntax->list #'(struct-type ...))))
       #`((: traversal-name (-> #,language-name (-> #,language-name #,language-name) #,language-name))
          (define (traversal-name ast fn)
            (define result (fn ast))
            (cond
              [(predicate-name result)
               (cond-traversal result fn)] ...
              (struct-clause struct-type result fn) ...
              [else
               result])))]
      [((define-type type-name τ-case-name) _ struct-type ...)
       #:with traversal-name (generate-traversal-name #'type-name)
       #:with ((predicate-name cond-traversal) ...) (map get-clause (append (filter traversable? (syntax->list #'(τ-case-name)))
                                                                      (syntax->list #'(struct-type ...))))
       #`((: traversal-name (-> #,language-name (-> #,language-name #,language-name) #,language-name))
          (define (traversal-name ast fn)
            (define result (fn ast))
            (cond
              [(predicate-name result)
               (cond-traversal result fn)] ...
              (struct-clause struct-type result fn) ...
              [else
               result])))]
      ))


  (define (get-clause stx)
    (syntax-parse stx
      #:literals (Listof Setof U struct)
      #:datum-literals (:)
      [τ-case:non-terminal
       #:with predicate-name (make-pred #'τ-case)
       #:with cond-traversal (generate-traversal-name #'τ-case)
       #'(predicate-name cond-traversal)]
      [(Listof τ-case:non-terminal)
       #:with predicate-name #'list?
       #:with cond-traversal #`(lambda ([result : (Listof τ-case)]
                                        [fn : (-> #,language-name #,language-name)])
                                 (map (lambda ([ast : τ-case])
                                        (#,(generate-traversal-name #'τ-case) ast fn))
                                      result))
       #'(predicate-name cond-traversal)]
      [(Setof τ-case:non-terminal)
       #:with predicate-name #'set?
       #:with cond-traversal #`(lambda ([result : (Setof τ-case)]
                                        [fn : (-> #,language-name #,language-name)])
                                 (for/set: : (Setof τ-case)
                                           ([ast : τ-case (in-set result)])
                                   (cast (#,(generate-traversal-name #'τ-case) ast fn)
                                         τ-case)))
       #'(predicate-name cond-traversal)]
      ))

  (syntax-parse stx
    [(define-language lang-name:id
       (~or (~seq #:alias
                  α:typealias ...+)
            (~seq #:forms
                  Τ:typedecl ...+)) ...)
     #:with ((α* α-pred*) ...) (stx-map generate-alias #`(α ... ...))
     #:with ((Τ* ...) ...) (stx-map generate-decl #`(Τ ... ...))
     #:with ((type-decl traversal) ...) (stx-map generate-traverse #`((Τ* ...) ...))
     #:with (lang-type-decl lang-type-pred) (generate-decl #`(lang-name #,@non-terminals))
     #`(begin α* ... α-pred* ...
              lang-type-decl lang-type-pred
              Τ* ... ...
              (~@ type-decl traversal) ...)]))

(define-syntax (struct-clause stx)
  (println stx)
  (syntax-parse stx
    #:literals (struct)
    #:datum-literals (:)
    [(struct-clause (struct name:id ([field-name:id : field-type] ...+) _ ...) result fn)
     #:with predicate-name (make-pred #'name)
     #:with (struct-accessor ...) (stx-map (lambda (stx)
                                             (format-id #'name
                                                        "~a-~a"
                                                        #'name stx))
                                           #'(field-name ...))
     #:with (new-field ...) (for/list ([field-type (in-syntax #'(field-type ...))]
                                       [field-accessor (in-syntax #'(struct-accessor ...))])
                              ;(if (traversable? field-type)
                                  ;#`(#,(generate-traversal-name field-type) (#,field-accessor result) fn)
                                  ;#`(#,field-accessor result))
                              #`(#,field-accessor result)
                              )
     #:with (field-traversal-name ...) (stx-map generate-traversal-name #'(field-type ...))
     #:with cond-traversal #`(lambda ([result : name]
                                      [fn : (All (B) (-> B B))])
                               (name new-field ...))

     #'[(predicate-name result) (cond-traversal result fn)]]
    ))

(define-for-syntax (generate-traversal-name stx)
  (syntax-parse stx
    [name:id (format-id #'name "traverse-~a" #'name)]))

(module+ test
  (require typed/rackunit)

  (test-case "Simple language"
    (define-language Simple
      #:forms
      [Value Id
             Boolean
             Number]
      [Id Symbol])

    (: replace-1 (-> Simple Simple))
    (define (replace-1 ast)
      (cond
        [(Id? ast)
         'bunny]
        [else
         ast]))

    (define ast 'not-bunny)

    (check-equal? (traverse-Value ast replace-1)
                  'bunny))

  (test-case "Simple language with List"
    (define-language Simple
      #:forms
      [Expr (Listof Expr)
            Value
            Id]
      [Value Id
             Boolean
             Number]
      [Id Symbol])

    (: replace-1 (-> Simple Simple))
    (define (replace-1 ast)
      (cond
        [(Id? ast)
         'bunny]
        [else
         ast]))

    (define ast (list `not-bunny `also-not-bunny))

    (check-equal? (traverse-Expr ast replace-1)
                  (list 'bunny 'bunny)))

  (test-case "Simple language with Set"
    (define-language Simple
      #:forms
      [Require (Setof Id)]
      [Id Symbol])

    (: replace-1 (-> Simple Simple))
    (define (replace-1 ast)
      (cond
        [(Id? ast)
         'bunny]
        [else
         ast]))

    (define ast (set `not-bunny `also-not-bunny))

    (check-equal? (traverse-Require ast replace-1)
                  (set 'bunny 'bunny)))

  ;(test-case "Simple language with Struct"
    ;(define-language Simple
      ;#:forms
      ;[Athlete (Wrestler [evil? : Boolean]
                         ;[name : Id])]
      ;[Id Symbol])
;
    ;(: replace-1 (-> Simple Simple))
    ;(define (replace-1 ast)
      ;(cond
        ;[(Id? ast)
         ;'bunny]
        ;[else
         ;ast]))
;
    ;(define ast (Wrestler 'not-bunny #t))
;
    ;(check-equal? (traverse-Athlete ast replace-1)
                  ;(set 'bunny 'bunny)))
  )
