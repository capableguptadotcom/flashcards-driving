# Continental Roadbook

This directory is a self-contained Europe driving experience. It deliberately does not import California card data, application logic, progress, or theme state.

Its 108 visual specifications are stored in `visuals.js`, and its generated SVGs remain under `assets/card-visuals/`. The shared build script validates and renders them without merging either curriculum at runtime.

## Curriculum boundary

`cards.js` exports one `window.EUROPE_DRIVING` module. The current module is an EU travel baseline, not a fictional Europe-wide road code:

- `common` cards cover verified EU rules or shared official safety guidance.
- `country-check` cards teach the facts a driver must re-check at a border.
- Every card carries `jurisdiction`, `sourceUrl`, and `verifiedAt` metadata.

The 2016/2018 travel handbook supplied by the project owner informed topic coverage only. Current card claims come from the official sources recorded in `../research/europe-official-source-audit.md`.

## Adding a country

Create a separate country module rather than inserting national legal values into `europe-core`:

1. Put the country data under `countries/<iso-code>/cards.js` and give it a unique curriculum ID.
2. Keep the same deck order so travellers can compare packs without merging their facts.
3. Source every rule from the current national road authority or highway code.
4. Include the country jurisdiction and verification/effective dates on every law-dependent card.
5. Give the country page its own storage key derived from the curriculum ID.
6. Add regression tests for volatile values such as speed, alcohol, equipment, winter and access rules.

When a source expires or a rule cannot be re-verified, hide or clearly mark that card instead of serving it as current law.
