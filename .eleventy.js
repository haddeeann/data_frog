// Data Frog — Eleventy config
// Curriculum structure: docs/CURRICULUM.md, lesson schema: docs/LESSON_SCHEMA.md
// Backlog: src/_data/backlog.json (planned lessons not yet written)

const fs = require("fs");
const path = require("path");

const TRACKS = [
  { num: "01", slug: "algorithms", name: "Algorithms & CS Fundamentals",
    tagline: "Patterns, complexity analysis, and the discipline behind clean solutions." },
  { num: "02", slug: "python-craft", name: "Python Craft",
    tagline: "Typed, tested, reviewable Python — beyond the notebook." },
  { num: "03", slug: "systems-and-databases", name: "Systems & Databases",
    tagline: "SQL depth, indexes, caching — what code actually runs on." },
  { num: "04", slug: "math-foundations", name: "Math Foundations",
    tagline: "The math the NumPy and scikit-learn stack silently assumes." },
  { num: "05", slug: "statistics", name: "Statistics & Experimentation",
    tagline: "Turning observations into claims that survive scrutiny." },
  { num: "06", slug: "data-wrangling", name: "Data Wrangling & Analysis",
    tagline: "Messy data in, analysis-ready tables out — repeatably." },
  { num: "07", slug: "visualization", name: "Visualization & Communication",
    tagline: "Analysis that humans who aren't the analyst can read." },
  { num: "08", slug: "machine-learning", name: "Machine Learning Fundamentals",
    tagline: "Classical ML with rigor on both the math and the engineering." },
  { num: "09", slug: "deep-learning", name: "Deep Learning & Modern AI",
    tagline: "Neural nets from first principles through LLM applications." },
  { num: "10", slug: "data-engineering", name: "Data Engineering & MLOps",
    tagline: "Shipping data and models to production, and keeping them healthy." },
  { num: "11", slug: "problem-framing", name: "Problem Framing & Judgment",
    tagline: "Business questions into data questions — and when not to use ML." },
  { num: "12", slug: "projects", name: "Capstones & Portfolio",
    tagline: "End-to-end projects that prove the transformation." },
];

function loadBacklog() {
    const p = path.join(__dirname, "src", "_data", "backlog.json");
    if (!fs.existsSync(p)) return [];
    return JSON.parse(fs.readFileSync(p, "utf8")).lessons || [];
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/");

    // All lessons (content with a track, excluding track/series landing pages)
    eleventyConfig.addCollection("lessons", function(collectionApi) {
        return collectionApi.getAll().filter(function(item) {
            return item.data.track && item.data.type !== "index";
        });
    });

    // Curriculum dashboard: one summary row per track, published + planned.
    // A backlog entry whose id already exists on a written lesson file is
    // treated as written (deleted rows are cleanup, not correctness).
    eleventyConfig.addCollection("curriculum", function(collectionApi) {
        const lessons = collectionApi.getAll().filter(function(item) {
            return item.data.track && item.data.type !== "index";
        });
        const writtenIds = new Set();
        lessons.forEach(function(l) {
            if (l.data.id) writtenIds.add(l.data.id);
            if (l.data.backlog_id) writtenIds.add(l.data.backlog_id);
        });
        const backlog = loadBacklog().filter(function(b) { return !writtenIds.has(b.id); });

        return TRACKS.map(function(t) {
            const ls = lessons.filter(function(l) { return l.data.track === t.slug; });
            const by = {};
            ls.forEach(function(l) {
                const s = l.data.status || "planned";
                by[s] = (by[s] || 0) + 1;
            });
            const planned = backlog.filter(function(b) { return b.track === t.slug; });
            const parts = [];
            if (by.published) parts.push(by.published + " published");
            if (by.reviewed) parts.push(by.reviewed + " reviewed");
            if (by.drafted) parts.push(by.drafted + " drafted");
            if (planned.length) parts.push(planned.length + " planned");
            return {
                num: t.num, slug: t.slug, name: t.name, tagline: t.tagline,
                total: ls.length,
                countsLabel: parts.join(" \u00b7 ") || "scaffolded \u2014 coming soon",
            };
        });
    });

    // Planned lessons per track for track landing pages, grouped by wave
    // then module. Deduped against written lesson ids the same way.
    eleventyConfig.addCollection("plannedByTrack", function(collectionApi) {
        const writtenIds = new Set();
        collectionApi.getAll().forEach(function(item) {
            if (item.data.track && item.data.type !== "index") {
                if (item.data.id) writtenIds.add(item.data.id);
                if (item.data.backlog_id) writtenIds.add(item.data.backlog_id);
            }
        });
        const backlog = loadBacklog().filter(function(b) { return !writtenIds.has(b.id); });

        const out = {};
        TRACKS.forEach(function(t) { out[t.slug] = []; });
        backlog.forEach(function(b) {
            if (!out[b.track]) return;
            let wave = out[b.track].find(function(w) { return w.wave === b.wave; });
            if (!wave) {
                wave = { wave: b.wave, total: 0, modules: [] };
                out[b.track].push(wave);
            }
            wave.total += 1;
            let mod = wave.modules.find(function(m) { return m.module === b.module; });
            if (!mod) {
                mod = { module: b.module, lessons: [] };
                wave.modules.push(mod);
            }
            mod.lessons.push(b);
        });
        Object.values(out).forEach(function(waves) {
            waves.sort(function(a, b) { return a.wave - b.wave; });
        });
        return out;
    });

    // Drafted/reviewed lessons per track, for the "in review" queue on track
    // pages. Published lessons are linked by the track's hand-written TOC;
    // drafts render at their URL but only surface here, marked as drafts —
    // flipping status to published (and merging) is the publish step.
    eleventyConfig.addCollection("inReviewByTrack", function(collectionApi) {
        const out = {};
        TRACKS.forEach(function(t) { out[t.slug] = []; });
        collectionApi.getAll().forEach(function(item) {
            if (!item.data.track || item.data.type === "index") return;
            const s = item.data.status;
            if (s !== "drafted" && s !== "reviewed") return;
            if (!out[item.data.track]) return;
            out[item.data.track].push({
                url: item.url,
                title: item.data.title,
                type: item.data.type,
                status: s,
            });
        });
        Object.values(out).forEach(function(ls) {
            ls.sort(function(a, b) { return (a.url < b.url ? -1 : a.url > b.url ? 1 : 0); });
        });
        return out;
    });

    return {
        dir: {
            input: "src",
            output: "_site",
        }
    }
};
