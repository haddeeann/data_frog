---
layout: "html_wrapper.njk"
---
## Writing Custom Array Containers

NumPy's dispatch protocols are the standard route for custom N-dimensional containers that interoperate with its API.

They let a container provide its own implementation of NumPy operations.

Dask arrays distribute N-dimensional work across chunks or nodes; CuPy arrays execute N-dimensional operations on GPUs.

A class opts into custom dispatch through `__array_ufunc__` and `__array_function__`.

`__array_ufunc__` handles universal functions such as `numpy.multiply` and `numpy.sin`.

`__array_ufunc__` receives:
- `ufunc`, such as `numpy.multiply`
- `method`, identifying the requested ufunc method
- `inputs`, which may mix several types
