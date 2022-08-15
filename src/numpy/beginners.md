---
title: NumPy for Beginners
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)


## NumPy: Absolute Basics for Beginners
This and the next few articles are my summary of the article for absolute beginners.

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

NumPy stands for Numerical Python. It's used in a lot of science and engineering.

It's the universal standard for working with numerical data in Python and it's in many other libraries and Python packages.

### NumPy and Arrays

The main way I see of manipulating data in NumPy is through various kinds of arrays. There are multidimensional arrays, matrix data structures, an ndarray. Ndarray is a homogeneous n-dimensional array object.

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


## Adding, Removing, Sorting Arrays
Sorting an array is simple with np.sort() method. The sort method can specify the axis, kind and order of the array.

``` 
arr = np.array([4, 3, 2, 1, 0, 100, 101])
np.sort(arr)

[//]: # (result)
array([0, 1, 2, 3, 4, 100, 101])
```

Other types of arrays sorts include:
- argsort: indirect sort of a specific axis
- lexsort: indirect stable sort on multiple keys
- searchsorted: finds elements in a sorted array
- partition: partial sort

To concatenate arrays use np.concatenate()
``` 
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

[//]: # (result)
array([1, 2, 3, 4, 5, 6, 7, 8])
```

## Find Size of Array
To find the number of axis or dimensions of an array use ndarray.ndim. This returns a single integer.

To find the total number of elements in an array use ndarray.size. This returns a single integer.

To find the elements stored along each dimension of the array, ndarray.shape. For example of if there was a 2-D array with 2 rows and 3 columns then shape of the array would be (2, 3)

## Reshape An Array
To reshape an array use the arr.reshape(). This method gives us a new shape to an array without changing the data. The one rule is that whatever the new shape of the array, both the new and old shaped arrays need to have the same number of elements.

``` 
a = np.arange(6)
print(a)
[0, 1, 2, 3, 4, 5]

b = a.reshape(3, 2)
print(b)
[[0, 1], [2, 3], [4, 5]]
```

Other options that can be passed to the reshape method are newshape and order.

Newshape is the new shape that you want. That can be an integer or a tuble of integers.

order: C means to read/write the elements using a C-like index order.
F means to read/write the elements using a Fortran order.
A means to read/write using a Fortran like index order if a is Fortran contiguous in memeory, or C-like order otherwise.

These options are the internal organization of NumPy's arrays. Essentially, what is done in reordering concerns whether it's more important to preserve the indexing convention or to not reorder the data.


## How to Convert a 1D Array into a 2D Array

Topics are np.newaxis, np.expand_dims

Using np.newaxis and np.expand_dims increases the dimensions of a current array.

``` 
a = np.array([1, 2, 3, 4, 5, 6])
a.shape
(6,)
```

Then to add a new axis to the array.

``` 
a2 = a[np.newaxis, :]
a2.shape
(1, 6)
```

For a new row vector:
``` 
row_vector = a[np.newaxis, :]
row_vector.shape
(1, 6)
```

For a new column vector:
```
col_vector = a[:, np.newaxis]
col_vector.shape
(6, 1)
```

Then to insert a new axis at a specific position, use np.expand_dims:
``` 
a = np.array([1, 2, 3, 4, 5, 6])
a.shape
(6,)
b = np.expand_dims(a, axis=1)
b.shape
(6, 1)
```

And then to add an axis at index position 0:
``` 
c = np.expand_dims(a, axis=0)
c.shape
(1, 6)
```

## Indexing and Slicing
For slicing and using index in NumPy it's the same as in Python.

For an array like this:
``` 
a = np.array([[1 , 2, 3, 4], [1, 2, 6, 7], [9, 10, 11, 12]])
```

To print the values of the array that are less than 5:
``` 
print(a[a < 5])
[1 2 3 4 1 2]
```

To print the values that are more than 5:
``` 
print(a[a >=5])
[ 6  7  9 10 11 12]
```

To print the numbers that are even:
``` 
print(a[a%2==0])
[ 2  4  2  6 10 12]
```

