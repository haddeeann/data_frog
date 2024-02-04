---
layout: "html_wrapper.njk"
---
## Interoperability with NumPy

NumPy's `ndarray` objects provide both a high level API for operations on array-structured data and a concrete implementation of the API based on strided in-RAM storage. While this API is powerful and fairly general, its concrete implementation has limitations. As datasets grow and NumPy becomes used in a variety of new environments and architectures, there are cases where the strided in-RAM storage strategy is inappropriate. Which has caused different libraries to reimplement this API for their own uses.

This includes GPR arrays (CuPy), Sparse arrays and parallel arrays. Also included are various NumPy like implementations in deep learning frameworks, like TensorFlow and PyTorch.

Similarly, there are many projects tha build on top of the NumPy API for labeled and indexed arrays, automatic differentiation, masked arrays, physical units, among others that add additional functionality on top of the NumPy API.

Yet, users still want to work with these arrays using the familiar NumPy API, and re-use existing code with minimal porting overhead. With goal in mind, various protocols are defined for implementations of multidimensional arrays with high-level APIs matching NumPy.

Broadly speaking, there are three groups of features used for interoperability with NumPy:

1. methods of turning a foreign object into an `ndarray`
2. methods of deferring execution from NumPy function to another array library
3. methods that use NumPy functions and return and instance of a foreign object.

## Arbitrary Objects in NumPy

The first set of interoperability features from the NumPy API allows foreign objects to be treated as NumPy arrays whenever possible.

Whe NumPy functions encounter a foreign object, they will try in order:

1. the buffer protocol
2. the __array_interface__ protocol
3. the __array__() method

## Operation on Foreign Objects

A second set of methods defined by the NumPy API allows us to defer the execution from a NumPY function to another array library.

## Returning Foreign Objects

A third type of feature set is meant to use the NumPy function implementation and then convert the return value back into an instance of the foreign object. The __array_finalize__ and __array_wrap__ methods act behind the scenes to ensure that the  return type of NumPy function that can be specified as needed.

## PyTorch Tensors

PyTorch is an optimized tensor library for deep learning using GPUs and CPUs. PyTorch's arrays are commonly called tensors.

Tensors are similar to NumPy's `ndarrays` except that tensors can run on GPUs or other hardware accelerators.

NumPy's arrays and tensors often share the same underlying memory, and that eliminates the need to copy the data.