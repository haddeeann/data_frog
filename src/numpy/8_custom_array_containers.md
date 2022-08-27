---
title: Custom Array Containers
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Custom Array Containers](https://numpy.org/doc/stable/user/basics.dispatch.html)

## Writing Custom Array Containers

NumPy's dispatch mechanism, is the recommended way to writing custom N-dimensional array containers. This way makes them compatible with the NumPy API and that provides custom implementations of NumPy functionality.

NumPy allows a class to indicate that it would like to handle computations in a custom defined way through the interfaces __arrayufun__ and __array_function__.

The first _array_ufunc__ covers Universal functions (ufunc), a class of functions that include, for example, `numpy.multiply` and `numpy.sin`

The __array_ufunc_ receives:
- ufunc, a function like numpy.multiply
- method, a string, differentiating between numpy.multiply and other numpy multiply 
- inputs, which could be a mixture of different types