To select for more than one condition using bitwise operators:
``` 
print(a[(a > 2) & (a < 11)])
[ 3  4  6  7  9 10]
```

To find the nonzero elements of an array:
``` 
nonzero = np.nonzero(a < 5)
print(nonzero)
(array([0, 0, 0, 0, 1, 1]), array([0, 1, 2, 3, 0, 1]))
```

This is a tuple of arrays that were returned. One tuple of each dimension.

The first array is the row indices where the values that are less than five are found.

The second array represents the column indices are where the values are found.


## Create an array from existing data
This covers slicing, indexing, np.vstack(), np.hstack(), np.hsplit(), .view(), copy().

Create a new array from a section of an existing array.

Start with this array:

```
a = np.array([1, 2, 3, 4, 5, 6, 7])
```

```python
arr1 = a[2:5]
// results:
array([3, 4, 5])
```

Arrays can be stacked. If you have two arrays like:
```python
a1 = np.array([[1, 1], [2, 2]])
a2 = np.array([[3, 3], [4, 4]])
```

Then use vstack to stack them vertically:
```python
np.vstack(a1, a2)
// result
array([[1, 1], [2, 2], [3, 3], [4, 4]])
```

Arrays can be stacked horizontally as well with hstack:
```python
np.hstack((a1, a2))
// result
array([[1, 1, 3, 3], [2, 2, 4, 4]])
```

Arrays can be split in several smaller parts by using hsplit.

The arrays can be split into the number of equally shaped arrays.

Or return the columns after the division should occur.

```python
>>> x = np.arange(1, 25)
>>> x
array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
       18, 19, 20, 21, 22, 23, 24])
>>> np.split(x, 3)
[array([1, 2, 3, 4, 5, 6, 7, 8]), array([ 9, 10, 11, 12, 13, 14, 15, 16]), array([17, 18, 19, 20, 21, 22, 23, 24])]
```

A shallow copy can be made with the view method.

NumPy functions and operations will return views whenever possible. This saves memory and is faster. If the data in the view is modified then so is the original array.

In that way it's a bit like passing information/parameters by reference.


## Basic array operations
This section talks about addition, subtraction, multiplication, and division of NumPy arrays.

### Adding arrays
Two arrays can be added together with the addition signs. This adds the values in the arrays.

```python
data = np.array([1, 2])
ones = np.ones(2, dtype=int)
data + ones
// result
array([2, 3])
```

Here's an example of other types of math that can be done with arrays. Like subtraction, multiplication, and division.
```python
data = np.array([1, 2])
ones = np.ones(2, dtype=int)

data - ones
// result
array([0, 1])

data * data
// result
array([1, 4])

data / data
// result
array([1., 1.])
```

To sum up all the values in an array, use the sum array.
```python
a = np.array([1, 2, 3, 4])
a.sum()
// result
10
```

Then 2D arrays can be summed over the axis.

```python
b = np.array([[1, 1], [2, 2]])
b.sum(axis=0)
// result
array([3, 3])
```

Or sum over the columns:

```python
b.sum(axis=1)
// result
array([2, 4])
```


** Broadcasting

When you want to carry out an operation between an array and a single operation.
Also, known as carrying out an operation between a vector and a scalar.
You can also carry out an operation between arrays of different sizes.

`
data = np.array([1.0, 2.0])
data * 1.5
// output
array([1.6, 3.2])
`
NumPy understands that it should multiply each value in the array by the scalar. This is called Broadcasting and it allows NumPy to perform repeated operations on each cell. And on arrays of different shapes.

** Aggregate Function

In addition to min, max and sum, you can also do aggregation on arrays like *mean* to the the average and *prod* to get the result of multiplying the elements together. *std* can be used to get the standard deviation.

** Generate Random Numbers

Using NumPy's random generation on creating arrays is very useful.
For example you can randomly generate the initial data for an artificial neural network. You can split the data into random sets.
And you can randomly shuffle your dataset.

