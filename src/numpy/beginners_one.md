---
title: NumPy for Absolute Beginners (part one)
layout: "article_type_two.njk"
---
[Go home](/index.html)

## NumPy: Absolute Basics for Beginners
This and the next few articles are my summary of the article for absolute beginners.

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

NumPy stands for Numerical Python. It's used in a lot of science and engineering.

It's the universal standard for working with numerical data in Python and it's in many other libraries and Python packages.

### NumPy and Arrays

The main way I see of manipulating data in NumPy is through various kinds of arrays. There are smultidimensional arrays, matrix data structures, an ndarray. Ndarray is a homogeneous n-dimentional array object.

One of the differences in Python list and NumPy array is that a NumPy array should contain all the same data. NumPy arrays are more memory efficient and allow the data types to be specified.

The array in NumPy is the central data type used. The array contains meta information about the array. It's a grid of values and has info about the raw data, how to locate the element, and how to interpret an element.

This grid of info that is called an array can be indexed in different ways. The one dimensional array can be indexed, sliced, and iterated over like other Python enumrable sequences.

Multidimensional arrays can have more than one index per axis and those indices are given in a tuple.

A NumPy array can be made from a Python list. To make it into a two or more higher dimensional data then use a nested list.

`a = np.array([1, 2, 3, 4, 5])`

To access the data in an NumPy array you can do it like a Python list:

`num_value = a[2]`

The type of data is referred to as the dtype.

### More About Arrays: ndarray
An ndarray is shorthand for "N-dimensional array". You can have more than one dimension in the array. Which is a little bit difficult to imagine as a new person. But a great place to start thinking about the literal difference in two and three dimensions.

Compare in your mind a flat piece of paper with a grid drawn on it to a cube.

A vector is an array with a single dimension, a matrix has two dimensions. And for three dimensions or more it's commonly called a tensor.

A NumPy ndarray class can represent matrices and vectors.

### Array Attributes
The attributes of an array describe the aspects of the array. In NumPy the dimensions are called axes.

The array itself is usually fixed sized, has to have the same type of data and size of data. The shape of the array itself determines the number of dimensions. The shape of the array is a tuple.

For example, an array with two axes. With the first axes having a length of two and the second has a length of three.

`[[1., 2., 3.], [0., 2., 1.]]`

### Create Basic Array
To create an array the np.array() can be used:
```
import numpy as np
a = np.array([1, 2, 3])
```

To fill the new array with zero's or ones:
```
np.zeros(2)
# result is array([0., 0.])

np.ones(2)
# result is array([1., 1.])
```

Or even an empty array, it's filled with random data:
```
np.empty(3)
# result array(3.13, 42., 1.3])
```

Or an evenly spaced array, giving it the first number, last number, and the step size:
```
np.arrange(2, 9, 2)
# result array([2, 4, 6, 8])
```

To create an array with values with linearly spaced in specified intervals:
``` 
np.linspace(0, 10, num=5)
# result array([0., 2.5, 5., 7.5, 10.])
```

To specify the data point, you can pass the data type into the dtype variable:
``` 
x = np.ones(2, dtype=np.int64)
# result array([1, 1])
```

## Adding Removing and Sorting Elements

You can sort elements in an array with np.sort(). 

You can specify the axis, kind, and order when you call the function.

``` 
arr = np.array([2, 1, 5, 3, 7, 4, 8, 10])
np.sort(arr)
# result array([1, 2, 3, 4, 5, 7, 8, 10])
```

You can concatenate two arrays using np.concatenate()
``` 
a = np.array([1, 2, 3, 4])
b = np.array([2, 3, 4, 5])
np.concatenate((a, b))
result array([1, 2, 3, 4, 2, 3, 4, 5])
```

## Overview of Basic Terms
ndarray.ndim
    the number of axes or dimensions of the array

ndarray.shape
    the dimensions of the array.

ndarray.size
    the total elements of the array

ndarray.dtype
    an object that describes the data type of the elements in the array

ndarray.itemsize
    the size in byes of each element in the array

ndarray.data
    the buffer containing the actual elements of the array


[Go home](/index.html)