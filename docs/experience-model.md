# Experience data model

## What changed

The experience timeline no longer stores its visible date as a preformatted string.
Each item in `src/constants/experiences.js` now uses structured fields:

- `start: { month, year }`
- `end: { month, year } | null`
- `isCurrent: boolean`
- `company`
- `role`
- `location?`
- `description`

## Where it is used

- `src/constants/experiences.js` is the source of truth for professional history.
- `src/sections/Experience.jsx` derives the visible date range and duration from the structured fields.

## Why this change was made

The previous model duplicated presentation concerns inside the data with values like `sept. 2025 - actualidad · 5 meses`.
That made the current role stale over time and forced manual updates to durations.

The new model keeps responsibilities separated:

- data describes facts
- UI formats those facts for display

This makes future updates safer and easier when a role changes from current to finished or when time passes.
