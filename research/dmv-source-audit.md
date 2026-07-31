# California DMV knowledge-test flashcards: official-source audit

**Research date:** 2026-07-31

**Source policy:** English-language California DMV pages and files only (`dmv.ca.gov`). All web sources below were accessed 2026-07-31.
**Audience:** builders of an engaging, comprehensive California noncommercial Class C knowledge-test study site.

## Executive findings

- The attached `CA DL handbook.pdf` is the current official English **DL 600, California Driver's Handbook, Rev. 6/2025**: 92 pages, PDF metadata modified 2025-08-11. The current DMV download has the same page count, metadata, and extracted-text SHA-256 (`4024bcb7...017972`) as the attachment. The raw PDF hashes differ because the downloaded files differ by two container bytes, not in extracted content. Use the [current official PDF](https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/) or the live [HTML handbook](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/) as canonical rather than shipping facts copied from the user's local file.
- DMV currently links **four English Class C sample tests**, each with ten three-option questions, and says it periodically adds questions. These are examples, not a disclosed item bank or content-weighting specification. Source: [Sample Driver's License Knowledge Tests](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/).
- For an instruction permit, DMV currently states a multiple-choice, handbook-based test with a passing score of **80%**. The handbook allows **three attempts** before reapplication, requires minors to wait **seven days** after a failed knowledge test (excluding the failure day), and prohibits testing aids such as the handbook or a phone. Sources: [Learner's Permits](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/) and [Section 3 - The Testing Process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/).
- Do not present the widely repeated “36 questions / 30 correct” figures as current policy. DMV research reports from older test generations contain those figures, but the current public pages do not state a fixed live-test question count.
- The public samples favor **scenario judgment and close contrasts**, not dictionary recall: the safest legal action, whether a rule is absolute or conditional, which of two similar signals applies, and exact thresholds (feet, mph, age, time, BAC, or reporting deadline).

## Current test logistics that are safe to state

| Claim | Current official evidence | Product implication |
|---|---|---|
| Original-license knowledge test uses multiple-choice questions. | [Testing Process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/) | Practice cards can use three choices to resemble the samples, but learning cards should explain the rule after the choice. |
| The current instruction-permit page states an 80% passing score for both under-18 and adult applicants. | [Learner's Permits](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/) | Mock-test scoring can use 80%, with a checked date and a note that the site is unofficial. |
| Three attempts are allowed before the applicant must reapply. | [Testing Process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/) | A mock-exam mode may model three attempts, but should not imply that its score is an official DMV result. |
| A minor who fails must wait seven days to retake, not counting the failure day. | [Testing Process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/) | Good numeric/deadline card. |
| Testing aids, including the handbook and a cell phone, are forbidden. | [Testing Process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/) | Keep “study mode” and “closed-book mock test” visibly distinct. |
| DMV links four current English Class C sample sets and may change the questions. | [Sample tests landing page](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/) | Store a `sourceChecked` date and make content refreshable. Do not scrape or imply endorsement. |
| DMV says every question has one correct answer and two answers that are wrong or inappropriate; all test questions come from the handbook, and DMV describes them as having no “trick questions.” | [Knowledge and Drive Tests Preparation](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/) | Teach close distinctions as comprehension, not as adversarial test hacks. |
| In-office knowledge testing must begin before 4:30 p.m. | [Learner's Permits](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/) | Useful logistics note, not core flashcard content. |
| Eligible noncommercial Class C renewal applicants may be offered a no-fail eLearning alternative; it has seven short sections and generally takes 20-30 minutes. This is a renewal option, not the original-license test. | [Online Learning](https://www.dmv.ca.gov/portal/driver-education-and-safety/online-learning-and-tests/) | Avoid mixing renewal eLearning rules into first-time applicant flashcards. |

**Not established by current public sources:** number of questions on the live original Class C exam, a fixed maximum-misses count independent of test length, time limit, or whether every applicant receives the same count. Do not hard-code those as facts.

## What the four current sample tests reveal

Official sets: [Test 1](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-drivers-written-test-1/), [Test 2](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-written-test-2/), [Test 3](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-drivers-written-test-3/), and [Test 4](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-written-test-4/).

### Recurring content clusters

1. **Safe speed and visibility:** Basic Speed Law, a posted 65 mph limit being conditional on ideal conditions, speed at a restricted-view railroad crossing, freeway-entry speed, rain, smoke/dust, and high-beam distance.
2. **Right-of-way and vulnerable road users:** pedestrians in crosswalks, motorized wheelchairs, left-turn yield, crossing guards, and a pedestrian still in the driver's path after the driver's light turns green.
3. **Lane positioning and intersections:** beginning/ending turns in the correct lane, entering the bike lane before a right turn, blocked intersections, one-way-to-one-way left turns, and double-yellow barriers.
4. **Railroads, school buses, and large vehicles:** room beyond the tracks, yellow school-bus lights, truck blind spots and stopping limitations.
5. **Parking and curb rules:** parallel-parking setup, hill parking, red/blue curbs, and crosshatched disabled-access areas.
6. **Administrative/legal duties:** SR-1 collision reporting, seller's five-day transfer notice, provisional-license hours, open containers, phone use, and two-ear headsets.
7. **Hazard awareness:** continuous visual scanning, tailgaters, the first minutes of rain after a hot/dry period, and distraction as a common collision cause.

### High-yield close distinctions (not “trick questions”)

DMV explicitly says its questions are not trick questions; these are the operative conditions learners still need to notice. Source: [Knowledge and Drive Tests Preparation](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/).

- **Maximum is not mandatory:** the posted limit is an upper limit only when conditions are safe; the Basic Speed Law can require slower travel.
- **Yellow school-bus lights vs red:** yellow means slow and prepare to stop; red means stop and remain stopped while red lights flash, subject to the divided/multilane exception below.
- **Green does not mean enter blindly:** do not enter a blocked intersection, and still yield to a pedestrian in your path.
- **Pedestrian path vs entire street:** on Sample Test 4, the correct practical threshold is to wait until the pedestrian is out of *your path*, not necessarily across the full width of the street.
- **Flashing yellow vs flashing red:** yellow means slow/proceed cautiously; red means full stop, then proceed when safe.
- **Solid red vs red arrow:** a right turn after a full stop may be allowed on solid red unless prohibited; no turn is permitted on a red arrow.
- **Bike lane:** normally reserved for bicycles, but a driver should merge into it for a right turn within 200 feet after checking for bicyclists.
- **One set vs two sets of double yellow:** a single set may be crossed for specified left turns/U-turns; two sets separated by two or more feet form an uncrossable barrier except at openings.
- **Headset:** covering both ears is illegal; the distractor covering one ear is not the same rule.
- **Phone at a red light:** being stopped at a red light does not make handheld use the correct answer. The handbook says adult drivers should use hands-free mode and a mounted device only by a single swipe/touch.
- **Open container:** the trunk or another area where passengers do not sit, not under a seat or in the glove box.
- **Reporting deadlines:** law enforcement within 24 hours for injury/death; DMV SR-1 within 10 days for injury/death or property damage over $1,000; seller's transfer notice within five days.
- **Absolute-looking distractors:** “always,” “under any circumstances,” “at any time,” and “only” often make an unsafe or overbroad choice. Teach the governing condition, not a test-taking hack.

## Recommended end-to-end knowledge map

This is the minimum curriculum breadth for “end to end,” ordered for learning rather than handbook pagination.

1. **License path and provisional drivers:** permit prerequisites, age milestones, supervised practice, nighttime practice, passenger/night restrictions, and exceptions. [Section 2](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/)
2. **Vehicle setup and communication:** seating, mirrors/blind spots, steering, signals, horn, headlights, and emergency flashers. [Section 5](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/introduction-to-driving/)
3. **Lines, lanes, turns, merging, passing, and parking:** this is both visual and heavily sampled. [Section 6](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/) and [Section 6 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/)
4. **Signals, signs, right-of-way, and special road users:** pedestrians, blind pedestrians, bicycles, motorcycles, trucks, buses, emergency vehicles, work zones, schools, and rail. [Section 7](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/) and [Section 7 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/)
5. **Defensive and adverse-condition driving:** scan/following distance, tailgaters, darkness, rain, fog, skids, hydroplaning, brake/accelerator failure, collisions, restraint systems, phones, and disabled vehicles. [Section 8](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/), [Section 8 continued - restraints](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont1/), and [Section 8 continued - phones/emergencies](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont2/)
6. **Alcohol and drugs:** BAC categories, impairment below the limit, implied consent, open containers, under-21 rules, and medication/cannabis risk. [Section 9](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/)
7. **Insurance and collision duties:** minimum coverage, stop/exchange/help, police and DMV reporting, and SR-1. [Section 10](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/)
8. **Registration/transfer essentials:** buyer and seller deadlines. [Section 11](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/vehicle-registration-requirements/)

Sections on license replacement/renewal, administrative driver safety, and seniors should be summarized for completeness, but they are lower priority for a first-time Class C knowledge-test deck than Sections 5-10.

## Exact rules and numbers for flashcard coverage

### Licensing and test process

| Rule | Exact value / condition | Source |
|---|---|---|
| Minimum permit age for a minor | 15 1/2 | [Section 2](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/) |
| Minimum provisional-license age | 16 | Same source |
| Permit holding period before a minor's drive test | At least 6 months, unless the applicant turns 18 | Same source |
| Minor supervised practice | At least 50 hours; 10 at night; supervising California-licensed driver at least 25 | Same source |
| First-year provisional restrictions | No driving 11 p.m.-5 a.m.; no passengers under 20 unless accompanied by a parent/guardian or other California-licensed driver at least 25; documented medical, school, work, and family-need exceptions exist | Same source |
| Knowledge-test attempts | 3 before reapplication | [Testing Process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/) |
| Minor knowledge retest wait | 7 days, excluding failure day | Same source |
| Passing score | 80% for the handbook-based instruction-permit knowledge test | [Learner's Permits](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/) |

### Speed, spacing, visibility, and communication

| Rule | Exact value / condition | Source |
|---|---|---|
| Basic Speed Law | Never drive faster than is safe for current conditions, regardless of posted maximum | [Section 7 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/) |
| General highway maximum | 65 mph on most California highways unless otherwise posted; handbook calls this the ideal-conditions maximum | Same source |
| Two-lane undivided highway / towing | 55 mph unless otherwise posted | Same source |
| Business or residential district | 25 mph unless otherwise posted | Same source |
| School | 25 mph within 500 feet while children are outside or crossing; some school zones are as low as 15 mph | Same source |
| Blind intersection | 15 mph | Same source |
| Alley | 15 mph; handbook defines an alley as no wider than 25 feet and serving rear/side access | Same source |
| Restricted-view railroad crossing | 15 mph within 100 feet when the driver cannot see the tracks for 400 feet in both directions; faster is allowed when controlled by gates, warning signal, or flagger | Same source |
| Turn signal | At least 100 feet before turning | [Section 5](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/introduction-to-driving/) |
| Freeway lane-change signal | At least 5 seconds before changing lanes | Same source |
| Following distance | At least the three-second rule in normal conditions; add space for hazards/adverse conditions | [Section 8](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/) |
| Visual scan | Scan at least 10 seconds ahead | Same source |
| High beams | Dim within 500 feet of an oncoming vehicle and 300 feet of a vehicle being followed | [Section 5](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/introduction-to-driving/) |
| Headlight timing/visibility | Use from 30 minutes after sunset until 30 minutes before sunrise, when unable to see from 1,000 feet, and with wipers in fog/rain/snow (low beams) | Same source |
| Severe rain/snow visibility | If unable to see beyond 100 feet, it is unsafe to drive faster than 30 mph | [Section 8](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/) |
| Narrow mountain horn | Sound the horn where oncoming traffic cannot be seen at least 200 feet ahead | [Section 5](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/introduction-to-driving/) |

### Lanes, turns, passing, and parking

| Rule | Exact value / condition | Source |
|---|---|---|
| Bike lane entry for a turn | Permitted within 200 feet of the intersection/turn after checking blind spots and yielding to bicyclists | [Section 6](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/) |
| Center left-turn lane | May be used for only 200 feet to prepare for a left turn or U-turn; it is not a passing/travel lane | Same source |
| Passing a bicyclist | Maintain at least 3 feet when possible; if not possible, slow to a reasonable speed and pass only when safe | Same source |
| Slow-driver turnout | On a two-lane road where passing is unsafe, use a turnout when 5 or more vehicles are following | Same source |
| Residential U-turn | Allowed if no vehicle is approaching within 200 feet, unless otherwise prohibited | Same source |
| Passing-prohibited proximity | Do not pass within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area | Same source |
| Parallel parking | Finish parallel and within 18 inches of the curb | [Section 6 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/) |
| Fire hydrant / fire-station driveway | No parking within 15 feet | Same source |
| Crosswalk daylighting | No parking within 20 feet of a marked or unmarked crosswalk, or within 15 feet where a curb extension is present | Same source |
| Disabled sidewalk-ramp approach | No parking within 3 feet | Same source |
| Double-double yellow barrier | Two sets of double solid yellow lines spaced 2 feet or more apart are a barrier; do not cross except at designated openings | [Section 6](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/) |

Hill-parking wheel memory set from [Section 6 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/): downhill - wheels into the curb/right; uphill with curb - wheels away from the curb; uphill or downhill without curb - wheels to the right edge. Always set the parking brake and leave an automatic in park or a manual in gear.

### People, school buses, railroads, and emergency vehicles

| Rule | Exact value / condition | Source |
|---|---|---|
| Uncontrolled intersection tie | First arrival goes first; simultaneous arrivals yield to the vehicle, bicyclist, or pedestrian on the right | [Section 7](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/) |
| T intersection | Through-road users have right-of-way when no STOP/YIELD controls exist | Same source |
| Pedestrians | Yield in marked and unmarked crosswalks; a blind pedestrian using a guide dog or white cane has right-of-way at all times | Same source |
| Steep narrow road | Uphill-facing vehicle has right-of-way; downhill-facing vehicle backs because it has more control backing uphill | Same source |
| School-bus yellow lights | Slow and prepare to stop | [Section 7 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/) |
| School-bus red lights | Stop from either direction and remain stopped while red lights flash; no stop is required when the bus is on the other side of a divided or multilane highway with 2 or more lanes in each direction | Same source |
| Railroad stop position | When a crossing device/person warns of a train, stop at least 15 feet from the nearest track; never enter unless the vehicle can clear all tracks | Same source |
| Approaching emergency vehicle | Yield, pull to the right edge, and stop; if already in an intersection, clear it first, then pull right | Same source |
| Following active emergency vehicle | Illegal within 300 feet when siren or flashing lights are on | Same source |
| Stationary emergency/road-work vehicle | Move over and slow down | Same source |

### Occupant safety, phones, alcohol, and collision duties

| Rule | Exact value / condition | Source |
|---|---|---|
| Rear-facing child seat | Child under 2, under 40 lb, and under 3 ft 4 in: federally approved rear-facing restraint; not in front of an active airbag | [Section 8 - restraints](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont1/) |
| Child restraint | Under 8 **or** shorter than 4 ft 9 in: child restraint in a rear seat, subject to listed front-seat exceptions | Same source |
| Adult belt threshold for child | Age 8 or older **or** at least 4 ft 9 in may use a properly secured safety belt | Same source |
| Airbag spacing | At least 10 inches from airbag cover, while retaining full control | Same source |
| Unattended child | Illegal to leave a child age 6 or younger unattended; supervision must be by someone at least 12 | Same source |
| Adult phone use | Handheld use is illegal; use hands-free only when necessary, mount without blocking view, and use only a single swipe/touch | [Section 8 - phones](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont2/) |
| Minor phone use | No calls/texting/wireless-device use while driving except emergency assistance | Same source |
| Headsets | Covering both ears while driving is illegal | [Sample Test 4](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-written-test-4/) and [Section 7 continued](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/) |
| BAC limits | 0.08% for drivers over 21; 0.01% under 21; 0.01% at any age on DUI probation; 0.04% for commercial-license-required vehicles or passenger-for-hire driving | [Section 9](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/) |
| Impairment below limit | A driver may still be arrested/convicted when impaired below the numerical limit | Same source |
| Open alcohol container | If opened, keep it in the trunk or a place where passengers do not sit; not glove compartment or under a seat | Same source |
| Minimum liability coverage | $30,000 one person injury/death; $60,000 more than one person; $15,000 property damage | [Section 10](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/) |
| Injury/death collision report to police | Within 24 hours | Same source |
| SR-1 report to DMV | Within 10 days for injury/death (even minor injury) or property damage over $1,000; each driver files regardless of fault, including on private property | Same source |
| Vehicle transfer | Buyer has 10 days to transfer ownership; seller has 5 days to file Notice of Transfer and Release of Liability | [Section 11](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/vehicle-registration-requirements/) |
| Out-of-state vehicle | Register within 20 days after becoming a California resident or getting a job in California | Same source |

## Signals, signs, markings, and curbs

### Traffic-light meanings

- **Solid red:** full stop. Right turn may be made after stopping and yielding unless a NO TURN ON RED sign prohibits it.
- **Red arrow:** full stop; do not turn until a green light/arrow permits it.
- **Flashing red:** full stop, then proceed when safe.
- **Solid yellow:** the signal is changing to red; stop if it can be done safely, otherwise cross cautiously.
- **Flashing yellow:** slow and proceed with caution; no stop required.
- **Flashing yellow arrow:** turn is permitted but unprotected; yield to oncoming traffic.
- **Solid green:** go only when safe and clear; do not block the intersection; yield to vehicles, bicyclists, and pedestrians already there.
- **Dark/nonworking signal:** treat it as an all-way stop.

Source: [Section 7 - Traffic Control](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/).

### Sign shape/color recognition

- Red octagon: STOP; inverted red/white triangle: YIELD.
- Red circle/slash: the pictured action is prohibited.
- Yellow/black circle or X: railroad crossing; look, listen, slow, prepare to stop.
- Five-sided sign: school area/crossing; slow and stop for children in the crosswalk.
- Yellow diamond: warning of a road condition or danger.
- White rectangle: regulatory rule that must be obeyed.
- Orange diamonds: construction/maintenance warnings.
- Diamond placard on a truck: hazardous load; such vehicles must stop at railroad crossings.
- Orange/red reflective triangle: slow-moving vehicle, typically 25 mph or less.

Source: [Section 7 - Signs](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/). The official PDF's pp. 36-37 provide the clearest visual plates.

### Lane-line meanings

- Yellow separates opposing directions; white separates traffic moving the same direction.
- Broken yellow next to your lane: passing allowed when safe.
- Solid yellow on your side: do not pass.
- Double solid yellow: do not pass; specified left turns/U-turns across one set may be allowed.
- Two sets of double yellow at least 2 feet apart: barrier.
- Double solid white: lane barrier; never change lanes across it. Wait for a broken white line.
- White triangular “shark teeth” yield line: yield/stop point; triangles face approaching traffic.

Source: [Section 6 - Lane Markings](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/).

### Curb colors

- **White:** passenger pickup/drop-off only.
- **Green:** limited-time parking; check sign/curb for duration.
- **Yellow:** passenger/freight loading; noncommercial drivers are usually required to stay with the vehicle.
- **Red:** no stopping, standing, or parking; exception for a bus zone marked for buses.
- **Blue:** disabled person, or driver of a disabled person, with qualifying placard/plate.

Source: [Section 6 continued - Parking at Colored Curbs](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/).

## Flashcard design implications supported by the sources

Use the rule as the learning object and the question as one interaction with it. A strong card can contain:

1. **Scene:** a compact visual situation (“The light is green, but your lane is full across the intersection”).
2. **Decision:** “Go, edge in, or wait?”
3. **Reveal:** the legal/safest action in one sentence.
4. **Why:** what collision or conflict the rule prevents.
5. **Contrast:** the tempting near-miss (“Green grants permission, not space or right-of-way”).
6. **Memory hook:** for numeric rules, group related values (for example high beams: **500 toward / 300 behind**).
7. **Official link and checked date:** deep-link to the exact DMV section.

Recommended card types: illustrated intersections; “spot the hazard”; sequence ordering; compare-two-signals; threshold sliders; map/lane-placement diagrams; short stories with a consequence; and paired “looks similar, means different” cards. Use straightforward recall only for the small set of unavoidable numeric thresholds.

## Accuracy and maintenance guardrails

- Add a visible “Independent study aid - not an official DMV product” disclaimer.
- Paraphrase handbook rules and create original diagrams. The handbook states a CC BY-NC 4.0 license, so attribution is still required and commercial use needs separate review. Source: [official PDF](https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/), copyright page.
- Store `sourceUrl`, `sourceSection`, `sourceRevision` (`DL 600 Rev. 6/2025`), and `verifiedOn` (`2026-07-31`) per card or card cluster.
- Recheck the official PDF, HTML handbook, and sample-test landing page before each release. DMV explicitly says sample questions change.
- Do not claim that a flashcard appeared on the real exam, that the public sample distribution predicts official weighting, or that completing the site guarantees passing.
- Treat exact numbers as high-volatility content. In particular, insurance minimums changed in recent years; the current official figure is **30/60/15**, not the older 15/30/5 often found in unofficial study sets.
- Preserve conjunctions carefully: child-seat rules contain meaningful **and/or** distinctions; changing one word changes the rule.

## Primary-source index

All accessed 2026-07-31.

- [California Driver's Handbook - HTML index](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/)
- [California Driver's Handbook - official PDF](https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/)
- [Section 2 - Permit and license](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/)
- [Section 3 - Testing process](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-testing-process/)
- [Learner's Permits - score and office cutoff](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/)
- [Knowledge and Drive Tests Preparation](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/)
- [Section 5 - Introduction to driving](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/introduction-to-driving/)
- [Section 6 - Navigating roads](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/)
- [Section 6 continued - parking/passing](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/)
- [Section 7 - Signals, signs, and right-of-way](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/)
- [Section 7 continued - sharing road, speed, school, rail](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/)
- [Section 8 - Safe driving](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/)
- [Section 8 continued - restraints](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont1/)
- [Section 8 continued - phones/emergencies](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont2/)
- [Section 9 - Alcohol and drugs](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/)
- [Section 10 - Insurance and collisions](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/)
- [Section 11 - Registration and transfer](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/vehicle-registration-requirements/)
- [Sample-test landing page](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/)
- [Current Class C sample tests 1](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-drivers-written-test-1/), [2](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-written-test-2/), [3](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-drivers-written-test-3/), and [4](https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/sample-class-c-written-test-4/)
- [Online learning and renewal testing](https://www.dmv.ca.gov/portal/driver-education-and-safety/online-learning-and-tests/)
