---
layout: "html_wrapper.njk"
---
## Basics of Byte Swapping

An `ndarray` interprets bytes held in memory.

Those bytes may use a different order from the machine running Python.

## Side Note on Endianness
[Endianness](https://www.section.io/engineering-education/what-is-little-endian-and-big-endian/)

Byte order matters when, for example, a little-endian machine reads a file written in big-endian order.

Endianness is the order in which a multibyte value's bytes appear in memory.

Little-endian order stores the least significant byte first.

Big-endian order stores the most significant byte first.

Written decimal notation resembles big-endian order because the most significant digit comes first.

Endianness changes storage, not the value itself. Store hexadecimal `0x12345678` in little-endian order and the bytes appear as:

`78 56 34 12`

In big-endian order:

`12 34 56 78`

Each pair of hexadecimal digits represents one byte.

Processors and file formats may choose different byte orders, so binary interchange must declare the order explicitly.

Byte order applies per value. One eight-byte value reverses as a unit; two four-byte values each reverse independently.

## Back to NumPy

NumPy therefore needs both the host byte order and the source data's byte order.

Here, four big-endian bytes represent two 16-bit integers. Each integer stores its most significant byte first.

Prefix the dtype with `>` to interpret `big_end_buffer` as big-endian data.

`big_end_arr = np.ndarray(shape=(2,),dtype='>i2', buffer=big_end_buffer)
big_end_arr[0]`

## Changing Byte Ordering

Change byte order in one of two places:

1. change the byte ordering info in hte array dtype. Using such as `arr.newbyteorder()`
2. change the byte ordering of the underlying data and don't change the dtype interpretation. Such as `arr.byteswap()`

If the dtype describes the bytes incorrectly, change its byte-order metadata:

`
fixed_end_dtype_arr = wrong_end_dtype_arr.newbyteorder()
fixed_end_dtype_arr[0]
`

That leaves the underlying bytes untouched. To change the bytes instead:

`
fixed_end_mem_arr = wrong_end_dtype_arr.byteswap()
fixed_end_mem_arr[0]
`

The resulting bytes now differ:

`
fixed_end_mem_arr.tobytes() == big_end_buffer
False
`

To swap the bytes and update the dtype so values keep their meaning:

`
swapped_end_arr = big_end_arr.byteswap().newbyteorder()
swapped_end_arr[0]
1
swapped_end_arr.tobytes() == big_end_buffer
False
`

Or cast directly to a dtype with the required byte order:

`
swapped_end_arr = big_end_arr.astype('<i2')
swapped_end_arr[0]
1
swapped_end_arr.tobytes() == big_end_buffer
False
`





