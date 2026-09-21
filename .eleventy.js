// Data Frog — Eleventy config
// Curriculum structure: docs/CURRICULUM.md, lesson schema: docs/LESSON_SCHEMA.md

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

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/");

    // All lessons (content with a track, excluding track/series landing pages)
    eleventyConfig.addCollection("lessons", function(collectionApi) {
        return collectionApi.getAll().filter(function(item) {
            return item.data.track && item.data.type !== "index";
        });
    });

    // Curriculum dashboard data: one summary row per track
    eleventyConfig.addCollection("curriculum", function(collectionApi) {
        const lessons = collectionApi.getAll().filter(function(item) {
            return item.data.track && item.data.type !== "index";
        });
        return TRACKS.map(function(t) {
            const ls = lessons.filter(function(l) { return l.data.track === t.slug; });
            const by = {};
            ls.forEach(function(l) {
                const s = l.data.status || "planned";
                by[s] = (by[s] || 0) + 1;
            });
            return {
                num: t.num, slug: t.slug, name: t.name, tagline: t.tagline,
                total: ls.length,
                published: by.published || 0,
                reviewed: by.reviewed || 0,
                drafted: by.drafted || 0,
                planned: by.planned || 0,
            };
        });
    });

    return {
        dir: {
            input: "src",
            output: "_site",
        }
    }
};
