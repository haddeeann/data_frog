---
layout: "html_wrapper.njk"
id: "pandas-anatomy"
title: "pandas Anatomy"
track: "data-wrangling"
type: "concept"
status: "drafted"
difficulty: "beginner"
order: 1
prerequisites: ["data-wrangling/numpy/1_create_array"]
---

# pandas Anatomy

NumPy gave you dense, typed, fast arrays. But look at what you actually work with: columns with names, rows that mean something, and tables that need to line up with other tables. Arrays carry none of that. pandas adds exactly that layer — labels and the machinery to keep them honest — and almost everything confusing about pandas comes from not seeing the three objects clearly: `Series`, `DataFrame`, and the `Index`.

Get these straight now and the rest of the track (grouping, joining, reshaping) is a set of consequences. Skip this and every later lesson will feel like arbitrary rules.

## The Series: values with labels

A `Series` is a one-dimensional array plus an `Index` — a label for every position:

```python
# python 3.10+, pandas 3.0
import pandas as pd

flippers = pd.Series(
    [181, 186, 195, 210, 210, 193],
    name="flipper_length_mm",
)
print(flippers)
# 0    181
# 1    186
# 2    195
# 3    210
# 4    210
# 5    193
# Name: flipper_length_mm, dtype: int64
```

The left column is the index. Here it's the default — integers 0 through 5, positional-looking. But the index can be anything:

```python
by_species = pd.Series(
    [190, 218, 195],
    index=["Adelie", "Gentoo", "Chinstrap"],
    name="mean_flipper_mm",
)
print(by_species["Gentoo"])   # 218
```

That's the whole trick. A Series is a mapping from labels to values, backed by a fast array. Selection by label is the *point*, not a convenience.

## The DataFrame: Series sharing an index

A `DataFrame` is not "a table" in the spreadsheet sense. It is a dict of Series that all share one index — one labeled row-axis, many typed columns:

```python
penguins = pd.DataFrame({
    "species": ["Adelie", "Gentoo", "Chinstrap", "Adelie"],
    "flipper_mm": [181, 210, 195, 186],
    "body_mass_g": [3750, 4500, 3800, 3700],
})
print(penguins)
#      species  flipper_mm  body_mass_g
# 0     Adelie         181         3750
# 1     Gentoo         210         4500
# 2  Chinstrap         195         3800
# 3     Adelie         186         3700
```

Each column is a Series. The row labels on all of them are the same index. When you internalize "shared index + typed columns," three things pandas does stop being mysterious:

- **Column selection** returns the Series, with its index attached.
- **Row selection** (`penguins.loc[2]`) gives you the row *by label*, as a Series indexed by column names.
- **Operations between columns** align on the row index automatically — `penguins["flipper_mm"] * 2` is elementwise on the shared axis.

## Real data, first look

Everything above scales to a real file unchanged. Load the Palmer Penguins dataset — 344 penguins measured on an Antarctic island chain, and the running example for the whole vertical slice:

