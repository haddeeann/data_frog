---
layout: "html_wrapper.njk"
id: "what-ml-can-and-cannot"
title: "What ML Can and Cannot Do"
track: "machine-learning"
type: "concept"
status: "drafted"
difficulty: "beginner"
order: 1
prerequisites: []
---

# What ML Can and Cannot Do

The most expensive failure in applied machine learning is not a badly tuned model. It's a well-tuned model solving a problem that didn't need one, or a "prediction" answering a question nobody asked. Before this track teaches you *how*, this lesson teaches the filter you'll run every request through for the rest of your career — because the projects that fail usually fail here, before the first line of modeling code.

## What ML actually is

Strip the mystique: machine learning is fitting parameters to data so that a program's behavior improves with examples, instead of improving with your edits. A spam filter where you write the rules is software. A spam filter where 100,000 labeled emails set the rules is ML. That's the whole difference, and it carries the whole trade:

- You stop specifying the logic and start **supplying examples that imply it.**
- The program gets better as data accumulates — and only as data accumulates.
- Its behavior becomes **statistical**: mostly right, with error rates you can measure but not individual decisions you can always explain.

That trade is excellent when the logic is genuinely beyond writing — what makes an email spammy is a tangle of signals no one would hand-code — and terrible when the logic is three rules long. So the first question for any proposed ML project is not "which model?" It's: **how would you solve this without ML?**

## The ladder: rules, heuristics, models

Every prediction problem has a ladder, and you climb it only as far as the problem demands.

1. **A fixed rule.** "Flag orders over $500 for review." Free, instant, auditable, debuggable.
2. **A data-driven heuristic.** "Flag orders over the user's 90th percentile." One GROUP BY; still auditable; now it adapts to each customer.
3. **Simple ML.** Logistic regression on a handful of well-chosen features. Trainable in seconds, interpretable enough to argue about.
4. **Complex ML.** Gradient boosting, neural nets — big capacity, real cost in infrastructure and interpretability.

Teams lose months by starting at rung 4 for problems that live on rung 2. The discipline of starting one rung too low is what makes senior data scientists look psychic: their baseline works, ships, and measures what the expensive version would have had to beat. Google's own engineering guide to ML opens with ["Don't be afraid to launch a product without machine learning"](https://developers.google.com/machine-learning/guides/rules-of-ml) — the instinct isn't just defensible, it's the official recommendation.

## A runnable demonstration of the ladder

