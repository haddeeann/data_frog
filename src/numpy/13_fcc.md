---
title: Data Frog
layout: "article_type_two.njk"
---
[Go home](/index.html)

[FreeCodeCamp tutorial](https://www.youtube.com/watch?v=QUT1VHiLmmI)

## Learning NumPy with FreeCodeCamp

Welcome to Data Frog. My personal notes and learning journey for data science and machine learning.

## Start
NumPy is a multidimensional library. Why use NumPy over Lists.

The main benefit is speed. Native Python Lists are slow. But, NumPy is faster because it uses a fixed type for the data.

Computer see binary when they are looking at data. For example, the number 5 would be binary form. And NumPy would cast it to an Int32 format.

But you can specify to a single byte that would be Int8.

But with Lists, you'd need to store a lot more things with Python. Internally each List consists of:
1. Sizes
2. Reference Count
3. Object Type
4. Object Value

So if you break it up into the bits that are stored it takes a lot more space to store even a single value in the List. So, in summary because NumPy uses less bytes of memory, so it's faster.

It's also faster because you don't need type checking with objects.

NumPy also uses contiguous memory. Where Lists don't need to be stored in contiguous memory. That makes it faster for the computer to access the NumPy data. 

With list of data in Python, the storage in memory is actually just pointing to pointers in memory.