---
title: NumPy for Basics (part one)
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Article for beginners](https://numpy.org/doc/stable/user/basics.html)

## Basics of NumPy

### Array Creation

1. Conversion from other Python structures
2. The built in NumPy array creation functions
3. By replicating, joining or mutating existing arrays
4. Reading arrays from disk, either standard or custom formats
5. From raw bytes thru the use of strings or buffers
6. Special library functions, like random

#### Making Arrays from Python sequences
The NumPy arrays can be made from lists and tuples. Lists are as [...] and tuples (...).

- a list will make a 1D array
- a list of list will create a 2D array
- any further nested will create higher dimension arrays. The array objects dimension is represented by the concept of ndarray in NumPy.

When using a `numpy.array` to make an array it's important to be careful of the dtype or the data type of the array. It's important to not have an overflow. For example, and 8-bit signed integer represents a number from -128 to 127. So if you tried to assign a number like 128 or 129 to a dtype=np.int8.

When performing operations with two arrays with the same type (dtype) of uint32, for example, the resulting array is hte same type.

When performing operations that different dtypes, NumPy will assign a new type that satisfies all the array elements involved in the computation. For example, uint32 and int32 can be both represented by int64.

The default behavior is to create arrays as either 32 or 64 bit signed integers depending on the platform. Or even a double precision floating point number like int32/int64. If you want a specific type otherwise you need to specify the type.

#### Built in NumPy array creation functions

There are over 40 built-in functions for creating arrays. There are 3 broad categories of array creator functions. 

1. 1D arrays
2. 2D arrays
3. ndarrays (more than two dimensions)

##### 1D Arrays

For 1D or 1 dimension arrays there's `numpy.linspace` and `numpy.arange`. Generally there needs to be at least two inputs start and stop.

The `numpy.arange` creates arrays with regular incrementing values. Best use in `numpy.arange` is to use a start, end, and step. And if you want to use a non-integer incrementor / step you want to use a `dtype` of float.

##### 2D Arrays

The 2D array creation functions are `numpy.eye`, `numpy.diag`, and `numpy.vander`. 

And example of using the `numpy.eye` creation process is `np.eye(n, m)`. The elements are where `i=j` (that is the row index and column index being equal) and are 1. The rest are equal to 0.

For example:

`
np.eye(3)
array([[1., 0., 0.],
[0., 1., 0.],
[0., 0., 1.]])
np.eye(3, 5)
array([[1., 0., 0., 0., 0.],
[0., 1., 0., 0., 0.],
[0., 0., 1., 0., 0.]])
`

The `numpy.diag` can be defined as a 2D array with the given values along the diagonal. Or if given a 2D array returns a 1D array that is only the diagonal elements.

These two functions can be helpful for doing linear algebra.

`
np.diag([1, 2, 3])
array([[1, 0, 0],
[0, 2, 0],
[0, 0, 3]])
np.diag([1, 2, 3], 1)
array([[0, 1, 0, 0],
[0, 0, 2, 0],
[0, 0, 0, 3],
[0, 0, 0, 0]])
a = np.array([[1, 2], [3, 4]])
np.diag(a)
array([1, 4])
`

The `vander(x, n)` defines a Vendermonde matrix as a 2D NumPy array.

Each column of the Vandemonde matrix is a decreasing power of the input. That is the 1D array (the list or tuple) that was passed in to make the matrix.

The `x` being where the highest polynomial order as is `n-1`. This array creation routine is useful in generating linear least square models.

`
np.vander(np.linspace(0, 2, 5), 2)
array([[0. , 1. ],
[0.5, 1. ],
[1. , 1. ],
[1.5, 1. ],
[2. , 1. ]])
np.vander([1, 2, 3, 4], 2)
array([[1, 1],
[2, 1],
[3, 1],
[4, 1]])
np.vander((1, 2, 3, 4), 4)
array([[ 1,  1,  1,  1],
[ 8,  4,  2,  1],
[27,  9,  3,  1],
[64, 16,  4,  1]])
`

#### general ndarray creation function

(to be continued)





