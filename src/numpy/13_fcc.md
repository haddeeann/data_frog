---
title: Data Frog
layout: "article_type_two.njk"
---
[Go home](/index.html)

[FreeCodeCamp tutorial](https://www.youtube.com/watch?v=QUT1VHiLmmI)

## Learning NumPy with FreeCodeCamp

Welcome to Data Frog. My personal notes and learning journey for data science and machine learning.

## NumPys
NumPy is a multidimensional library. Why use NumPy over Lists.

The main benefit is speed. Native Python Lists are slow. But, NumPy is faster because it uses a fixed type for the data.

Computer see binary when they are looking at data. For example, the number 5 would be binary form. And NumPy would cast it to an Int32 format.

But you can specify to a single byte that would be Int8.

But with Lists, you'd need to store a lot more things with Python. Internally each List consists of:
1. Sizes
2. Reference Count
3. Object Type
4. Object Value

So if you break it up into the bits that are stored it takes a lot more space to store even a single value in the List. So, in summary because NumPy uses less bytes of memory, so it's faster.

It's also faster because you don't need type checking with objects.

NumPy also uses contiguous memory. Where Lists don't need to be stored in contiguous memory. That makes it faster for the computer to access the NumPy data. That means that NumPy uses blocks of memory next to each other.

With list of data in Python, the storage in memory is actually just pointing to pointers in memory.

The benefits:

1. SIMD Vector Processing in the CPU makes this faster. Because we can perform computations simultaneously.
2. Effective Cache Utilization, because it's contiguous

List can do insertion, deletion, appending, concatenating. NumPy can do all that and more. For example. You can multiply two arrays at once really quickly. Single value item computations.

Useful things about NumPy:

- Application of NumPy are numerous. Like Matlab replacements, because of all the math that NumPy can do.

- Useful in plotting.

- Backend in many other things like Pandas. You can store images through NumPy.

- Good for learning machine learning applications. Tensor libraries are pretty similar to NumPy libraries.

You can make multi dimensions by nesting lists.

`a.ndim` gets the dimension. `b.shape` gives us the shape of the array. a.dtype gives us the type of the data in the array. You can also pass in the dtype when making the array. To see the size, `a.itemsize`. `a.nbytes` also gives us the size in bytes. 

To access specific columns, rows. 

For example, take a two-dimensional array

```python
a = np.array([1,2,3], [4,5,6])
# row and column [r, c]
a[1, 5]
# or negative from the end
a[1, -2]
# get the whole row
a[0, :]
# get the whole column
a[:, 2]
# more detailed [startindex:endindex:stepsize]
a[0, 1:6:2]
# to assign a new value to a certain element
a[1, 5] = 20
# replace a column with more than one value
a[:, 2] = [1, 2]
```

You can quickly replace columns of values or rows:

```python
a[:,2] = 5
a[:,2] = [1,2]
```

To get a specific element try working outside in to calc what you need.

All 0's. 
```python
np.zeros(5)
np.zeros((2,3))
```

All 1's.
```python
np.ones((4,2,2))
```

All any other number, the first parenthesis hold the shape of the data.
```python
np.full((2,2), 99, dtype=float32)
```


