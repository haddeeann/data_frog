---
layout: "article_type_two.njk"
---
## Writing Custom Array Containers

NumPy's dispatch mechanism, is the recommended way to write custom N-dimensional array containers that are compatible with the NumPy API.

This provides custom implementations of NumPy functionality.

Applications include `dask arrays`, and N-dimensional array distributed across multiple nodes, and `cupy` arrays. `Cupy` arrays are an N-dimensional array on a GPU.

NumPy allows a class to indicate that it would like to handle computations in a custom defined way through the interfaces __arrayufun__ and __array_function__.

The first _array_ufunc__ covers Universal functions (ufunc), a class of functions that include, for example, `numpy.multiply` and `numpy.sin`

The __array_ufunc_ receives:
- ufunc, a function like numpy.multiply
- method, a string, differentiating between numpy.multiply and other numpy multiply 
- inputs, which could be a mixture of different types