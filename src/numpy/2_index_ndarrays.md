---
layout: "html_wrapper.njk"
---
## Indexing NumPy Arrays

Index an `ndarray` with standard Python `x[obj]` syntax, where `x` is the array and `obj` selects part of it.

Like lists and tuples, arrays use zero-based indices. Multidimensional arrays extend the same idea across multiple axes.

NumPy supports basic indexing, advanced indexing, and field access for structured arrays.

## Basic and single element indexing

Single-element indexing is zero-based and accepts negative indices from the end of an axis.

Reshape a one-dimensional array by assigning a compatible tuple to `shape`.

```python
x = n.arange(10)
# array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
x.shape = (2, 5)
# array([[0, 1, 2, 3, 4],
       [5, 6, 7, 8, 9]])
x[1, 3]
# 8
```

Indexing a multidimensional array with fewer indices than dimensions returns a lower-dimensional subarray.

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

Basic indexing returns a view that shares memory with the original array; changes through the view can change the source.

`x[0, 2]` and `x[0][2]` select the same element, but the second form creates an intermediate view before the final lookup.

## Slicing 

Basic slicing extends Python's slice syntax across any number of dimensions.

Each axis accepts `start:stop:step` notation.

Indices can also include integers, `Ellipsis`, and `newaxis`.

Python's sequence-slicing rules apply independently to each dimension.

In `i:j:k`, `i` is the start, `j` is the exclusive stop, and nonzero `k` is the step.

## Striding
[Credit: Kathryn](https://medium.com/analytics-vidhya/a-thorough-understanding-of-numpy-strides-and-its-application-in-data-processing-e40eab1c82fe)

A sliding window reads a fixed-width region at each position; its stride controls how far that position advances between reads.

## Ellipses

An ellipsis (`...` or `Ellipsis`) inserts as many full slices (`:`) as needed to cover unspecified dimensions.

A slice expression can contain only one ellipsis.

Create a four-dimensional `2 × 2 × 2 × 2` array:

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

Select index `0` from the fourth dimension with an ellipsis:

```python
a[..., 0].flatten()
# result array([0, 2, 4, 6, 8, 10, 12, 14])
```

This explicit slice is equivalent:

```python
a[:,:,:,0].flatten()
# result array([0, 2, 4, 6, 8, 10, 12, 14])
```

## Number of Dimensions

The `numpy.ndarray.ndim` attribute reports an array's number of dimensions.


```python
a = np.array([1, 2, 3, 4])
arr.ndim
# result 1
```

