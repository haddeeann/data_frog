---
title: NumPy for Basics
layout: "article_type_two.njk"
---
[Go home](/index.html)

[NumPy Byte swapping](https://numpy.org/doc/stable/user/basics.byteswapping.html)

# Basics byte swapping

The ndarray is an object that provides an interface to data in memory. So it sometimes happens that the memory that you want to view in the array is not of the same byte ordering as the computer than you're running Python on.

## A side journey in to endianness
[Endianness](https://www.section.io/engineering-education/what-is-little-endian-and-big-endian/)

For example, if I was working on a computer with a little endian CPU and I had loaded some data from a file writtern by a computer than is big endian.

Computer store their data in memory in binary. And the way that the computer formats the data at the byte level is called it's endianness and it refers to the ordering of the bytes.

Little-endian is when the least significant bytes are stored before the more significant bytes. And big-endian is when the most significant bytes are stored before the less significant bytes. The way we write normal numbers in the real world could be considered big-endian, because we write the most important numbers first. For example, if I were to write the number 123, the one and two would be the more significant numbers.

When we talk about the endianness of the number in computer science this is only referring to how we store the numbers and isn't important to what the number is. Let's take a hexadecimal number like 0x12345678. If we were to store that number in little-endian we would get the following:

`78 56 34 12`

And if we were to store that same number in big-endian we would get:

`12 34 56 78`

Note that each 2 hex letters represent one byte.

The big reason this is important is because processors use different ways to store data. So knowing how the computer stores data across the internet communication is important.

For example, one processor might use a little-endian way of storing the data and another might use big-endian.

With little-endian we don't arbitrarily store any 8 bytes in little-endian order, but it stores individual values in little endian based on the size they take up. So if we had an 8 byte number that would be stored as the whole number reversed and if we had two 4 byte numbers each of those would be reversed.