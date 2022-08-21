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

## Arbitrary Objects in NumPy

The first set of interoperability features from teh NumPy API allows foreign objects to be treated as NumPy arrays whenever possible.

Whe NumPy functions encounter a foreign object, they will try in order:

1. the buffer protocol
2. the __array_interface__ protocol
3. the __array__() method

## Operation on Foreign Objects

A second set of methods defined by the NumPy API allows us to defer the execution from a NumPY function to another array library.

## Returning Foreign Objects

A third set of features is meant to use the NumPy function implementation and then convert the return value back inot an instance of the foreign object. The __array_finalize__ and __array_wrap__ methods act behind the scenes and return the type of a NumPY function that can be specified as needed.

## PyTorch Tensors

PyTorch is an optimized tensor library for deep learning using GPUs and CPUs. PyTorch arrays are commonly called tensors.

Tensors are similar to NumPy's ndarrays except that tensors can run on GPUs or other hardware accelerators.

NumpPy arrays and tensors often share the same underlying memory, and that eliminates the need to copy the data.