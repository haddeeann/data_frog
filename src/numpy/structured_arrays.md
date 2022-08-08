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

To be continued...



