---
title: NumPy for Absolute Beginners  (part three)
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

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

