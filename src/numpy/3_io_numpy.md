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

the mechanism of using two loops take more time, but it gives more flexibility. In particular, the `genfromtxt` is able to take missing data into account, where faster and simpler methods like `loadtxt` can't.

The only mandatory argument of `genfromtxt` is the file or data source. It can be a string, a list of strings or a file read into NumPy. The file read into NumPy creates an open file like object from a read method.

If a single string is given as the arg into `genfromtxt`, then it's assumed to be the name of a local file or a remote file.

If a list of strings is provided as the parameter then each string is treated as one line of a file. When the URL of a remote file is passed the file is automatically downloaded to the current directory and opened.

Recognized file types are text files and archives. The different types of archives recognized are `gzip` and `dbz2`. If the file extension is '.gz' then a `gzip` is expected. If it ends with a `.bz2` then a `bzip2` file is assumed.

## Splitting the lines into columns

Once the file if open for reading the 'genfromtxt' splits each line to a sequence of strings. Whatever delimiter is chosen will split the characters into lines. That can be a comma (,) semicolon (;) or even the '\t' - the tab character.

The delimiter chosen isn't limited to a single character. Also, the file may be fixed width. Then the columns are going to be defined as a given number of characters. By default, the white spacing at the end and beginning of values are not stripped. But a parameter of autostrip can be set to True and the leading and trailing white spaces will be stripped from the values.

Comments from the files will be ignored from processing and comment s are marked with a #.

## Skipping Lines and choosing columns

Once the file is defined and open for reading the `genfromtxt` splits each non-empty line into a sequence of string.

The delimiter keyword is used to define how the splitting should take place. Most of the time, a single delimiter will mark the separation. Like with CSV, comma separated values it can use a comma or semicolon as a delimiter. The tab character, the '\t' is another common separator. However, it doesn't have to be a single character, any string of characters will do. 

From default settings, `genfromtxt` assumes a delimiter=None. This separates values along white spaces. Consecutive white spaces are considered as a single white space.

Instead, we could have a fixed width file. That's where the columns are defined as a given number of characters. If so, we set the delimiter to either a single integer or a sequence of integers (if the columns have a different size).

Leading and trailing white space characters are not stripped automatically. That can be overwritten by passing in an optional argument to a value of True.

By default, the character that signifies comments is the '#'. But that can be changed to a different character by passing in the comment argument. Any character passed in as such will then become the marker for comments in the code.

If we have a header or footer in the file, we can skip those lines by using the `skip_header` or `skip_footer` arguments. 

If we want to use only some of the columns and not all of the data, we can pass in the `usecols` argument. That argument can take a single argument or a sequence of integers. The columns indices begin at zero. If the columns have names you can use the column names instead.

## Choosing the Data Type

You can choose how the data is imported, that is what type of data it's imported as by setting the dtype argument. Some dtypes are:

1. a single type, like `dtype=float`
2. a sequence of types, such as `dtype=(int, float, float)`
3. a comma separated string, like `dtype="i4, f8, |U3"`
4. a dictionary with two keys, 'names' and 'formats'
5. a sequence of types (name, type), such as dtype=[('A', int), ('B', float)]
6. an existing data type object
7. the special value of None

In all the above cases, except the data type object or the special value of None will create a 1D array with structured dtype. This has as many fields as items in the sequence. The field names are defined with the names keyword.

When the dtype is None the type of each column is determined iteratively from the data itself. In order, NumPy checks if a string can be converted to a boolean, then whether it can be converted to an integer, the to a float, then to a complex, then eventually just a string.

The dtype=None is significantly slower. 

## Setting the names with the names argument

The natural approach when dealing with tabular data is to allocate a name to each column. When creating the NumPy aray from the file we can pass in a names parameter.

We may sometime sneed to define the columns names from the data itself.

Then we can use hte names keyword with a value of True. The names will be read from the first line, even if the line is commented out.

We can pass in an array as a list. If we do, any names passed in from the dtype functionality is overridden.

`
data = StringIO("1 2 3\n 4 5 6")
ndtype = [('a', int), ('b', float), ('c', int)]
names = ["A", "B", "C"]
np.genfromtext(data, names=names, dtype=ndtype)
`

The `defaultfmt` argument. If names is None but a structured dtype is expected, then names are defined with the standard NumPy default of "f%i", yielding names like f0, f1, and so forth.

In the same way, if we don't give enough names to match the length of the dype the missing names will be defined with the default template. We can overwrite this default with the `defaultfmt` argument, that takes any format string.

## Validating names

NumPy arrays with a structured dtype can also be viewed as a recarray, where a field can be accessed as if it were an attribute.

Therefore, we need to make sure that the field name doesn't contain any space or invalid character, and that it's not the name of a standard attribute.

`genfromtxt` accepts three optional arguments that provide a finer control on the names.

1. `deletechars` gives a string combining all the characters that must be deleted from the name.
2. `excludelist` gives a list of the names to exclude, such as return, file, print. If one of the input name is part of this list, an underscore character will be appended to it.
3. `case_sensitive` whether the names should be case-sensitive, converted to upper case, or to lower case.

## Tweaking the conversion

Usually when defining a dtype, it's enough to define how the sequence of string must be converted. But some additional control may be sometimes required. 

We may want to make sure that a date in a format like YYYY/MM/DD is converted to a datetime object, or that a string like xx% is properly converted to a float between 0 and 1. 

In such cases, we should define a conversion function with a converters argument.

The value of the argument is usually a dictionary with column indices or column names as keys and a conversion function as values.

The restrictions are that they should accept only a string as input and output only a single element of the wanted type.

Converters can also be used to provide a default for missing entries. 

## Using Missing and Filling Values

Some entries may be missing in the dataset we are trying to import. User defined converted may become cumbersome in that case to manage.

The `genfromtxt` function provides two other complementary mechanism in that case. The `missing_values` argument is used to recognize missing data and a second argument, `filling_values` is used to process these missing data.

### missing_values

By default any empty string is marked as missing. Additionally, more complex strings such as "N/A" or "???" translate into missing or invalid data.

### filling_values 

We know how to recognize missing data, but to provide value for filling in those missing entries is done automatically with the following as guide:

expected type | default
bool | False
int | -1
float | np.nan
complex | np.nan+0j
string | '???'

To get finer control over the conversion of missing values we use the `filling_values` optional argument. Like `missing_values`, this accepts different kinds of values:

- a single value
- a sequence of values
- a dictionary

## Shortcut Functions
Additionally `genfromtxt` provides several convenience functions derived from `genfromtxt`.

They work in the same way as the original function, but provide different default values.

- numpy.lib.npyio.recfromtxt
- numpy.lib.npyio.recfromcsv





