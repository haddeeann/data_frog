---
title: Byte Swapping
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Byte swapping](https://numpy.org/doc/stable/user/basics.byteswapping.html)

## Basics Byte Swapping

The `ndarray` is an object that provides an interface to data in memory. 

So it sometimes happens that the memory that you want to view in the array is not of the same byte ordering as the computer than you're running Python on.

## Endianness
[Endianness](https://www.section.io/engineering-education/what-is-little-endian-and-big-endian/)

An example of when this type of data storage matters, if I was working on a computer with a little endian CPU (way of storing the data) and I had loaded some data from a file written by a computer than is big endian (different way of storing the data).

Computers store their data in memory in binary. And the way that the computer formats the data at the byte level is called it's endianness. This refers to the ordering of the bytes.

Little endian is when the LEAST significant bytes are stored before the more significant bytes. 

Big endian is when the MOST significant bytes are stored before the less significant bytes. 

The way we write normal numbers in the real world could be considered big endian, because we write the most important numbers first. For example, if I were to write the number 123 (one hundred and twenty-three), the one and two would be the more significant numbers.

When we talk about the endianness of the number in computer science this is referring to how we store the numbers and isn't important to what the number type is. Let's take a hexadecimal number like 0x12345678. If we were to store that number in little-endian we would get the following:

`78 56 34 12`

And if we were to store that same number in big-endian we would get:

`12 34 56 78`

Note that each 2 hex letters represent one byte.

The reason this is important is that processors use different ways to store data. So knowing how the computer stores the data across the internet communication is important.

For example, one processor might use a little endian way of storing the data and another might use big endian.

With little endian we don't arbitrarily store any 8 bytes in little endian order, but it stores individual values in little endian based on the size they take up. So if we had an 8 byte number that would be stored as the whole number reversed and if we had two 4 byte numbers each of those would be reversed.

## Back to NumPy

So with NumPy arrays we might be working with a computer that is little endian, like Intel Pentium, but loading data from a file written on a computer that is big endian.

In our example, we've loaded 4 bytes of data from a file in a big endian computer. These four bytes represent tw 15 bit integers. In the big endian system the two byte integer is store with the Most Significant Byte first (MSB) and the Least Significant byte last.

We pass in a '>' in front of the dtype to indicate that the data type is big endian and we pass in a buffer of a type of 'big_end_buffer'.

`big_end_arr = np.ndarray(shape=(2,),dtype='>i2', buffer=big_end_buffer)
big_end_arr[0]`

## Changing Byte Ordering

There are two ways to affect the relationship between the byte ordering of the array and the underlying memory.

1. change the byte ordering info in hte array dtype. Using such as `arr.newbyteorder()`
2. change the byte ordering of the underlying data and don't change the dtype interpretation. Such as `arr.byteswap()`

If we find the order incorrect, an easy fix to give the data the correct endianness:

`
fixed_end_dtype_arr = wrong_end_dtype_arr.newbyteorder()
fixed_end_dtype_arr[0]
`

This doens't change the original array in memory. But if you need to change the data and type endianness in memory.

`
fixed_end_mem_arr = wrong_end_dtype_arr.byteswap()
fixed_end_mem_arr[0]
`

Then the array has changed in memory:

`
fixed_end_mem_arr.tobytes() == big_end_buffer
False
`

If you want you can also make the array to have the opposite byte order in memory, with the dtype to match so the array values make sense.

`
swapped_end_arr = big_end_arr.byteswap().newbyteorder()
swapped_end_arr[0]
1
swapped_end_arr.tobytes() == big_end_buffer
False
`

The easier way of casting the data to a specific dtype and byte ordering:

`
swapped_end_arr = big_end_arr.astype('<i2')
swapped_end_arr[0]
1
swapped_end_arr.tobytes() == big_end_buffer
False
`






