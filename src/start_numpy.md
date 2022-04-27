---
title: NumPy
layout: "article_type_one.njk"
---
[Go home](/index.html)

I ended up using NumPy by downloading and installing Anaconda.

I import like:
`import numpy as np`

Then I use the code like this:

```
# The standard way to import NumPy:
import numpy as np

# Create a 2-D array, set every second element in
# some rows and find max per row:

x = np.arange(15, dtype=np.int64).reshape(3, 5)
x[1:, ::2] = -99
x
# array([[  0,   1,   2,   3,   4],
#        [-99,   6, -99,   8, -99],
#        [-99,  11, -99,  13, -99]])

x.max(axis=1)
# array([ 4,  8, 13])

# Generate normally distributed random numbers:
rng = np.random.default_rng()
samples = rng.normal(size=2500)
samples
```

Cool, right?

Here's the next step. Install and start using.

[NumPy Install](https://numpy.org/install/)

[Go home](/index.html)
