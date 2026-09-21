---
layout: "html_wrapper.njk"
---
## Using genfromtxt

`genfromtxt` turns delimited text into NumPy arrays, including tables with missing values or mixed column types.

It parses in two passes: split each line into strings, then convert each string to its target dtype.

That flexibility costs speed, but it lets `genfromtxt` handle missing data that the simpler `loadtxt` path does not.

Its only required argument is the data source: a path, URL, list of lines, or readable file-like object.

A single string is treated as a local filename or remote URL.

A list of strings supplies one record per item. A remote URL is downloaded and opened.

The loader reads text directly and recognizes gzip (`.gz`) and bzip2 (`.bz2`) compression by extension.

## Splitting the lines into columns

`genfromtxt` splits each line into fields at the chosen delimiter: a comma, semicolon, tab (`\t`), or another separator.

```python
import numpy as np
from io import StringIO

data = u"1, 2, 3\n4, 5, 6"
np.genfromtxt(StringIO(data), delimiter=",")
# result array([[1., 2., 3.],
       [4., 5., 6.]])
```

A delimiter may contain more than one character. With the default `delimiter=None`, any run of whitespace separates fields.

For fixed-width records, pass one integer for equal-width columns or a sequence of widths for unequal columns.

Delimited fields retain surrounding whitespace by default. Set `autostrip=True` to remove it.

```python
data = u"1, abc , 2\n 3, xxx, 4"

# without autostrip
np.genfromtxt(StringIO(data), delimiter=",", dtype="|U5")

# result array([['1', ' abc ', ' 2'],
       ['3', ' xxx', ' 4']], dtype='<U5')

# with autostrip
np.genfromtxt(StringIO(data), delimiter=",", dtype="|U5", autostrip=True)

# result array([['1', 'abc', '2'],
       ['3', 'xxx', '4']], dtype='<U5')
```

Text after the comment marker is ignored; the default marker is `#`.

## Skipping Lines and choosing columns

Once open, `genfromtxt` splits every non-empty line into strings.

The `delimiter` keyword controls the split. Common choices include commas, semicolons, and tabs, but any separator string works.

With `delimiter=None`, runs of whitespace act as one separator.

For fixed-width files, pass one width or a sequence of per-column widths.

Set `autostrip=True` when fields should lose leading and trailing whitespace.

## The Comments Argument

`#` starts a comment by default. Override it with the `comments` argument.

```python
np.genfromtxt(StrinIO(data), comment="#", delimiter=",")
```

## Skip Header or Skip Footer Argument

Skip non-data lines with `skip_header` and `skip_footer`.

```python
np.genfromtxt(StringIO(data), skip_header=3, skip_footer=5)
```

## The usecols argument

Select columns with `usecols`, using a zero-based integer, a sequence of integers, or field names.

```python
np.genfromtxt(StringIO(data), usecols=(0, -1))
```

Named columns work too:

```python
np.genfromtxt(StringIO(data), names="a, b, c", usecols=("a, c"))
```

## Choosing the Data Type

Set `dtype` to control the imported representation. Accepted forms include:

1. a single type, like `dtype=float`
2. a sequence of types, such as `dtype=(int, float, float)`
3. a comma separated string, like `dtype="i4, f8, |U3"`
4. a dictionary with two keys, `'names'` and `'formats'`
5. a sequence of types (name, type), such as `dtype=[('A', int), ('B', float)]`
6. an existing `numpy.dtype` object
7. the special value of None

Except for a single type and `None`, these forms produce a one-dimensional structured array with one field per type. Set field names with `names`.

With `dtype=None`, NumPy infers each column iteratively, testing boolean, integer, float, complex, then string conversion.

Inference requires extra work, so `dtype=None` loads more slowly than an explicit dtype.

## Names Argument

Use `names` to label columns in tabular data.

Set `names=True` to read field names from the first line, even when that line is commented out.

The default is `names=None`. Explicit names replace any field names embedded in `dtype`.

```python
from io import StringIO

data = StringIO("1 2 3\n 4 5 6")

ndtype = [('a', int), ('b', float), ('c', int)]
names = ["A", "B", "C"]
np.genfromtxt(data, names=names, dtype=ndtype)
# result array([(1, 2., 3), (4, 5., 6)],
      dtype=[('A', '<i8'), ('B', '<f8'), ('C', '<i8')])
```

### The `defaultfmt` Argument. 

`defaultfmt` controls generated field names, not field dtypes.

When a structured dtype needs names and `names` is `None`, NumPy uses the template `"f%i"`, producing `f0`, `f1`, and so on.

The same template fills any missing names.

Override the template with a format string in `defaultfmt`. It applies only when expected names are missing.

## Record arrays

Record arrays are structured arrays exposed through the `numpy.recarray` subclass.

They expose fields as attributes as well as indices, and their scalar type is `numpy.record`.

Attribute access requires valid, space-free names that do not collide with standard attributes.

Three optional arguments refine field names:

1. `deletechars` gives a string combining all the characters that must be deleted from the name.
2. `excludelist` gives a list of the names to exclude, such as return, file, print. If one of the input names is part of this list, an underscore character will be appended to it.
3. `case_sensitive` whether the names should be case-sensitive (`case_sensitive=True`), converted to upper case (`case_sensitive=False` or `case_sensitive='upper'`), or to lower case (`case_sensitive='lower'`).

## Tweaking the Conversion

An explicit `dtype` handles ordinary conversion. Use a converter when a column needs custom parsing.

Typical cases include parsing `YYYY/MM/DD` into a `datetime` or converting a percentage string into a float.

Pass those functions through `converters`.

The argument maps column indices or names to functions. Each function accepts one string and returns one converted value.

Converters can also supply defaults for missing entries.

## Using Missing and Filling Values

Custom converters can handle missing entries, but dedicated missing-value controls scale better.

`missing_values` recognizes missing tokens; `filling_values` chooses their replacements.

### missing_values

Empty strings count as missing by default. Add tokens such as `"N/A"` or `"???"` explicitly when the source uses them.

### filling_values 

`filling_values` replaces recognized gaps with defaults based on the expected dtype.

expected type | default
`bool` | `False`
`int` | `-1`
`float` | `np.nan`
`complex` | `np.nan+0j`
`string` | `'???'`

For finer control, pass `filling_values` as:

- a single value
- a sequence of values
- a dictionary

## Shortcut Functions


`numpy.lib.npyio` also provides convenience wrappers around `genfromtxt` with different defaults:

- `numpy.lib.npyio.recfromtxt`
- `numpy.lib.npyio.recfromcsv`




