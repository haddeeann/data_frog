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

(to be continued)





