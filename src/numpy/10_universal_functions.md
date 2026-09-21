---
layout: "html_wrapper.njk"
---
## Universal Functions

A universal function, or `ufunc`, applies an operation element by element to `ndarray` inputs.

Ufuncs integrate broadcasting, type casting, and optional output arrays.

Each ufunc wraps a fixed-input, fixed-output operation in a vectorized array interface.

## Ufunc Methods
Ufunc methods such as `reduce` and `accumulate` apply only where the ufunc's input and output arity supports them.

Unsupported calls raise `ValueError`.

Reduction methods accept `axis`, `dtype`, and `out`; their inputs must have at least one dimension.

`axis` selects the dimension to reduce.

For `numpy.ufunc.reduce`, it may be an integer, a tuple of integers for multiple axes, or `None` for all axes.

`dtype` controls the accumulator type, which matters when a reduction can exceed the input range. Single-byte integer sums are an obvious case.

Choose a wide enough `dtype` to represent the result.

One exception is `add` or `multiply`: without an explicit dtype, boolean and narrow integer inputs are promoted to the platform-sized `numpy.int_` or `numpy.uint` type.
