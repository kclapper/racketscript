#lang typed/racket/base

(require "ident.rkt"
         "language.rkt")

(provide (all-defined-out))

(struct Module  ([id      : Symbol]
                 [path    : Path]
                 [lang    : (U Symbol String (Listof Symbol))]
                 [imports : (Setof (U Path Symbol))]
                 [quoted-bindings : (Setof Symbol)]
                 [forms   : (Listof ModuleLevelForm)])
  #:transparent)

(define-language Absyn
  #:alias
  [Program      TopLevelForm]
  [ModuleName   (U Symbol Path)]

  #:forms
  ;; Top Level Forms

  [TopLevelForm             GeneralTopLevelForm
                            Expr
                            Module
                            Begin]

  [GeneralTopLevelForm      Expr
                            (DefineValues [ids : Args] [expr : Expr])
                            ;; DefineSyntaxes

                            ;; Same as ILRequire, but can't use to
                            ;; avoid cyclic depnedency.
                            (JSRequire [alias : Symbol]
                                       [path : (U Symbol Path-String)]
                                       [mode : (U 'default '*)])
                            #;Require*]

  ;; Module Level Forms
  [Provide*            (Listof Provide)]
  [Provide             (SimpleProvide     [id       : Symbol])
                       (RenamedProvide    [local-id : Symbol]
                                          [exported-id : Symbol])
                       (AllDefined        [exclude : (Setof Symbol)])
                       (PrefixAllDefined  [prefix-id : Symbol]
                                          [exclude : (Setof Symbol)])]
  [ModuleLevelForm     GeneralTopLevelForm
                       Provide*
                       SubModuleForm]

  [SubModuleForm       Module]

  ;; Expressions

  [Expr    Ident
           (TopId             [id       : Symbol])
           (VarRef            [var      : (Option (U Symbol TopId Ident))])
           (Quote             [datum    : Any])


           Begin
           (Begin0            [expr0    : Expr]
                              [expr*    : (Listof Expr)])

           (PlainApp          [lam      : Expr]    [args  : (Listof Expr)])
           (PlainLambda       [formals  : Formals] [exprs : (Listof Expr)] [unchecked? : Boolean])
           (CaseLambda        [clauses  : (Listof PlainLambda)])


           (If                [pred     : Expr]
                              [t-branch : Expr]
                              [f-branch : Expr])

           ;; This also acts as LetRecValues because Absyn is
           ;; freshened.
           (LetValues         [bindings : (Listof Binding)]
                              [body     : (Listof Expr)])
           (Set!              [id       : Symbol] [expr : Expr])

           (WithContinuationMark   [key    : Expr]
                                   [value  : Expr]
                                   [result : Expr])]

  [Ident  (LocalIdent         [id : Symbol])
          (ImportedIdent      [id : Symbol] [src-mod : Module-Path] [reachable? : Boolean])
          (TopLevelIdent      [id : Symbol])]

  [Begin   (Listof TopLevelForm)]

  ;; Bindings and Formal Arguments

  [Binding      (Pairof Args Expr)]

  [Args         (Listof Symbol)]

  [Formals      Symbol
                (Listof Symbol)
                (Pairof (Listof Symbol) Symbol)])


(: lambda-arity (-> PlainLambda (U Natural arity-at-least)))
(define (lambda-arity f)
  (define frmls (PlainLambda-formals f))
  (cond
    [(symbol? frmls) (arity-at-least 0)]
    [(list? frmls) (length frmls)]
    [(pair? frmls) (arity-at-least (length (car frmls)))]))

(: variadic-lambda? (-> PlainLambda Boolean))
(define (variadic-lambda? lam)
  (not (list? (PlainLambda-formals lam))))

(: plain-lambda-arity-includes (-> PlainLambda Natural Boolean))
(define (plain-lambda-arity-includes lam k)
  (formals-arity-includes (PlainLambda-formals lam) k))

(: formals-arity-includes (-> Formals Natural Boolean))
(define (formals-arity-includes formals k)
  (cond
    [(symbol? formals) #t]
    [(list? formals) (equal? (length formals) k)]
    [(pair? formals) (>= k (length (car formals)))]))

(: freshen-formals (-> Formals Formals))
(define (freshen-formals formals)
  (cond
    [(symbol? formals) (fresh-id (string->symbol (format "_~a" formals)))]
    [(list? formals) (for/list ([f : Symbol formals]) : (Listof Symbol)
                       (cast (freshen-formals f) Symbol))]
    [(pair? formals) (cons (cast (freshen-formals (car formals)) (Listof Symbol))
                           (cast (freshen-formals (cdr formals)) Symbol))]))

(: formals->list (-> Formals (Listof Symbol)))
(define (formals->list formals)
  (cond
    [(symbol? formals) (list formals)]
    [(list? formals) formals]
    [(pair? formals) (append (car formals)
                             (list (cdr formals)))]))

;(: TopLevelForm-traverse (All (B) (-> TopLevelForm (-> B B) TopLevelForm)))
;(define (TopLevelForm-traverse ast fn)
  ;(define result (fn ast))
  ;(cond
    ;[(GeneralTopLevelForm? result) (GeneralTopLevelForm-traverse result fn)]))
;
;(: GeneralTopLevelForm-traverse (All (B) (-> GeneralTopLevelForm (-> B B) GeneralTopLevelForm)))
;(define (GeneralTopLevelForm-traverse ast fn)
  ;(define result (fn ast))
  ;(cond
    ;[]))
;
;(: Expr-traverse (All (B) (-> Expr (-> B B) Expr)))
;(define (Expr-traverse ast fn)
  ;(define result (fn ast))
  ;(cond
    ;[]))
;
;(: GeneralTopLevelForm-traverse (All (B) (-> GeneralTopLevelForm (-> B B) GeneralTopLevelForm)))
;(define (GeneralTopLevelForm-traverse ast fn)
  ;(define result (fn ast))
  ;(cond
    ;[]))
;
;(: GeneralTopLevelForm-traverse (All (B) (-> GeneralTopLevelForm (-> B B) GeneralTopLevelForm)))
;(define (GeneralTopLevelForm-traverse ast fn)
  ;(define result (fn ast))
  ;(cond
    ;[]))
  ;(cond
    ;[(and (list? ast)
          ;(not (empty? ast)))
;
     ;(: traverse-list (All (C) (-> (Listof C) (Listof C))))
     ;(define (traverse-list ast-list)
       ;(cond
         ;[(empty? ast) empty]
         ;[else (cons (ast-traverse (first ast-list) fn) (traverse-list (rest ast-list)))]))
;
     ;(traverse-list ast)]
    ;[(set? ast)
     ;(for/set ([node (in-set result-ast)])
       ;(recur-on node))]
    ;[(pair? result-ast)
     ;(cons (recur-on (car result-ast))
           ;(recur-on (cdr result-ast)))]
    ;[(Module? result-ast) (Module (Module-id result-ast)
                                  ;(Module-path result-ast)
                                  ;(Module-lang result-ast)
                                  ;(Module-imports result-ast)
                                  ;(Module-quoted-bindings result-ast)
                                  ;(recur-on (Module-forms result-ast)))]
    ;[(DefineValues? result-ast) (DefineValues (recur-on (DefineValues-ids result-ast))
                                  ;(recur-on (DefineValues-expr result-ast)))]
    ;[(AllDefined? result-ast) (AllDefined (recur-on (AllDefined-exclude result-ast)))]
    ;[(PrefixAllDefined? result-ast) (PrefixAllDefined (PrefixAllDefined-prefix-id result-ast)
                                                      ;(recur-on (PrefixAllDefined-exclude result-ast)))]
    ;[(VarRef? result-ast) (VarRef (recur-on (VarRef-var result-ast)))]
    ;[(Begin0? result-ast) (Begin0 (recur-on (Begin0-expr0 result-ast))
                                  ;(recur-on (Begin0-expr* result-ast)))]
    ;[(PlainApp? result-ast) (PlainApp (recur-on (PlainApp-lam result-ast))
                                      ;(recur-on (PlainApp-args result-ast)))]
    ;[(PlainLambda? result-ast) (PlainLambda (recur-on (PlainLambda-formals result-ast))
                                            ;(recur-on (PlainLambda-exprs result-ast))
                                            ;(PlainLambda-unchecked? result-ast))]
    ;[(CaseLambda? result-ast) (CaseLambda (recur-on (CaseLambda-clauses result-ast)))]
    ;[(If? result-ast) (If (recur-on (If-pred result-ast))
                          ;(recur-on (If-t-branch result-ast))
                          ;(recur-on (If-f-branch result-ast)))]
    ;[(LetValues? result-ast) (LetValues (recur-on (LetValues-bindings result-ast))
                                        ;(recur-on (LetValues-body result-ast)))]
    ;[(Set!? result-ast) (Set! (Set!-id result-ast)
                              ;(recur-on (Set!-expr result-ast)))]
    ;[(WithContinuationMark? result-ast) (WithContinuationMark (recur-on (WithContinuationMark-key result-ast))
                                                              ;(recur-on (WithContinuationMark-value result-ast))
                                                              ;(recur-on (WithContinuationMark-result result-ast)))]
  ;    [else ast]))
