# Monthly driving-rule review — November 1, 2026

Live site: https://capableguptadotcom.github.io/flashcards-driving/

Baseline: commit `5f05091`, October 17 review. This is a targeted change-detection review, not a certification of every statute or every country's rules. California takes priority; India remains national-core with State/RTO checks; Europe retains its existing EU-baseline/country-check scope.

## Decision

No current flashcard rule change is supported by the evidence examined in this run. Do not change review timestamps on all cards, invalidate learner confidence, or add new exam thresholds merely because a monthly check ran. No cards, memory hooks, pictures, application code, progress keys or backup identities were changed. The future-law and draft items below need follow-up before any corresponding card update.

India and Europe findings, actual retrieval results and limits are recorded separately in [the regional research note](monthly-2026-11-india-europe.md).

## California sources checked and actual card comparison

All sources in this section were accessed or attempted on November 1, 2026.

| Official source | Finding and decision |
| --- | --- |
| [DMV news releases](https://www.dmv.ca.gov/portal/news-and-media/news-releases/) | Latest listed October 27 item concerns Bakersfield office reopening, not a rule taught by these cards. No current-card amendment established by the reviewed entries. This index is not an exhaustive legislative register. |
| [DMV 2026 law highlights](https://www.dmv.ca.gov/portal/news-and-media/dmv-highlights-new-laws-in-2026/) | `right-way-11` already reflects expanded move-over scope. School-zone 20 mph change is expressly January 1, 2031, not today's blanket limit; retain current conditions. |
| [DMV rulemaking index](https://www.dmv.ca.gov/portal/about-the-california-department-of-motor-vehicles/california-dmv-rulemaking-actions/) | Distinguish adopted actions from proposals. Driver-safety hearing comments close November 16; modified vision/evaluation proposal comments close November 3. Do not publish either as current adopted requirements. |
| [Adopted suspension-termination text](https://www.dmv.ca.gov/portal/file/termination-of-suspension-adopted-regulatory-text-2026-1027-pdf/) | One-page adopted text revises the incorporated DL 4006 form edition in 13 CCR 124.92. Index states January 1, 2027 effective date. Existing DUI cards do not teach that form version or application process; no card edit. |
| [Modified vision/evaluation text](https://www.dmv.ca.gov/portal/file/modified-regulatory-text-2026-0428-05-pdf/) | Proposed changes remain in consultation according to index. `permit` cards' general vision-test duty is not replaced by proposed remote-document routes or evaluation thresholds. |
| [Learner permits](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/) | Published permit-test passing score remains 80%; no new fixed live-exam length established. Existing permit context remains supported. |
| [CHP child-seat guidance](https://www.chp.ca.gov/programs-services/programs/child-safety-seats) | Current age/height and rear-facing exceptions remain consistent with `safe-driver-09`. Proper fit remains essential; no claim that age alone guarantees adult belt fit. |
| [DMV parking chapter](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/) | Curbs, hill wheels and crosswalk distances remain consistent with corrected `speed-parking` cards. This page does not replace the approach-side/local-condition evidence already cited on the daylighting card. |
| [DMV insurance/collision chapter](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/) | `dui-collisions-06` retains 30/60/15 liability amounts; reporting scenario in `dui-collisions-09` retains 24-hour injury/death law-enforcement reporting and ten-day DMV reporting. |
| [DMV alcohol/drugs chapter](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/) | Existing BAC group distinctions and warning that impairment can be unlawful below the numerical thresholds remain supported. |

## Future-law watch: child belt fit

The [California Senate's 2025 chaptered/vetoed legislation digest](https://sfa.senate.ca.gov/system/files/2025-12/digest_2025.pdf), printed page 182 (PDF page index 181), identifies AB 435, Chapter 434: the statutory proper-seatbelt-use definition changes to the 5-Step test on **January 1, 2027**. This is an older enactment newly logged in this maintenance watchlist, not a law enacted since October 17. It potentially affects `safe-driver-09` and requires a detailed operative-text check before January publication.

Do not import earlier bill drafts' proposed age changes. Do not teach the 2027 definition as already operative in November 2026. Keep the existing current-rule card and proper-fit safety advice while obtaining the full operative provisions. Direct Legislative Information retrieval was unavailable. The Judicial Council summary returned 403 and the CDPH newsletter returned 502; the Senate digest was successfully retrieved, but is a summary rather than the complete operative statute. Re-check full AB 435/Vehicle Code text and current CHP implementation guidance during December review.

## Verification and publication scope

- Repository fetched and matched `origin/main`; unrelated untracked `project-wiki/` preserved.
- `npm test`: 24/24 passed. Initial `npm run check` failed because Git's Windows CRLF checkout differed byte-for-byte from generated LF SVGs. Running the existing `npm run generate:visuals` restored the deterministic working copies; normalized Git comparison showed no asset-content changes. Final `npm run check` passed syntax checks, 216 legacy visual checks and all 24 tests. No code workaround or broad asset rewrite is committed.
- Public-browser smoke test: California question/reveal/close flow worked; India rendered independent `0/60` progress. Regional navigation/rendering was checked. No application change requires a new full persistence migration test in this run; existing migration/backup tests passed.
- Browser emitted an existing root `/favicon.ico` 404 on California, not a study-engine error. No unrelated icon change was made.
- Only research records are intended for this maintenance commit. The site curriculum remains the October release. A successful Pages workflow for the documentation commit does not mean new learning content was published.

## Next review

Revisit AB 435 before January 1, 2027; distinguish final Indian Gazette notifications from the October draft; retry inaccessible consolidation/commencement sources noted in the regional report. French winter equipment requirements are seasonal and geographically scoped, not Europe-wide. Retain dates, jurisdiction and confidence history until a supported rule change is actually implemented.
