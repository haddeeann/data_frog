---
title: Broadcasting with NumPy
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Broadcasting with NumPy](https://numpy.org/doc/stable/user/basics.broadcasting.html)

The term broadcasting describes how NumPY treats arrays with different shapes during arithmetic operations. 

The smaller array is "broadcast" across the larger array so that they have compatible shapes. Broadcasting provides a means of vectorizing array operations so that looping occurs in C instead of Python. 

It does this without making needless copies of data and usually leads to efficient algorithm implementations.

It can sometimes lead to inefficient use of memory that slows down computation.

NumPy operations are usually done on pairs of arrays on an element by element basis. In the simplest case, the two arrays must have exactly the same shape. NumPy's broadcasting rule relaxes this constraint whe the arrays shapes meet certain constraints.

The result is the equivalent to the previous example where b was an array. We can think of the scalar b being stretched during the arithmetic operation into an array with the same shape as a. The new elements in b, as shown in Figure 1, are simply copies of the original scalar. the stretching analogy is only conceptual.

NumPy is smart enough to use the original scalar value without actually making copies so that the broadcasting operations are as memory and computationally efficient as possible.

## General Broadcasting Rules
When operating on two arrays, NumPy compares their shapes element wise. It starts with the trailing dimensions and works its way left. 

Two dimensions are compatible when they are equal or one of them is 1. If those conditions are not met, then a ValueError: operands could not be broadcast together exception is thrown.

That means that the arrays have incompatible shapes. The size of the resulting array is the size that is not 1 along each of the inputs. Arrays do not need to have the same number of dimensions. For example, 256x256x3 array of RGB values, you want to scale each color in the image by a different value.

Lining up the sizes of the trailing axes of these arrays according to the broadcast rules shows that they are compatible. When either of the dimensions compares is one, then the other is used. 

In other words, dimensions with size 1 are stretched or 'copied' to match the other. In the following example, both the A and B arrays have axes with length one that are expanded to a larger size during the broadcast operation.

## Broadcastable arrays
A set of arrays is called 'broadcastable' to the same shape if the above rules produce a valid result.

Broadcasting provides a convenient way of taking the outer product of two arrays. 

## Practical Example
Broadcasting comes up in real world problems. For example, the vector quantization algorithm used in information theory, classification, and other related areas.

 A large number of observations, perhaps read from a  database are compared to a set of codes. The three dimensional array, diff is a consequence of broadcasting not a necessity for the calculation.

Broadcasting is a powerful tool for writing short and usually intuitive code that does it's computations very efficiently in C.