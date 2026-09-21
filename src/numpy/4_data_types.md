---
layout: "html_wrapper.njk"
---
## Data Types with NumPy

NumPy exposes fixed-width numeric types that map closely to C representations.

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

Because several C-style names depend on the platform, NumPy also provides fixed-width aliases.

Every NumPy scalar type corresponds to a `dtype` object. After `import numpy as np`, refer to them as `np.bool_`, `np.float32`, and so on.

The five basic numeric families are booleans, signed integers, unsigned integers, floating-point numbers, and complex numbers.

A number in a dtype name usually states its width in bits, such as `float32`.

Platform-dependent widths matter when exchanging raw memory with C, Fortran, or binary file formats.

## Array Scalars

Indexing one element usually returns an array scalar carrying its NumPy dtype.

Array scalars and Python scalars often interoperate, but they are distinct types.

Array scalars preserve dtype behavior even after a value leaves its array.

## Overflow Errors

Fixed-width numeric types overflow when a result falls outside their representable range.

Do not assume NumPy integers behave like Python's arbitrary-precision `int`.

Python integers grow as needed; a NumPy integer's width stays fixed.

Inspect integer and floating-point limits with `numpy.iinfo` and `numpy.finfo`.

## Extended Precision

Python's built-in `float` typically uses IEEE 754 double precision, comparable to `np.float64`.

NumPy's widest floating type follows the platform's C `long double`.

Platforms may pad `np.longdouble` values for memory alignment; extra storage does not necessarily mean extra precision.
