﻿(let ((s -1))
  (define (f n)
    (set! s (* s n))
    (abs s))
  (+ (f 0) (f 1)))