Predict penguin species from flipper length — Gentoo or not, using real measurements. **Data:** Horst, Hill & Gorman, *palmerpenguins* (2020), [10.5281/zenodo.3960218](https://doi.org/10.5281/zenodo.3960218), CC0. Loaded from the project's public CSV — the line needs network.

```python
# python 3.10+, pandas 3.0, numpy 2.5
import numpy as np
import pandas as pd

url = "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv"
df = pd.read_csv(url).dropna(subset=["flipper_length_mm", "species"])

y = (df["species"] == "Gentoo").astype(int).to_numpy()   # 1 = Gentoo
x = df["flipper_length_mm"].to_numpy()
```

**Rung 0: the majority-class baseline.** Guess the most common answer, always:

```python
acc_majority = max(y.mean(), 1 - y.mean())
print(acc_majority)   # 0.6403508771929824
```

If you can't beat 64% — the non-Gentoo share of this file — your model is worth nothing. This number, unglamorous as it is, is the first thing to compute on every classification problem, forever.

**Rung 1: one threshold.** Gentoo flippers are longer; pick the split that minimizes errors:

```python
thresholds = np.arange(170, 231)
errors = [np.sum((x > t).astype(int) != y) for t in thresholds]
best_t = thresholds[np.argmin(errors)]
acc_threshold = 1 - min(errors) / len(y)
print(best_t, acc_threshold)   # 206 0.9766081871345029
```

One `if` statement: *97.7% accuracy.* Nearly the entire "penguin species problem" is a comparison operator.

**Rung 3: a learned model.** A tiny logistic regression, by hand — standardized feature, gradient descent, no library:

```python
xs = (x - x.mean()) / x.std()          # standardize: gradient descent needs this
w, b = 0.0, 0.0
for _ in range(2000):
    p = 1 / (1 + np.exp(-(w * xs + b)))           # predicted P(Gentoo)
    w += 0.01 * np.mean((y - p) * xs)              # gradient step on w
    b += 0.01 * np.mean(y - p)                     # ... and b

acc_model = np.mean(((w * xs + b) > 0).astype(int) == y)
print(acc_model)   # 0.9736842105263158
```

97.4% — a hair *below* the single threshold. On one cleanly-separated feature, the learned model buys you nothing over the comparison operator — except probability scores instead of hard labels, which matters for some problems and not others. Now you know that, because you measured it, in fifteen lines.

That is the entire point of this lesson as a practice: **build the cheap rung first, make the expensive rung earn its complexity.** Later in the track, when the feature is 40 columns of messy telemetry, rung 3 is where the value will actually be — and you'll know that too, because the baselines were there to compare.

## When ML is the right tool

Climb past heuristics when the logic is genuinely unwritable:

- **High-dimensional structure:** hundreds of weak signals whose combination carries the signal (text, telemetry, images, behavior).
- **Drifting targets:** spam evolves, prices move, sensors age — a fixed rule decays; a retrained model tracks.
- **Per-person or per-item granularity:** one threshold for everyone is crude; millions of personalized ones is ML's home turf.

And stay off the ladder when the requirement is *explanation per decision* (some regulated decisions need reasons, not probabilities), when data is scarce (a heuristic plus judgment beats an overfit model), or when the decision is causal and your data is observational — a model that predicts "users who churned clicked the cancel button" is not telling you what an intervention would do. Causation gets its own track later; for now, treat any "predictor" language in a causal question as a red flag.

## The failure modes that cost real money

**Goodhart's law.** The moment a measure becomes the target, it stops measuring. Optimize the model for engagement minutes and you will get them — by any means the model finds.

**Leakage.** If anything in your features knows the answer "from the future" (the field was updated after the event), you'll see beautiful accuracy in training and zero in production. It's the single most common way projects report success and ship failure.

**Asymmetric costs.** A model that's 95% accurate is fine when both errors cost the same. When one error is a wasted coupon and the other is a fraud loss, accuracy is the wrong metric — and no amount of modeling fixes a cost structure you haven't told the model about.

**Feedback loops.** The model changes what users see; users react; the training data is now shaped by the model itself. Recommendation systems eat their own tails unless someone is watching for it.

Each of these gets a full lesson later in this track or in Problem Framing. The job here is recognition: they all *look like modeling problems in progress*, and none of them are.

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 1.</strong> A support team wants to predict which tickets will be escalated, "so we can prioritize." What are the first two questions you'd ask before touching a model?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>First: <em>what happens with the prediction?</em> If the action is "look at these tickets first," how many can the team actually act on per day — because that sets the operating point (precision at top-k), not "accuracy." Second: <em>what's the cheap version?</em> Tickets from certain plans, keywords, or repeat escalators may already separate most escalations — a rule or a GROUP BY, shippable this week, that becomes the baseline any model must beat. Both questions are upstream of modeling, and skipping them is how "prediction projects" spend a quarter producing what a filter already did.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 2.</strong> In the penguin example, the hand-rolled logistic regression (97.4%) finished just under the single threshold (97.7%). Give a concrete change to the problem where the learned model would pull meaningfully ahead, and one where it still wouldn't.</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>Ahead: add features the threshold can't see — bill depth, body mass, island. Separation in 3D that no single flipper cutoff captures is exactly what a linear model with multiple weights buys you (and a tree would buy more). Still wouldn't help: if the features stay what they are, and the signal really is one clean cut on one variable. Capacity only pays when the structure needs it — which is why you check the cheap rung first instead of assuming.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 3.</strong> You're told a fraud model is "99% accurate." Write down the three facts you need before that number means anything at all.</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>Base rate (fraud is maybe 1% of transactions — so "never fraud" also scores 99%: the majority baseline). Error costs (a missed fraud versus a blocked customer are not the same dollars). And how accuracy was measured — on held-out future data, or on data the model saw, with any feature that leaks the label (a "flagged_fraud" column updated post-hoc) quietly inflating the score. Without all three, 99% is a noise, not a result.</p>
  </details></div>

## Takeaway

ML trades hand-written logic for data-implied logic; use it when the logic is unwritable, not when it's merely inconvenient. Always build the cheap rung — majority baseline, one rule, one heuristic — and make anything heavier beat it on a measured number. Compute the majority-class accuracy before anything else on every classification problem. And learn the four expensive failures by sight: Goodhart, leakage, asymmetric costs, feedback loops — they all masquerade as modeling problems.
