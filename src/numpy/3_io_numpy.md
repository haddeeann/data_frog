---
title: IO with NumPy
layout: "article_type_two.njk"
---
[Go home](/index.html)

[IO with NumPy](https://numpy.org/doc/stable/user/basics.io.html)


[using genfromtxt](https://numpy.org/doc/stable/user/basics.io.genfromtxt.html#defining-the-input)

There are several ways NumPy can create arrays from tabular data. `genfromtxt` is one such useful way.

In a nutshell the `genfromtxt` runs two main loops. The first loop converts each line of the file.

The second loop converts each string to the right data type.

the mechanism of using two loops take more time but it gives more flexibility.

The only mandatory argument of `genfromtxt` is the data source. It can be a string, a list of strings or a file read into NumPy.

If a single string is given, then it's assumed to be the name of a local or remote file.

If a list of string is given then each string is treated as one line of a file. When the URL of a remote file is passed the file is automatically downloaded to the current directory and opened.

The different types of archives recognized are gzip and dbz2. If the file extension is '.gz' then a gzip is expected. If it ends with a 'bz2' then a bzip2 file is assumed.

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

## Setting the names with teh names argument

to be continued





