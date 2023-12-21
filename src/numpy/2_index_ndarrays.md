---
layout: "article_type_two.njk"
---
## Indexing NumPy Arrays

The `ndarrays` can be indexed using the stand Python object x[obj] syntax. This syntax indicates where x is the array in NumPy and obj is the thing you are selecting.

This type of indexing works the similar to lists and tuples in Python. They are similar in that Python lists, tuples, and the `ndarray` in NumPy are all collection of data that can access individual values using indexes beginning with 0 at the start of the data collection. 

In NumPy, there's different types of indexing that varies in complexity. There's basic indexing, advanced indexing, and field access.

## Basic and single element indexing

The single element indexing work the same as in other standard Python sequences. It's 0-based and accepts negative indices to reference from the end of an array.

A single `ndarray` can be turned into a multidimensional array using the `shape` function.

```python
x = n.arange(10)
# array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
x.shape = (2, 5)
# array([[0, 1, 2, 3, 4],
       [5, 6, 7, 8, 9]])
x[1, 3]
# 8
```

A multidimensional `ndarray` can be accessed as a single dimensional `ndarray`. The `shape` function does this by accessing a multidimensional `ndarray` with fewer dimensions than the original `ndarray`. This will return a sub dimensional `ndarray`.

```python
x
# array([[0, 1, 2, 3, 4],
       [5, 6, 7, 8, 9]])
       
x[0]
# array([0, 1, 2, 3, 4])

x
# array([[0, 1, 2, 3, 4],
       [5, 6, 7, 8, 9]])
```

The returned array is a view, it's not a copy of the original, but it points to the exact same values in memory as the original array. When you see the original value again it remains unchanged.

The syntax `x[0, 2] == x[0][2]` is equivalent. The second syntax created a new temporary array after the first index that is subsequently indexed by 2.

## Slicing 

The basic slicing extends Python's basic concept of slicing to the N dimensions. 

It works like slicing an array in Python with `start:stop:step` notation in the brackets.

The `ellipses` and `newaxis` objects can be in this notation as well as integers. 

In NumPy there are 24 fundamental Python types to describe the different types of scalars.

All the rules of slicing sequences in Python apply on a per-dimension basis.

The basics are that `i:j:k` will step through the array where i starts, j ends, and k is the step amount through the array where k != 0. that is, k can not equal zero.

## Striding
[Credit: Kathryn](https://medium.com/analytics-vidhya/a-thorough-understanding-of-numpy-strides-and-its-application-in-data-processing-e40eab1c82fe)

Striding is taking steps through the data with a window and stride of a fixed size. The window is the amount of data that you are looking at. And the stride is the measure of how much you step each time you move forward in the data.

## Ellipses

The ellipsis (...) or the Ellipsis object is used to slice higher-dimensional structures. It's designed to mean, at this point, insert as many full slices (:) to extend the multidimensional slice to all dimensions.

There can be only one ellipsis present in slicing. 

To make a four dimensional matrix of order 2x2x2x2 you could do the following.

```python
from numpy import arange
a = arange(16).
# result array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15])
a.reshape(2,2,2,2)
# result array([[[[ 0,  1],
         [ 2,  3]],
        [[ 4,  5],
         [ 6,  7]]],
       [[[ 8,  9],
         [10, 11]],
        [[12, 13],
         [14, 15]]]])
```

Then to select all the first elements in the 4th dimension, you can use the ellipsis notation.

```python
a[..., 0].flatten()
# result array([0, 2, 4, 6, 8, 10, 12, 14])
```

Which is the same as using the following notation.

```python
a[:,:,:,0].flatten()
# result array([0, 2, 4, 6, 8, 10, 12, 14])
```

## Number of Dimensions

The `numpy.ndarray.ndim` function returns the number of dimensions of an array.


```python
a = np.array([1, 2, 3, 4])
arr.ndim
# result 1
```


