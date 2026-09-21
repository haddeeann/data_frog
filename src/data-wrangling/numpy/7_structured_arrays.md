---
layout: "html_wrapper.njk"
title: "Structured Arrays"
track: "data-wrangling"
type: "concept"
status: "published"
difficulty: "beginner"
order: 7
series: "numpy"
---
## Structured Arrays

Structured arrays are `ndarray` objects whose dtype combines simpler dtypes into named fields.

Each field has a string name, a valid dtype, and an optional title.

```python
x = np.array([('Bob', 9, 81.0), ('Fido', 3, 27.0)],
dtype=[('name', 'U10'), ('age', 'i4'), ('weight', 'f4')])

# result x
array([('Bob', 9, 81.), ('Fido', 3, 27.)],
dtype=[('name', '<U10'), ('age', '<i4'), ('weight', '<f4')])
```

Index by field name to read or update one field across the array.

```python
x['age']
array([9, 3], dtype=int32)
x['age'] = 5

# result x
array([('Rex', 5, 81.), ('Fido', 5, 27.)],
dtype=[('name', '<U10'), ('age', '<i4'), ('weight', '<f4')])
```

Structured dtypes resemble C structs in memory, which makes them useful for binary records. Their row-oriented layout can perform poorly for column-wise tabular work.

For general tabular or labeled-array analysis, Pandas or xarray may fit better.

## Structured Datatypes

A structured dtype interprets a fixed-size byte sequence as fields. Each field has a name, dtype, and byte offset.

A field can use any NumPy dtype, including a fixed-shape subarray dtype.

Construct structured dtypes with `numpy.dtype`.

Four input forms are common:

1. A list of tuples. One tuple per field.
2. A string of comma seperated dtype specifications.
3. A dictionary of field parameter arrays.
4. A dictionary of field names.

Read field names from the dtype's `names` attribute.

Its dictionary-like `fields` attribute maps those names to field metadata.

NumPy calculates field offsets and total item size differently when `numpy.dtype` receives `align=True`.

Fields may also carry titles.

## Indexing and Assignment to Structured Arrays

Assign one record with a Python tuple containing one value per field.

Assigning a scalar to a structured element writes that scalar to every field. Assignment from an unstructured array requires a single-field structured dtype.

Structured arrays can assign records to one another by field position.

Source and destination must have the same number of fields.

Values assigned to subarray fields broadcast to the field's shape first.

Index with a field name to get a view that shares memory with the source.

The view uses the field's dtype and item size and is unstructured unless the field is itself structured.

Pass a list of field names to select or assign multiple fields.

Multi-field indexing returns a view into the original array.

Assignments through that view modify the source, and fields follow the requested order.

Unlike a single-field view, a multi-field view preserves the original item size and offsets; unselected fields become gaps.

Multi-field assignment follows the same rules and can swap field values in place.

## Indexing an Integer to Get a Structured Scalar

Indexing one record returns a structured scalar.

Unlike most NumPy scalars, it is mutable, acts as a view, and supports field-name access and assignment.

Structured scalars also accept integer field positions. Convert one to a Python tuple with `numpy.ndarray.item`.

## Viewing Structured Arrays Containing Objects

NumPy blocks views of structured arrays containing object fields to protect object pointers.

### Structure Comparison and Promotion

When two void structured arrays share a dtype, equality returns a boolean array shaped like the inputs. An element is `True` only when every corresponding field matches.

For differing compatible dtypes, `numpy.result_type` and `numpy.promote_types` can determine a common promoted dtype field by field.

The promoted dtype is packed: fields are contiguous and padding is removed.

## Record Arrays

`numpy.recarray` is an optional `ndarray` subclass that exposes fields as attributes.

Its scalar type, `numpy.record`, provides the same attribute access. Build record arrays through `numpy.rec`; find additional helpers in `numpy.lib.recfunctions`.

`numpy.rec.array` converts structured arrays and other compatible inputs into record arrays.

Other constructors in `numpy.rec` cover common input forms.




