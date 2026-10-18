# October 2026 California improvements and study-flow verification

Review date: October 17, 2026. Scope: existing California cards and learning experience, independent India national core, monthly source review. Europe content was not re-audited in this change.

## Findings and changes

The existing live experience put large generated diagrams before the scenario. Some diagrams supplied the answer, crowded the question below the fold, or implied different numbers and road arrangements from the text. The self-rating dashboard called a single positive rating “learned.” Browser storage existed, but users lacked explicit save feedback, session resume and portable backups.

California now uses a specific question on every card and reveals explanations and citations only after recall. Generated diagrams are no longer displayed there. Seven relevant official DMV illustrations are optional on the answer side, inspected against the actual downloaded image. India uses the same question-first engine with separate data and progress. Neither section equates self-ratings with exam readiness.

All 108 California question/answer pairs were inspected for fit. Twenty-two cards received substantive wording or rule clarifications and revision 2:

- permit-02: two residency documents are framed specifically as REAL ID.
- lanes-02, 07, 08, 09, 10, 11: double-double line spacing, yielding before entering a bicycle lane, at-least-100-foot signalling, circular-red versus red-arrow conditions, plain-language gore definition, lawful merge speed.
- right-way-03, 11: left-turn path confirmation; 2026 move-over scope includes stopped passenger vehicles displaying hazards or another warning device.
- sharing-02, 07, 08: truck braking examples are not guarantees; increase motorcycle following distance in poor conditions; bicycle lane-change/clearance conditions.
- speed-parking-02, 07, 09, 11: unposted two-lane limit condition; curb meanings; usual-right-side hill parking; crosswalk approach-side daylighting and bulb-out exception.
- conditions-02, 04, 06, 11: weather speed guidelines are not guarantees; limited-visibility speed example; rear-wheel skid scenario; safe exceptions to waiting inside a disabled freeway vehicle.
- safe-driver-04, 09: clear lane-change preparation scenario; child-restraint age/size exceptions and belt fit.

Changed-rule revisions return previously confident cards for review without deleting their review history. All printed handbook references remain available. Broad July source-audit dates are not silently replaced with October dates; only newly checked special-source cards carry the new date.

## Primary evidence

- [DMV: new laws in 2026](https://www.dmv.ca.gov/portal/news-and-media/dmv-highlights-new-laws-in-2026/): AB 390 move-over expansion. The school-zone 20 mph provision described for 2031 is not applied as a 2026 rule.
- [Current DMV handbook](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/): navigation, sharing, safe-driving and other handbook conditions.
- [CHP child safety seats](https://www.chp.ca.gov/programs-services/programs/child-safety-seats): rear-facing exceptions, age/height thresholds and proper restraint use.
- [Oakland official daylighting explanation](https://www.oaklandca.gov/Public-Safety-Streets/Parking-Vehicles/Daylighting): approach-side distance, bulb-out exception and applicability without red paint.
- [Official learner permits](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/) and [sample tests](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/): permit/test context. No invented fixed test length or readiness score.

Direct Legislative Information page retrieval was unavailable during the review. Official DMV, CHP and local-government explanations supplied the cited evidence. This targeted educational review is not an exhaustive certification of California law.

## Verified journey and health

1. Entry and guide selection — clear primary practice action, visible progress, separate California/Europe/India links. Phone layout has no horizontal overflow in the tested 390 × 844 viewport. Europe navigation was checked without changing its study engine.
2. Question and reveal — explicit recall target, no answer-revealing diagram on the front, readable explanations and official-source links after reveal. Official hill-parking image loads at its native aspect ratio; all seven downloaded images were visually inspected.
3. Rating and return — Again/Almost/Got it show their next review interval; completion labels these as self-ratings. Retry difficult cards, Space reveal, numeric rating shortcuts and Escape close were exercised.
4. Persistence and recovery — real-browser reload resumes California at card 2 of 10; library preview does not replace it. Backup download and file-chooser restore succeed. India rating and session resume remain independent of California. Unit tests cover legacy migration, revision invalidation, scheduling, regional isolation, malformed data, failed storage and backup merge.
5. Discovery — BAC search yields the two relevant California cards instead of substring matches in “back.” Status filters combine with search and give an empty state when appropriate. Source, question and learning fields are validated for all 60 India cards.

Local verification: `npm run check` passes 24 tests plus syntax and legacy visual freshness checks. Browser console error check returned no errors during the tested flows. This is focused desktop/phone functional and visual QA, not a comprehensive accessibility conformance audit.

Screenshot evidence remains locally under `tmp/ca-improvement-audit/` (excluded from the published site): 01-before-home, 02-before-card, 03-after-home, 04-after-question, 05-india-answer, 06-india-mobile-home and 07-ca-mobile-answer. Final production verification is recorded in the task handoff.

## Recurring maintenance

The thread's “Monthly driving-rule review” automation is active for the first of each month at 9 a.m. Pacific. It checks official sources and effective dates, prioritizes California, preserves India national/state boundaries and Europe's jurisdiction labels, and requires tests and browser verification before publishing supported changes. Inaccessible or uncertain claims must be reported rather than guessed. The schedule lives in Codex, not in GitHub Actions.
