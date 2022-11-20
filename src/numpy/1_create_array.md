---
title: NumPy Array Creation
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Create an Array](https://numpy.org/doc/stable/user/basics.creation.html)


## Array Creation

1. Conversion from other Python structures, like lists and tuples
2. The built-in NumPy array creation functions
3. By replicating, joining or mutating existing arrays
4. Reading arrays from disk, either standard or custom formats
5. From raw bytes through the use of strings or buffers
6. Special library functions


You can use these methods to create `ndarrays` or structured arrays. 

Structured arrays are `ndarrays` whose datatype is a composition of simpler datatypes.

These simpler datatypes are organized as a sequence of named fields.

```python
x = np.array(['Bob' 9, 110], dtype=[('firstname', 'U10'), ('age', 'i4'), ('weight', 'f4')])
```

x is a one dimensional array. The length of the array is two. The datatype is a structure with three fields:


1. a string of length 10 or less, named 'firstname'
2. a 32 bit integer named 'age'
3. a 32 bit float, named 'weight'

## Conversion from other Python structures

The NumPy arrays can be made from lists and tuples. Lists are as [...] and tuples (...).

A list of numbers will create a 1D array. To create a 2D array, you can use a list of lists. If you want to create higher dimensional arrays you can nest lists even further.

An easy way to create an array from a list or tuple is with the `np.array` function.

```python
one_dimensional_array = np.array([127, 182, 100])
```

You can specify the data type of the information in the NumPy arrays, by adding a parameter of the dtype. If you don't pass in a data type (dtype) then it will assign a default dtype.

If the data in the array is outside what is available for that type you can end up with an overflow on the data. 

For example, an 8-bit signed integer represents a number from -128 to 127. So if you tried to assign a number like 128 or 129 to a `dtype=np.int8`, you'd have an overflow. This is because an 8-bit signed integer can only represent numbers from -128 to 127.

```python
overflow_array = np.array([127, 128, 129], dtype=np.int8)
overflow_array
array([127, -128, -127], dtype=int8)
```

When performing operations with two arrays with the same data type the resulting array is the same data type.

When performing operations that different data types, NumPy will assign a new type that satisfies all the array elements involved in the computation. 

The default behavior is to create arrays as either 32 or 64-bit signed integers depending on the platform. Or even a double precision floating point number like int32/int64. 

If you want a specific data type in the result, it's best to specify the data type.

## Built in NumPy array creation functions

There are over 40 built-in functions for creating arrays. 

There are 3 broad categories of array creator functions. In general, the categories are based on how many dimensions the resulting array is.

1. 1D arrays
2. 2D arrays
3. `ndarrays` (more than two dimensions)

## 1D Arrays

For  one dimension arrays there's `numpy.linspace` and `numpy.arange`. Both of these functions use the two inputs: start and stop.

The `numpy.arange` creates arrays with regular incrementing values. The best practice for `numpy.arange` is to use an integer start, end, and step values. The step values indicates the spacing between values.

Smaller or more precise start, end, and step values can be used with float data type inputs. In order to do that an array can be created with the dtype of float.

The `numpy.linspace` will create arrays with a specified number of elements. They will be spaced equally between the specific beginning and end values. They're spaced according to the third input, the number of values to generate.

The difference? The `numpy.linspace` allows you to specify the number of steps. The `numpy.arange` allows you to specify the size of the steps.

## 2D Arrays

The 2D array creation functions are `numpy.eye`, `numpy.diag`, and `numpy.vander`.

### numpy.eye

And example of using the `numpy.eye` creation process is `np.eye(n, m)`. 

The eye tool returns a 2D array with 1's as the diagonal and 0's elsewhere. If only one parameter is passed in, then it's used to make the length of each array and the number of arrays.

If both n and m parameters are passed in then the n parameter is the number of rows. And the m parameter is the length of each row.

For example:

```python
np.eye(3)
array([[1., 0., 0.],
[0., 1., 0.],
[0., 0., 1.]])
np.eye(3, 5)
array([[1., 0., 0., 0., 0.],
[0., 1., 0., 0., 0.],
[0., 0., 1., 0., 0.]])
```

### numpy.diag

The `numpy.diag` can be used to define a 2D array with the given values along the diagonal. You can pass two parameters, an input array and k. The k is an integer, and it's value decides the main diagonal.

If k is positive, then the diagonal is above the main diagonal. And if k is negative then the diagonal is below the main diagonal.

Or if the input array is a 2D array, it returns a 1D array that is only the diagonal elements.

The `numpy.eye` and `numpy.diag` functions can be helpful for doing linear algebra.

```python
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
```

### numpy.vander

The `vander(x, n)` defines a Vandermonde matrix as a 2D NumPy array.

In linear algebra, a Vandemonde matrix, named after Alexandre-Théophile Vandermonde, is a matrix with the terms of geometric progression in each row. A geometric progression also known as a geometric sequence is a sequence of non-zero numbers. Each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio.

For example, the sequence, 2, 6, 18, 54... is a geometric progression with a common ratio of 3.

In the representation `vander(x, n)` where x is the input, then each column of the matrix is a decreasing power of the input. 

The input can only be the highest polynomial order of `n-1`, where `n` is the second parameter passed into the `vander` equation.

This array creation routine is useful in generating linear least square models.

```python
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
```

The method of least-squares is a standard approach in regression analysis. It's used to approximate the solution of overdetermined systems. An overdetermined system is a set of equations in which there are more equations than unknowns.

The solution is determined by minimizing the sum of the squares of the residuals. A residual is the difference between the observed value and the fitted value provided by the model.

## General ndarray Creation Functions

To create an ndarry with filled in values, you can use `numpy.ones`, `numpy.zeroes`, and `random`. These all fill the created arrays with various values depending on which you use. These arrays create any dimension of arrays by specifying how many dimensions or the length of the tuple or list.

The `numpy.zeros` will create an array filled with zeroes. The default dtype is `float64`. The `numpy.ones` will create an array filled with the value of 1. The `random` method will fill the array with random numbers between 0 and 1.

The `numpy.indices` will create a set of arrays. They will be stacked as a one-higher dimensioned array. This is useful for evaluating functions of multiple dimensions on a regular grid.

## Replicating, Joining or Mutation

Once arrays have been created you can replicate, join, or mutate those existing arrays to make new arrays.

If you assign an array to a new variable, the original array is edited when the new array is edited. To me, that is similar to passing data by values or by the underlying structure in programming languages.

If you want to make a new array that doesn't change the original array, use `numpy.copy`. Here is an example of an array that gets edited after being passed.

```python
a = np.array([1, 2, 3, 4, 5, 6])
b = a[:2]
b += 1
print('a = ', a)
print('b = ', b)
a = [2 3 3 4 5 6]
b = [2 3]
```

Here's an example of how when you copy an array it doesn't change the original.

```python
a = np.array([1, 2, 3, 4])
b = a[:2].copy()
b += 1
print('a = ', a)
print('b = ', b)
a = [1 2 3 4]
b = [2 3]
```

Some functions that can be used to join existing arrays: `numpy.vstack`, `numpy.hstack`, and `numpy.block`.

### numpy.vstack

With `numpy.vstack` you can vertically join elements of two or more arrays into a single array. To join two or more arrays into an array _vertically_ means to join them row-wise.

For example:

```python
numpy.vstack((a1,a2,...))
```

The `a1,a2,...` is a sequence of arrays with an `ndarray` type.

All of those input arrays must have the same shape along all but the first axis. So if they are 1D arrays, then they have to have the same length.

Joining a 1D array with `numpy.vstack` works a bit like this:

```python
a = np.array([1, 2])
b = np.array([3, 4])
c = np.vstack((a, b))
```

That result would be:

```python
[[1, 2], [3, 4]]
```

Joining a 2D array with `numpy.vstack` work like this:

```python
a = np.array([
    [1, 2],
    [3, 4]
])
b = np.array([
    [5, 6],
    [7, 8]
])
c = np.vstack((a, b))
```

The result:

```python
[
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]
```

### numpy.hstack

With `numpy.vstack` you can horizontally join elements of two or more arrays into a single array. To join two or more arrays into an array _horizontally_ means to join them column-wise.

Joining a 1D array with `numpy.hstack` works like this:

```python
a = np.array([1, 2])
b = np.array([3, 4])
c = np.hstack((a, b))
```

That result would be:

```python
[[1, 2, 3, 4]]
```

Joining a 2D array with `numpy.hstack` works like this:

```python
a = np.array([
    [1, 2],
    [3, 4]
])
b = np.array([
    [5, 6],
    [7, 8]
])
c = np.hstack((a, b))
```

The result would be:

```python
[
    [1, 2, 5, 6],
    [3, 4, 7, 8]
]
```

### numpy.block

The `numpy.block` also joins arrays. 

For a 1D array, it works like this:

```python
a = np.array([5, 6, 7])
b = np.array([8, 9, 10])
c = np.block((a, b))
```

The result is:

```python
[5, 6, 7, 8, 9, 10]
```

## Reading Arrays from Disk

This is the most common case for creating large arrays is from existing data.

### Standard Binary Formats

Various fields have stand formats for the array data.

HD5: h5py
FITS: Astropy

Some formats cannot be read directly, but those can be converted to a format supported by libraries like PIL.

### Common ASCII Formats

Files such as csv (comma separated values) and tsv (tab separated values) files are delimited data. Those type of files that can be opened with programs like Excel and LabView. the two standard routines for importing a file with delimited data is `numpy.loadtxt` and `numpy.genfromtxt`. Other ways of importing data are `scipy.ioFf` and `Pandas`.

An example of loading a text file in the format of csv:

```python
np.loadtxt('simple_example.csv', delimiter = ',', skiprows = 1)
```

That result in:

```python
array([[0., 0.],
[1., 1.],
[2., 4.],
[3., 9.]])
```










