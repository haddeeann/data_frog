---
layout: "html_wrapper.njk"
title: "Summarizing Quantitative Data"
track: "statistics"
type: "concept"
status: "published"
difficulty: "beginner"
order: 3
---

## Mean (Average)

- **Calculation**: Sum the values, then divide by the number of values.
- **Formula**: Mean = (Sum of all values) / (Number of values)
- **Usage**: The mean works well for symmetric data without extreme outliers.

## Median

- **Calculation**: Sort the data and take the middle value. For an even count, average the two middle values.
- **Usage**: Prefer the median for skewed data or data with outliers because extreme values do not pull it toward a tail.

## Mode

- **Calculation**: The mode is the most frequent value.
- **Usage**: Use it for categorical data or whenever the most common value matters.

## Comparing Means of Distributions

- Never compare means alone. Check each distribution's shape, spread, and outliers.

### Impact of Outliers

- **Removing an outlier:** A sufficiently extreme value can move the mean substantially when removed.
- **Increasing an outlier:** Moving an outlier farther from the data pulls the mean with it.

## Mean as the Balance Point

- The mean acts as the distribution's balance point. In a symmetric distribution, values balance evenly around it.

Choose mean, median, or mode from the distribution in front of you, not from habit.

## Interquartile Range (IQR)

- **Calculation**: Subtract the 25th percentile (Q1) from the 75th percentile (Q3).
- **Formula**: IQR = Q3 - Q1
- **Use case**: IQR measures the middle 50% and supports common outlier rules.

## Range

- **Calculation**: Subtract the minimum from the maximum.
- **Formula**: Range = Maximum value - Minimum value
- **Use case**: The range is quick but extremely sensitive to outliers.

## Variance

- **Population variance**: The average squared distance from the mean.
- **Formula for Population Variance (\(\sigma^2\))**: \(\sigma^2 = \frac{\sum (X - \mu)^2}{N}\) where \(X\) is each value, \(\mu\) is the mean, and \(N\) is the number of values.
- **Sample variance**: Divide by \(N-1\), not \(N\), to estimate population variance from a sample.
- **Use case**: Variance quantifies squared distance from the mean.

## Standard Deviation

- **Calculation**: Take the square root of the variance.
- **Formula for Population Standard Deviation (\(\sigma\))**: \(\sigma = \sqrt{\sigma^2}\)
- **Formula for Sample Standard Deviation (s)**: \(s = \sqrt{\frac{\sum (X - \bar{X})^2}{N-1}}\)
- **Use case**: Standard deviation measures spread around the mean in the data's original units.

## Calculating Standard Deviation Step by Step

1. **Find the Mean**: Sum all the data points and divide by the number of points.
2. **Calculate Each Point's Deviation from the Mean**: Subtract the mean from each data point.
3. **Square Each Deviation**: Square each result from step 2.
4. **Sum the Squared Deviations**: Add up all the squared deviations.
5. **Divide by \(N-1\) for a Sample, or \(N\) for a Population**: This gives the variance.
6. **Take the Square Root of the Variance**: This gives the standard deviation.

## Understanding the Concepts

- **Population variance:** Measures squared spread around the population mean.
- **Population standard deviation:** Measures that spread in the data's original units.
- **Interpretation:** Variance uses squared units; standard deviation converts the result back to the original units.

Pick the measure that matches the analysis and the units you need to interpret.

## Dividing by \( n - 1 \) in Variance Calculation

Sample variance uses \( n - 1 \), rather than \( n \), in the denominator. This is Bessel's correction.

- **Reason for \( n - 1 \):** Estimating variance around the sample mean with \( n \) systematically underestimates population variance. Dividing by \( n - 1 \) removes that bias.
- **Concept:** Estimating the mean from the same sample imposes one constraint on the deviations: they must sum to zero.
- **Degrees of freedom:** Once the first \( n - 1 \) deviations are fixed, the final deviation is determined. Only \( n - 1 \) values remain free to vary.

## Box and Whisker Plots

Box-and-whisker plots visualize a distribution's five-number summary: minimum, first quartile (Q1), median, third quartile (Q3), and maximum.

- **Components of a Box Plot**:
    1. **Box**: The box spans from Q1 to Q3, representing the interquartile range (IQR).
    2. **Median**: A line across the box indicates the median of the dataset.
    3. **Whiskers**: Lines extending from the box (whiskers) typically extend to the minimum and maximum values within 1.5 * IQR from the Q1 and Q3. Values beyond this are plotted as outliers.
    4. **Outliers**: Points beyond the whiskers are considered outliers and are plotted individually.

- **Interpreting a Box Plot**:
    - Box length shows the spread of the middle 50%.
    - The median's position within the box can suggest asymmetry, but it does not establish skew by itself.
    - Points beyond the whiskers flag potential outliers for inspection.

- **Use case:** Box plots compare center and spread across groups without drawing every observation.

Use box plots for a compact comparison, then inspect the underlying distribution before drawing conclusions.

