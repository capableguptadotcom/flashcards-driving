# Golden State Roadtrip

An interactive, scenario-based study guide for the California Class C knowledge test. Instead of drilling isolated questions, 108 flashcards turn handbook rules into road moments: picture the scene, predict the move, reveal the reason, and keep a short memory hook.

## What is included

- 108 original road-story cards across nine complete decks
- Handbook page citations on every card
- Mixed 10-card sessions and deck-specific routes
- “Revisit / Almost / Got it” self-rating with on-device progress
- Due-card review, search, topic filters, keyboard controls, dark mode, and responsive layouts
- Source audit covering the current handbook and all four official English sample tests
- Automated content checks and GitHub Pages deployment

## Source and accuracy

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

Deck metadata and flashcards live in `cards.js`. Each card includes a stable ID, deck, scene, answer, reason, memory hook, printed handbook page, and search tags. When rules change, update the affected card and add or adjust a regression assertion in `test/content.test.js` for high-volatility facts.

## Deployment

Pushes to `main` run the content checks and deploy the static site through GitHub Actions. In the repository’s Pages settings, use **GitHub Actions** as the source.

The interface code is MIT licensed. Study content and adaptations are covered separately in [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
