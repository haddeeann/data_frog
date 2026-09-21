---
layout: "html_wrapper.njk"
title: "NumPy Fundamentals"
track: "data-wrangling"
type: "index"
status: "published"
series: "numpy"
---
NumPy gives Python dense, typed, multidimensional arrays. Fixed data types and contiguous storage cut memory overhead and move array operations out of slow Python loops.

Install it with pip:

`pip install numpy`

Start a Python session:

`python`

Import NumPy under its standard alias:

`import numpy as np`

Now the `np` namespace exposes NumPy's array constructors and operations.

## NumPy Learn By Topics

<nav class="toc-component" aria-label="NumPy topics">
  <ol class="toc-list">
    <li class="toc-item"><a href="./1_create_array">Array construction, stacking &amp; file input</a></li>
    <li class="toc-item"><a href="./2_index_ndarrays">Indexing, slicing &amp; strides</a></li>
    <li class="toc-item"><a href="./3_io_numpy"><code>genfromtxt</code>: typed text import</a></li>
    <li class="toc-item"><a href="./4_data_types">Numeric dtypes, scalars &amp; overflow</a></li>
    <li class="toc-item"><a href="./5_broadcasting">Broadcasting rules &amp; shape compatibility</a></li>
    <li class="toc-item"><a href="./6_byte_swapping">Endianness &amp; byte swapping</a></li>
    <li class="toc-item"><a href="./7_structured_arrays">Structured dtypes &amp; record arrays</a></li>
    <li class="toc-item"><a href="./8_custom_array_containers">Custom array dispatch protocols</a></li>
    <li class="toc-item"><a href="./9_subclassing"><code>ndarray</code> subclassing &amp; view casting</a></li>
    <li class="toc-item"><a href="./10_universal_functions">Ufuncs, reductions &amp; dtype control</a></li>
    <li class="toc-item"><a href="./11_copies_views">Views, copies &amp; shared memory</a></li>
    <li class="toc-item"><a href="./12_interoperability">Array interoperability protocols</a></li>
  </ol>
</nav>

## Ideas for Next Steps

[Data Science Libraries in Python](../library-landscape)

[Idea for first project](https://www.youtube.com/watch?v=o64FV-ez6Gw)

[Ideas for a beginner project](https://www.reddit.com/r/Python/comments/a925bi/projects_for_numpypandas_novice/)
  - Build a neural network in pure NumPy with vanilla gradient descent or SGD. Writing the backward pass by hand exposes backpropagation and update rules that TensorFlow, PyTorch, and Keras usually hide.

## A note about Pandas

Pandas builds on NumPy and reuses many of its array conventions. Its data structures feed naturally into Matplotlib plots, SciPy analyses, and scikit-learn models.
