# Data Frog Curriculum Map

**Goal:** take a mid-level software engineer and turn them into a stellar engineer and data scientist.

**How this document works.** The curriculum is organized as 12 stable tracks. Tracks are shelves: they hold lessons, and lessons are typed (concept, example, practice, project, reference). Content is filled in over time; the track structure does not move. Every lesson carries frontmatter described in [LESSON_SCHEMA.md](./LESSON_SCHEMA.md), and its `status` field (`planned → drafted → reviewed → published`) is the single source of truth for progress.

**Site convention.** Each track lives at `src/<track-slug>/`. Its `index.md` is the track landing page. The rendered dashboard at `/curriculum/` is auto-generated from lesson frontmatter, so it always reflects reality.

## Principles

1. **Vertical slice first.** Before filling all 12 tracks evenly, complete one end-to-end pathway: Python Craft → Data Wrangling → Statistics & Experimentation → one Machine Learning capstone. Roughly 60–100 lessons proves the transformation story.
2. **Tracks are stable; lessons accumulate.** Adding content never requires moving directories.
3. **Status is truth.** No lesson is "done" until its `status` is `published`, which requires meeting the definition of done for its lesson type.
4. **Every lesson connects.** Each lesson names its prerequisites. A lesson that can't say what it builds on or what it enables doesn't get written.
5. **Engineering depth is a branch, not the trunk.** OS internals, concurrency, memory layout live as advanced material, not as gatekeepers on the DS path.

## The 12 Tracks

### 01 · Algorithms & CS Fundamentals — `algorithms`

**Mission:** Build pattern-level algorithmic skill and the complexity-analysis discipline behind it.

**In scope:** pattern-organized practice (hash maps, two pointers, sliding window, recursion, trees, heaps, graphs, dynamic programming, greedy, backtracking), big-O analysis, sorting and data-structure internals (hash collisions, tree balancing), complexity proofs.

**Out of scope:** competition-math tricks, language-specific minutiae.

**Objectives — a learner can:**
- Classify an unseen problem into a known pattern and name the pattern
- Derive and defend time/space complexity, including amortized cases
- Implement core structures (hash map, heap, BST, graph) from scratch
- Reason about when a data structure's internals matter in practice

**Seeded content:** ~40 LeetCode practice problems in `python/` (currently all easy tier).

### 02 · Professional Python & Engineering Craft — `python-craft`

**Mission:** Turn "works in my notebook" Python into professional, tested, reviewable code.

**In scope:** idiomatic Python, type hints and mypy, testing (pytest, testing data code, property-based tests), debugging, profiling and performance, async, packaging and environments, notebook discipline, code review, git workflows.

**Out of scope:** Python language reference trivia; other languages.

**Objectives — a learner can:**
- Write typed, tested modules that another engineer can review without a meeting
- Profile before optimizing, and say why code is slow with evidence
- Structure a project (src layout, pyproject, CI-ready tests) from scratch
- Keep exploratory notebooks from rotting into unrunnable artifacts

### 03 · Systems & Databases — `systems-and-databases`

**Mission:** Give the data scientist credibility with engineers by understanding what code runs on.

**In scope:** SQL depth (window functions, CTEs, query plans), database internals (indexes, transactions, isolation), caching, networking basics, APIs, distributed-systems basics.

**Out of scope (advanced branch only):** OS scheduling, cache lines and false sharing, lock-free programming — tagged advanced, never a prerequisite on the DS path.

**Objectives — a learner can:**
- Read a query plan and fix a slow query
- Choose an index and explain why; reason about transactional guarantees
- Design a small API and reason about latency across a network boundary

### 04 · Math for Data Science — `math-foundations`

**Mission:** Teach the mathematics that the NumPy/pandas/scikit-learn stack silently assumes.

**In scope:** linear algebra (vectors, matrices, decompositions, geometric intuition), probability theory, calculus for ML (gradients, chain rule), optimization (convexity, gradient descent), discrete math where it pays off.

**Out of scope:** measure theory, formal proofs beyond what builds intuition.

**Objectives — a learner can:**
- Explain what matrix multiplication does geometrically, not just mechanically
- Derive gradient descent by hand for simple objectives
- Read the math in an ML paper's methods section and follow it

### 05 · Statistics & Experimentation — `statistics`

**Mission:** Turn observations into claims that survive scrutiny.

