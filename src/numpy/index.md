---
layout: "html_wrapper.njk"
---
NumPy stands for Numerical Python. It's used in a lot of data science and engineering.

Installing NumPy can be done with pip:

`pip install numpy`

NumPy is a multidimensional library, meaning that you can have 1D, 2D or even more dimensions in the arrays. The benefit of using NumPy is that using Python lists are really slow. NumPy is much faster because they have fixed data types. That means that NumPy arrays contain  specific types of data.

NumPy uses fewer bytes of memory. Which also makes it faster.

NumPy uses contiguous memory as well.

To start using NumPy from the command line, start the command line. Then from there start using Python by entering:

`python`

That will put you in a Python environment. Then you can start using NumPy with:

`import numpy as np`

Then you have a numpy prompt and can start working inputting and manipulating arrays and data.

## NumPy Learn By Topics

1. [NumPy Array Creation](./1_create_array)

2. [Indexing NumPy Arrays](./2_index_ndarrays)

3. [I/O with NumPy](./3_io_numpy)

4. [Data Types in NumPy](./4_data_types)

5. [Broadcasting](./5_broadcasting)

6. [Byte Swapping](./6_byte_swapping)

7. [Structured Arrays](./7_structured_arrays)

8. [Custom Array Containers](./8_custom_array_containers)

9. [Subclassing](./9_subclassing)

10. [Universal Functions](./10_universal_functions)

11. [Copies and Views](./11_copies_views)

12. [Interoperability](./12_interoperability)

## Ideas for Next Steps

[Data Science Libraries in Python](./data_science_software_list)

[Idea for first project](https://www.youtube.com/watch?v=o64FV-ez6Gw)

[Ideas for a beginner project](https://www.reddit.com/r/Python/comments/a925bi/projects_for_numpypandas_novice/)
  - Try implementing a neural network from scratch in pure NumPy using a basic optimization algorithm like vanilla gradient descent/SGD. This necessitates manually writing out a backward pass, which TensorFlow/PyTorch/Keras will spare you from, but it familiarizes you with backprop and update rules at a granular level and will make you more comfortable with NumPy operations.

## A note about Panda:

Panda is built on the top of the NumPy library which means that a lot of structures of NumPy are used or replicated in Pandas. The data produced by Pandas are often used as input for plotting functions of Matplotlib, statistical analysis in SciPy, and machine learning algorithms in Scikit-learn. 