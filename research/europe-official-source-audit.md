# Europe driving flashcards: official-source audit

**Research date:** 2026-07-31

**Source policy:** Current European Union, EUR-Lex, UNECE, and official national road-safety or government sources. The user's 2018 guide is treated as a design reference, not current legal authority.

**Audience:** Builders of a travel-oriented flashcard site for people preparing to drive across Europe. This is not a substitute for a national learner-driver syllabus or legal advice.

## Executive findings

- There is no single “European driving code.” The EU's own travel guidance says there are **no EU-wide laws on road traffic rules and safety**, then identifies a small common baseline and a much larger set of national differences. Build one clearly labelled **EU travel baseline** plus independent, versioned country packs. Do not merge this content into the California deck. Source: [Your Europe - Road rules and safety](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm) (last checked 2025-12-23).
- Safe common-EU cards cover seat belts, appropriate child restraints, the ban on hand-held phone use, EU-licence recognition, 112, eCall, registration/insurance basics, foreign-crash steps, and the possibility of a fine following the driver home.
- Country-pack cards must own the side of the road, speed limits, alcohol limits, vehicle equipment, daytime-light and winter-tyre rules, roundabout details, signs/markings, tolls, vignettes and emission zones. Every such card needs `jurisdiction`, `sourceUrl`, and `verifiedAt` metadata.
- “Europe” is broader than the EU. The United Kingdom, Switzerland, Norway, Liechtenstein and other non-EU jurisdictions must be represented by their own packs and national sources. An EU claim must never be silently expanded to “all Europe.”
- The attached book has a very useful information architecture: general travel preparation followed by independent country checklists for side-of-road, speed, alcohol, required equipment, tolls, signs and hazards. The publisher describes this edition as updated in **2018** and now out of print. Its legal values are therefore stale and must not seed live cards without re-verification. Source: [publisher's guide page](https://www.driveguide.veloce.co.uk/europe/).

## What is safe to teach as a shared EU baseline

| Flashcard-ready claim | Scope/caveat | Official evidence |
|---|---|---|
| Wear a seat belt in every seat fitted with one, including in coaches and minibuses. | EU-wide; national exemptions can exist. | [European Commission - Seat belts](https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-vehicles/seat-belts_en) and [Your Europe](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm) |
| Children need an appropriate approved restraint in cars and lorries. | The EU baseline generally applies below 150 cm, but countries may let children from 135 cm use an adult belt. Exact height/age/weight rules belong in country packs. Never put a rear-facing restraint in front of an active airbag. | [Directive 91/671/EEC, consolidated](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:01991L0671-20140320) |
| Do not use a hand-held mobile phone while driving. | EU-wide common minimum; some countries restrict hands-free devices or earphones further. | [Your Europe](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm) |
| A valid licence issued by an EU country is usable throughout the EU. | It must remain valid. A provisional licence or certificate cannot be relied on for cross-border driving; temporary documents are not automatically recognised. | [Your Europe - Driving licence and insurance](https://europa.eu/youreurope/citizens/travel/driving-abroad/driving-licence-and-insurance/index_en.htm) |
| A non-EU licence or international driving permit is not governed by one EU recognition rule. | Check each destination/transit country's authority or embassy. | [Your Europe - Licence recognition](https://europa.eu/youreurope/citizens/vehicles/driving-licence/driving-licence-exchange-recognition/index_en.htm) |
| Call **112** free from a fixed or mobile phone anywhere in the EU for police, ambulance or fire. | National emergency numbers may also operate. Do not promise an English-speaking operator everywhere. | [European Commission - 112](https://digital-strategy.ec.europa.eu/en/policies/112) (updated 2026-06-23) |
| 112-based eCall can automatically call after a serious crash or be activated manually; it sends a minimum data set and opens a voice link. | It works across the EU. Mandatory fitment is tied to new passenger-car/light-commercial models approved after 31 March 2018; older cars need not be retrofitted. | [Your Europe - eCall](https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency-assistance-vehicles-ecall/index_en.htm) and [Regulation (EU) 2015/758](https://eur-lex.europa.eu/eli/reg/2015/758/oj/eng) |
| Carry the vehicle registration certificate abroad; Part I is enough if it has two parts. | EU cross-border document rule. | [Your Europe - Registration documents](https://europa.eu/youreurope/citizens/vehicles/registration/formalities/index_en.htm) |
| Compulsory third-party motor insurance for an EU-registered car is valid throughout the EU. | It covers injury/property damage to others, not the driver's own car. Optional cover varies; carry insurance papers even though the plate normally proves liability cover. | [Your Europe - Insurance validity](https://europa.eu/youreurope/citizens/vehicles/insurance/validity/index_en.htm) and [driving abroad](https://europa.eu/youreurope/citizens/travel/driving-abroad/driving-licence-and-insurance/index_en.htm) |
| After a crash abroad, the law of the country where it happened applies. Stop, exchange details, contact emergency/police services when needed, document the scene, and notify the insurer. | Good scenario-card sequence. | [Your Europe - Car insurance cover abroad](https://europa.eu/youreurope/citizens/vehicles/insurance/accident/index_en.htm) |
| A road offence abroad can produce a fine by post at home. | The offence and sanction come from the country where it occurred. Do not teach future 2027/2029 enforcement changes as current. | [Your Europe](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm) and [Directive (EU) 2015/413](https://eur-lex.europa.eu/eli/dir/2015/413/2025-01-19/eng) |

### Licence-law timing warning

Directive (EU) 2025/2205 entered into force in November 2025, but most national measures apply from **26 November 2029**. Likewise, the new EU recognition mechanism for certain driving disqualifications is generally not applicable until that date. Do not present a future mobile EU licence or new disqualification process as a current learner rule. Sources: [Commission implementation summary](https://transport.ec.europa.eu/news-events/news/modernised-eu-rules-driving-licences-and-driving-disqualifications-enter-force-2025-11-25_en), [Directive (EU) 2025/2205](https://eur-lex.europa.eu/eli/dir/2025/2205/oj/eng), and [Directive (EU) 2025/2206](https://eur-lex.europa.eu/eli/dir/2025/2206/oj/eng).

## Rules that must stay country-specific

The variability is the learning objective: users should know what to re-check before each border, not memorize a false continental default.

| Topic | Verified examples showing the variation | Product rule |
|---|---|---|
| Side of road | Within the EU, Cyprus, Ireland and Malta drive on the left; the other EU countries drive on the right. Ireland's official page says enter a roundabout by turning left. The UK also keeps left. | Give this card a country or explicit EU scope. Include a “reset after every stop/turn” hazard card for opposite-side driving as safety advice, not law. Sources: [Your Europe](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm), [Ireland country page](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/ireland/index_en.htm), [UK Highway Code rule 160](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203). |
| Alcohol | Czechia: 0.0 mg/ml for standard, novice and professional drivers. France: 0.5 standard, 0.2 novice; bus/coach drivers also 0.2. Germany: 0.5 standard with zero alcohol for probationary/under-21 drivers. Ireland: 0.5 standard, 0.2 novice and professional. Italy: 0.5 standard, 0.0 novice and professional. | Never publish “the European alcohol limit.” Store driver class as part of the rule. Safest advice card: do not drink at all when driving. Sources: official national-authority data on [Czechia](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/czechia/index_en.htm), [France](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/france/index_en.htm), [Germany](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/germany/index_en.htm), [Ireland](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/ireland/index_en.htm), and [Italy](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/italy/index_en.htm). |
| Speed | The Commission says motorway limits are mostly 120 or 130 km/h, but Germany has no general motorway limit and recommends 130 km/h; posted local limits still apply. Ireland changed many rural local-road defaults from 80 to 60 km/h on 7 February 2025. France also applies lower limits in rain and low visibility. | A speed card needs country, road class, vehicle class, conditions, effective date, and “unless posted otherwise.” Sources: [Commission - Speed limits](https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-road-use/safe-speed/archive/speeding/speed-limits_en), [Ireland RSA 2025 change](https://www.rsa.ie/road-safety/campaigns/rural-speed-limit), and [France country page](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/france/index_en.htm). |
| Required equipment | France lists a warning triangle and reflective vest/jacket. Germany lists a first-aid kit, warning triangle and reflective vest. Italy lists a reflective vest and warning triangle. Czechia lists a first-aid kit. | A single “European car kit” answer is unsafe. Make equipment a checklist per destination **and transit country**. Sources: the same official [France](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/france/index_en.htm), [Germany](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/germany/index_en.htm), [Italy](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/italy/index_en.htm), and [Czechia](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/czechia/index_en.htm) pages. |
| Lights and winter tyres/chains | Italy and Czechia require daytime running lights in the circumstances stated by their national pages. Czechia gives a seasonal/conditions-based winter-tyre rule; France ties its 1 November-31 March mountain rule to posted zones; Germany requires winter tyres under its stated conditions. | Split `daytime lights`, `winter tyres`, and `chains` into separate country cards. Include season/conditions/posted-zone fields. Sources: the same country pages. |
| Tolls and low-emission rules | Your Europe country pages expressly direct travellers to national sites for current vignettes, emission stickers and road tolls. | Treat as fast-changing travel logistics, not timeless rules. Use a prominent verification date and national link. Source: [Your Europe country selector](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm). |

Country pages on Your Europe contain data supplied by national authorities under the cross-border-enforcement framework, but the Commission disclaims responsibility and advises checking national sites for the latest rules. They are strong orientation sources; a launch country pack should still be signed off against that country's current highway code or road authority.

## Road signs and roundabouts

### Signs

Many European countries use a familiar Vienna-Convention-derived visual vocabulary, but this is not an EU-wide traffic-sign code and implementation is not identical. UNECE publishes the [1968 Convention on Road Signs and Signals and the European supplement](https://unece.org/transport/publications/convention-road-signs-and-signals-1968-european-agreement-supplementing). Use a shared signs deck only as **recognition/orientation**; put exact legal meaning, variants, road markings and exceptions in national packs.

Safe shared sign-card targets are the high-recognition concepts displayed in the convention system: STOP, GIVE WAY/YIELD, no entry, speed limit, compulsory direction, one-way traffic, road works, slippery road, two-way traffic and strong crosswind. Each visual asset should record its source/licence and should not be copied from the commercial handbook.

### Roundabouts

Roundabout direction follows the side of the road, and priority/signalling details remain national:

- Ireland drives left, enters a roundabout by turning left and yields to traffic already circulating from the right. Source: [Ireland road rules](https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/ireland/index_en.htm).
- France drives right; at a signed `giratoire`, entering traffic yields to traffic from the left already on it. France otherwise retains priority-to-the-right at many intersections. Source: [French national road-safety observatory - Code de la route](https://www.onisr.securite-routiere.gouv.fr/politique-de-securite-routiere/code-de-la-route).
- The UK keeps left and normally gives priority to traffic approaching from the right, unless signs, markings or signals direct otherwise. Source: [UK Highway Code rules 184-190](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203).

Therefore the common card should say: **slow, choose the correct lane early, follow signs/markings/signals, yield as the local rule requires, watch for cyclists and pedestrians, and signal according to the country rule.** Direction, lane choice, signalling and priority examples must display the country badge.

## Tunnel safety: limited shared cards

Directive 2004/54/EC covers tunnels longer than 500 m on the Trans-European Road Network, not every tunnel in Europe. Within that scope:

- Passenger cars should normally maintain at least a **two-second** gap; heavy-goods vehicles should double it.
- When traffic stops, leave at least **5 m** to the vehicle ahead unless an emergency stop makes that impossible.
- Emergency exits allow users to leave vehicles and reach safety. An emergency station containing a phone/extinguisher is **not a fire shelter**; follow signed escape routes.
- The harmonised tunnel sign system marks lay-bys, emergency stations, exits, exit distances, lane status and hazards.

Source for all four: [Directive 2004/54/EC, Annex I §§2.3, 2.10 and 3.9; Annex III](https://eur-lex.europa.eu/eli/dir/2004/54/2009-08-07/eng). Present these as TEN-T tunnel safety guidance and pair them with “obey the posted tunnel rules.”

## Recommended flashcard curriculum

### EU travel baseline pack

1. Scope: EU is not Europe; there is no single European road code.
2. Border reset: side of road, speed, alcohol, equipment, lights/winter rules, tolls/emission zones.
3. Belts and child restraints.
4. Hand-held phone prohibition and distraction.
5. Licence validity, EU recognition, provisional/non-EU caveats.
6. Registration and insurance documents.
7. 112 and eCall.
8. Crash abroad and foreign fines.
9. Shared sign recognition, explicitly non-exhaustive.
10. Tunnel gap, stopped gap, exits and emergency stations.

### Country-pack template

Each country pack should follow the same order so a user can compare countries without mixing them:

1. Side of road and cockpit adaptation.
2. Speed by road/vehicle/conditions.
3. Alcohol by driver class; drugs/medication.
4. Junction and roundabout priority/signalling.
5. Signs, signals and road markings unique to or important in that country.
6. Required vehicle equipment, daytime lights, winter tyres and chains.
7. Seat/child-restraint national details and vulnerable-road-user rules.
8. Motorway, emergency lane, breakdown and tunnel behaviour.
9. Parking, restricted/low-emission zones, tolls and vignettes.
10. Emergency and collision steps; official source links.

Recommended law-dependent card fields:

```js
{
  jurisdiction: "EU" | "FR" | "DE" | "IE" | "...",
  status: "law" | "official-guidance",
  sourceTitle: "...",
  sourceUrl: "https://...",
  verifiedAt: "YYYY-MM-DD",
  effectiveFrom: "YYYY-MM-DD" | null,
  effectiveTo: "YYYY-MM-DD" | null,
  appliesTo: ["standard-driver", "passenger-car", "..."],
  conditions: ["wet", "built-up", "posted-zone", "..."],
}
```

This metadata should live inside the Europe content module, not in the California data. The UI should always show an EU/country badge on the card and should never combine progress, filters, card counts or storage keys across those products unless the user explicitly navigates to a global dashboard later.

## Review of the attached handbook

The PDF is Julian Parish's *The Essential Guide to Driving in Europe: Drive Safely and Stay Legal in 50 Countries* (148 scanned pages). Its strongest reusable ideas are structural:

- a general “driving abroad” foundation followed by independent country sections;
- consistent country checklists for speed, alcohol, equipment and tolls;
- visual sign cards;
- dedicated winter, city, towing, tunnel/mountain and emergency topics;
- repeated reminders to obey local signs and re-check national authorities.

Do not copy its wording, tables, photography or illustrations. More importantly, do not trust its numeric rules: the publisher says the edition was updated in 2018; the PDF still describes the EU as 28 states, and rules have demonstrably changed since then (Ireland's rural-speed change is one example). Use it only to inspire navigation and topic coverage.

## Content QA and update policy

- Every country pack should have an owner and a visible “last verified” date.
- Re-check all country rules before launch, then on a scheduled cadence and whenever an official source announces a change.
- A card with an expired/unknown source date should be hidden or marked “verify before travel,” not silently served as current law.
- Keep exact legal values in data rather than prose embedded in templates; this makes a country rule replaceable without touching other packs.
- Unit-test that every country-dependent card has a country jurisdiction and official source, and that California and Europe use separate module paths, route state, storage keys and progress records.
