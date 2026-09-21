---
layout: "html_wrapper.njk"
title: "Creating Arrays"
track: "data-wrangling"
type: "concept"
status: "published"
difficulty: "beginner"
order: 1
series: "numpy"
---
## Array Creation Methods

1. Conversion from other Python structures, like lists and tuples
2. The built-in NumPy array creation functions
3. By replicating, joining or mutating existing arrays
4. Reading arrays from disk, either standard or custom formats
5. From raw bytes through the use of strings or buffers
6. Special library functions


These methods create `ndarray` objects. An array becomes structured when its data type combines simpler types into a sequence of named fields.

```python
bob_array = np.array([('Bob', 9, 110)], dtype=[('firstname', 'U10'), ('age', 'i4'), ('weight', 'f4')])
```

`bob_array` is one-dimensional, and each element contains three fields:


1. a string of length 10 or less, named 'firstname'
2. a 32 bit integer named 'age'
3. a 32 bit float, named 'weight'

## Conversion from other Python structures

Build NumPy arrays from Python lists (`[...]`) or tuples (`(...)`).

A flat sequence creates a one-dimensional array.

Nested sequences create higher-dimensional arrays: a list of equal-length lists produces a two-dimensional array.

Pass the sequence to `np.array`:

```python
one_d_array = np.array([127, 182, 100])
```

Set `dtype` when the representation matters. Otherwise, NumPy infers a type from the input.

Fixed-width numeric types can overflow when a value falls outside their range.

For example, `np.int8` represents integers from -128 through 127. Values such as 128 and 129 exceed that range.

```python
overflow_array = np.array([127, 128, 129], dtype=np.int8)
overflow_array
array([127, -128, -127], dtype=int8)
```

Operations on arrays with the same dtype often preserve that dtype, subject to the operation's casting rules.

For mixed dtypes, NumPy promotes inputs to a type that can represent the operation's values under its promotion rules.

Integer inputs usually produce a platform-sized integer dtype; floating-point inputs usually produce `float64`.

Specify `dtype` explicitly when the result requires a fixed representation.

## Built in NumPy array creation functions

NumPy ships many constructors. Choose one by the shape, values, or source data you need rather than building arrays element by element.

## 1D Arrays

For one-dimensional ranges, start with `numpy.arange` or `numpy.linspace`.

`numpy.arange` advances from `start` by `step` and excludes `stop`. Integer arguments avoid floating-point endpoint surprises.

It accepts floating-point arguments, but accumulated rounding can make the length or final value less obvious.

`numpy.linspace` returns a requested number of evenly spaced values between two endpoints.

Use `linspace` to control the number of values; use `arange` to control the step size.

## 2D Arrays

Useful two-dimensional constructors include `numpy.eye`, `numpy.diag`, and `numpy.vander`.

### numpy.eye

Call it as `np.eye(n, m)`.

`numpy.eye` places ones on a diagonal and zeros elsewhere. One size argument creates a square array.

With both `n` and `m`, `n` sets the row count and `m` sets the column count.

For example:

```python
np.eye(3)
array([[1., 0., 0.],
[0., 1., 0.],
[0., 0., 1.]])
```

```python
np.eye(3, 5)
array([[1., 0., 0., 0., 0.],
[0., 1., 0., 0., 0.],
[0., 0., 1., 0., 0.]])
```

### numpy.diag

`numpy.diag` either extracts a diagonal or constructs a two-dimensional array from one. The integer `k` selects an offset from the main diagonal.

Given a one-dimensional input, it places those values on the `k`th diagonal of a new array.

Positive `k` selects a diagonal above the main diagonal; negative `k` selects one below it.

Given a two-dimensional input, it extracts the selected diagonal as a one-dimensional array.

Both functions are standard building blocks for linear algebra.

```python
np.diag([1, 2, 3])
array([[1, 0, 0],
[0, 2, 0],
[0, 0, 3]])
```

```python
np.diag([1, 2, 3], 1)
array([[0, 1, 0, 0],
[0, 0, 2, 0],
[0, 0, 0, 3],
[0, 0, 0, 0]])
```

```python
a = np.array([[1, 2], [3, 4]])
np.diag(a)
array([1, 4])
```

### numpy.vander

`vander(x, n)` constructs a two-dimensional Vandermonde matrix.

