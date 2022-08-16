---
title: Indexing NumPy Arrays
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Indexing NumPy arrays](https://numpy.org/doc/stable/user/basics.indexing.html)

# Indexing

The `ndarrays` can be indexed using the stand Python object x[obj] syntax, same as normal dictionary access notation. There's different kinds of indexing available depending on the object. There is basic indexing and advanced indexing, and field access.

## Basic and single element indexing

the single element indexing work the same as in other standard Python sequences. It's 0-based and accepts negative indices to reference from the end of an array.

A single `ndarray` can be turned into a multidimentional array.

`
x = n.arange(10)
x.shape(2, 5)
x[1, 3]
8
`

The opposite can be said. Accessing a multidimensional array with one dimensional access reduces it and a subdimensional array is returned.

`
x[0]
array([0, 1, 2, 3, 4])
`

The returned array is a view, it's not a copy of the original but point to the exact same values in memory as the original array.

The syntax `x[0, 2] == x[0][2]` is equivalent. The second syntax created a new temporary array after the first index that is subsequently indexed by 2.

## Slicing and Striding

The basic slicing extends Python's basic concept of slicing to the N dimensions. Basic slicing occurs when the obj is a slice object.

It works like slicing an array in Python with start:stop:step notation in the brackets.

The `ellipses` and `newaxis` objects can be in this notation as well as integers. The simplest way of indexing with N integers returns an array scalar representing a corresponding item.

In NumPy there are 24 fundamental Python types to describe the different types of scalars.

All the rules of slicing sequences in Python apply on a per dimension basis.

The basics are that `i:j:k` will step through the array where i starts, j ends, and k is the step amount through the array where k != 0. that is, k can not equal zero.

## Dimensional indexing tools

The ellipsis is a tool to help with matching the array shapes with expressions in an assignment.

There can be only one ellipsis present in slicing. The length of the expanded selection tuple is `x.ndim`

Each `newaxis` object in the selection tuple serves to expand the dimensions of the the result by one unit length dimension.

