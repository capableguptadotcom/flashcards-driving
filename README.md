# Road Rules Flashcards

Three independent, scenario-based driving study experiences keep their content and browser progress separate:

- **Golden State Roadtrip** at `/` — 108 California Class C knowledge-test flashcards.
- **Continental Roadbook** at `/europe/` — 108 EU travel-baseline and country-check flashcards.
- **India Roadbook** at `/india/` — 60 national-core cards, with explicit State/RTO checks where local procedures differ.

Each turns rules into road moments: picture the scene, predict the move, reveal the reason, and keep a short memory hook.

California and India put the situation and a specific recall question first. Answers reveal the rule, reason, memory hook and official citation. California offers seven relevant official DMV illustrations after the answer, instead of showing generated diagrams that could imply the wrong rule. Europe retains its existing diagram-based experience.

## California experience

- 108 original road-story cards across nine complete decks
- Handbook page citations on every card
- Mixed 10-card sessions and deck-specific routes
- “Again / Almost / Got it” self-rating with spaced review (now, tomorrow, or 3/7/21 days after consecutive successful recalls)
- Resume an unfinished session, download a backup, and restore it without overwriting newer reviews
- Due-card review, search, topic filters, keyboard controls, dark mode, and responsive layouts
- Source audit covering the current handbook and all four official English sample tests
- Automated content checks and GitHub Pages deployment

Progress uses localStorage rather than SQLite: this static GitHub Pages site needs no database server or account. It stays in the current browser/device, can be cleared by browser settings, and does not sync automatically. Backups transfer progress between browsers. Older California progress migrates automatically; revised rules return for review while keeping review history. Confident self-ratings are not a predicted test score.

## India national core

Six ten-card decks cover licensing, signals, lane discipline, sharing the road, safe driving and changing conditions. Every answer cites an official source and labels its jurisdiction. National coverage does not mean an exhaustive question bank for every state's learner test: choose your state on Sarathi for current exam procedures, appointments and passing criteria.

See the [official-source audit and card ledger](research/india-official-source-audit.md), including amendment checks and source-access limitations. California and India share the study engine, but not storage or backup identities; Europe remains independent.

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
- [October 2026 corrections and usability verification](research/october-2026-improvements.md)

The October review adds the 2026 move-over expansion and clarifies 22 cards, including child restraints, crosswalk daylighting, bicycle clearance and scenario-specific conditions. The remaining handbook page references retain their original source-audit date; a recent targeted review is not a claim that every statute was re-certified.

The handbook attribution is: “California Driver’s Handbook, California Department of Motor Vehicles, licensed under CC BY-NC 4.0.” This independent, noncommercial study aid is not affiliated with or endorsed by the DMV. See [CONTENT_LICENSE.md](CONTENT_LICENSE.md).

## Run locally

The site has no runtime dependencies. Serve the repository directory with any static server, for example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

Run the validation suite with:

```powershell
npm run check
```

Legacy visual specifications live beside the California and Europe curricula in `visuals.js`. After changing those specifications, regenerate SVG assets with `npm run generate:visuals`; `npm run check` verifies their coverage and freshness. California no longer displays those generated visuals. Official replacement-image provenance is in [assets/dmv/README.md](assets/dmv/README.md).

## Content model

California deck metadata and flashcards live in `cards.js`; India content lives in `india/cards.js`. Increment a card's `revision` when changing a learned rule so stored confidence cannot silently carry over to changed content. `progress.js` owns persistence, migration and scheduling. Europe content, application and artwork live only under `europe/`; see `europe/README.md` before adding a country pack.

## Monthly maintenance

A Codex thread automation reviews official sources on the first day of each month at 9 a.m. Pacific. It checks effective dates and jurisdiction, records evidence, revises or removes supported claims, and verifies tests and browser flows before publishing. It reports unavailable or uncertain evidence instead of inventing a change. The automation runs through Codex, not a GitHub scheduled workflow. No-change checks must not imply that old content has been newly verified.

## Deployment

Pushes to `main` run the content checks and deploy the static site through GitHub Actions. In the repository’s Pages settings, use **GitHub Actions** as the source.

The interface code is MIT licensed. Study content and adaptations are covered separately in [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