The *Generator.integers* is used to generate random integers.

*** Unique

Getting the unique numbers out of an NumPy array is simple with np.unique. Just pass the array into np.unique() and out pops only the unique values from it.
Unique values can be gotten from 2 D arrays as well.

*** Transposing and reshaping a matrix

To reshape and transpose arrays you can use arr.reshape(), arr.transpose(), or arr.T
You might need to switch the dimensions of a matrix. You can use the reshape the array.

*** Reverse An Array

To reverse an array, you can use the np.flip() method.
Reversing a 2D array works much the same way as reversing a single dimensional array.
`
reversed = np.flip(arr_2d)
print(reversed)
[[12 11 10  9]
[ 8  7  6  5]
[ 4  3  2  1]]
`

Reversing a 2D only with the rows

`
reversed = np.flip(arr_2s, axis=0)
print(reversed)
[[ 9 10 11 12]
[ 5  6  7  8]
[ 1  2  3  4]]
`

Or only the columns:

`
reversed = np.flip(arr_2d, axis=1)
print(reversed)
[[ 4  3  2  1]
[ 8  7  6  5]
[12 11 10  9]]
`

You can also reverse the contents of just one column or row.

`
arr_2d[1] = np.flip(arr_2d[1])
print(arr_2d)
[[ 1  2  3  4]
[ 8  7  6  5]
[ 9 10 11 12]]
`

Or even the second column:

`
arr_2d[:,1] = np.flip(arr_2d[:,1])
print(arr_2d)
[[ 1 10  3  4]
[ 8  7  6  5]
[ 9  2 11 12]]
`

** Flattening An Array

The two best arrays are .flatten() and ravel()

The difference is that ravel() doesn't just create a copy, it's a reference to the parent array. If you change the child array, then the parent arrays changes.

`
a1 = x.flatten()
a1[0] = 99
print(x)  # Original array
[[ 1  2  3  4]
[ 5  6  7  8]
[ 9 10 11 12]]
print(a1)  # New array
[99  2  3  4  5  6  7  8  9 10 11 12]
`

And then ravel:

`
a2 = x.ravel()
a2[0] = 98
print(x)  # Original array
[[98  2  3  4]
[ 5  6  7  8]
[ 9 10 11 12]]
print(a2)  # New array
[98  2  3  4  5  6  7  8  9 10 11 12]
`

*** Help and DocString

For all of the NumPy's functions a built in help menu is included.

