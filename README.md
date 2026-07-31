# Road Rules Flashcards

Two independent, scenario-based driving study experiences share an interaction pattern without sharing content or progress:

- **Golden State Roadtrip** at `/` — 108 California Class C knowledge-test flashcards.
- **Continental Roadbook** at `/europe/` — 108 EU travel-baseline and country-check flashcards.

Each turns rules into road moments: picture the scene, predict the move, reveal the reason, and keep a short memory hook.

## California experience

- 108 original road-story cards across nine complete decks
- Handbook page citations on every card
- Mixed 10-card sessions and deck-specific routes
- “Revisit / Almost / Got it” self-rating with on-device progress
- Due-card review, search, topic filters, keyboard controls, dark mode, and responsive layouts
- Source audit covering the current handbook and all four official English sample tests
- Automated content checks and GitHub Pages deployment

## Europe experience

- 108 original road-story cards across nine independent decks
- Visible `EU baseline` and `Country check` scopes rather than a fictional Europe-wide road code
- Official EU/EUR-Lex source link, jurisdiction and verification date on every card
- A separate data module, application, theme/progress keys, page path and validation suite
- A country-pack interface designed for independently sourced future additions
- [Europe source audit](research/europe-official-source-audit.md) and [extension guide](europe/README.md)

## California source and accuracy

The curriculum is based on the California DMV’s **DL 600, California Driver’s Handbook, Rev. 6/2025**, and was checked against the current official handbook and Class C sample-test pages on July 31, 2026.

- [Current California Driver’s Handbook](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/)
- [Official sample knowledge tests](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/)
- [Detailed source audit](research/dmv-source-audit.md)

The handbook attribution is: “California Driver’s Handbook, California Department of Motor Vehicles, licensed under CC BY-NC 4.0.” This independent, noncommercial study aid is not affiliated with or endorsed by the DMV. See [CONTENT_LICENSE.md](CONTENT_LICENSE.md).

## Run locally

The site has no runtime dependencies. Serve the repository directory with any static server, for example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

Run the validation suite with:

```powershell
npm test
```

## Content model

California deck metadata and flashcards live in `cards.js`. Europe content lives only in `europe/cards.js` and exports a separate `EUROPE_DRIVING` module. Europe cards add scope, jurisdiction, official source and verification metadata; see `europe/README.md` before adding a country pack.

## Deployment

Pushes to `main` run the content checks and deploy the static site through GitHub Actions. In the repository’s Pages settings, use **GitHub Actions** as the source.

The interface code is MIT licensed. Study content and adaptations are covered separately in [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
