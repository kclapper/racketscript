#lang typed/racket

(require "language.rkt")


;(define-language Simple
;  #:forms
;  [Require (Setof Id)]
;  [Id Symbol])

(define-language Simple
  #:forms
  [Athlete (Wrestler [evil? : Boolean]
                     [name : Id])]
  [Id Symbol])

;(: replace-1 (-> Simple Simple))
;(define (replace-1 ast)
;  (cond
;    [(Id? ast)
;     'bunny]
;    [else
;     ast]))
;
;(define ast (Wrestler #t 'not-bunny))
;
;
;(Wrestler 'Biggins #f)


;(traverse-Require (set 'not-one) (lambda (x) (cond [(Id? x) '1] [else x])))