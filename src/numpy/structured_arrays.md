---
title: Structured Arrays
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Structured Arrays](https://numpy.org/doc/stable/user/basics.rec.html)

## Structured Arrays

Structured arrays are ndarrays whose datatype are a composition of simpler datatypes organized as a sequence of named fields. 

`
x = np.array([('Bob', 9, 81.0), ('Fido', 3, 27.0)],
dtype=[('name', 'U10'), ('age', 'i4'), ('weight', 'f4')])
`

`x
array([('Bob', 9, 81.), ('Fido', 3, 27.)],
dtype=[('name', '<U10'), ('age', '<i4'), ('weight', '<f4')])
`

It's similar to a regular ndarray, but each of the fields has a name. Then you can access the individual fields aof a structured array by using the name.

`
x['age']
array([9, 3], dtype=int32)
x['age'] = 5
`

`x
array([('Rex', 5, 81.), ('Fido', 5, 27.)],
dtype=[('name', '<U10'), ('age', '<i4'), ('weight', '<f4')])
`

Structured data types have a similar memory layout as 'structs' in the C language. These helps us be able to do low level manipulation, like for interpreting binary blobs. One of the draw backs to using this for manipulation of tabular data like that stored in csv files is that it can lead to poor cache behavior.

Other pydata projects could be better suited such as xarray, pandas, or DataArray.

## Structured Datatypes

A structured datatype can be thought of as a sequence of bytes of a certain length which is interpreted as a collection of fields.

Each of those fields has a name, a datatype, and a byte offset.

The datatype can be any kind of datatype within NumPy, but can also be a subarray data type. Subarray data types behave like an ndarray of a specific shape.

The structured datatypes can be created using a function `numpy.dtype`.

There are four forms of creating the numpy.dtype:

1. by a list of tuples. One tuple per field.
2. a string of comma seperated dtype specifications.
3. a dictionary of field parameter arrays.
4. a dictionary of field names.

The list of field names of a structured datatype can be found int eh names attribute of the dtype of the object.

The dtype object also has a dictionary-like attribute, fields, whose keys are the field names.

NumPy uses of two methods to determine the field byte offsets and the overall itemsize of a structured datatype.

This depends on whether align=True was given as a keyword argument to numpy.dtype.

In addition to the field names, the fields can also have titles.

## Indexing and Assignment to Structured Arrays

to be continued



