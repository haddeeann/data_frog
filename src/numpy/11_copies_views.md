---
layout: "html_wrapper.njk"
---
## Copies and Views

When operating on NumPy arrays, it's possible to access the internal data buffer directly using a view, without copying the data around. So it's important to know the difference between what returns a copy and what returns a view.

The NumPy array is a data structure consisting of two parts: the contiguous data buffer with the actual data elements and the metadata that contains information about the data buffer. The metadata includes data type, strides, and other important information that helps manipulate the `ndarray` easily.

## Views

It's also possible to access the array differently by just changing the certain metadata like `stride` and `dtype` without changing the data buffer. This creates a new way of looking at the data and there new arrays are called views. 

The data buffer remains the same, so any changes made to a view reflects in the original copy. A view can be forced through the `ndarray.view` method. 

## Copy

When a new array is created by duplicating the data buffer as well as the metadata, it is called a copy. Changes made to the copy don't reject on the original array. Making a copy is slower and sometimes memory consuming. A copy can be forced by `ndarray.copy`.

## Other Operations

The `numpy.reshape` function creates a view where possible or makes a copy otherwise. In most cases, the strides can be modified to reshape the array with a view. 

But if the array becomes non-contiguous the reshaping cannot be done by modifying strides and requires a copy. In that case, we can raise an error by assigning the new shape to the shape attribute of the array.

## View or Copy

You can tell the whether the array is a view or copy by the base attribute. The base attribute of the `ndarray` makes it easy. The base attribute of a view returns the original array while it returns `None` for a copy.
