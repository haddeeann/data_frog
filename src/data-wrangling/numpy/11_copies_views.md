---
layout: "html_wrapper.njk"
title: "Copies and Views"
track: "data-wrangling"
type: "concept"
status: "published"
difficulty: "beginner"
order: 11
series: "numpy"
---
## Copies and Views

A view exposes an array's existing data buffer without copying it. Know which operations return views before mutating their results.

An array combines a data buffer with metadata such as dtype, shape, and strides. The buffer need not be contiguous, but the metadata tells NumPy how to traverse it.

## Views

Changing metadata such as shape, strides, or dtype can produce a new interpretation of the same buffer. That new array is a view.

Because the buffer is shared, changes through a view can appear in the original. Create one explicitly with `ndarray.view`.

## Copy

A copy duplicates the data into independent storage. Changes stay isolated, at the cost of allocation and copy time. Create one explicitly with `ndarray.copy`.

## Other Operations

`numpy.reshape` returns a view when compatible strides can describe the new shape; otherwise it may copy.

Some non-contiguous layouts cannot be reshaped by changing strides alone. Assigning directly to the array's `shape` attribute raises an error rather than silently copying in those cases.

## View or Copy

Inspect `ndarray.base` to trace shared storage. Views usually reference a base object; arrays that own their data usually report `None`.
