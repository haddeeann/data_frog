---
layout: "html_wrapper.njk"
title: "Broadcasting"
track: "data-wrangling"
type: "concept"
status: "published"
difficulty: "beginner"
order: 5
series: "numpy"
---
## Broadcasting with NumPy

Broadcasting defines how NumPy combines arrays with different shapes.

NumPy conceptually expands compatible dimensions so vectorized loops run in compiled code instead of Python.

It usually avoids materializing repeated data, which keeps operations compact and fast.

Poorly chosen shapes can still create large intermediate results and waste memory.

Element-wise operations are simplest when both arrays have the same shape.

Broadcasting relaxes that requirement for compatible shapes. A scalar combined with an array is the simplest case.

```python
a = np.array([1.0, 2.0, 3.0])
b = 2.0
a * b
# result array(2., 4, 6,])
```

The result matches an operation against an array filled with `2.0`.

Think of `b` as stretched to match `a`, but only conceptually.

NumPy reuses the scalar without allocating those conceptual copies.

## General Broadcasting Rules

NumPy compares shapes from the trailing, rightmost dimensions toward the left.

Two dimensions are compatible when:

1. they are equal, or  
2. one of them is 1

If neither condition holds, NumPy raises `ValueError: operands could not be broadcast together`.

The result takes the non-one size along each compatible axis. Inputs need not have the same number of dimensions: a `256 × 256 × 3` RGB image can be scaled by three channel values.

Align trailing axes to check compatibility. When one size is `1`, the result uses the other size.

Size-one dimensions expand conceptually to match their partner axis.

## Broadcastable arrays
A set of arrays is broadcastable when these rules produce a valid shared shape.

Broadcasting can express an outer product without explicit Python loops.

## Practical Example
Vector quantization is one practical use in information theory and classification.

It compares many observations against a codebook. A three-dimensional difference array can emerge from the broadcast, though another implementation may avoid storing it.

Use broadcasting to replace Python loops, but inspect intermediate shapes before trusting its memory cost.
