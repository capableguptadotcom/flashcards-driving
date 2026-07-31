(() => {
  "use strict";

  const sources = {
    roadRules: {
      short: "Your Europe · road rules",
      title: "Road rules and safety",
      url: "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/index_en.htm"
    },
    licence: {
      short: "Your Europe · licence & insurance",
      title: "Driving licence and insurance when travelling abroad",
      url: "https://europa.eu/youreurope/citizens/travel/driving-abroad/driving-licence-and-insurance/index_en.htm"
    },
    exchange: {
      short: "Your Europe · licence recognition",
      title: "Driving licence exchange and recognition in the EU",
      url: "https://europa.eu/youreurope/citizens/vehicles/driving-licence/driving-licence-exchange-recognition/index_en.htm"
    },
    seatBelts: {
      short: "European Commission · seat belts",
      title: "Seat belts",
      url: "https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-vehicles/seat-belts_en"
    },
    childRestraints: {
      short: "EUR-Lex · child restraints",
      title: "Consolidated Directive 91/671/EEC",
      url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:01991L0671-20140320"
    },
    emergency112: {
      short: "European Commission · 112",
      title: "112: EU emergency number",
      url: "https://digital-strategy.ec.europa.eu/en/policies/112"
    },
    ecall: {
      short: "Your Europe · eCall",
      title: "eCall: emergency call system for road accidents",
      url: "https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency-assistance-vehicles-ecall/index_en.htm"
    },
    registration: {
      short: "Your Europe · registration",
      title: "Car registration documents and formalities",
      url: "https://europa.eu/youreurope/citizens/vehicles/registration/formalities/index_en.htm"
    },
    insurance: {
      short: "Your Europe · insurance validity",
      title: "Car insurance validity in the EU",
      url: "https://europa.eu/youreurope/citizens/vehicles/insurance/validity/index_en.htm"
    },
    accident: {
      short: "Your Europe · crash abroad",
      title: "Car insurance cover abroad",
      url: "https://europa.eu/youreurope/citizens/vehicles/insurance/accident/index_en.htm"
    },
    enforcement: {
      short: "EUR-Lex · cross-border enforcement",
      title: "Directive (EU) 2015/413 on cross-border enforcement",
      url: "https://eur-lex.europa.eu/eli/dir/2015/413/2025-01-19/eng"
    },
    tunnels: {
      short: "EUR-Lex · tunnel safety",
      title: "Directive 2004/54/EC on tunnel safety",
      url: "https://eur-lex.europa.eu/eli/dir/2004/54/2009-08-07/eng"
    },
    distraction: {
      short: "European Commission · distraction",
      title: "Road safety: distraction",
      url: "https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-road-use/archive/distraction_en"
    },
    alcohol: {
      short: "European Commission · alcohol",
      title: "Road safety: alcohol",
      url: "https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-road-use/alcohol_en"
    },
    fatigue: {
      short: "European Commission · fatigue",
      title: "Road safety: fatigue",
      url: "https://road-safety.transport.ec.europa.eu/european-road-safety-observatory/statistics-and-analysis-archive/fatigue/fatigue_en"
    },
    vulnerable: {
      short: "European Commission · vulnerable users",
      title: "Pedestrians and cyclists",
      url: "https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-road-use/cyclists/pedestrians-and-cyclists_en"
    }
  };

  const decks = [
    { id: "documents", short: "Documents", name: "Documents that travel", description: "Licences, registration, insurance and the papers that survive a border.", icon: "▤", color: "#2f6c62" },
    { id: "borders", short: "Borders", name: "The border reset", description: "What follows you across the EU—and what must be checked again.", icon: "↔", color: "#b75a3a" },
    { id: "signals", short: "Signs", name: "Signs without assumptions", description: "Read shared visual cues while respecting national meanings.", icon: "△", color: "#2f6090" },
    { id: "junctions", short: "Junctions", name: "Junctions and priority", description: "Roundabouts, trams, crossings and other country-dependent decisions.", icon: "⟳", color: "#8b6740" },
    { id: "speed", short: "Speed", name: "Speed, space and focus", description: "Local limits, sober choices, attention and safe following space.", icon: "80", color: "#a3473d" },
    { id: "people", short: "People", name: "People outside and inside", description: "Belts, child restraints and room for vulnerable road users.", icon: "◎", color: "#4c7042" },
    { id: "motorways", short: "Motorways", name: "Motorways and tunnels", description: "Tolls, equipment, tunnel gaps and escape routes.", icon: "⇈", color: "#3f5c79" },
    { id: "conditions", short: "Conditions", name: "Weather and mountains", description: "Winter rules, lighting, fatigue and the changing road ahead.", icon: "❄", color: "#467884" },
    { id: "emergencies", short: "Emergency", name: "When the trip goes wrong", description: "112, eCall, collisions, insurers and fines that follow.", icon: "+", color: "#9b493b" }
  ];

  const scopeLabels = { common: "EU baseline", "country-check": "Country check" };
  function jurisdictionFor(scope, countries) {
    if (countries.length) return countries.join(", ");
    return scope === "common" ? "EU" : "Destination country";
  }

  const card = (id, deck, title, scene, answer, why, memory, scope, source, tags, countries = []) => ({
    id,
    deck,
    title,
    scene,
    answer,
    why,
    memory,
    scope,
    scopeLabel: scopeLabels[scope],
    jurisdiction: jurisdictionFor(scope, countries),
    source,
    sourceTitle: sources[source].title,
    sourceUrl: sources[source].url,
    verifiedAt: "2026-07-31",
    tags,
    countries
  });

  const cards = [
    card("documents-01", "documents", "The licence in your wallet", "You hold a current driving licence issued by an EU country and plan to drive in another EU country.", "A valid EU-issued licence can be used anywhere in the EU.", "EU countries mutually recognise valid EU licences.", "Valid EU licence: recognised EU-wide.", "common", "licence", ["licence", "documents", "EU"]),
    card("documents-02", "documents", "Expiry during the holiday", "Your EU licence expires halfway through a three-week road trip.", "Renew it before leaving; once expired, it is invalid and may not be recognised abroad.", "Cross-border recognition depends on the licence still being valid.", "Expiry travels too.", "common", "licence", ["licence", "expiry", "documents"]),
    card("documents-03", "documents", "The provisional border", "A learner with a provisional licence wants to share the driving after crossing into another EU country.", "Do not rely on it: a provisional licence or certificate does not authorise cross-border driving in the EU.", "The EU recognition rule is for full, valid licences—not learner permission.", "Provisional stops at the border.", "common", "licence", ["licence", "provisional", "learner"]),
    card("documents-04", "documents", "Temporary replacement", "Your licence was lost and your home authority issued a temporary replacement document.", "Ask every destination authority before driving; temporary documents are not automatically recognised across the EU.", "A replacement paper is not the same as a mutually recognised licence card.", "Temporary is not automatically portable.", "common", "licence", ["licence", "temporary", "lost"]),
    card("documents-05", "documents", "Licence from outside the EU", "Your licence was issued in Canada and your itinerary crosses three EU countries.", "Check recognition and any permit requirement with each country’s authority or consulate.", "Non-EU licences are governed country by country, not by one EU answer.", "Non-EU licence: ask each stop.", "country-check", "licence", ["licence", "IDP", "non-EU", "border"]),
    card("documents-06", "documents", "The IDP assumption", "You bought an international driving permit and assume it guarantees entry everywhere.", "Do not assume that. IDPs are not regulated at EU level and recognition can differ.", "An IDP may help or be required, but it is not one universal EU permission slip.", "IDP means check, not certainty.", "country-check", "exchange", ["licence", "IDP", "documents"]),
    card("documents-07", "documents", "Two EU licences", "After moving, you wonder whether to keep both your old and new EU driving licences.", "You may hold only one EU driving licence at a time.", "The common recognition system is built around a single licence record.", "One driver, one EU licence.", "common", "exchange", ["licence", "move", "numbers"]),
    card("documents-08", "documents", "Moving, not touring", "You move to another EU country and your existing EU licence remains valid.", "You normally do not have to exchange it immediately, though specific residence, validity or offence rules can trigger exchange.", "Touring and residence are different legal situations; the host-country rules matter after a move.", "Move: recognise first, check exchange triggers.", "common", "exchange", ["licence", "residence", "exchange"]),
    card("documents-09", "documents", "The registration folder", "You take your own car abroad but leave its registration certificate at home.", "Carry the vehicle registration certificate when travelling abroad.", "Authorities may need proof that connects the vehicle to its registration.", "Car crosses border; registration crosses too.", "common", "registration", ["registration", "documents", "vehicle"]),
    card("documents-10", "documents", "A two-part certificate", "Your vehicle registration certificate has two parts and you want to minimise the originals you carry.", "For travel, carrying Part I is sufficient under the EU guidance.", "The travel requirement does not require both parts of a two-part certificate.", "Two parts at home; Part I on the road.", "common", "registration", ["registration", "documents", "part I"]),
    card("documents-11", "documents", "Liability cover crosses", "Your car is registered and compulsorily insured in one EU country. You enter another.", "Compulsory third-party liability cover remains valid throughout the EU.", "The common cover protects other people’s injury and property claims across EU borders.", "Liability travels across the EU.", "common", "insurance", ["insurance", "liability", "border"]),
    card("documents-12", "documents", "Comprehensive is not common", "Your policy is called “comprehensive” at home, so you assume every benefit applies abroad.", "Read the policy. Optional cover has no uniform EU rules and may be limited by place, time, distance or risk.", "EU portability guarantees compulsory liability, not every optional promise.", "Liability travels; extras need reading.", "country-check", "insurance", ["insurance", "comprehensive", "rental"]),

    card("borders-01", "borders", "The side-of-road trio", "You leave continental Europe for Ireland, Cyprus or Malta.", "Reset to driving on the left in those three EU countries; the other EU countries drive on the right.", "The driving side changes the whole visual scan at junctions and roundabouts.", "Ireland, Cyprus, Malta: left.", "country-check", "roadRules", ["left", "right", "border", "countries"], ["Ireland", "Cyprus", "Malta"]),
    card("borders-02", "borders", "The border board", "A motorway crosses an open border with barely a pause.", "Treat the border as a rules reset even when there is no checkpoint.", "Speed, alcohol, equipment, lighting, winter and access rules remain national.", "Open border, fresh rulebook.", "country-check", "roadRules", ["border", "speed", "equipment"]),
    card("borders-03", "borders", "Yesterday’s speed", "The road looks identical on both sides of the border.", "Re-check the destination’s speed limits by road and vehicle type; yesterday’s limit does not travel.", "EU countries set their own speed rules.", "Same asphalt, new limit.", "country-check", "roadRules", ["speed", "border", "vehicle"]),
    card("borders-04", "borders", "One drink, two laws", "A drink was within the limit where lunch began; you cross a border before dinner.", "Do not carry the old limit across. Blood-alcohol limits—and stricter limits for some drivers—vary nationally.", "Legal at the first table can be illegal on the next road.", "Alcohol limit resets at borders.", "country-check", "roadRules", ["alcohol", "BAC", "border"]),
    card("borders-05", "borders", "The equipment bag", "Your triangle and vest met yesterday’s rules.", "Check the next country’s required in-car equipment before entry.", "Triangles, reflective clothing, first-aid kits and extinguishers are national requirements.", "Pack for the next flag.", "country-check", "roadRules", ["equipment", "vest", "triangle"]),
    card("borders-06", "borders", "Lights at noon", "The sun is bright and your destination sign has just passed.", "Check that country’s daytime-running-light or headlight rule.", "Daytime and winter lighting duties are not uniform across the EU.", "Daylight does not answer the lighting law.", "country-check", "roadRules", ["lights", "DRL", "border"]),
    card("borders-07", "borders", "A warm road to winter rules", "The road is dry, but the calendar and destination have changed.", "Check destination rules for winter tyres and snow chains before continuing.", "Some rules are triggered by dates, conditions, locations or signs.", "Winter law has a map and a calendar.", "country-check", "roadRules", ["winter", "tyres", "chains"]),
    card("borders-08", "borders", "Vignette before the ramp", "Navigation sends you straight from a free road onto a foreign motorway.", "Check toll, vignette and payment rules before joining.", "Road charging is national and sometimes requires action before use.", "Pay before the lane, not after the fine.", "country-check", "roadRules", ["toll", "vignette", "motorway"]),
    card("borders-09", "borders", "The clean-looking city", "Your car meets home emission rules, and a foreign city centre is ahead.", "Check the city’s low-emission zone, registration and sticker requirements.", "Vehicle access schemes can be local even within one country.", "Clean-zone entry needs a local check.", "country-check", "roadRules", ["LEZ", "emissions", "city"]),
    card("borders-10", "borders", "The number plate proof", "Police ask about compulsory insurance while you are abroad in your EU-registered car.", "The number plate normally serves as proof, but carrying the insurance papers makes checks and crashes easier.", "Portable cover and easy proof are different questions.", "Plate proves; papers smooth.", "common", "licence", ["insurance", "documents", "plate"]),
    card("borders-11", "borders", "A fine after the ferry", "You trigger a camera abroad and return home before hearing anything.", "Do not assume it vanished. Registration information can be exchanged and a fine may arrive by post.", "Cross-border enforcement can follow the registered keeper home.", "The border does not erase the camera.", "common", "enforcement", ["fine", "camera", "enforcement"]),
    card("borders-12", "borders", "Whose law applies", "A notice arrives for an offence committed in another EU country.", "The law of the country where the offence occurred governs the offence and sanction.", "Your home rules do not replace the host country’s road law.", "Offence place sets the rule.", "common", "enforcement", ["fine", "law", "border"]),

    card("signals-01", "signals", "No single sign book", "A familiar-looking sign appears just after a border.", "Use the sign as a cue, then apply the destination’s official meaning; there is no general EU-wide road code.", "Similar visual language does not guarantee identical legal detail.", "Recognise broadly; verify locally.", "country-check", "roadRules", ["signs", "border", "meaning"]),
    card("signals-02", "signals", "The country selector", "You want to learn signs for tomorrow’s route tonight.", "Use the official EU country page, then follow through to the national authority for the latest detail.", "The EU map separates national rules rather than flattening them.", "Choose the flag before the sign.", "country-check", "roadRules", ["signs", "research", "country"]),
    card("signals-03", "signals", "Roundabout arrows", "The roundabout sign looks familiar, but you are unsure who has priority.", "Slow down and read the local priority signs and markings; roundabout priority details belong to national rules.", "The circle’s shape does not answer every give-way decision.", "Roundabout: read the signs, not your habit.", "country-check", "roadRules", ["roundabout", "priority", "signs"]),
    card("signals-04", "signals", "A red light and an arrow", "A supplementary arrow appears beside a red signal in an unfamiliar country.", "Do not transfer your home-country rule. Follow the destination’s signal law and the exact sign.", "Turns at red and arrow permissions are country-specific.", "Red plus arrow: local meaning only.", "country-check", "roadRules", ["signal", "arrow", "red"]),
    card("signals-05", "signals", "Parking colours", "A kerb colour and a small parking plate look almost like the system at home.", "Stop and decode the posted local restriction before leaving the car.", "Parking colours, discs, zones and time plates vary.", "Familiar paint can carry foreign rules.", "country-check", "roadRules", ["parking", "signs", "kerb"]),
    card("signals-06", "signals", "The zone entrance", "A sign at the edge of a town shows several restrictions in one panel.", "Treat it as a zone rule that may continue until an end sign, and verify the national convention.", "Zone signs often govern more than the first street.", "Zone sign: remember the exit sign.", "country-check", "roadRules", ["zone", "signs", "city"]),
    card("signals-07", "signals", "The tunnel mouth", "You enter a long tunnel on the Trans-European Road Network.", "Look for the harmonised tunnel signs for safety facilities, exits, lane status and hazards.", "Covered tunnels use a consistent safety-sign system to help international drivers.", "Tunnel signs are your escape map.", "common", "tunnels", ["tunnel", "signs", "TEN-T"]),
    card("signals-08", "signals", "Two arrows to safety", "Smoke is ahead and an emergency-exit sign shows arrows in both directions.", "Follow the nearer signed exit and its distance; covered tunnels mark the two nearest exits.", "The signs are designed to guide users out on foot when visibility and time matter.", "Two arrows; choose the nearer escape.", "common", "tunnels", ["tunnel", "exit", "emergency"]),
    card("signals-09", "signals", "The green recess", "You see an emergency-station sign and assume the recess is a fire shelter.", "Do not shelter there. Emergency stations hold communication or firefighting equipment but are not fire-safe refuges.", "Safety comes from using a signed exit to reach a safe place.", "Station has tools; exit has safety.", "common", "tunnels", ["tunnel", "emergency station", "fire"]),
    card("signals-10", "signals", "The red lane cross", "A red cross appears over your lane inside a tunnel.", "Leave or avoid the closed lane as directed by the lane-control signal.", "Covered tunnels use lane-status signs to move traffic away from danger.", "Red cross: lane closed.", "common", "tunnels", ["tunnel", "lane", "signal"]),
    card("signals-11", "signals", "A variable warning", "An electronic panel changes as you approach a tunnel incident.", "Obey the live message even if your navigation or memory says otherwise.", "Variable signs carry current hazard and lane information.", "Live sign beats saved route.", "common", "tunnels", ["tunnel", "variable sign", "hazard"]),
    card("signals-12", "signals", "Police over paint", "A police officer directs traffic differently from the normal lane signs.", "Follow the officer’s direction, then resume reading the posted local system.", "Real-time traffic control exists to manage the immediate scene.", "Person directing beats routine pattern.", "country-check", "roadRules", ["police", "signs", "directions"]),

    card("junctions-01", "junctions", "Priority from the right?", "An unsigned side street joins from your right in a country you have just entered.", "Do not guess from your home rule; learn that country’s default priority before driving there.", "Default priority at unsigned junctions is national law.", "Unsigned junction: local default first.", "country-check", "roadRules", ["junction", "priority", "right"]),
    card("junctions-02", "junctions", "Entering the circle", "Cars are already circulating and your approach has unfamiliar markings.", "Slow enough to read the give-way signs, lane arrows and local roundabout rule.", "Circulating priority and lane behaviour cannot be assumed EU-wide.", "Circle ahead: slow, sign, lane.", "country-check", "roadRules", ["roundabout", "give way", "lane"]),
    card("junctions-03", "junctions", "Leaving the circle", "You need the third exit from a multi-lane roundabout.", "Use the destination’s lane and signalling convention; position early and never cut across a vehicle beside you.", "Local rules decide the expected signal and lane; space prevents the conflict.", "Plan the exit before the circle.", "country-check", "roadRules", ["roundabout", "signal", "exit"]),
    card("junctions-04", "junctions", "Tram tracks cross", "A tram approaches a junction where your light and its track seem to conflict.", "Expect special local priority rules and obey the signals controlling your movement.", "Tram priority varies and the vehicle cannot steer around you.", "Tracks mean check the tram rule.", "country-check", "roadRules", ["tram", "junction", "priority"]),
    card("junctions-05", "junctions", "A zebra with local stripes", "A pedestrian waits beside a marked crossing abroad.", "Approach ready to stop and follow the destination’s yielding rule; do not assume your home threshold.", "Crossing duties and markings are national, while the person remains vulnerable everywhere.", "Marked crossing: lose speed, gain time.", "country-check", "vulnerable", ["pedestrian", "crossing", "yield"]),
    card("junctions-06", "junctions", "Cycle lane through the turn", "You turn across a cycle track at a city junction.", "Check mirrors and blind spot, slow, and apply the local priority rule before crossing the track.", "Cyclists are unprotected and may approach faster than a walking scan expects.", "Across a cycle track: look twice.", "country-check", "vulnerable", ["cyclist", "turn", "blind spot"]),
    card("junctions-07", "junctions", "The filter light", "A small signal illuminates for one direction while the main signal remains red.", "Move only if the local signal meaning clearly permits your path, while yielding as required.", "Filter-signal details are part of the national code.", "Filter means permission with conditions.", "country-check", "roadRules", ["filter", "signal", "junction"]),
    card("junctions-08", "junctions", "The flashing signal", "The main light at a junction flashes instead of cycling normally.", "Slow and apply the destination’s rule for that flash pattern; be ready for priority signs or manual control.", "Flashing colours do not have one guaranteed EU-wide instruction.", "Flashing signal: local rule, low speed.", "country-check", "roadRules", ["flashing", "signal", "priority"]),
    card("junctions-09", "junctions", "Emergency vehicle behind", "Blue lights and a siren close from behind in city traffic.", "Make room safely under local law without entering danger or blindly crossing a red light.", "Countries specify how emergency corridors and signal exceptions work.", "Create space, not a second emergency.", "country-check", "roadRules", ["emergency vehicle", "siren", "corridor"]),
    card("junctions-10", "junctions", "The yellow box", "A painted junction box resembles one you know from home.", "Confirm the local marking rule and enter only when your exit and path are genuinely available.", "Markings may look transferable while the legal exceptions differ.", "Clear exit before painted box.", "country-check", "roadRules", ["box junction", "marking", "traffic"]),
    card("junctions-11", "junctions", "Merging lanes", "Two lanes narrow to one and drivers alternate near the closure.", "Follow the posted merge instruction and local convention; signal and leave a predictable gap.", "Zipper-merge duties and expected timing vary by country.", "Merge by sign, not by pride.", "country-check", "roadRules", ["merge", "zipper", "lane"]),
    card("junctions-12", "junctions", "Overtake on which side?", "A slower vehicle is ahead just after you changed driving sides.", "Reset your overtaking side and lane discipline to the destination before attempting any pass.", "Driving side changes the normal passing lane and every mirror sequence.", "New side, new passing side.", "country-check", "roadRules", ["overtake", "left", "right"]),

    card("speed-01", "speed", "The national-limit icon", "A border sign lists town, rural-road and motorway symbols with numbers.", "Read and remember those destination limits, then keep watching for posted exceptions.", "Speed limits are national and can change by road type.", "Border numbers start the speed map.", "country-check", "roadRules", ["speed", "numbers", "border"]),
    card("speed-02", "speed", "Same road, different vehicle", "You tow a caravan on a road whose car limit you know.", "Check the destination limit for your vehicle and trailer combination.", "National limits can depend on vehicle type, weight, licence status or towing.", "Know the limit for your rig.", "country-check", "roadRules", ["speed", "trailer", "vehicle"]),
    card("speed-03", "speed", "Rain changes the number", "Rain begins on a motorway and the posted sign has not changed.", "Check whether the country applies a lower weather limit, and in every case choose a speed that preserves control and sight distance.", "Some national systems change legal limits with conditions.", "Weather can lower law and grip.", "country-check", "roadRules", ["speed", "rain", "weather"]),
    card("speed-04", "speed", "A novice sticker", "You are newly licensed and driving abroad with an experienced friend.", "Check whether the destination has lower novice limits or special identification rules.", "Driver-status restrictions are national.", "New driver: check the smaller print.", "country-check", "roadRules", ["speed", "novice", "licence"]),
    card("speed-05", "speed", "Miles meet kilometres", "Your speedometer emphasises mph while every roadside limit is in km/h.", "Set a clear km/h display or learn the needed conversions before moving.", "A correct rule is useless if the driver reads the wrong unit.", "Match the dashboard to the sign.", "country-check", "roadRules", ["speed", "km/h", "mph", "numbers"]),
    card("speed-06", "speed", "The safest alcohol target", "You do not know the destination’s legal alcohol limit.", "Choose zero alcohol before driving and verify the local limit rather than estimating.", "Driving skills deteriorate at low alcohol levels, and national limits differ.", "Unknown limit? Zero is portable.", "common", "alcohol", ["alcohol", "BAC", "safety"]),
    card("speed-07", "speed", "Legal is not unimpaired", "A small drink may be under the local limit, but you feel its effect.", "Do not drive. A legal ceiling is not a promise of safe performance.", "Alcohol harms detection, reaction, attention and judgement before a driver feels incapable.", "Below the limit can still be below your best.", "common", "alcohol", ["alcohol", "impairment", "reaction"]),
    card("speed-08", "speed", "The phone in hand", "Traffic slows and you lift the phone for a quick message.", "Put it away. Hand-held phone use while driving is forbidden in all EU countries.", "A queue is still driving, and visual, manual and mental attention all matter.", "Stopped in traffic is not parked.", "common", "roadRules", ["phone", "hand-held", "distraction"]),
    card("speed-09", "speed", "Hands-free, mind elsewhere", "A hands-free call becomes complicated while the road becomes unfamiliar.", "End the call or pull over safely; hands-free does not remove cognitive distraction.", "Attention can leave the road even when both hands stay on the wheel.", "Hands-free is not mind-free.", "common", "distraction", ["phone", "hands-free", "attention"]),
    card("speed-10", "speed", "Program the route", "You need to change a long navigation route after missing an exit.", "Wait for a safe stopping place before reprogramming it.", "Navigation can take eyes, hands and thought away from traffic.", "Set the route while stopped.", "common", "distraction", ["satnav", "navigation", "distraction"]),
    card("speed-11", "speed", "Seventeen hours awake", "An overnight ferry delay leaves you awake for roughly 17 hours before a long drive.", "Rest before driving; official EU safety research compares that fatigue risk with about 0.05 BAC.", "Fatigue slows and distorts driving even without alcohol.", "Long awake can drive like drink.", "common", "fatigue", ["fatigue", "sleep", "numbers"]),
    card("speed-12", "speed", "The tunnel interval", "You follow another car through a covered TEN-T tunnel in normal moving traffic.", "Keep at least the distance travelled in two seconds.", "The common tunnel baseline preserves reaction space where escape and access are constrained.", "Tunnel moving gap: two seconds.", "common", "tunnels", ["tunnel", "following", "numbers"]),

    card("people-01", "people", "Every fitted belt", "A rear passenger says the belt rule is only for the front seats.", "Everyone must use a seat belt in any seat fitted with one.", "The EU-wide rule follows the fitted belt, not the row.", "Fitted belt, fastened person.", "common", "seatBelts", ["seat belt", "passenger", "rear"]),
    card("people-02", "people", "The short coach ride", "You board a coach for a short transfer and a belt is fitted.", "Wear it. The EU belt rule extends to coaches and minibuses when seats have belts.", "Trip length and vehicle size do not switch off the restraint.", "Coach belt fitted? Click it.", "common", "seatBelts", ["seat belt", "coach", "minibus"]),
    card("people-03", "people", "The child’s adult belt", "A child is too small for the adult belt to fit correctly.", "Use an appropriate approved child restraint under the destination’s exact height and age rules.", "EU law sets a child-restraint baseline while allowing a national height option.", "Small passenger, proper restraint.", "common", "childRestraints", ["child", "restraint", "height"]),
    card("people-04", "people", "150 or 135 centimetres", "You read two different child-restraint cutoffs for two EU countries.", "That can be correct: the EU baseline is under 150 cm, while countries may allow adult belts from 135 cm.", "The directive deliberately leaves a national option, so the destination must be checked.", "Child cutoff: country check between 135 and 150.", "country-check", "childRestraints", ["child", "height", "numbers"]),
    card("people-05", "people", "Rear-facing in front", "A rear-facing child seat is fitted in the front passenger seat with the airbag active.", "Do not use that setup; deactivate the frontal airbag as instructed or move the restraint to a suitable seat.", "An active airbag can strike the rear-facing restraint with severe force.", "Rear-facing plus active airbag: never.", "common", "childRestraints", ["child", "airbag", "rear-facing"]),
    card("people-06", "people", "A restraint from home", "You take a child seat across the EU.", "Confirm that it is approved, appropriate for the child and accepted under the destination’s rules.", "The shared duty is appropriate restraint; installation and local details still matter.", "Approved, fitted, destination-checked.", "country-check", "childRestraints", ["child", "restraint", "approval"]),
    card("people-07", "people", "The cyclist beside the truck", "A cyclist rides beside a large vehicle approaching a turn.", "Do not squeeze into the blind-side conflict; hold back or create clear separation.", "Cyclists lack crash protection and large vehicles have serious blind zones.", "Beside a truck is not a safe pocket.", "common", "vulnerable", ["cyclist", "truck", "blind spot"]),
    card("people-08", "people", "Passing a bicycle", "You want one Europe-wide minimum passing distance.", "Check the destination’s law and wait until you can leave genuinely safe space.", "Overtaking-distance rules vary; the cyclist’s vulnerability does not.", "Local minimum, generous reality.", "country-check", "roadRules", ["cyclist", "overtake", "distance"]),
    card("people-09", "people", "Helmet expectations", "Cyclists around you wear different equipment after a border.", "Check the national rules for helmets, visibility and bicycle equipment.", "Countries add different requirements beyond common bicycle safety features.", "Cycle kit follows the country.", "country-check", "roadRules", ["cyclist", "helmet", "equipment"]),
    card("people-10", "people", "The pedestrian in rain", "A dark-clothed pedestrian is near a crossing on a wet evening.", "Reduce speed, widen your scan and be ready to stop.", "People outside vehicles are unprotected, and low visibility shortens your decision time.", "Poor visibility: grow the safety margin.", "common", "vulnerable", ["pedestrian", "rain", "visibility"]),
    card("people-11", "people", "The motorcycle dot", "A motorcycle looks distant in one mirror before you change lanes.", "Check again and judge its closing speed before moving.", "Powered two-wheelers are smaller, less visible and less protected than cars.", "Small image can mean fast arrival.", "common", "vulnerable", ["motorcycle", "mirror", "lane"]),
    card("people-12", "people", "Opening into a cycle lane", "You park beside a cycle lane and reach for the driver’s door.", "Check mirror and blind spot before opening, and use the far hand if it helps turn your body.", "A door opens directly into an unprotected road user’s path.", "Door opens only after the cycle check.", "common", "vulnerable", ["cyclist", "door", "parking"]),

    card("motorways-01", "motorways", "Toll, vignette or free", "Three motorway routes look equally fast on the map.", "Check each country’s charging system before choosing: toll booth, electronic toll, vignette or no charge.", "There is no single EU motorway-payment system.", "Route plan includes the payment plan.", "country-check", "roadRules", ["motorway", "toll", "vignette"]),
    card("motorways-02", "motorways", "Digital vignette plate", "A website sells an electronic vignette linked to your registration number.", "Use the official operator, enter the plate and country accurately, and confirm when validity starts.", "A typo or delayed start can make a paid trip appear unpaid.", "Digital toll: plate, start, receipt.", "country-check", "roadRules", ["vignette", "plate", "toll"]),
    card("motorways-03", "motorways", "The emergency kit", "You borrow a car for a cross-border motorway trip.", "Before departure, confirm the destination-required warning and visibility equipment is present and reachable.", "Required equipment varies by country and is useless if buried outside reach during an emergency.", "Check the kit before the key.", "country-check", "roadRules", ["equipment", "triangle", "vest"]),
    card("motorways-04", "motorways", "A 600-metre TEN-T tunnel", "You enter a 600 m tunnel on the Trans-European Road Network.", "The EU tunnel-safety minimums apply because the covered network threshold is over 500 m.", "The directive has a specific network and length scope; it is not every tunnel in Europe.", "TEN-T plus over 500 m: covered tunnel.", "common", "tunnels", ["tunnel", "TEN-T", "numbers"]),
    card("motorways-05", "motorways", "A short local tunnel", "You enter a 300 m town tunnel and recall the EU tunnel directive.", "Follow all local signs, but do not claim the directive’s exact scope for this tunnel.", "The common EU minimum specifically covers TEN-T tunnels over 500 m.", "Common tunnel rule has a boundary.", "country-check", "tunnels", ["tunnel", "scope", "numbers"]),
    card("motorways-06", "motorways", "Traffic stops underground", "A queue comes to a complete stop in a covered tunnel.", "Leave at least 5 metres to the vehicle ahead unless the emergency stop makes that impossible.", "The gap gives access, manoeuvring room and distance from a developing incident.", "Tunnel stopped gap: five metres.", "common", "tunnels", ["tunnel", "stopped", "numbers"]),
    card("motorways-07", "motorways", "Smoke beyond the bonnet", "A vehicle catches fire ahead in a tunnel and traffic cannot move.", "Leave the vehicle and use the signed emergency exit to reach a safe place.", "Emergency exits are designed for self-rescue on foot away from heat and smoke.", "Tunnel fire: vehicle behind, exit ahead.", "common", "tunnels", ["tunnel", "fire", "exit"]),
    card("motorways-08", "motorways", "The emergency-station phone", "You stop at an emergency station in a covered tunnel.", "Use its phone or extinguisher if safe, but do not wait there as if it were a shelter.", "The recess contains equipment; it is not built to protect occupants from fire.", "Call there; shelter elsewhere.", "common", "tunnels", ["tunnel", "phone", "extinguisher"]),
    card("motorways-09", "motorways", "Breakdown placement", "Your car loses power on a foreign motorway.", "Follow local breakdown rules: move out of live traffic if possible, make occupants safe, and use the required warning method.", "Hard-shoulder use, triangles, vests and emergency phones differ nationally.", "Breakdown plan follows the place.", "country-check", "roadRules", ["breakdown", "motorway", "vest"]),
    card("motorways-10", "motorways", "The emergency corridor", "Motorway traffic stops and drivers begin moving to the lane edges.", "Learn and follow that country’s emergency-corridor rule; do not occupy the route responders need.", "Corridor timing and lane placement are national.", "Stopped traffic may need an open centre.", "country-check", "roadRules", ["emergency corridor", "motorway", "traffic"]),
    card("motorways-11", "motorways", "Lane discipline after a border", "A wide motorway adds lanes and local drivers return to one side after passing.", "Use the destination’s normal driving lane and overtaking lanes; do not import the layout from the other driving side.", "Lane discipline follows the national side of the road.", "Pass, clear, return locally.", "country-check", "roadRules", ["motorway", "lane", "overtake"]),
    card("motorways-12", "motorways", "Rest area arithmetic", "The itinerary saves time only if you skip planned breaks.", "Change the plan, not your alertness; take a proper break before fatigue degrades the drive.", "Fatigue contributes to a substantial share of crashes and cannot be negotiated with a schedule.", "Arrival time is never worth borrowed alertness.", "common", "fatigue", ["fatigue", "motorway", "break"]),

    card("conditions-01", "conditions", "Winter tyres by calendar", "Roads are clear, but a destination’s winter-rule period has begun.", "Check whether winter tyres are compulsory by date, conditions or region before entry.", "EU countries define winter equipment differently.", "Winter tyre rule: date, weather, place.", "country-check", "roadRules", ["winter", "tyres", "calendar"]),
    card("conditions-02", "conditions", "Chains in the boot", "You carry snow chains and assume carrying them satisfies every rule.", "Check where they must be carried, fitted or used, and obey local chain signs.", "Possession and required use are different national questions.", "Chains count when the local rule says how.", "country-check", "roadRules", ["snow", "chains", "equipment"]),
    card("conditions-03", "conditions", "A closed mountain pass", "Navigation proposes a high pass in winter.", "Verify current official opening and restriction information before committing to the climb.", "Seasonal closures and vehicle restrictions can make a mapped road unavailable.", "Map line is not an open pass.", "country-check", "roadRules", ["mountain", "pass", "winter"]),
    card("conditions-04", "conditions", "Studded tyres at the border", "Your vehicle has winter studs legal at home.", "Check whether the destination permits them and whether dates, speed limits or stickers apply.", "Studded-tyre rules are national and can change at a border.", "Studs need a country check.", "country-check", "roadRules", ["winter", "studded tyres", "speed"]),
    card("conditions-05", "conditions", "Daytime light habit", "Your car’s automatic lights stay off in bright weather.", "Confirm the destination’s daytime-light rule and switch lights manually if needed.", "Automatic settings do not know every national legal trigger.", "Auto lights do not auto-learn borders.", "country-check", "roadRules", ["lights", "DRL", "daytime"]),
    card("conditions-06", "conditions", "Headlamps for the other side", "Your own car is designed for traffic on the opposite side from your destination.", "Adjust or adapt the headlamp beam as required so it does not dazzle oncoming traffic.", "A beam shaped for the other traffic side can throw glare into approaching drivers.", "Change side, check beam.", "country-check", "roadRules", ["headlights", "left", "right"]),
    card("conditions-07", "conditions", "Spray hides the lane", "Heavy motorway spray makes lane markings and brake lights hard to read.", "Increase following space, reduce speed and avoid abrupt inputs.", "Visibility and tyre grip fall together in heavy rain.", "Less view means more room.", "common", "vulnerable", ["rain", "visibility", "following"]),
    card("conditions-08", "conditions", "The crosswind bridge", "A gust hits your loaded car on an exposed bridge.", "Reduce speed smoothly, hold a steady course and leave extra lateral room.", "High-sided vehicles, motorcycles and trailers can move suddenly in crosswinds.", "Wind needs speed off and space on.", "common", "vulnerable", ["wind", "bridge", "motorcycle"]),
    card("conditions-09", "conditions", "The café cannot fix sleep", "Coffee makes you feel sharper after a very short night.", "Treat sleep as the remedy; do not use stimulation as proof that you are fit to continue.", "Fatigue can remain after the feeling of drowsiness briefly lifts.", "Coffee can pause a feeling, not replace sleep.", "common", "fatigue", ["fatigue", "coffee", "sleep"]),
    card("conditions-10", "conditions", "Three kinds of distraction", "You glance at a sign, hold food and think about a missed turn at the same time.", "Recognise visual, manual and cognitive distraction; simplify the task or stop safely.", "Driving attention can be lost through eyes, hands or thought.", "Eyes, hands, mind: keep all three driving.", "common", "distraction", ["distraction", "visual", "manual", "cognitive"]),
    card("conditions-11", "conditions", "Children need attention", "A child in the rear seat needs help while you are moving.", "Pull over in a safe, legal place before dealing with the problem.", "Turning attention and body away creates more risk for everyone in the car.", "Care for passengers while parked.", "common", "distraction", ["distraction", "child", "stop"]),
    card("conditions-12", "conditions", "Rental controls in rain", "Rain begins in an unfamiliar rental car and you cannot find the demister.", "Stop safely and learn the controls instead of searching while moving.", "Good preparation prevents a simple control task becoming visual and manual distraction.", "Unknown control: learn it parked.", "common", "distraction", ["rental", "controls", "rain"]),

    card("emergencies-01", "emergencies", "One-one-two", "A serious crash happens in an unfamiliar EU country and you do not know the national number.", "Call 112 from a fixed or mobile phone.", "112 is the free EU-wide emergency number for police, ambulance and fire services.", "EU emergency: 112.", "common", "emergency112", ["112", "emergency", "numbers"]),
    card("emergencies-02", "emergencies", "National number or 112", "A local sign lists another emergency number.", "You may use the national number, but 112 also works throughout the EU.", "112 coexists with national emergency numbers in many countries.", "Local can coexist; 112 crosses.", "common", "emergency112", ["112", "emergency", "phone"]),
    card("emergencies-03", "emergencies", "Language at 112", "You assume every 112 operator must speak English.", "Call 112, give clear location details, but do not rely on universal English service.", "Many centres can handle other languages, yet that is not guaranteed everywhere.", "112 is universal; language coverage is not.", "common", "emergency112", ["112", "language", "location"]),
    card("emergencies-04", "emergencies", "Automatic eCall", "A severe crash triggers the car’s built-in 112-based eCall.", "Let it connect; it can send key crash data and open a voice link to emergency services.", "Automatic location and vehicle information can speed help when occupants cannot explain.", "eCall sends facts, then opens voice.", "common", "ecall", ["eCall", "112", "crash"]),
    card("emergencies-05", "emergencies", "Manual eCall", "You witness a serious road emergency but your own car has not crashed.", "If the vehicle provides a manual eCall button and it is appropriate, activate it to contact 112.", "The 112-based system can be triggered manually as well as automatically.", "eCall can be pressed, not only triggered.", "common", "ecall", ["eCall", "manual", "112"]),
    card("emergencies-06", "emergencies", "What eCall sends", "You worry that eCall constantly shares your movements.", "When activated, it sends a minimum crash data set such as location, time, vehicle ID and direction, then opens voice.", "The safety function is event-triggered, not a general trip tracker.", "Crash minimum, not journey diary.", "common", "ecall", ["eCall", "privacy", "location"]),
    card("emergencies-07", "emergencies", "Works across the EU", "Your eCall-equipped car was bought in one EU country and crashes in another.", "The 112-based system works throughout the EU regardless of where the vehicle was bought or registered.", "It is designed as a cross-border emergency service.", "eCall follows the car across the EU.", "common", "ecall", ["eCall", "border", "registration"]),
    card("emergencies-08", "emergencies", "An older car", "Your older vehicle has no eCall button.", "Do not assume it must be retrofitted; keep a charged phone and know 112.", "The EU requirement applied to new approved models after 31 March 2018, not every older registered car.", "No eCall? Phone plus 112.", "common", "ecall", ["eCall", "older car", "numbers"]),
    card("emergencies-09", "emergencies", "The crash law", "Two tourists collide while driving in a third EU country.", "The law of the country where the crash occurred governs the incident.", "Nationality and home insurance do not replace the host country’s collision rules.", "Crash place sets the law.", "common", "accident", ["crash", "law", "insurance"]),
    card("emergencies-10", "emergencies", "Before leaving the scene", "Damage looks minor and both cars can move.", "Do not simply leave: exchange details, involve police or emergency services when needed, and document the circumstances.", "A complete record protects safety and later insurance handling under local law.", "Stop, share, record, report.", "common", "accident", ["crash", "details", "police"]),
    card("emergencies-11", "emergencies", "No claim planned", "You settle a small scrape informally and think your insurer need not know.", "Report the crash to your insurer even if you do not plan to claim.", "Other parties or authorities may later create a claim that needs a timely record.", "No claim still means report.", "common", "accident", ["crash", "insurance", "report"]),
    card("emergencies-12", "emergencies", "A notice from abroad", "Weeks after returning home, an official traffic notice arrives in the post.", "Do not ignore it; verify the notice and follow the stated process under the offence country’s law.", "EU information exchange allows specified road-safety offences to be pursued across borders.", "Foreign post can carry a real road case.", "common", "enforcement", ["fine", "post", "enforcement"])
  ];

  window.EUROPE_DRIVING = {
    id: "europe-core",
    title: "Continental Roadbook",
    jurisdiction: "European Union baseline with country checks",
    verified: "2026-07-31",
    sources,
    decks,
    cards
  };
})();
