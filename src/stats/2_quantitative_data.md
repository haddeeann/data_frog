---
layout: "html_wrapper.njk"
---

## Frequency Tables and Plots

Frequency tables count how often each value occurs. They are the quickest useful summary of discrete quantitative data.

- **Frequency plot:** Graph the count for each value or interval to expose patterns and trends.

## Histograms

A histogram groups numerical observations into bins and shows the frequency in each bin. Unlike a categorical bar chart, adjacent bins represent continuous intervals.

- **How to Interpret a Histogram**:
    - **Bin width:** Each bin covers a value range; changing the width can change the apparent pattern.
    - **Bin height:** Height encodes the frequency within that range.
    - **Shape:** The silhouette can reveal symmetric, skewed, or bimodal structure.
    - **Outliers:** Isolated observations may signal outliers, though a histogram can hide exact values.

## Stem and Leaf Plots

Stem-and-leaf plots preserve individual values while exposing the distribution. Split each observation into a stem, usually its leading digits, and a leaf, usually its final digit.

- **How to Read a Stem and Leaf Plot**:
    - **Stem:** The left side holds the higher-order digits.
    - **Leaf:** The right side holds the lower-order digits.
    - **Reading:** Combine a stem and leaf to recover an observation.
    - **Arrangement:** Sort leaves within each stem to expose the distribution, median, and mode.

Each view emphasizes a different part of the data: exact values, shape, center, or spread.

## Understanding Distributions in Data

Read a distribution by its shape and its departures from that shape.

## Common Shapes of Distributions

- **Normal distribution:** A symmetric, bell-shaped distribution with one central peak.
- **Skewed distribution:** One tail extends farther than the other. The longer tail names the direction of skew.
- **Uniform distribution:** Values occur at roughly equal frequencies, producing a flat shape.
- **Bimodal distribution:** Two peaks may indicate two underlying groups.

## Clusters, Peaks, Gaps, and Outliers

- **Clusters:** Concentrations of nearby values.
- **Peaks:** High-frequency regions, or modes.
- **Gaps:** Regions with few or no observations.
- **Outliers:** Values far from the main body; they may be genuine variation or collection errors.

## Dot Plots

- Dot plots show every observation and suit small datasets.
- **Comparing dot plots:** Compare center, spread, range, clusters, gaps, and outliers.

## Histograms

- Histograms scale to larger datasets by grouping values into bins.
- **Comparing histograms:** Compare shape, center, spread, skew, and the number of peaks.

## Box Plots

- Box plots summarize quartiles, median, and potential outliers.
- **Comparing box plots:** Compare median, range, interquartile range, and outliers across groups.

No single plot tells the whole story. Choose the one that exposes the feature under inspection.

## Line Graphs: Uses and Potential Misleading Nature

Line graphs show change across an ordered axis, usually time. Their apparent story depends heavily on scale and selection.

### Common Uses of Line Graphs

1. **Trend Analysis**: Line graphs are excellent for showing changes and trends over time.
2. **Comparing Multiple Series**: They allow for the comparison of multiple data series within the same graph, making it easy to compare trends between different groups or categories.
3. **Highlighting Continuity**: Line graphs emphasize the continuity of the data, particularly useful in cases where the data is collected over regular intervals.

### How Line Graphs Can Be Misleading

1. **Manipulating Axis Scale**: If the scale of the y-axis is manipulated (either compressed or expanded), it can exaggerate or downplay trends.
2. **Cherry-Picking Data Points**: Selecting specific data ranges while omitting others can lead to misleading conclusions.
3. **Not Starting the Y-Axis from Zero**: Starting the y-axis from a value other than zero can dramatically alter the appearance of the graph, making changes seem more significant than they are.
4. **Using Too Many Data Points**: Overloading a line graph with too many data points or lines can make it cluttered and difficult to interpret.
5. **Ignoring Confounding Variables**: Not accounting for external factors that might affect the data can lead to incorrect interpretations of trends.

Use honest scales, show the relevant range, and state what the graph omits.



