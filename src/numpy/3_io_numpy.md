---
title: IO with NumPy
layout: "article_type_two.njk"
---
[Go home](/index.html)

[IO with NumPy](https://numpy.org/doc/stable/user/basics.io.html)

## Using genfromtxt

There are several ways NumPy can create arrays from tabular data. `genfromtxt` is one such useful way.

In a nutshell the `genfromtxt` runs two main loops. The first loop converts each line of the file into a sequence of strings.

The second loop converts each string to the right data type.

The mechanism of using two loops take more time, but it gives more flexibility. In particular, the `genfromtxt` is able to take missing data into account, where faster and simpler methods like `loadtxt` can't.

The only mandatory argument of `genfromtxt` is the file or data source. It can be a string, a list of strings or a file read into NumPy. The file read into NumPy creates an open file like object from a read method.

If a single string is given as the arg into `genfromtxt`, then it's assumed to be the name of a local file or a remote file.

If a list of strings is provided as the parameter then each string is treated as one line of a file. When the URL of a remote file is passed the file is automatically downloaded to the current directory and opened.

Recognized file types are text files and archives. The different types of archives recognized are `gzip` and `dbz2`. If the file extension is '.gz' then a `gzip` is expected. If it ends with a `.bz2` then a `bzip2` file is assumed.

## Splitting the lines into columns

Once the file is open for reading, the `genfromtxt` splits each line to a sequence of strings. Whatever delimiter is chosen will split the characters into lines. That can be a comma (,) semicolon (;) or even the '\t' - the tab character.

```python
import numpy as np
from io import StringIO

data = u"1, 2, 3\n4, 5, 6"
np.genfromtxt(StringIO(data), delimiter=",")
# result array([[1., 2., 3.],
       [4., 5., 6.]])
```

The delimiter chosen isn't limited to a single character. It's just the most common ones to use. By default, the `genfromtxt` assumes a delimiter of `None`, which means that the line is split along the white spaces (including tabs). And consecutive white spaces in this case are considered a single white space.

Alternately, the file may be fixed width. That means the columns are defined as a given number of characters. In that case, we need to set a delimiter to a single integer if all the columns have the same size. Or set the delimiter to a sequence of integers if the columns have different sizes.

By default, the white spacing at the end and beginning of values are not stripped. But a parameter of auto strip can be set to `True` and the leading and trailing white spaces will be stripped from the values.

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

Comments from the files will be ignored from processing and comment s are marked with a #.

## Skipping Lines and choosing columns

Once the file is defined and open for reading the `genfromtxt` splits each non-empty line into a sequence of string.

The delimiter keyword is used to define how the splitting should take place. Most of the time, a single delimiter will mark the separation. Like with CSV, comma separated values it can use a comma or semicolon as a delimiter. The tab character, the '\t' is another common separator. However, it doesn't have to be a single character, any string of characters will do. 

From default settings, `genfromtxt` assumes a `delimiter=None`. This separates values along white spaces. Consecutive white spaces are considered as a single white space.

Instead, we could have a fixed width file. That's where the columns are defined as a given number of characters. If so, we set the delimiter to either a single integer or a sequence of integers (if the columns have a different size).

Leading and trailing white space characters are not stripped automatically. That can be overwritten by passing in an optional argument to a value of `True`.

## The Comments Argument

By default, the character that signifies comments is the '#'. But that can be changed to a different character by passing in the comment argument. Any character passed in as such will then become the marker for comments in the code.

```python
np.genfromtxt(StrinIO(data), comment="#", delimiter=",")
```

## Skip Header or Skip Footer Argument

If we have a header or footer in the file, we can skip those lines by using the `skip_header` or `skip_footer` arguments. 

```python
np.genfromtxt(StringIO(data), skip_header=3, skip_footer=5)
```

## The usecols argument

If we want to use only some columns and not all the data, we can pass in the `usecols` argument. That argument can take a single argument or a sequence of integers. The columns indices begin at zero. If the columns have names you can use the column names instead.

```python
np.genfromtxt(StringIO(data), usecols=(0, -1))
```

If the columns have names you can use that instead.

```python
np.genfromtxt(StringIO(data), names="a, b, c", usecols=("a, c"))
```

## Choosing the Data Type

You can choose the format of the data when it's imported. To do this, set the `dtype` parameter/argument on import. Some `dtypes` are:

1. a single type, like `dtype=float`
2. a sequence of types, such as `dtype=(int, float, float)`
3. a comma separated string, like `dtype="i4, f8, |U3"`
4. a dictionary with two keys, `'names'` and `'formats'`
5. a sequence of types (name, type), such as `dtype=[('A', int), ('B', float)]`
6. an existing `numpy.dtype` object
7. the special value of None

In all the above cases (except the first case and the None value), the data created will be a 1D array with structured dtype. This dtype has as many fields as items in the sequence. The field names are defined with the `names` keyword.

When the `dtype=None`, the type of each column is determined iteratively from the data itself. First, NumPy checks if a string can be converted to a boolean datatype. Then NumPy checks whether the data can be converted to an integer.

Finally, NumPy will check if the data can be converted to a float, then to a complex, then eventually just a string.

If you pass in the parameter of a `dtype=None`, then importing the data will be significantly slower. 

## Names Argument

The natural approach when dealing with tabular data is to allocate a name to each column. When creating the NumPy array from the file we can pass in a `names` parameter.

We may sometime need to define the columns names from the data itself.

Then we can use the `names` keyword with a value of `True`. The names will be read from the first line, even if the line is commented out.

The default value of `names` is `None`. If we give any other value to the keyword, the new names will overwrite the field names we may have defined with the `dtype`.

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

The default format, `defaultfmt` can be thought of as the `dtype` that will be chosen as default.

If `names` is `None` but a structured `dtype` is expected, then `names` are defined with the standard NumPy default of `"f%i"`, yielding names like `f0`, `f1`, and so forth.

In the same way, if we don't give enough names to match the length of the `dtype` the missing names will be defined with the default template. 

We can overwrite this default template with the `defaultfmt` argument, that takes any format string. Keep in mind that `defaultfmt` is used only if some names are expected, but not defined.

## Record arrays

Record arrays are similar to structured arrays. The difference is that record arrays are wrapped in the `numpy.rec.arrays`. We can use the `numpy.recarray` for constructing a record array.

The fields in the record array can be accessed as if they were attributes instead of array indexes. The fields are a special `datatype` of `numpy.record`.

Because the fields being a special `datatype`, we need to make sure that the field name doesn't contain any space or invalid character, and that it's not the name of a standard attribute.

The `genfromtxt` function accepts three optional arguments that provide a finer control on the names of the field name.

1. `deletechars` gives a string combining all the characters that must be deleted from the name.
2. `excludelist` gives a list of the names to exclude, such as return, file, print. If one of the input names is part of this list, an underscore character will be appended to it.
3. `case_sensitive` whether the names should be case-sensitive (`case_sensitive=True`), converted to upper case (`case_sensitive=False` or `case_sensitive='upper'`), or to lower case (`case_sensitive='lower'`).

## Tweaking the Conversion

Usually when defining a `dtype`, it's enough to define how the sequence of string must be converted. But some additional control may be sometimes required. 

We may want to make sure that a date in a format like `YYYY/MM/DD` is converted to a `datetime` object, or that a string like `xx%` is properly converted to a float between 0 and 1. 

In such cases, we should define a conversion function with a `converters` argument.

The value of the argument is usually a dictionary with column indices or column names as keys and a conversion function as values. These conversion functions can be actual functions or lambda functions. Either way, they accept only a string as an input, and they output only a single element of the wanted type.

Converters can also be used to provide a default for missing entries. 

## Using Missing and Filling Values

Some entries may be missing in the dataset we are trying to import. It's possible to use a converter to transform an empty string to a float. But the user defined converters may become cumbersome to manage.

The `genfromtxt` function provides two other complementary mechanism. The `missing_values` argument is used to recognize missing data and a second argument, `filling_values` is used to process these missing data.

### missing_values

By default, any empty string is marked as missing. Additionally, more complex strings such as `"N/A"` or `"???"` translate into missing or invalid data.

### filling_values 

The `filling_values` parameters goes one step beyond just recognizing missing data and allows us to automatically fill in the data. It uses the expected `dtype` to fill in an automatic value.

expected type | default
`bool` | `False`
`int` | `-1`
`float` | `np.nan`
`complex` | `np.nan+0j`
`string` | `'???'`

To get finer control over the conversion of missing values we use the `filling_values` optional argument. Like `missing_values`, this accepts different kinds of values:

- a single value
- a sequence of values
- a dictionary

## Shortcut Functions


In addition to `genfromtxt`, the `numpy.lib.npyio` module provides several convenience functions derived from `genfromtxt`.

They work in the same way as the original function, but provide different default values.

- `numpy.lib.npyio.recfromtxt`
- `numpy.lib.npyio.recfromcsv`





