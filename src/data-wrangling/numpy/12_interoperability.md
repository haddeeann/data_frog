---
layout: "html_wrapper.njk"
title: "Interoperability"
track: "data-wrangling"
type: "concept"
status: "published"
difficulty: "beginner"
order: 12
series: "numpy"
---
## Interoperability with NumPy

NumPy's `ndarray` pairs a high-level array API with strided, in-memory storage. That implementation does not fit every dataset, device, or execution model, so other libraries implement compatible array APIs over different storage and compute engines.

Examples include GPU arrays in CuPy, sparse arrays, parallel arrays, and tensor libraries in frameworks such as TensorFlow and PyTorch.

Other projects extend the model with labels, indexes, automatic differentiation, masks, or physical units.

Interoperability protocols let these objects reuse NumPy-style code with less porting.

The protocols cover three broad jobs:

1. methods of turning a foreign object into an `ndarray`
2. methods of deferring execution from NumPy function to another array library
3. methods that use NumPy functions and return and instance of a foreign object.

## Arbitrary Objects in NumPy

The first path converts or exposes foreign objects as NumPy arrays when possible.

NumPy tries these interfaces in order:

1. the buffer protocol
2. the __array_interface__ protocol
3. the __array__() method

## Operation on Foreign Objects

The second path lets another array library execute a NumPy operation itself.

## Returning Foreign Objects

The third path uses NumPy's implementation, then wraps the result back into the foreign type. `__array_finalize__` and `__array_wrap__` help control that return type.

## PyTorch Tensors

PyTorch is a tensor library for CPU- and GPU-based deep learning workloads.

Its tensors resemble NumPy arrays but can execute on GPUs and other accelerators.

On the CPU, NumPy arrays and PyTorch tensors can share underlying memory and avoid a copy.
