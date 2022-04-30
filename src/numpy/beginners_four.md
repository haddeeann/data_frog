---
title: NumPy for Absolute Beginners (part four)
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

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
