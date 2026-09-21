---
layout: "html_wrapper.njk"
---
## Subclassing ndarray

An `ndarray` subclass can be instantiated three ways:

1. Explicit constructor call, `MySubClass(params)`. This is the usual route to Python instance creation.
2. View casting, casting an existing `ndarray` as a given subclass
3. New from template, creating a new instance from a template instance. Examples include returning slices from a subclassed array, creating return types from `ufuncs`, and copying arrays.

The last two routes are specific to array behavior such as slicing. Supporting all three is what makes `ndarray` subclassing subtle.

## When to Use Subclassing

Some NumPy functions convert a subclass to base `ndarray` and silently discard its extra metadata.

Untested methods can therefore produce surprising results.

Subclassing remains convenient because much of the NumPy API works without additional adapters.

NumPy's interoperability protocols may fit better or supplement a subclass.

Subclassing can be a good fit if:

- you aren't worried about maintainability or users other than yourself.
- you don't think it's problematic if the subclass information is ignored or lost silently.

For complex cases, study the interoperability protocols before committing to inheritance.

Astropy's `Quantity` combines subclassing with interoperability protocols.

## View Casting

View casting exposes the same array data through another specified `ndarray` subclass.

NumPy uses a related path when it creates a new instance from a template, most visibly when slicing a subclassed array.

A slice returns a new object of the same class that views `c_arr`'s original data.

Copies, ufunc outputs, and reductions such as `c_arr.mean()` also create subclass instances through related machinery.

## The Role of __array_finalize__

`__array_finalize__` lets a subclass initialize metadata regardless of how NumPy created the new instance.

`__array_wrap__` can adjust a ufunc result before NumPy returns it. It receives `self`, the ufunc result, and an optional context.

The default implementation passes the array through unchanged.
