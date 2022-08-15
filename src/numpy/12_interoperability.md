---
title: Interoperability
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Structured Arrays](https://numpy.org/doc/stable/user/basics.interoperability.html)

## Interoperability with NumPy

NumPy's ndarray objects provide both a high level API for operations on array-structured data and a concrete implementation of the API.

Broadly speaking, there are three groups of features for interoperability with NumPy:

1. methods of turning a foreign object into an `ndarray`
2. methods of deferring execution from NumPy function to another array library
3. methods that use NumPy functions and return and instance of a foreign object.