A Vandermonde matrix places a geometric progression across each row.

In a geometric progression, each term equals the previous term times a fixed common ratio.

For example, `2, 6, 18, 54` has a common ratio of 3.

With the default ordering, each column of `vander(x, n)` contains a decreasing power of `x`.

With `n` columns, the highest power is `n-1`.

This matrix appears in polynomial interpolation and least-squares fitting.

```python
np.vander(np.linspace(0, 2, 5), 2)
array([[0. , 1. ],
[0.5, 1. ],
[1. , 1. ],
[1.5, 1. ],
[2. , 1. ]])
```

```python
np.vander([1, 2, 3, 4], 2)
array([[1, 1],
[2, 1],
[3, 1],
[4, 1]])
```

```python
np.vander((1, 2, 3, 4), 4)
array([[ 1,  1,  1,  1],
[ 8,  4,  2,  1],
[27,  9,  3,  1],
[64, 16,  4,  1]])
```

Least squares approximates solutions to overdetermined systems, which contain more equations than unknowns.

It minimizes the sum of squared residuals, where each residual is the difference between an observed and fitted value.

## General ndarray Creation Functions

Create prefilled arrays with `numpy.ones`, `numpy.zeros`, or functions in `numpy.random`. Pass a shape tuple to set the dimensions.

`numpy.zeros` fills an array with zeros and defaults to `float64`; `numpy.ones` fills it with ones. Random generators produce values from a selected distribution.

`numpy.indices` returns one coordinate array per dimension, stacked along a new leading axis. Use it to evaluate multidimensional functions on a regular grid.

## Replicating, Joining or Mutation

Existing arrays can seed new arrays through replication, joining, mutation, views, or copies.

Assigning an array to another variable creates an alias, not a copy. Both names reference the same object.

Use `numpy.copy` when changes must not affect the original. A slice, by contrast, usually returns a view:

```python
a = np.array([1, 2, 3, 4, 5, 6])
b = a[:2]
b += 1
print('a = ', a)
print('b = ', b)
a = [2 3 3 4 5 6]
b = [2 3]
```

A copied slice owns separate data:

```python
a = np.array([1, 2, 3, 4])
b = a[:2].copy()
b += 1
print('a = ', a)
print('b = ', b)
a = [1 2 3 4]
b = [2 3]
```

Join arrays with `numpy.vstack`, `numpy.hstack`, or `numpy.block`.

### numpy.vstack

`numpy.vstack` joins arrays row-wise along the first axis.

For example:

```python
numpy.vstack((a1,a2,...))
```

The argument is a sequence of array-like inputs.

Inputs must match along every axis except the first. One-dimensional inputs must have equal lengths.

Stack two one-dimensional arrays like this:

```python
a = np.array([1, 2])
b = np.array([3, 4])
c = np.vstack((a, b))
```

The result is:

```python
[[1, 2], [3, 4]]
```

The same operation appends rows from two-dimensional arrays:

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

The result is:

```python
[
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]
```

### numpy.hstack

`numpy.hstack` joins arrays horizontally: along the second axis for arrays with two or more dimensions, and along the first axis for one-dimensional arrays.

Join one-dimensional arrays like this:

```python
a = np.array([1, 2])
b = np.array([3, 4])
c = np.hstack((a, b))
```

The result is:

```python
[[1, 2, 3, 4]]
```

For two-dimensional arrays, `hstack` appends columns:

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

The result is:

```python
[
    [1, 2, 5, 6],
    [3, 4, 7, 8]
]
```

### numpy.block

`numpy.block` assembles arrays from nested block layouts.

For one-dimensional arrays:

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

Large arrays usually begin as data on disk.

### Standard Binary Formats

Many fields use standard binary formats:

HD5: h5py
FITS: Astropy

Convert unsupported formats through a library that understands them, such as Pillow for image data.

### Common ASCII Formats

CSV and TSV files store delimited text. Load regular numeric tables with `numpy.loadtxt`; use `numpy.genfromtxt` when missing values or mixed types require more control. SciPy and Pandas cover additional formats.

Load a CSV file while skipping its header:

```python
np.loadtxt('simple_example.csv', delimiter = ',', skiprows = 1)
```

The result is:

```python
array([[0., 0.],
[1., 1.],
[2., 4.],
[3., 9.]])
```