**Data:** Horst, Hill & Gorman, *palmerpenguins* (2020), [10.5281/zenodo.3960218](https://doi.org/10.5281/zenodo.3960218), CC0. Loaded from the project's public CSV — the line needs network.

```python
url = "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv"
penguins = pd.read_csv(url)

print(penguins.shape)      # (344, 8)
print(penguins.columns.tolist())
# ['species', 'island', 'bill_length_mm', 'bill_depth_mm',
#  'flipper_length_mm', 'body_mass_g', 'sex', 'year']
print(penguins.dtypes)
# species               str
# island                str
# bill_length_mm       float64
# bill_depth_mm       float64
# flipper_length_mm    float64
# body_mass_g          float64
# sex                   str
# year                  int64
print(penguins.head(3))
```

Notice what `shape`, `columns`, and `dtypes` already told you before you looked at a single value: 344 rows, 8 columns, four numeric measurement columns, three text ones, a year. (Those text columns show as `str` on pandas 3; on pandas 2.x they show as `object` — same concept, older default.) The habit to build — inspect *structure* first, values second — is the cheapest bug-repellent in data work.

Column selection works the way the anatomy predicts:

```python
mass = penguins["body_mass_g"]   # a Series
print(type(mass))                # <class 'pandas.core.series.Series'>
print(mass.mean())               # 4201.754385964912

two_cols = penguins[["species", "body_mass_g"]]   # a DataFrame
print(two_cols.head(2))
#   species  body_mass_g
# 0  Adelie       3750.0
# 1  Adelie       3800.0
```

The double brackets select a *list* of columns, and a list of columns is a new DataFrame — not a Series. That single distinction explains a category of error messages you'd otherwise collect one by one.

## The index is not row numbers

The most important demo in this lesson. Watch what happens when two Series with different index orders are combined:

```python
a = pd.Series([1, 2, 3], index=["x", "y", "z"])
b = pd.Series([10, 20, 30], index=["z", "x", "y"])

print(a + b)
# x    21
# y    32
# z    13
# dtype: int64
```

Position 0 of `a` was added to position 1 of `b` — pandas aligned on **labels**, not positions. If those had been row numbers, you'd have gotten 11, 22, 33 and (usually) a wrong answer. This alignment is pandas' best feature — joins and merges are it scaled up — and its most common source of silent wrongness when the index is something you forgot you set. The full consequences arrive in later lessons; for now: **the index is data, treat it like data.**

## Failure modes

**An integer column with missing values becomes float.** Look at `dtypes` above: `body_mass_g` is `float64` even though penguin masses are whole grams. Two rows have missing mass; a missing value (`NaN`) is a float, so the whole column is. This will happen to your IDs, zip codes, and years — check `dtypes` early, not after a mysterious `0.0`.

**Selection returns views or copies, depending on details.** `penguins["body_mass_g"]` may or may not be a view onto the DataFrame's memory. Assigning through a view sometimes works and sometimes raises `SettingWithCopyWarning`. The rule until the dedicated lesson: select, then assign — `mass = penguins["body_mass_g"]` is safe to *read*; don't write through it.

**`penguins[3]` does not select row 3.** Square brackets on a DataFrame select *columns*; a bare integer there is a KeyError. Rows come later via `.loc` (by label) and `.iloc` (by position) — two methods, deliberately different, worth the entire lesson they get.

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 1.</strong> Load the penguins CSV and answer from structure alone, without printing any values: how many rows, how many numeric columns, and which column names contain "mm"?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p><code>penguins.shape</code> gives (344, 8). <code>penguins.dtypes</code> shows five numeric columns (<code>bill_length_mm</code>, <code>bill_depth_mm</code>, <code>flipper_length_mm</code>, <code>body_mass_g</code>, <code>year</code>) and three text columns (<code>str</code> on pandas 3). And <code>[c for c in penguins.columns if "mm" in c]</code> returns <code>['bill_length_mm', 'bill_depth_mm', 'flipper_length_mm']</code>. If you printed <code>head()</code> to answer this, slow down — structure-first is the habit being trained.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 2.</strong> Predict the output before running it: two Series, <code>s1</code> with index <code>["a","b","c"]</code> and values <code>[1,2,3]</code>, <code>s2</code> with index <code>["b","c","d"]</code> and values <code>[10,20,30]</code>. What is <code>s1 + s2</code>?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <pre><code># a     NaN
# b    12.0
# c    23.0
# d     NaN
# dtype: float64</code></pre>
    <p>Alignment is by label, so <code>a</code> exists only in <code>s1</code> and <code>d</code> only in <code>s2</code> — both sums are undefined, and pandas says so with <code>NaN</code> rather than guessing. Notice the dtype went to float: an integer column that can hold <code>NaN</code> must. The same mechanics, applied to whole tables, are what <code>merge</code> does with unmatched keys.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 3.</strong> The <code>year</code> column reads as integers, but a teammate insists their pipeline saw it as float. What single fact about the dataset explains both observations, and how would you confirm it in one line?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>Missing values. In the full CSV every <code>year</code> is present, so the column parses as <code>int64</code>; in whatever your teammate loaded, at least one row was missing or unparseable, <code>NaN</code> entered the column, and the whole thing became <code>float64</code>. Confirm with <code>penguins["year"].isna().sum()</code> — zero here, but the check belongs in every load step. The general rule: a column's dtype is a fact about the <em>file plus the parse</em>, not about the concept.</p>
  </details></div>

## Takeaway

pandas has three objects, not one: `Series` (values + index), `DataFrame` (columns sharing an index), and the `Index` itself — labels that align, not row numbers. Column selection yields Series, list-of-columns yields DataFrames, and arithmetic aligns on labels even when that surprises you. Inspect structure before values (`shape`, `columns`, `dtypes`), and distrust any integer column that arrives as float.
