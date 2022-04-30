---
title: NumPy for Absolute Beginners (command line)
layout: "article_type_two.njk"
---
[Go home](/index.html)

This is an explanation on how you can run NumPy code from the command line.

Open up a command line and start by importing NumPy first at the prompt.

# The standard way to import NumPy:
`import numpy as np`

Create a 2-D array, set every second element in
some rows and find max per row.

```python
x = np.arange(15, dtype=np.int64).reshape(3, 5)
x[1:, ::2] = -99
x
array([[  0,   1,   2,   3,   4],
        [-99,   6, -99,   8, -99],
        [-99,  11, -99,  13, -99]])

x.max(axis=1)

array([ 4,  8, 13])
```

Generate normally distributed random numbers:
```
rng = np.random.default_rng()
samples = rng.normal(size=2500)
samples
```

[Go home](/index.html)