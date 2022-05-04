---
title: NumPy for Absolute Beginners (part five)
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Article for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)

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

