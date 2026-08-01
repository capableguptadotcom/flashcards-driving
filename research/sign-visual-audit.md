# Sign visual audit — California and Europe decks

**Audited:** 2026-07-31  
**Scope:** Every current card whose generated visual is a traffic sign, signal, lane/road marking, parking scene, junction/roundabout, tunnel sign, or whose lesson depends on turn direction. This is an audit of the illustrations, not a change to the card text.

## Decision

The current SVG generator is the common failure point. `scripts/generate-card-visuals.mjs` renders a generic text-labelled scene for every `sign`, `signal`, `lanes`, `parking`, `junction`, and `roundabout` visual. Those labels do **not** teach the regulated object:

- `sign` always creates a round, white, red-bordered sign, even for STOP, SCHOOL, and speed-limit cards.
- `lanes` always creates three generic lanes with dashed yellow separator lines; it cannot represent a solid centerline, double-double yellow barrier, white HOV barrier, shark teeth, turn lane, bike-lane dash, or gore.
- `parking` always creates an arbitrary parking-bay scene. It contains no curb-side orientation, grade, wheel angle, hydrant, crossing, or actual curb colouring.
- `junction` and `roundabout` have no movement-specific geometry. In particular, the shared roundabout arc is not a reliable California counter-clockwise or left-driving circulation diagram.

**Implementation rule:** use a custom source-derived SVG for each regulated sign/marking and a directional plan-view for every turn/parking lesson. Do not write the answer inside a fake sign (for example `SCHOOL`, `55`, `YIELD`, `ZONE`, `RED + RIGHT`, or `PARKING COLOURS`). A small unobtrusive instructional caption is fine; the regulated device itself must be legible and canonical.

## California requirements

