---
name: Format-weighted course rollup
description: How the overall coursework percent must honor configurable per-format point values.
---

The course aggregate (`/reasoning/grades`) is NOT a plain mean of assignment bestScores. It must apply the per-format point weights from `course_settings` (`formatWeightMcq/hybrid/written`): each section's bestScore is weighted by the answer format the student chose at start (stored on the attempt's `format`), so e.g. a written attempt can count for more than an mcq attempt.

**Why:** the product spec ("configurable format point values") makes format choice a graded dimension; a flat mean silently ignores the settings the operator tuned, and a code review rejected the simple-mean version as a blocking gap.

**How to apply:** weighted average = Σ(bestScore·w)/Σ(w). For sections with no submitted attempt (no chosen format), use the neutral mean of the three configured weights so skipping a section can't raise the average. Loading the settings without using them in the aggregation is the failure mode to avoid.
