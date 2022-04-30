---
title: NumPy for Absolute Beginners  (part two)
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

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