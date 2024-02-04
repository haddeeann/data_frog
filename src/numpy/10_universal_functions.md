---
layout: "html_wrapper.njk"
---
## Universal Functions

A universal function (or a `ufunc` for short) is a function that operates on `ndarrays` in an element by element fashion.

This supports array broadcasting, type casting, and several other standard features.

That is, a `ufunc` is a "vectorized" wrapper for a function that takes a fixed number of specific inputs and produces a fixed number of specific outputs.

## Ufunc Methods
All `ufuncs` have four methods. These methods only make sense on scalar `ufuncs` that take tow input arguments and return one output argument. 

Attempting to call these methods on other `ufuncs` will case a ValueError.

The reduce like methods all take an axis keyword, a dtype keyword, and an out keyword, and the arrays must all have the dimension >= 1.

The axis keyword specifies the axis of the array over which the reduction will take place.

Generally, it is an integer, though for `numpy.ufunc.reduce`, it can also be a type of int to reduce over several axes at once, or None, to reduce over all axes.

The dtype keyword allows you to manage a very common problem that arises when naively using `ufunc.reduce`.

Sometimes you may have an array of a certain data type and wish to add up all of its elements, but the result does not fit into the data type of the array.

This commonly happens if you have an array of single-byte integers.

The dtype keyword allows you to alter the data type over which the reduction takes place.

Therefore, you can ensure that the output is the datatype with the precision large enough to handle your output. The responsibility of altering reduce type is mostly up to you. 

There's one exception, if no dtype is given for a reduction on the 'add' or 'multiply' operations, the input type is an integer or boolean type, and it's smaller than the size of the `nupy.itn_` data type, it will be internally upcast to the `int_ or `numpy.uint` data-type. 