The current [CA MUTCD 2026](https://dot.ca.gov/programs/safety-programs/camutcd/camutcd-2026) is effective from 18 January 2026. Use its sign/marking drawings (or redraw those drawings exactly as original SVG), together with the current [California Driver's Handbook — lanes](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/), [junctions](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/), and [parking](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/). The formal drawing/colour authority is the CA MUTCD; the handbook is the correct learner-facing confirmation of the driving manoeuvre.

### Sign and signal cards — all need replacement assets

| Cards | Current defect | Required visual semantics |
| --- | --- | --- |
| `signals-01` | Text says `RED + RIGHT`; the image does not show the legal stop position or the right-turn movement. | A **steady circular red** signal, a stop/limit line before the crosswalk, and a right-turn trajectory only after the stopped car yields. Do not draw a red arrow: this card is specifically a circular red indication. |
| `signals-02` | Generic signal plus word label. | A **steady red right-arrow indication in the lens**, with the vehicle stopped before the limit line/crosswalk. No textual arrow substitute. |
| `signals-03` | The image does not make the circular red indication visibly flashing or tie it to a stop line. | A flashing **circular red** indication (static SVG can use rays/alternate faint state), stop line, then a stopped vehicle. |
| `signals-04` | The yellow is a generic lamp and no decision/stop context exists. | A **steady circular yellow** indication, vehicle before the limit line, and sufficient stopping distance. |
| `signals-05` | `FLASH LEFT` is a label, not a flashing left-turn indication. | A **flashing yellow left arrow** in the arrow lens; show the opposing through vehicle/crosswalk to convey yielding. |
| `signals-06`–`signals-08`, `signals-12` | Generic junction/people diagrams omit the controlling device or its position. | `signals-06`: steady green with a blocked exit/crosswalk; `signals-07`: dark heads plus stop control on every approach; `signals-08`: flashing orange `DON'T WALK` hand and a pedestrian already in the marked crosswalk; `signals-12`: work-zone flagger with an official STOP/SLOW paddle or unambiguous authorised hand signal. |
| `signals-09` | A round red-bordered sign with `STOP`, not a stop sign. | **R1-1 STOP**: red octagon, white border, white `STOP` legend. |
| `signals-10` | A round sign with the word `SCHOOL`. This is the user-reported error. | **S1-1 School** sign: five-sided pentagon, fluorescent yellow-green background, black border and two-child pictogram. If the scene is a crossing location, pair it with the **W16-7P downward-diagonal arrow plaque**, pointing to the crossing. A nearby-school advance scene instead uses the appropriate AHEAD/distance plaque. CA MUTCD [Chapter 7B](https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-7b-a11y.pdf) specifies the S1-1 assembly and fluorescent yellow-green treatment. |
| `signals-11` | `RED DOTS` is a label placed on a generic three-lane road. | Show the driver's headlights reflecting red from raised pavement markers on the wrong-way side of a divided ramp, together with a safe, non-reversing recovery direction. Do not imply that ordinary centerline dots are the device. |
| `speed-parking-02` | `55` appears in a circular red-border sign. | This card teaches an unposted statutory maximum, so show the **undivided two-way-road geometry** and a neutral “55 mph maximum when unposted” caption—not a made-up road sign. If a posted example is needed, use an actual **R2-1 SPEED LIMIT 55** vertical white rectangle with black border/legend. |
| `speed-parking-03`, `speed-parking-04`, `speed-parking-05`, `speed-parking-06` | The number labels are not the relevant physical road environment. | `-03`: school frontage/crossing, children, and (if a device is shown) an S1-1 assembly rather than the California speed rule written on a sign. `-04`: sight-obstructed unsigned intersection, not a fictional `15` junction sign. `-05`: narrow alley geometry. `-06`: tracks, sight-distance obstruction and the 100-ft approach context. |

The California signal illustrations must preserve the actual indication's **shape, colour, steady/flashing state, and arrow direction**. Those requirements follow CA MUTCD Part 4; see [the 2026 signal provisions](https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/nmutcd/part4/2026-camutcd-2026-4a-r2-a11y.pdf). Red arrows and circular red indications are not interchangeable.

### Lane-marking cards — all need plan-view marking-specific assets

CA DMV's lane-marking guide explicitly distinguishes each of the following; it also confirms that a bike-lane boundary normally becomes dashed near an intersection. Use it rather than the current generic dashed-yellow road. [CA MUTCD Chapter 3B](https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/camutcd-2026-3b.pdf) is the drawing authority for pavement markings and lane arrows.

| Cards | Required visual semantics |
| --- | --- |
| `lanes-01` | A **two-way** road with one **solid yellow centerline** beside the driver's lane; opposing traffic must be on the other side. |
| `lanes-02` | Two **sets of double solid yellow lines**, separated by at least two feet, forming a painted median barrier. No dashed lines and no generic passing lanes. |
| `lanes-03` | Same-direction general and HOV lanes separated by **two solid white lines**; show the HOV diamond/entry opening only if needed. The car must not cross the pair. |
| `lanes-04` | A transverse row of solid white yield triangles (“shark teeth”), with every apex pointing **toward the approaching/yielding driver**. |
| `lanes-05` | A clearly signed/marked turnout beside a two-lane road, five queued following vehicles, and the slow vehicle moving into the turnout. |
| `lanes-06` | One two-way center left-turn lane: on **each** edge an outer solid yellow and inner broken yellow line, with opposing left-turn arrows in the center lane. Show entry/turn within 200 ft—not through travel. |
| `lanes-07` | Right-turn approach with bicycle lane on the right: single solid white bike-lane boundary transitioning to **dashed** at the intersection, bicycle ahead, checked merge/turn path. Green surface is optional and cannot replace the boundary/marking. |
| `lanes-08` | A car's active turn signal and the correct 100-ft lead-in before the corner; make the intended turn left or right in the road geometry. |
| `lanes-09` | Two one-way streets, driver in the far-left lane, **steady circular red** at the stop line, and a left-turn path into the left lane of the destination one-way street. Do not draw a red arrow. |
| `lanes-10` | Exit-gore with the solid white boundary and chevron-striped gore; the through vehicle continues to the next exit without crossing either feature. |
| `lanes-11` | On-ramp acceleration lane, freeway through lanes, dashed merge line, vehicle at traffic speed and a clear accepted gap. |
| `lanes-12` | Paved roadway edge versus dirt shoulder, vehicle continuing on pavement (no shoulder-pass trajectory). |

For a lane arrow, make the arrow point in the traffic's direction of travel and position it in the actual applicable lane. The federal MUTCD's [Part 3, §3B.23 and Figure 3B-21](https://mutcd.fhwa.dot.gov/pdfs/11th_Edition/part3.pdf) specifies that mandatory-turn lanes use lane-use arrows and their associated signs; an exclusive turn bay normally shows two arrows. This prevents a visually plausible but backwards arrow.

### Junction, roundabout, crosswalk, and turn-direction cards

The following current cards use a generic `junction`, `roundabout`, or `people` scene where direction decides the answer. They require a movement diagram, not a central text placard:

| Cards | Required visual semantics |
| --- | --- |
| `right-way-01`–`right-way-03` | Two cars at an unsigned four-way/T/left-turn conflict. Draw vehicle headings and yield arrows; the car on the right/through road/oncoming stream must be unmistakable. |
| `right-way-04`–`right-way-05` | California **right-side driving, counter-clockwise** roundabout circulation, `YIELD` control at each entry, entering car yielding to a circulating car, and a continuous loop to the missed exit. The current common roundabout should not be reused for left-driving countries. |
| `right-way-06`–`right-way-08` | Legible marked or unmarked crosswalk geometry, stopped vehicle/hidden pedestrian, and cane/guide-dog pedestrian. Never place a vehicle in the crosswalk. |
| `right-way-10`–`right-way-12` | Emergency vehicle approach/clear intersection, move-over lane separation, and officer's controlling position/hand signal; do not use a generic people scene. |
| `sharing-03`, `sharing-05`, `sharing-08`, `sharing-11` | Truck right-turn sweep and blind-side wedge; 6-ft streetcar safety zone; 3-ft bicyclist pass envelope; rail crossing with enough room beyond tracks. |
| `speed-parking-11`, `conditions-06`, `conditions-12` | The 20-ft/15-ft crosswalk-clearance geometry; a skid and steering direction matching the skid; train tracks and a vehicle exit path away from the train. |

The California handbook confirms counter-clockwise roundabout movement, entry yield, lane selection, and exit signalling, as well as marked/unmarked-crosswalk treatment. See [Section 7](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/).

### Parking cards — all need orientation-specific assets

| Cards | Required visual semantics |
| --- | --- |
| `speed-parking-07` | A curb, shown in five separate labelled vignettes: **white** passenger pickup/drop-off; **green** time-limited parking; **yellow** loading; **red** no stopping/standing/parking; **blue** accessible parking with the required placard/plate. The colour must be painted on the curb—not the five letters in a dark box. |
| `speed-parking-08` | A curbside **parallel** space (cars parallel to the curb and traffic direction), final car parallel within **18 in** of the curb, with a dimension line from the relevant wheel/vehicle edge to curb. The current perpendicular-bay appearance is misleading. |
| `speed-parking-09` | Three small side views with visible slope, curb edge, front-wheel angle, and intended roll path: downhill—wheels into curb/right; uphill with curb—wheels away from curb/left; no curb—wheels right. |
| `speed-parking-10` | One curbside hydrant and a measured 15-ft clear interval along the curb; no unrelated parking bays. |
| `speed-parking-11` | Vehicle/parking position plus the measured 20-ft (or 15-ft with curb extension) approach-side crosswalk clearance; show the crosswalk and curb extension if using the exception. |

These are direct handbook illustrations/rules: [parallel parking and hill wheels](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/) and [coloured curbs/parking clearances](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/). If a regulatory parking sign is added, preserve the distinct MUTCD systems: prohibitive signs are red-on-white; permissive signs are green-on-white. Do not use one `P`/arrow graphic for “parking available,” “no parking,” and “no stopping.” The sign's single/double arrow is also directional along the curb; see [MUTCD Chapter 2B §§2B.53–2B.54](https://mutcd.fhwa.dot.gov/pdfs/11th_Edition/Chapter2b.pdf).

## Europe requirements

### Scope rule: no imaginary pan-European sign asset

There is no single EU road code. The European Commission's [travel guidance](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm) directs travellers to national rules. The [UNECE 1968 Convention and European Agreement](https://unece.org/DAM/trans/conventn/Conv_road_signs_2006v_EN.pdf) provide a shared vocabulary, but not a licence to merge country-specific details (side of road, priority, parking plates/kerb rules, filter signals, flashing meanings, zone rules, or lane discipline) into one hybrid asset.

For every current `country-check` card, the safe visual is either:

1. an explicit **country-choice/check-official-source** scene with no supposedly authoritative road sign; or
2. a country-badged asset built from that country's current official sign standard.

Never use a California device or a generic red-bordered English-word sign as a European sign. In particular, if a future Europe school card is added, the Convention's children warning sign is a **red-bordered warning triangle with child pictogram** (white/yellow ground), not California's fluorescent pentagon. Convention-style parking available is a blue square with a white `P`/national ideogram; a mandatory direction is a blue circular sign with a white arrow. Those are separate concepts.

### Europe cards audited

| Cards | Required visual semantics |
| --- | --- |
| `borders-01`, `junctions-12`, `motorways-11` | Two explicitly labelled variants: continental **right-driving** and Ireland/Cyprus/Malta **left-driving**. Mirror the carriageway, normal lane, passing side, turn paths, roundabout circulation and car steering position as appropriate. Do not reuse one road scene. |
| `borders-03`, `signals-01`, `signals-02`, `signals-05`, `signals-06`, `speed-01` | Current `sign`/`parking` assets incorrectly invent a circular red-border sign. Replace with a country selector, destination flag, and a neutral “check official sign guide” document/device. Only render a real speed, parking, or zone sign after selecting a specific country. |
| `signals-03`, `junctions-02`, `junctions-03` | Do not show one default European roundabout. Render a country-choice comparison, or country-badged left/right-driving plan views with the applicable yield control, entry lane, circulating direction, and exit signal. |
| `signals-04`, `junctions-07`, `junctions-08` | Do not show a generic three-lens arrow signal. Use a country selector unless a national code is named. The visual must not imply that a red-plus-arrow/filter/flashing pattern has continent-wide meaning. |
| `junctions-01`, `junctions-04`–`junctions-06`, `junctions-10`–`junctions-11`, `people-07`–`people-09`, `people-12`, `motorways-10` | Use a country-check scene with the exact ambiguity highlighted (priority-side, tram, zebra/cycle track, yellow box, merge/lane side, bicycle pass/helmet/door zone, emergency corridor). It must not depict a “correct” unbadged road marking or direction. A movement arrow must align with the chosen traffic side. |
| `signals-07`–`signals-11`, `speed-12`, `motorways-04`–`motorways-08` | These can use a common **TEN-T tunnel** asset, but it must follow Directive 2004/54/EC Annex III: blue/green facility signs; escape-route signs on the sidewall with both nearest exits and distances; emergency-station device icon(s); red-cross lane-status signal above the closed lane; variable sign in its actual sign panel. Do not substitute textual `TEN-T`, `EXIT ↔`, `PHONE ≠ SHELTER`, or `RED X` placards. [Directive 2004/54/EC, Annex III](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32004L0054) is the primary visual authority. |
| `signals-12` | Country-specific officer/hand-control arrangement or an explicit “follow authorised officer” scene; do not represent it as a pan-European manual signal. |

The Ireland/Cyprus/Malta side-of-road card needs a left-driving diagram. The Commission's [country guidance for Ireland](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/ireland/index_en.htm) confirms that it keeps left and enters roundabouts by turning left. For Great Britain (which must never be silently included in “EU”), use the current official [Highway Code traffic-sign guide](https://www.gov.uk/guidance/the-highway-code/traffic-signs) and its separate left-driving road-marking guidance.

## Asset QA gates before release

1. Add `jurisdiction`, `standard`, `deviceId`, `movementSide`, and `sourceUrl` to every regulated visual specification. `deviceId` examples: `CA-R1-1`, `CA-S1-1`, `CA-R2-1`, `CA-3B-yield-line`, `UNECE-tunnel-annex-III`.
2. Unit-test that a California STOP asset is an octagon; a California school asset is a fluorescent yellow-green pentagon with the child pictogram; speed-limit card `speed-parking-02` is a vertical R2-1 rectangle; and none of these contain answer text in lieu of a device.
3. Unit-test each road-marking card's paint colour/style and traffic side: solid/broken; white/yellow; triangle apex; paired lines; curb/slope/wheel direction; car path never traversing a prohibited marking.
4. Require `country` on every Europe non-tunnel regulated sign asset. Permit a shared Europe device only when the cited UNECE/EC source explicitly standardises it (the current tunnel set qualifies).
5. Render a contact sheet and visually inspect every listed card at library-thumbnail and study sizes. A diagram that is technically accurate but cannot show its arrow, pictogram, line type, or wheel angle at thumbnail scale fails.

## Primary sources used

- [California MUTCD 2026](https://dot.ca.gov/programs/safety-programs/camutcd/camutcd-2026) and [Chapter 7B — School-area signs](https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-7b-a11y.pdf)
- [California Driver's Handbook — lane markings](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/), [right of way/roundabouts/crosswalks](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/), and [parking](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/)
- [MUTCD Part 3 — pavement marking and lane-use arrows](https://mutcd.fhwa.dot.gov/pdfs/11th_Edition/part3.pdf) and [Chapter 2B — parking sign direction/colour](https://mutcd.fhwa.dot.gov/pdfs/11th_Edition/Chapter2b.pdf)
- [UNECE Convention on Road Signs and Signals and European Agreement](https://unece.org/DAM/trans/conventn/Conv_road_signs_2006v_EN.pdf)
- [European Commission — road rules and safety](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm) and [EUR-Lex Directive 2004/54/EC, Annex III](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32004L0054)
