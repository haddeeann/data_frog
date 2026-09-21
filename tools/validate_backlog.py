#!/usr/bin/env python3
"""Validate src/_data/backlog.json for the Data Frog curriculum.

Run from the repo root:  python3 tools/validate_backlog.py
(or: npm run validate:backlog)

Checks:
- unique ids; valid track slugs, types, difficulties, sizes, waves, confidence
- target_path is unique, well-formed, and consistent with the row
- every prerequisite resolves to a backlog id, a cross-track "track/id",
  an existing published lesson path, or the id of an already-written lesson
- no written lesson already claims a backlog id (that row should be deleted)
"""
import json
import re
import sys
from pathlib import Path

TRACKS = {
    "algorithms", "python-craft", "systems-and-databases", "math-foundations",
    "statistics", "data-wrangling", "visualization", "machine-learning",
    "deep-learning", "data-engineering", "problem-framing", "projects",
}
TYPES = {"concept", "example", "practice", "project", "reference"}
DIFFICULTIES = {"beginner", "intermediate", "advanced"}
SIZES = {"S", "M", "L"}
WAVES = {1, 2, 3}
CONFIDENCE = {"high", "medium", "draft"}

def main():
    root = Path(__file__).resolve().parent.parent
    path = root / "src" / "_data" / "backlog.json"
    if not path.exists():
        sys.exit("backlog.json not found")
    data = json.loads(path.read_text())
    lessons = data.get("lessons", [])

    errors = []
    seen_ids = {}
    seen_paths = {}

    for i, l in enumerate(lessons):
        row = f"row {i} ({l.get('id', '?')})"
        for field in ("id", "track", "module", "sequence", "target_path", "type",
                      "difficulty", "wave", "size", "confidence", "title", "scope"):
            if field not in l:
                errors.append(f"{row}: missing field '{field}'")
        if errors and "missing field" in errors[-1]:
            continue
        if l["id"] in seen_ids:
            errors.append(f"{row}: duplicate id (also row {seen_ids[l['id']]})")
        seen_ids[l["id"]] = i
        if l["track"] not in TRACKS:
            errors.append(f"{row}: unknown track '{l['track']}'")
        if l["type"] not in TYPES:
            errors.append(f"{row}: unknown type '{l['type']}'")
        if l["difficulty"] not in DIFFICULTIES:
            errors.append(f"{row}: unknown difficulty '{l['difficulty']}'")
        if l["size"] not in SIZES:
            errors.append(f"{row}: unknown size '{l['size']}'")
        if l["wave"] not in WAVES:
            errors.append(f"{row}: unknown wave '{l['wave']}'")
        if l["confidence"] not in CONFIDENCE:
            errors.append(f"{row}: unknown confidence '{l['confidence']}'")
        tp = l["target_path"]
        expected = f"src/{l['track']}/{l['sequence']:02d}_{l['id'].replace('-', '_')}.md"
        if tp != expected:
            errors.append(f"{row}: target_path '{tp}' does not match expected '{expected}'")
        if tp in seen_paths:
            errors.append(f"{row}: duplicate target_path (also row {seen_paths[tp]})")
        seen_paths[tp] = i

    ids = set(seen_ids)
    qualified = {f"{l['track']}/{l['id']}" for l in lessons}
    published = set()
    written_ids = set()
    written_qualified = set()
    for p in (root / "src").rglob("*.md"):
        rel = p.relative_to(root / "src").with_suffix("")
        published.add("/".join(rel.parts))
        text = p.read_text()
        m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
        if not m:
            continue
        idm = re.search(r'^(?:id|backlog_id):\s*"?([\w-]+)"?\s*$', m.group(1), re.MULTILINE)
        if idm:
            written_ids.add(idm.group(1))
            written_qualified.add(f"{rel.parts[0]}/{idm.group(1)}")

    for l in lessons:
        for pr in l.get("prerequisites", []):
            if (pr not in ids and pr not in qualified and pr not in published
                    and pr not in written_ids and pr not in written_qualified):
                errors.append(f"row {seen_ids[l['id']]} ({l['id']}): unresolved prerequisite '{pr}'")

    # written lessons that still have a backlog row: the row should be deleted
    for p in (root / "src").rglob("*.md"):
        text = p.read_text()
        m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
        if not m:
            continue
        fm = m.group(1)
        idm = re.search(r'^(?:id|backlog_id):\s*"?([\w-]+)"?\s*$', fm, re.MULTILINE)
        if idm and idm.group(1) in ids:
            errors.append(f"{p.relative_to(root)}: lesson id '{idm.group(1)}' still has a backlog row — delete the row")

    if errors:
        print(f"backlog.json: {len(lessons)} lessons, {len(errors)} problem(s):")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    print(f"backlog.json: OK — {len(lessons)} lessons, all checks passed")

if __name__ == "__main__":
    main()
