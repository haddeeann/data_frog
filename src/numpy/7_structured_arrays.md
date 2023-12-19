---
layout: "article_type_two.njk"
---
# Structured Arrays
[Go home](/index.html)

[Structured Arrays](https://numpy.org/doc/stable/user/basics.rec.html)

## Structured Arrays

Structured arrays are `ndarrays` whose datatype are a composition of simpler `datatypes`.

These `datatypes` are organized as a sequence of named fields.

In a `structured data type` each subtype is called a field. The field has a name (a string), a type (any valid `dtype`), and an optional _title_.

```python
x = np.array([('Bob', 9, 81.0), ('Fido', 3, 27.0)],
dtype=[('name', 'U10'), ('age', 'i4'), ('weight', 'f4')])

# result x
array([('Bob', 9, 81.), ('Fido', 3, 27.)],
dtype=[('name', '<U10'), ('age', '<i4'), ('weight', '<f4')])
```

It's similar to a regular `ndarray`, but each of the fields has a name. You can access the individual fields of a structured array by using the name.

```python
x['age']
array([9, 3], dtype=int32)
x['age'] = 5

# result x
array([('Rex', 5, 81.), ('Fido', 5, 27.)],
dtype=[('name', '<U10'), ('age', '<i4'), ('weight', '<f4')])
```

Structured data types have a similar memory layout as 'structs' in the C language. These helps us be able to do low level manipulation, like for interpreting binary blobs. One of the draw backs to using this for manipulation of tabular data (like that stored in csv files) is that it can lead to poor cache behavior.

Other `pydata` projects could be better suited for this type of data manipulation such as `xarray`, `pandas`, or `DataArray`.

## Structured Datatypes

A structured datatype can be thought of as a sequence of bytes of a certain length which is interpreted as a collection of fields.

Each of those fields has a name, a datatype, and a byte offset.

The datatype can be any kind of datatype within NumPy, but can also be a subarray data type. Subarray data types behave like an `ndarray` of a specific shape.

The structured `datatypes` can be created using a function `numpy.dtype`.

There are four forms of creating the `numpy.dtype`:

1. A list of tuples. One tuple per field.
2. A string of comma seperated dtype specifications.
3. A dictionary of field parameter arrays.
4. A dictionary of field names.

The list of field names of a structured `datatype` can be found in the names attribute of the `dtype` of the object.

The `dtype` object also has a dictionary-like attribute, fields, whose keys are the field names.

NumPy uses of two methods to determine the field byte offsets and the overall item size of a structured datatype.

This depends on whether `align=True` was given as a keyword argument to `numpy.dtype`.

In addition to the field names, the fields can also have titles.

## Indexing and Assignment to Structured Arrays

The simplest way to assign values to a structured array is using Python tuples. Each assigned value should be a tuple of length equal to the number of fields in the array.

A scalar assigned to a structured element will be assigned to all fields. This is when a scalar is assigned to a structured array. Structured arrays can also be assigned to a unstructured arrays, but only if the structured datatype has just a single field.

You can also have assignment between two structured arrays. This occurs if the source elements have been converted to tuples assigned to the destination elements.

Structured arrays with a different number of fields can't be assigned to each other.

When assigning to fields which are `subarrays`, the assigned value will be first broadcast to the shape of the subarray.

To access individual fields, the fields may be modified by indexing the array with the field name. The resulting array shares the same memory location as the original array.

The view will have the same dype and itemsize as the indexed field. It will be a non-structured array, except in case of nested structures.

One can index and assign to a structured array with a multi-field index. The index being a list of field names.

The resul of it will be indexing with a multi-field index as a vew  into the original array.

Assignment to the view modifies the original array. The view's fields will be in the order they were indexed.

Note that unlike for single field indexing, the dtype of the view has the same itemsize as the original array. It has the fields at the same offsets as the original array, and the unindexed fields are merely missing.

Assignment to an array with a multi-field index modifies the original array.

This obeys the structured array assignment rules described above. So you can swap the vlaues of two fields using appropriate multi-field indexes.

## Indexing an Integer to Get a Structured Scalar

Indexing a single element of a structured array returns a structured scalar.

Unlike other NumPy scalars, structured scalars are mutable and act like views into the original array. Structured scalars also support access and assignment by field name.

Just like tuples, structured scalars can be indexed with an integer. So tuples can be thought of as the native Python equivalent ot NumPy's structured types. Much like native Python integers are the equal to NumPy's integer types. Structured scalars may be converted to a tuple by calling numpy.ndarray.item.

## Viewing Structured Arrays Containing Objects

In order to prevent clobbering object pointers in fields of object type, NumPy currently does not allow views of structured arrays containing objects.

### Structure Comparison and Promotion

if the dypes of two void structured arrays are equal, testing the equality of the arrays will result in a boolean array. It will have the dimension of hte original arrays, which elements are set to True where all fields of the corresponding structure are equal.

NumPy will promote individual field datatypes to perform the comparison. To compare tow structured arrays, it's possible to promote them to a common dtype and then are returned by numpy.result_type and np.promote_types.

The resulting dtype from promotion is also guaranteed to be packed, which means that all fields are ordered contiguously and any padding is removed.

## Record Arrays

As an optional convenience NumPy provides an ndarray subclass `numpy.recarray`. This allows access to fields of structured arrays by attribute instead of only by index.

Record arrays use a special datatype, `numpy.record` that allows field access by attribute on the structured scalars. the numpy.rec module provides functions for creating recarrays from various objects. Additional helper functions for creating and manipulating structured arrasy can be found in `numpy.lib.recfunctions`.

The easiest way to create a record array is with `numpy.rec.array`. It can convert structured arrays along with other kinds of arguments into record arrays.

There's also a lot of other convenience functions for creating record arrays. 





