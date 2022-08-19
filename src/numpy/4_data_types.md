---
title: Data Types with NumPy
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Data Types with NumPy](https://numpy.org/doc/stable/user/basics.types.html)

NumPy supports a greater variety of number types than Python does. 

Here's the data types for numbers and how to modify an array's data type.

| NumPy type | C type | 
|------------|--------|
| numpy.bool_ | bool |
| numpy.byte | signed char |
| numpy.ubyte | unsigned char |
| numpy.short | short |
|numpy.ushort | unsigned short |
| numpy.intc | int |
| numpy.unintc | unsigned int |
| numpy.int_ | long |
| numpy.uint | unsigned long |
| numpy.longlong | long long |
| numpy.ulonglong | unsigned long long |
| numpy.half / numpy.float16 | |
| numpy.single | float |
| numpy.double | double |
| numpy.longdouble | long double |
| numpy.csignle | float complex |
| numpy.cdouble | double complex |
| numpy.clongdouble | long double complex |

Since many of these have platform dependent definitions, a set of fixed size aliases are provided.

NumPy number types are instances of dtype objects (data-type) each having a unique cahracteristic. Once you've imported the NumPy using the >>> import numpy as np you can use any of the data types with np.bool_, np.float32, etc.

There are 5 basic numerical types. There's booleans, integers, unsigned integers, floating point values and complex.

If the data type has a number in the name it indicates teh bitsize of the type. That's how many bits are needed to represent a single value in memory.

Some of the data types have different bitsizes that depends on the platform. That can be important when interfacing with low level code -like with C or Fortran where the raw memory is addressed.

## Array Scalars

NumPy generally returns elements of arrays as array scalars, a scalar with associated dtype.

Array scalars differ from Python scalars, but for the most part they are interchangeable.

The primary advantage of using array scalars is that they preserve the array type. So the use of array scalars ensures identical behavior between arrays and scalars. That's independent of whether the value is inside the array or not.

## Overlow Errors
The fixed size of NumPy numeric types may cause overflow errors when a value requires more memory than is available in the data type.

The behavior of NumPy and Python integer types differs significantly for integer overflows. This could be confusing if users are expecting NumPy integers to behave similar to Python int.

In Python the int is flexible. So it will expand and not overflow. The size of the int in NumPy is not flexible.

To verify the minimum or maximum values of NumPy integer and float points, NumPy provides numpy.iinfo and numpy.finfo.

## Extended Precision
Python's floating point numbers are usual 64 bit floating point numbers. Pretty close to the np.float64.

NumPy does not provide a dtype with more precision than C's long double.

For efficient memory alignment, the np.longdouble is usually stored padded with zero bits.