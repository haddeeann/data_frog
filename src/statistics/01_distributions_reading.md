---
layout: "html_wrapper.njk"
id: "distributions-reading"
title: "Reading Distributions"
track: "statistics"
type: "concept"
status: "drafted"
difficulty: "beginner"
order: 1
prerequisites: ["statistics/3_summarizing_quantitative_data"]
---

# Reading Distributions

A mean is a claim about a distribution. So is a median, a standard deviation, a percentile. Before any of those claims are worth making, you have to *see the shape* — where the mass sits, whether it's symmetric, whether there's one hump or three. The most common statistical failure in applied work isn't picking the wrong test; it's summarizing a distribution nobody looked at.

This lesson is the discipline of looking: how histograms lie less than summaries (but still lie), and what to check before you trust a summary statistic.

## The running data

**Data:** Horst, Hill & Gorman, *palmerpenguins* (2020), [10.5281/zenodo.3960218](https://doi.org/10.5281/zenodo.3960218), CC0. Loaded from the project's public CSV — the line needs network.

```python
# python 3.10+, pandas 3.0, matplotlib 3.11
import pandas as pd
import matplotlib.pyplot as plt

url = "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv"
penguins = pd.read_csv(url)
flipper = penguins["flipper_length_mm"].dropna()
```

Flipper lengths of 342 penguins, in millimeters. Before any summary:

```python
fig, ax = plt.subplots()
ax.hist(flipper, bins=20)
ax.set_xlabel("Flipper length (mm)")
ax.set_ylabel("Count")
plt.show()
```

What do you actually see? A hump around 190, a second around 215, and a valley between. Two peaks — *bimodal*. Now the summaries:

```python
print(flipper.mean())    # 200.91520467836258
print(flipper.median())  # 197.0
print(flipper.std())     # 14.061713679356886
```

The mean sits at 201 — in the valley, where almost no penguins are. The median, 197, sits in the lower hump. Both are "correct," and both describe a penguin that barely exists. No single number can: the distribution is a mixture, and the mixture is the story.

## Find the mixture

When a distribution has multiple humps, the first question is always: *is this one population, or several pooled together?* The penguins dataset has a `species` column — split by it:

```python
groups = [penguins.loc[penguins["species"] == s, "flipper_length_mm"].dropna()
          for s in ["Adelie", "Gentoo", "Chinstrap"]]

fig, ax = plt.subplots()
ax.hist(groups, bins=15, label=["Adelie", "Gentoo", "Chinstrap"])
ax.set_xlabel("Flipper length (mm)")
ax.set_ylabel("Count")
ax.legend()
plt.show()

print(penguins.groupby("species")["flipper_length_mm"].mean())
# species
# Adelie       189.953642
# Chinstrap    195.823529
# Gentoo       217.186992
```

The bimodality dissolves. Each species is roughly a single hump; Gentoo sits ~27mm above the Adelie hump, and the two lower species overlap. The "weird distribution" was never a fact about flipper length — it was a fact about *which penguins were in the file*. Pooling groups is how real datasets manufacture bimodality, skew, and outliers that don't exist.

This is the reflex to build: **see a hump, ask what was mixed.** Sex, species, site, machine, day of the week, a silent second data source appended to the first — mixtures hide in every column.

## Shape vocabulary

When you do look at a distribution, you're reading four things:

- **Center:** where the mass sits. Mean, median — and their gap is a skew signal.
- **Spread:** how far values wander. Range, standard deviation, IQR.
- **Skew:** is one tail longer? Right-skewed data (incomes, sizes, response times) drags the mean above the median; left-skewed drags it below.
- **Modality:** one hump (unimodal), two (bimodal), many, or flat. Multiple humps mean "go find the mixture" before anything else.

And the fifth, which isn't shape but hygiene: **outliers** — points far from the mass. Each one deserves a decision (investigate, keep, or exclude — with a reason), never a silent `dropna`.

## How histograms lie

A histogram is an estimate of shape, and the estimate depends on choices you make:

**Bin width changes the story.** Same data, different bins:

```python
fig, axes = plt.subplots(1, 3, figsize=(12, 3))
for ax, bins in zip(axes, [3, 20, 60]):
    ax.hist(flipper, bins=bins)
    ax.set_title(f"bins={bins}")
plt.show()
```

With 3 bins you'd miss the two-species structure entirely; with 60 the plot turns into noise. There's no single right answer — which is exactly why you look at more than one before summarizing. (KDE plots smooth over this choice and get their own lesson later.)

**Counts are not proportions.** Comparing two histograms of different sample sizes by eye compares their group sizes, not their shapes. Normalize (`density=True` or compare within groups) before saying "the shapes differ."

**The axes are part of the argument.** A histogram is a claim about shape; truncated axes and cherry-picked bins are how honest charts end up lying. When you publish one, you're choosing what it emphasizes.

## Why this comes before every test

Every method later in this track carries shape assumptions: t-tests lean on roughly-normal sampling distributions; mean-based summaries assume the center is the story; regression residuals with humps are telling you about a missing variable. The habit this lesson builds — *plot, split by suspected groups, then summarize* — is the cheapest diagnostic in statistics. It catches mixture, skew, data-entry errors, and forgotten filters before any of them reach a p-value.

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 1.</strong> For the pooled <code>flipper</code> Series, the mean (200.9) is above the median (197.0). Using the species means — Adelie 190.0, Chinstrap 195.8, Gentoo 217.2 — explain why the gap points the direction it does, without using the word "skew."</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>The median splits the <em>count</em> of penguins in half, so it lands inside the big Adelie-plus-Chinstrap hump (151 of 342 birds are Adelie alone). The mean weights every millimeter equally, and the Gentoo cluster — a whole species pulled ~27mm to the right, over a third of the data — drags it up into the valley between humps. The gap between mean and median here isn't a tale about one long tail; it's a mixture with a heavy high cluster. Same arithmetic as skew, different cause — which is exactly why you plot before you name.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 2.</strong> <code>body_mass_g</code> for these penguins has mean 4201.8 and median 4050.0. Predict what its histogram looks like pooled, and by species. Then check — were you right about the mechanism?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>Mean 52g above median suggests right-skew pooled — and by species you should predict the same mixture mechanism as flippers: a heavier Gentoo cluster (~5076g mean) to the right of Adelie (~3700g) and Chinstrap (~3730g). Checking with <code>penguins.groupby("species")["body_mass_g"].mean()</code> and overlaid histograms confirms it: each species is close to symmetric, the pooled skew comes from pooling. The transferable rule: when mean exceeds median in pooled data, "mixture" belongs on your list of suspects next to genuine skew — often above it.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 3.</strong> A teammate shows you a histogram with 5 bins proving the measurement is bimodal; you rebuild it with 20 bins and see one hump. Neither of you is lying. What do you actually do next to decide whether the bimodality is real?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>Stop adjudicating bins and go after the mechanism. Look at the sorted values for a gap between candidate modes; split by every grouping variable you have (species, sex, island, batch, collection day) and see if the humps separate; check whether the "gap" sits on a boundary that could be an artifact (censoring, a rounding step, two instruments). If some split cleanly separates the humps, the structure is real and you've found its cause. If no split moves it and the "modes" migrate with bin width, treat it as noise of the estimator — and report the shape with the uncertainty attached, not as a settled fact.</p>
  </details></div>

## Takeaway

Summaries are claims about shape; verify the shape first. Plot before summarizing, and when you see multiple humps, hunt the mixture — a grouping variable, a pooled source, a silent filter — before reaching for the vocabulary of skew. Bin width is an argument, so look at two or three before believing one. The mean-versus-median gap is a clue, not a verdict: mixtures produce it as readily as skew does.
