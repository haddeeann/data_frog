# NumPy for Absolute Beginners


[Go home](/index.html)

[NumPy Starter](https://numpy.org/doc/stable/user/absolute_beginners.html)

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


[Go home](/index.html)