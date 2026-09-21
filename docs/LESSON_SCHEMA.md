# Data Frog Lesson Schema

Every piece of content on the site is a markdown file in `src/`. This document defines the frontmatter contract all of them follow. It is aimed at humans and agents alike: an agent writing lessons should treat this as law, not suggestion.

## File layout

```
src/
  <track-slug>/            # one of the 12 tracks (see docs/CURRICULUM.md)
    index.md                # track landing page (type: index)
    NN_slug.md              # lesson in the track root, e.g. 04_testing_data_code.md
    <series>/               # optional sub-series (e.g. data-wrangling/numpy/)
      NN_slug.md
  videos/                   # media section, not a curriculum track
```

- New lessons are named `NN_slug.md` where `NN` is the order within its directory and `slug` is a short kebab- or snake-case topic ID. The numeric prefix orders the series; do not renumber existing files.
- A lesson's URL is its path. Slugs never change after publication.

## Frontmatter

```yaml
---
layout: "html_wrapper.njk"   # always this, for now
id: "testing-data-code"        # required for new lessons — must match the backlog row it came from
title: "Two Sum"              # required — the page title
track: "algorithms"            # required — one of the 12 track slugs
type: "practice"              # required — see lesson types
status: "published"           # required — planned | drafted | reviewed | published
difficulty: "beginner"        # concept/example/practice/project: beginner | intermediate | advanced
order: 1                      # optional — explicit sort key within the directory
prerequisites: []             # optional — see prerequisite format below
tags: []                      # optional — topical tags, kebab-case
---
```

Rules:
- `status` only ever moves forward: planned → drafted → reviewed → published. Never silently downgrade; if content fails review, fix it or remove the file.
- `id` is required on every lesson written from the backlog; it must match the backlog row's `id`. Existing pre-backlog lessons have no `id`.
- `prerequisites` use lesson ids (e.g. `broadcasting`), cross-track ids with a track prefix (`statistics/confidence-intervals`), or published lesson paths (`numpy/5_broadcasting`).
- Files without a `track` do not appear in curriculum collections. `videos/` deliberately omits it.

## The backlog (src/_data/backlog.json)

All not-yet-written lessons live in one backlog file. Each row carries:

```json
{
  "id": "testing-data-code",
  "track": "python-craft",
  "module": "testing",
  "sequence": 10,
  "target_path": "src/python-craft/10_testing_data_code.md",
  "type": "concept",
  "difficulty": "intermediate",
  "wave": 1,
  "size": "L",
  "confidence": "high",
  "prerequisites": ["pytest-fundamentals"],
  "title": "Testing Data Code",
  "scope": "Test transforms, schemas, edge cases, and failure modes without turning tests into brittle snapshots."
}
```

- **wave** is the build order: wave 1 is the first vertical slice (production-ready detail); waves 2–3 are provisional roadmap entries with lower `confidence`.
- **size** is S/M/L — for batching work, not hour estimates.
- **target_path** and **sequence** fix where the lesson lands and in what order. Do not invent new filenames or renumber.

### Moving a lesson into production

When a lesson enters production:
1. Create its file at the row's `target_path`, with frontmatter copied from the row (`id`, `track`, `type`, `difficulty`, `title`) and `status: drafted`.
2. Delete the backlog row.

Correctness does not depend on step 2: the curriculum dashboard and track pages ignore backlog rows whose `id` already exists on a written lesson, so a forgotten deletion double-counts nothing. Deleting the row is still the cleanup rule — the backlog should only contain work that hasn't started.

## Lesson types and definitions of done

| Type | What it is | Definition of done |
| --- | --- | --- |
| `concept` | Teaches one idea, end to end | Clear motivation, a worked explanation, ≥1 runnable code example, ≥2 exercises, stated prerequisites |
| `example` | A worked walkthrough of a real case | Real (or realistic) data/code, decisions explained at each step, what-would-break section |
| `practice` | A problem with solution discussion | Problem statement, constraints, ≥1 solution with complexity analysis, takeaway pattern |
| `project` | A guided end-to-end build | Goal, milestones, starter and reference implementation, self-check rubric |
| `reference` | Lookup material (cheatsheets, catalogs) | Accurate, organized, dated, source links |
| `index` | A track or series landing page | Mission, scope, objectives, links to lessons |

## Status lifecycle

- **planned** — the lesson exists as a stub or backlog entry: title, one-line scope, intended type. No body expected.
- **drafted** — a full draft exists and meets the definition of done for its type.
- **reviewed** — a reviewer (human or reviewing agent) has checked accuracy, code execution, and pedagogy against the exemplar lessons.
- **published** — live on the site. Publishing happens only at explicit checkpoints, never as a side effect of writing.

## Writing conventions

- Every code block is runnable unless it is explicitly marked pseudocode. Python is the default language.
- Voice: direct, concrete, engineer-to-engineer. Explain tradeoffs, not trivia.
- Lessons that introduce a function include its failure modes.
- Cite sources with real links when a claim comes from elsewhere.
- The first exemplar lessons in each type set the quality bar; match them.