**In scope:** distributions, sampling, estimation, hypothesis testing, regression, Bayesian thinking, A/B testing and experiment design, causal inference, time series.

**Out of scope:** measure-theoretic probability (see `math-foundations`).

**Objectives — a learner can:**
- Design an experiment with power calculations before touching data
- Run and correctly interpret a hypothesis test, including its failure modes
- Distinguish correlation, causation, and confounding — and say which tools attack each

**Seeded content:** 3 intro lessons (categorical data, quantitative data, summarizing quantitative data).

### 06 · Data Wrangling & Analysis — `data-wrangling`

**Mission:** Make messy real-world data analyzable, repeatably.

**In scope:** pandas in depth, data cleaning, missing values, joins and reshaping, feature engineering, exploratory data analysis, NumPy as the substrate, the library landscape.

**Out of scope:** ML modeling (see `machine-learning`), visualization design (see `visualization`).

**Objectives — a learner can:**
- Take a raw, messy file to an analysis-ready table, reproducibly
- Choose the right pandas operation for the job and know its performance profile
- Run an EDA pass that finds the surprises before they find the model

**Seeded content:** 12-lesson NumPy series (`numpy/`), library landscape overview (`library-landscape.md`).

### 07 · Visualization & Communication — `visualization`

**Mission:** Make analysis legible to humans who aren't the analyst.

**In scope:** chart choice, grammar of graphics, matplotlib/seaborn craft, storytelling with data, explaining uncertainty, dashboards, writing for decision-makers.

**Objectives — a learner can:**
- Pick the right chart for the question, and defend the choice
- Show uncertainty without lying or confusing
- Turn an analysis into a one-page story a manager can act on

### 08 · Machine Learning Fundamentals — `machine-learning`

**Mission:** Classical ML done with the rigor of someone who understands both the math and the engineering.

**In scope:** supervised and unsupervised learning, model evaluation, cross-validation, data leakage, regularization, ensembles, imbalanced data, feature selection, scikit-learn as workbench.

**Objectives — a learner can:**
- Frame a problem as regression/classification/clustering and justify the choice
- Build an evaluation scheme that won't leak or fool itself
- Diagnose a struggling model (bias/variance, leakage, drift) systematically

### 09 · Deep Learning & Modern AI — `deep-learning`

**Mission:** Neural networks from first principles through modern practice.

**In scope:** neural nets from scratch (bridging from `math-foundations`), PyTorch, CNNs, sequence models, transformers, embeddings, fine-tuning, LLM application patterns.

**Out of scope:** framework-of-the-week churn; multi-GPU infrastructure.

**Objectives — a learner can:**
- Implement backprop by hand once, then trust the framework
- Fine-tune a pretrained model on their own data
- Build a working LLM-backed application with honest evaluation

### 10 · Data Engineering & MLOps — `data-engineering`

**Mission:** Ship data and models to production, and keep them healthy — the "stellar engineer" differentiator.

**In scope:** pipelines (Airflow/Dagster), Spark, warehouses and lakes, experiment tracking, model serving, monitoring, drift, reproducibility, data/model versioning.

**Objectives — a learner can:**
- Build a reproducible pipeline from ingestion to feature table
- Serve a model behind an API with monitoring and rollback
- Detect and respond to data drift and model degradation

### 11 · Problem Framing, Ethics & Judgment — `problem-framing`

**Mission:** The judgment layer: turning business questions into data questions, and knowing when not to use ML.

**In scope:** problem framing, metric design, tradeoff analysis, bias and fairness, privacy, responsible AI, build-vs-buy, the cost of being wrong.

**Objectives — a learner can:**
- Turn a vague stakeholder request into a testable, scoped data question
- Name the failure modes of a proposed model before it ships
- Argue for the boring solution when the boring solution wins

### 12 · Capstones, Portfolio & Interview — `projects`

**Mission:** Prove the transformation with end-to-end work, and support the career move.

**In scope:** capstone projects that combine tracks (each capstone is a project-type lesson), portfolio presentation, ML system design, algorithm and DS interview prep.

**Rule:** every capstone must touch at least three tracks and include a production concern (deployment, monitoring, or reproducible pipeline).

## Sequencing Note

The prerequisite backbone runs: `python-craft` → `data-wrangling` → `statistics` → `machine-learning` → `projects`, with `math-foundations` woven in early. The first production goal is the vertical slice through those five tracks. `algorithms` practice runs in parallel at whatever cadence the learner maintains.
