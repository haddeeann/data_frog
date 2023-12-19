---
layout: "article_type_two.njk"
---
# Data Frog
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

There is also a full_like method that allows us to take a shape that has already been built, and pass in and make an array that is the same size.

```python
np.full_like(a, 4)
```

Initialize an array of random numbers:
```python
np.random.rand(4,2)
```

or you can use random_sample:
```python
np.random.random_sample(a.shape)
```

Or random integer values, passing in a start value and size.
```python
np.random.randint(7, size=(3,3))
```

You can do an identity matrix:
```python
np.identity(5)
```

You can repeat an array a few times:
```python
arr = np.array([[1,2,3]])
r1 = np.repeat(arr, 3, axis=0)
```

Be careful when copying arrays, because copies can change the original data.

One of the fundamental uses of NumPy is element wise addition and subtraction.
```python
a = np.array([1,2,3,4])
a - 2
a * 2
a / 2
np.sin(a)
np.cos(a)
```

All the different things that you can do:

NumPy vs Lists: https://www.youtube.com/channel/UC_mm...
🔗 Indexing: https://docs.scipy.org/doc/numpy-1.13...
🔗 Array Creation Routines: https://docs.scipy.org/doc/numpy/refe...
🔗 Math Routines Docs: https://docs.scipy.org/doc/numpy/refe...
🔗 Linear Algebra Docs: https://docs.scipy.org/doc/numpy/refe...

Linear Algebra:
multiplying matrices is a different process. 
```python
a = np.ones((2,3))
b = np.full((3,2), 2)
np.matmul(a,b)
```

The columns of the first matrix has to be equal to the rows of the second matrices. `matmul` is a matrix multiplier

```python
c = np.identity(3)
np.linalg.det(c)
```

Find the determinant of the identity matrix.

This code in complete can be found: 

[Code](https://github.com/KeithGalli/NumPy)

### Statistics with NumPy
Things like mean, min, max
```python
np.min(stats, axis=0)
np.max(status, axis=1)
np.sum(stats, axis=0)
```

### Reorganizing Arrays
```python
before = np.array([1,2,3,4], [5,6,7,8])
print(before)

after = before.reshape((8,1))
after = before.reshape((4,4))
after = before.reshape((2,2,2))
```
If you get an error it's likely due to a mismatch in size.

### Stacking vectors

Vertical stacking
```python
v1 = np.array([1,2,3,4])
v2 = np.array([5,6,7,8])
np.vstack([v1,v2,v1,v2])
```

Horizontal stacking
```python
h1 = np.ones((2,4))
h2 = np.zeroes((2,4))
np.hstack((h1, h2))
```