`
help(max)
Help on built-in function max in module builtins:

max(...)
max(iterable, *[, default=obj, key=func]) -> value
max(arg1, arg2, *args, *[, key=func]) -> value

With a single iterable argument, return its biggest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the largest argument.

`
A shortcut for the help is the question mark. Like:
`

max?
max(iterable, *[, default=obj, key=func]) -> value
max(arg1, arg2, *args, *[, key=func]) -> value

With a single iterable argument, return its biggest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the largest argument.
Type:      builtin_function_or_method

`
This can be used on the instances of the arrays, not just the object methods.
`

a = np.array([1, 2, 3, 4, 5, 6])

`
Then you can get a lot of information by the question mark on the a instance.
`

a?
Type:            ndarray
String form:     [1 2 3 4 5 6]
Length:          6
File:            ~/anaconda3/lib/python3.9/site-packages/numpy/__init__.py
Docstring:       <no docstring>
Class docstring:
ndarray(shape, dtype=float, buffer=None, offset=0,
strides=None, order=None)

An array object represents a multidimensional, homogeneous array
of fixed-size items.  An associated data-type object describes the
format of each element in the array (its byte-order, how many bytes it
occupies in memory, whether it is an integer, a floating point number,
or something else, etc.)


** Math Formulas
One of the good things about working with NumPy that makes it so useful is being able to work with mathematical formulas. You can use formulas that work on arrays.
Statics is a great use case and the mean square formula is an often used formula in supervised machine leaning models that deal with regression.

Using this formula with number might go something like this:

`error = (1/n) * np.sum(np.square(predictions - labels))`

Predictions and labels can be any size, small to large. As long as they are the same size as each other.


** Saving and Loading NumPy objects

Saving and loading NumPy arrays without having to re-run the code is a useful thing to do. The ndarray objects can be saved and loaded from the disk files with `loadtxt` and `savetxt` function.

The load and save function can handle NumPy binary files that have a .npy file extension. And then a savez function can do the same, handle file, but ones with an .npz file extension.

Those two files, the .npy and .npz file extension, they store the data, shape of the data, and the dtype that are required to reconstruct the ndarray. So a user can directly retrieve the data instead of having to run the NumPy code to get the data again.

Another reason this is useful is using the data from machine to machine even when there is different architectures on the machines.

A user can store a single ndarray object as an .npy file using an np.save.  More than one ndarray objects can be saved as file extension .npz by using the `np.savez`.

Then if a user wants to store a lot of info/array objects, it might be useful to use a compressed npz format with savez_compressed.

Here's an example of saving an array with `np.save()`:

`
a = np.array([1,2,3,7,10])
np.save('filename', a)
`

Then that same file can be loaded:
`
b = np.load('filename.npy')
`

The array then can be used like usual. NumPy arrays can also be saved into a plain text file, like a .csv or .txt with `np.savetxt`.

`
csv_array = np.array([9, 8, 6, 4])
np.savetxt('filename.csv', csv_array)
`

Loading is very similar to loading an .npy extension.
`
csv_a = np.loadtxt('filename.csv')
`

The txt type of function for saving and retrieving are useful in part because they can accept optional parameters like header, footer, and delimiter. While text files can be easier for sharing, keep in mind that .npy and .npz files are smaller and faster to read.

And example of the `savetxt` function with headers and delimiters:

`
np.savetxt('np.csv', a, fmt='%.2f', delimiter=',', header='1,  2,  3,  4')
`

When there is missing data or more sophisticated handling of data is needed the `genfromtxt` function is useful.

*** Pandas and CSV

To to read in an existing CSV the easiest and best way is to use Pandas.

`
import pandas as pd

# if all the columns are the same type
x = pd.read_csv('music.csv', header=0).values

# select columns needed specifically by name
y = pd.read_csv('music.csv', usecols=['Artist', 'Plays']).values
`

You can also use Pandas to export the data as well. One way to do it is to create a Pandas dataframe from the values in the array. Then write the data frame to a CSV file with the Pandas.

`
a = np.array([[1, 3, 5], [2, 3, 4]])
df = pd.DataFrame(a)
df.to_csv('pd.csv')
`

Then read back the CSV with:

`
data = pd.read_csv('pd.csv')
`

From the command line you can also `cat` out the contents of a csv to see what is in the file:

`cat np.csv
# 1, 2, 3
2, 3, 4
`

Keep in mind that CSV can also just be opened with any text editor.

### Plotting Arrays with Matplotlib

Generating a plot from data with Matplotlib is easy. If you have an array simply use the `plot` function from the Matplotlib library to do it.

`
import matplotlib.pyplot as plt
# If you're using Jupyter Notebook, you may also want to run the following
# line of code to display your code in the notebook:

%matplotlib inline

a = np.array([2, 3, 4, 5])

plt.plot(a)

# if running from a command line, you might need to run the show command
plt.show()
`

Plotting a 1D array looks like this:

`
x = np.linspace(0, 7, 20)
y = np.linspace(0, 10, 15)
plt.plot(x, y, 'purple') # line
plt.plot(x, y, 'o') # dots
`

With Matplotlib you can choose from a lot of different visualization options:

`
fig = plt.figure()
ax = fig.add_subpolot(projection='3d')

x = np.arange(0, 2, 4)
y = np.arange(0, 2, 4)

x, y = np.meshgrid(x, y)

r = np.sqrt(x**2, y**2)
z = np.sin(r)

ax.plot_surface(x, y. z, rstride=1, cstride=1, cmap='viridis')
`
