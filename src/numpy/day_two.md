---
title: NumPy for Absolute Beginners (cont.)
layout: "article_type_two.njk"
---
[Go home](/index.html)

This is an explanation on how you can run NumPy code from the command line.

Open up a command line and start by importing NumPy first at the prompt.

# The standard way to import NumPy:
`import numpy as np`

# Create a 2-D array, set every second element in
# some rows and find max per row:

x = np.arange(15, dtype=np.int64).reshape(3, 5)
x[1:, ::2] = -99
x
# array([[  0,   1,   2,   3,   4],
#        [-99,   6, -99,   8, -99],
#        [-99,  11, -99,  13, -99]])

x.max(axis=1)
# array([ 4,  8, 13])

# Generate normally distributed random numbers:
rng = np.random.default_rng()
samples = rng.normal(size=2500)
samples
```

## NumPy: Absolute Basics for Beginners
I started with the beginners docs for NumPy
[NumPy for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

NumPy stands for Numerical Python. And apparently it's used in a lot of science and engineering. 

It's the universal standard for working with numerical data in Python and it's in many other libraries and Python packages.

### NumPy and Arrays

In NumPy there are multidimensional arrays, matrix data structures, an ndarray. Ndarray is a homogeneous n-dimentional array object. 

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
[Go home](/index.html)