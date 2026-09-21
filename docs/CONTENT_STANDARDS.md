# Data Frog Content Standards

These standards define what "good" means for every lesson on this site. They are aimed at human and agent writers alike. The four exemplar lessons listed below are the quality bar; when this document and an exemplar disagree, fix this document.

## The Quality Bar (Exemplars)

| Track | Lesson | Type |
| --- | --- | --- |
| Python Craft | [The Python Data Model](../src/python-craft/01_python_data_model.md) | concept |
| Data Wrangling | [pandas Anatomy](../src/data-wrangling/01_pandas_anatomy.md) | concept |
| Statistics | [Reading Distributions](../src/statistics/01_distributions_reading.md) | concept |
| Machine Learning | [What ML Can and Cannot Do](../src/machine-learning/01_what_ml_can_and_cannot_do.md) | concept |

The algorithms corpus (`src/algorithms/python/`) already sets the bar for `practice`-type lessons. `example`, `project`, and `reference` exemplars arrive when those waves start.

## Voice

- **Field notes, not textbook.** Direct, concrete, engineer-to-engineer. The reader is a working software engineer; assume competence in programming, teach the rest.
- **Active voice, present tense.** "The index does the work" — not "it can be seen that the index is doing work."
- **Opinions are welcome; hedging is not.** If one approach is usually right, say so, then say when it isn't.
- **Explain tradeoffs, not trivia.** Every claim of "better" comes with better *for what*.
- **Never pad.** If a section doesn't change what the reader does, delete it.
- **First person is fine** where experience is the point ("I lost a day to this once"). Never use "we" to mean "you."

## Concept Lesson Anatomy

A concept lesson runs 1,500–2,500 words (S lessons ~1,200, M ~2,000, L ~3,000) and follows this shape:

1. **Motivation (2-4 paragraphs).** Why a mid-level engineer heading toward data science needs this. Concrete failure or payoff if possible.
2. **The core idea (the bulk).** One idea, built up in order, each step earning the next. Diagrams in words or code — never decorative.
3. **Runnable example(s).** 1-2 code blocks the reader can paste and run. Show real output as comments where the output teaches.
4. **Failure modes / what breaks.** What surprises people, what errors look like, when the simple story stops holding.
5. **Exercises.** 2-3, with collapsible solutions (see below).
6. **Takeaway (3-5 sentences max).** What to remember when the details fade.

## Other Lesson Types

- **practice:** problem statement → constraints → at least one full solution with complexity analysis → the takeaway pattern. Match the algorithms corpus.
- **example:** a real case walked through end to end; decisions explained as they're made; a "what would have broken" close.
- **project:** goal → milestones → starter code → reference implementation → self-check rubric.
- **reference:** organized for lookup, dated, every row sourced.

## Code Rules

- **Every block runs.** Run it locally before marking the lesson `drafted`. If a block can't run (pseudocode), label it `# pseudocode` on the first line.
- **Python 3.10+ stdlib plus the track's stack.** Note the library versions that matter in a comment on first import (`# pandas 3.0`).
- **Comments explain why, not what.**
- **Deterministic.** Seed all randomness (`np.random.default_rng(42)`).
- **Examples read real data from a cited public source** (see Datasets) or small synthetic data defined inline. Prefer small: readers type these.
- **Show the error.** When teaching failure modes, include the actual traceback output, trimmed to what matters.
- **No unexplained magic numbers.** Every literal earns a comment or a name.

## Exercises

- 2-3 per concept lesson; at least one must require writing code, at least one must require *thinking* (predicting output, choosing between approaches, spotting the bug).
- Prompt is always visible. Solutions collapse:

```html
<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 1.</strong> The prompt, in one or two sentences.</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>The reasoning, briefly, then the answer.</p>
  </details>
</div>
```

- **Inside exercise blocks, use HTML tags, not markdown.** The site's markdown renderer does not process markdown inside raw HTML blocks, so write `<code>`, `<em>`, and `<pre><code>...</code></pre>` directly inside exercise markup. Prose inside an exercise block should contain no markdown-formatting backticks or asterisks (a literal `*` inside actual code is fine).

- Solutions explain the reasoning, not just the answer.
- Difficulty ascends: exercise 1 is mechanical, the last one should be genuinely hard.

## Datasets and Citations

- Default dataset through the vertical slice: **Palmer Penguins** — continuity is a feature (inspect → summarize → model across tracks). Other waves should vary datasets to fit the concept.
- Only public datasets whose license permits reuse. Cite the original source and the access URL in a `**Data:**` line at first use, e.g.:

> **Data:** Palmer Station Antarctica LTER, "Size measurements of adult foraging penguins near Palmer Station, 2007-2009" — [10.6073/pasta/...](https://purl.org/pcbi/dataset/MSB:000095) (CC0).

- If the example loads from a URL, add a one-line fallback note so readers offline know the step needs network.
- Every factual claim that comes from elsewhere gets an inline link with a real URL. No unsourced statistics.

## Frontmatter and Production Workflow

Copy the lesson's frontmatter from its backlog row — `id`, `title`, `track`, `type`, `difficulty`, `prerequisites` — and set `status: "drafted"`:

```yaml
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
```

- The file goes at the backlog row's `target_path`. Never invent filenames or renumber.
- Add the lesson to its track page's lesson list (the hand-written TOC in `src/<track>/index.md`) when it is published.
- Delete the backlog row after creating the file. (The build dedupes by `id`, so a forgotten row can't double-count — but delete it anyway.)
- `status` moves forward only: drafted → reviewed → published. **Review is agentic** — a reviewer agent (not a human) runs the review checklist, re-executes the code, and flips the status. The site owner consumes the finished product and edits where imperfections surface; those edits flow back into these standards.
- Publishing happens at explicit checkpoints set by the site owner, never as a side effect of writing. Drafted and reviewed lessons render at their URLs and appear only in a track page's "In review" section, clearly marked; flipping to `published` (and merging to main) is the publish step.

### Acceptance checklist (all must pass before `drafted`)

1. Frontmatter complete and matching the backlog row's `id`
2. Every code block run locally, outputs honest
3. Exercises have collapsible solutions; solutions are correct
4. Prerequisites resolve and are written (or published) lessons
5. Dataset citations present with working URLs
6. Voice check against an exemplar
7. Backlog row deleted; `npm run validate:backlog` passes
8. `npx @11ty/eleventy` builds clean

### Review checklist (reviewer agent, before flipping to `published`)

The reviewer may be an agent; the standard is not lower for it. Re-execute every code block and compare outputs verbatim before checking anything else.

1. Technical accuracy — every claim checked; every code block re-run, outputs matching
2. Pedagogy — does the order of ideas hold up?
3. Links live, citations real, datasets licensed
4. Exercise solutions verified independently (solve, don't read)
5. Acceptance checklist items 1-7 still true
