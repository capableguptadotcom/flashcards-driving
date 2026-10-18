window.ROAD_DECKS = [
  { id: "permit", name: "Permit to pavement", short: "Permit", description: "Applications, tests, provisional rules, and the pre-drive check.", icon: "◇", color: "#2f6f68" },
  { id: "signals", name: "Signals & signs", short: "Signals", description: "Lights, arrows, sign shapes, and road-worker directions.", icon: "●", color: "#d85036" },
  { id: "lanes", name: "Lines, lanes & turns", short: "Lanes", description: "Painted lines, bike lanes, merging, turns, and passing.", icon: "↗", color: "#d6982a" },
  { id: "right-way", name: "Who goes first?", short: "Right-of-way", description: "Intersections, crosswalks, roundabouts, and emergency traffic.", icon: "⇄", color: "#3375a6" },
  { id: "sharing", name: "Share the road", short: "Sharing", description: "Trucks, motorcycles, bicycles, buses, schools, and rail.", icon: "◎", color: "#7c5688" },
  { id: "speed-parking", name: "Speed & parking", short: "Speed + parking", description: "Basic Speed Law, special limits, curbs, hills, and no-parking zones.", icon: "25", color: "#b44335" },
  { id: "conditions", name: "Weather & emergencies", short: "Conditions", description: "Rain, fog, skids, blowouts, breakdowns, and railroad escapes.", icon: "☂", color: "#3b6c87" },
  { id: "safe-driver", name: "The safe driver", short: "Safe driving", description: "Space, scanning, restraints, phones, fatigue, and vehicle control.", icon: "✓", color: "#3f7651" },
  { id: "dui-collisions", name: "DUI, insurance & collisions", short: "DUI + collisions", description: "BAC limits, open containers, coverage, reports, and registration.", icon: "!", color: "#8e473f" }
];

window.ROAD_CARDS = [
  {
    id: "permit-01", deck: "permit", title: "The first doorway",
    question: "What must you obtain before booking your first drive test?",
    scene: "You have never held a license in California or another state. You are eager to book the road test first.",
    answer: "Apply for an instruction permit before taking the behind-the-wheel test.",
    why: "The permit is the required first step for a new driver.", memory: "No license yet? Permit first.", page: 2, tags: ["test", "permit"]
  },
  {
    id: "permit-02", deck: "permit", title: "The application counter",
    revision: 2,
    question: "What else belongs in your DMV document folder?",
    scene: "You are applying for a REAL ID instruction permit. You have proof of identity but only one document showing your California address.",
    answer: "For REAL ID, bring two acceptable California residency documents, proof of identity, your Social Security number if eligible, and any required legal-name document. Other license types have different document options.",
    why: "Identity, residency, and name must all line up before testing.", memory: "Identity + two California ties.", page: 2, tags: ["test", "documents"]
  },
  {
    id: "permit-03", deck: "permit", title: "The under-18 starting line",
    question: "What is the minimum age and preparation for a minor’s permit?",
    scene: "A 15-year-old wants a California instruction permit because friends already drive.",
    answer: "A minor must be at least 15½, complete driver education, and have parent or guardian approval.",
    why: "California adds education and adult financial responsibility for minors.", memory: "Permit: 15½ + education + signature.", page: 3, tags: ["numbers", "minor", "permit"]
  },
  {
    id: "permit-04", deck: "permit", title: "The 50-hour odometer",
    question: "Have you met both supervised-practice requirements?",
    scene: "A 16-year-old has held a permit for six months and logged 44 daytime hours plus six nighttime hours.",
    answer: "Keep practicing. A minor needs 50 total supervised hours, including 10 at night, before the drive test.",
    why: "Both the total and the nighttime minimum must be met.", memory: "50 total. 10 after dark.", page: 3, tags: ["numbers", "minor", "test"]
  },
  {
    id: "permit-05", deck: "permit", title: "The provisional midnight snack",
    question: "Can you make this trip during your first licensed year?",
    scene: "You are 17 and have had your provisional license for eight months. Friends want a 12:30 a.m. food run.",
    answer: "Do not drive. During the first 12 months, provisional drivers generally may not drive from 11 p.m. to 5 a.m.",
    why: "The restriction reduces high-risk late-night driving during the first licensed year.", memory: "First year: park it 11 to 5.", page: 4, tags: ["numbers", "minor", "law"]
  },
  {
    id: "permit-06", deck: "permit", title: "The teen passenger puzzle",
    question: "Can your friend ride with you without a qualifying adult?",
    scene: "You are 17, licensed for five months, and want to drive your 18-year-old friend without an adult.",
    answer: "Do not. For the first 12 months, a provisional driver cannot carry passengers under 20 unless a qualifying adult is present or an exception applies.",
    why: "The supervising adult must generally be a parent, guardian, or California-licensed driver at least 25.", memory: "First year: under-20 passengers need a 25+ guide.", page: 4, tags: ["numbers", "minor", "law"]
  },
  {
    id: "permit-07", deck: "permit", title: "Three tries at the screen",
    question: "How many attempts remain, and when may a minor retest?",
    scene: "You miss the knowledge test twice and wonder whether the third attempt is the last on this application.",
    answer: "Yes. You get three attempts before you must reapply; minors wait seven days before a retest, excluding the failure day.",
    why: "A new application is required after the third failed attempt.", memory: "Three tries; minors pause seven days.", page: 5, tags: ["numbers", "test"]
  },
  {
    id: "permit-08", deck: "permit", title: "The test-day toolkit",
    question: "What is missing from your test-day plan?",
    scene: "You arrive for the drive test alone in an insured car with valid registration.",
    answer: "Bring your permit/license and another California-licensed driver age 18+ (25+ for a minor), unless you are already licensed.",
    why: "The accompanying driver must legally get the test vehicle to and from DMV.", memory: "Permit, papers, safe car, licensed companion.", page: 6, tags: ["test", "documents"]
  },
  {
    id: "permit-09", deck: "permit", title: "The cracked-windshield check",
    question: "Can this car be used for the drive test?",
    scene: "Your test car runs well, but a crack blocks part of the examiner’s view.",
    answer: "Expect the test to be postponed. The windshield must provide a full, clear, unobstructed view.",
    why: "DMV checks the vehicle before evaluating your driving.", memory: "A safe test starts before the car moves.", page: 6, tags: ["test", "vehicle"]
  },
  {
    id: "permit-10", deck: "permit", title: "The tiny tread test",
    question: "Do the tires meet the drive-test requirements?",
    scene: "Your tires look worn, and one is a temporary donut spare.",
    answer: "Use another vehicle. Test tires need at least 1/32-inch uniform tread, and a donut tire is not allowed.",
    why: "Unsafe equipment causes a reschedule.", memory: "1/32 tread; no donut on test day.", page: 6, tags: ["numbers", "test", "vehicle"]
  },
  {
    id: "permit-11", deck: "permit", title: "The horn across the lot",
    question: "How far away must the horn be audible?",
    scene: "The horn makes a faint chirp that is barely audible outside the car.",
    answer: "Repair it before the drive test. The horn must work and be audible from at least 200 feet.",
    why: "A horn is required communication equipment.", memory: "A test-ready horn reaches 200 feet.", page: 6, tags: ["numbers", "test", "vehicle"]
  },
  {
    id: "permit-12", deck: "permit", title: "The second drive-test attempt",
    question: "How long must a minor wait before the next drive test?",
    scene: "A minor fails the behind-the-wheel test on Monday and wants to retry the next week.",
    answer: "Wait at least 14 days, not counting the day of failure.",
    why: "California requires minors to leave time for more practice.", memory: "Minor road-test retake: 14-day reset.", page: 6, tags: ["numbers", "minor", "test"]
  },

  {
    id: "signals-01", deck: "signals", title: "Red light, open corner",
    question: "What must you do before making this right turn?",
    scene: "You want to turn right at a solid red light. The crosswalk is clear and there is no prohibiting sign.",
    answer: "Stop completely at the limit line or before the crosswalk, yield, then turn when safe.",
    why: "A right on red is allowed only after the same full stop red requires.", memory: "Red right: stop, yield, safe.", page: 33, tags: ["signals", "turns"]
  },
  {
    id: "signals-02", deck: "signals", title: "The red arrow veto",
    question: "May you turn right while the red arrow is showing?",
    scene: "A red right-turn arrow is lit, but there is no traffic anywhere.",
    answer: "Remain stopped until a green light or green arrow appears.",
    why: "Unlike a solid red circle, a red arrow prohibits the turn.", memory: "Red circle may allow; red arrow says no.", page: 33, tags: ["signals", "turns"]
  },
  {
    id: "signals-03", deck: "signals", title: "The blinking red beacon",
    question: "Do you have to stop before proceeding?",
    scene: "The signal over a quiet intersection flashes red.",
    answer: "Treat it like a stop sign: stop fully, then proceed when safe.",
    why: "Flashing red changes the sequence, not the duty to stop.", memory: "Flashing red = stop, then go.", page: 33, tags: ["signals"]
  },
  {
    id: "signals-04", deck: "signals", title: "Yellow at the decision line",
    question: "Should you stop or continue through?",
    scene: "The light turns solid yellow. You can stop smoothly before the intersection.",
    answer: "Stop. If you cannot stop safely, cross cautiously instead.",
    why: "Yellow warns that red is next; it is not a command to speed up.", memory: "Yellow: stop if safe, never race.", page: 33, tags: ["signals"]
  },
  {
    id: "signals-05", deck: "signals", title: "The unprotected blink",
    question: "Who must you yield to before turning left?",
    scene: "A yellow left arrow is flashing while oncoming traffic continues.",
    answer: "You may turn left after yielding to oncoming traffic, with caution.",
    why: "The turn is permitted but not protected.", memory: "Flashing yellow arrow = turn, but yield.", page: 34, tags: ["signals", "turns"]
  },
  {
    id: "signals-06", deck: "signals", title: "Green but gridlocked",
    question: "Should you enter the intersection now?",
    scene: "Your light is green, but traffic is stopped on the far side and your car would block the crosswalk.",
    answer: "Wait before entering until you can get completely across.",
    why: "Green never gives permission to block an intersection or endanger a pedestrian.", memory: "Green needs room.", page: 34, tags: ["signals", "right-of-way"]
  },
  {
    id: "signals-07", deck: "signals", title: "The dark traffic light",
    question: "How should every approaching driver treat this intersection?",
    scene: "A storm knocks out every signal at a four-way intersection.",
    answer: "Stop as if all directions have stop signs, then proceed cautiously when safe.",
    why: "A dead signal becomes an all-way-stop situation.", memory: "Lights out = four-way stop.", page: 34, tags: ["signals", "right-of-way"]
  },
  {
    id: "signals-08", deck: "signals", title: "The countdown pedestrian",
    question: "May you turn while the pedestrian is still in your path?",
    scene: "The raised hand is flashing, but a pedestrian is still crossing in front of you.",
    answer: "Yield and let the pedestrian finish safely.",
    why: "The flashing hand tells pedestrians not to start; it does not erase a driver’s duty to yield.", memory: "Flashing hand: don’t start; do finish.", page: 35, tags: ["signals", "pedestrian"]
  },
  {
    id: "signals-09", deck: "signals", title: "Octagon before letters",
    question: "What does this shape require you to do?",
    scene: "Fog makes a red sign’s word hard to read, but its eight-sided outline is clear.",
    answer: "Recognize the octagon as STOP and make a full stop.",
    why: "Critical sign shapes communicate even when words are hard to see.", memory: "Eight sides always stop.", page: 35, tags: ["signs"]
  },
  {
    id: "signals-10", deck: "signals", title: "The schoolhouse pentagon",
    question: "What does the five-sided sign warn you about?",
    scene: "A five-sided yellow sign appears ahead.",
    answer: "You are near a school; slow down and be ready to stop for children in the crosswalk.",
    why: "The pentagon shape identifies a school area.", memory: "Five sides = school lives nearby.", page: 38, tags: ["signs", "school"]
  },
  {
    id: "signals-11", deck: "signals", title: "Red reflectors at night",
    question: "What do the red reflectors tell you?",
    scene: "Road reflectors ahead shine red into your headlights on an unfamiliar ramp.",
    answer: "You may be going the wrong way. Safely back out or turn around.",
    why: "Reflectors are designed to show red to wrong-way traffic.", memory: "Red reflectors face the wrong way.", page: 38, tags: ["signs", "night"]
  },
  {
    id: "signals-12", deck: "signals", title: "The flagger outranks the sign",
    question: "Which direction should you follow?",
    scene: "A road worker directs you through a lane even though the usual sign points elsewhere.",
    answer: "Obey the flagger’s instructions.",
    why: "Directions from authorized workers or officers account for temporary conditions and must be followed.", memory: "Human direction beats the usual display.", page: 49, tags: ["signs", "work-zone"]
  },

  {
    id: "lanes-01", deck: "lanes", title: "Yellow on your side",
    question: "May you cross this line to pass the car ahead?",
    scene: "A single solid yellow line is beside your lane on a two-way road.",
    answer: "Do not pass the vehicle ahead when only one lane travels in your direction.",
    why: "Yellow separates opposing traffic; solid on your side means stay put.", memory: "Solid yellow beside you: no pass.", page: 13, tags: ["lanes", "markings"]
  },
  {
    id: "lanes-02", deck: "lanes", title: "The painted median wall",
    revision: 2,
    question: "May you turn across this painted area?",
    scene: "Two sets of double yellow lines are separated by two feet or more.",
    answer: "Treat them as a barrier. Do not drive, turn, or make a U-turn across except at a designated opening.",
    why: "The space between the double sets functions like a painted median.", memory: "Double-double, two feet apart = wall.", page: 13, tags: ["numbers", "lanes", "markings"]
  },
  {
    id: "lanes-03", deck: "lanes", title: "The white-line fence",
    question: "Where may you enter the HOV lane?",
    scene: "Two solid white lines divide your lane from an HOV lane.",
    answer: "Do not cross. Wait for a designated opening or a single broken white line.",
    why: "Double solid white lines are a lane barrier even though traffic moves the same way.", memory: "Double white = don’t change.", page: 14, tags: ["lanes", "markings", "hov"]
  },
  {
    id: "lanes-04", deck: "lanes", title: "Triangles with a point",
    question: "What does this row of triangles mark?",
    scene: "A row of solid white triangles points toward your approaching car.",
    answer: "This is a yield line; yield or stop there as needed.",
    why: "The triangles mark where approaching traffic must give way.", memory: "Shark teeth point at who yields.", page: 14, tags: ["lanes", "markings"]
  },
  {
    id: "lanes-05", deck: "lanes", title: "The five-car parade",
    question: "What must you do when you reach a safe turnout?",
    scene: "You are slow on a two-lane road, passing is unsafe, and five cars stack up behind you.",
    answer: "Use the next turnout area or lane to let them pass.",
    why: "California requires the turnout when five or more vehicles follow under these conditions.", memory: "Five behind? Take the turnout.", page: 16, tags: ["numbers", "lanes"]
  },
  {
    id: "lanes-06", deck: "lanes", title: "The center-lane shortcut",
    question: "May you use the center lane to get around the queue?",
    scene: "Traffic is backed up. The two-way center left-turn lane is open for several blocks.",
    answer: "Do not use it as a travel or passing lane; enter only within 200 feet to prepare for a left turn or U-turn.",
    why: "Opposing drivers may use the same center lane for turns.", memory: "Center turn lane: 200 feet, not a shortcut.", page: 16, tags: ["numbers", "lanes", "turns"]
  },
  {
    id: "lanes-07", deck: "lanes", title: "The green bike-lane merge",
    revision: 2,
    question: "When and how should you enter the bike lane to turn?",
    scene: "Your right turn is 170 feet ahead and a bike lane runs beside you.",
    answer: "Check mirrors and your right blind spot, yield to bicyclists, and merge behind a cyclist into the conventional bike lane within 200 feet of the turn when safe. Do not cross a physical separator.",
    why: "Turning from near the curb reduces conflict, but cyclists already there keep priority.", memory: "Bike lane: check, merge, within 200.", page: 18, tags: ["numbers", "bicycle", "turns"]
  },
  {
    id: "lanes-08", deck: "lanes", title: "The 100-foot promise",
    revision: 2,
    question: "How far before the turn should you begin signaling?",
    scene: "You plan to turn at the next corner and wonder when to signal.",
    answer: "Signal at least 100 feet before the turn. Check for pedestrians and other traffic before turning.",
    why: "Others need time to read and react to your intention.", memory: "Turn coming? Tell them 100 feet early.", page: 18, tags: ["numbers", "signals", "turns"]
  },
  {
    id: "lanes-09", deck: "lanes", title: "Red to red, one-way to one-way",
    revision: 2,
    question: "Is this left turn on red allowed?",
    scene: "You are in the far-left lane of a one-way street, turning left onto another one-way street. The signal is a solid red circle, not a red arrow.",
    answer: "After a full stop, you may turn if no sign forbids it and you yield to traffic, pedestrians, and bicyclists.",
    why: "California permits this specific left-on-red movement.", memory: "Left on red only: one-way into one-way.", page: 20, tags: ["signals", "turns"]
  },
  {
    id: "lanes-10", deck: "lanes", title: "The missed freeway exit",
    revision: 2,
    question: "What is the safest next move after missing this exit?",
    scene: "Your exit is one lane away. The striped triangular area separating the exit ramp from the freeway (the gore area) begins beside you.",
    answer: "Continue to the next exit. Do not cross solid lines or make a last-second lane change.",
    why: "A missed exit costs time; a sudden correction can cost control.", memory: "Missed is safer than forced.", page: 23, tags: ["freeway", "lanes"]
  },
  {
    id: "lanes-11", deck: "lanes", title: "Joining the freeway river",
    revision: 2,
    question: "Who has priority, and how should you join the freeway?",
    scene: "You enter from an on-ramp while freeway traffic flows steadily.",
    answer: "Build speed on the ramp to join traffic at a safe, lawful speed. Find a gap, signal, check mirrors and your blind spot, and merge when safe. Do not stop unless necessary, and do not exceed a speed limit to match speeding traffic.",
    why: "Freeway traffic has the right-of-way, and matching speed reduces conflict.", memory: "Match, mirror, shoulder, merge.", page: 23, tags: ["freeway", "lanes"]
  },
  {
    id: "lanes-12", deck: "lanes", title: "The dirt-shoulder pass",
    question: "May you use the shoulder to pass on the right?",
    scene: "The car ahead turns left. The paved road is narrow, but the dirt shoulder is open on the right.",
    answer: "Never leave the paved or main-traveled roadway to pass.",
    why: "Passing on the right is allowed only where roadway space and conditions make it legal and safe.", memory: "The shoulder is not a passing lane.", page: 25, tags: ["passing", "law"]
  },

  {
    id: "right-way-01", deck: "right-way", title: "The exact tie",
    question: "Which driver should go first?",
    scene: "You and another car reach an uncontrolled intersection at the same moment. The other car is on your right.",
    answer: "Yield to the vehicle on your right.",
    why: "First arrival goes first; exact ties go to the right.", memory: "Tie? Right goes.", page: 39, tags: ["right-of-way", "intersection"]
  },
  {
    id: "right-way-02", deck: "right-way", title: "The top of the T",
    question: "Who has the right-of-way at this T intersection?",
    scene: "You are at an uncontrolled T intersection, entering from the road that ends.",
    answer: "Yield to vehicles, bicyclists, and pedestrians on the through road.",
    why: "Traffic continuing straight has the right-of-way at an unsigned T.", memory: "At a T, the through road is free.", page: 39, tags: ["right-of-way", "intersection"]
  },
  {
    id: "right-way-03", deck: "right-way", title: "The optimistic left turn",
    revision: 2,
    question: "Is the turn signal enough to begin your left turn?",
    scene: "An oncoming car has its right signal on, so you consider starting your left turn before it slows.",
    answer: "Wait for the oncoming vehicle to begin its turn, then check that the entire path is clear before you turn left.",
    why: "The signal may be accidental or for a turn beyond you; left-turning traffic must yield when danger is close.", memory: "Trust the turn, not just the signal.", page: 24, tags: ["right-of-way", "turns"]
  },
  {
    id: "right-way-04", deck: "right-way", title: "The roundabout entry",
    question: "Who has priority as you enter?",
    scene: "A gap is coming, but a car is already circulating in the roundabout.",
    answer: "Slow down and yield to all traffic already in the roundabout; enter right when the gap is safe.",
    why: "Circulating traffic keeps moving counterclockwise without stopping.", memory: "Roundabout: yield in, signal out.", page: 40, tags: ["right-of-way", "roundabout"]
  },
  {
    id: "right-way-05", deck: "right-way", title: "One more lap",
    question: "What should you do after missing the exit?",
    scene: "You miss your roundabout exit.",
    answer: "Continue around until the exit returns; do not stop or reverse.",
    why: "Predictable circulation prevents crossing conflicts.", memory: "Missed exit? Orbit, don’t improvise.", page: 40, tags: ["right-of-way", "roundabout"]
  },
  {
    id: "right-way-06", deck: "right-way", title: "The invisible crosswalk",
    question: "Does the missing paint change your duty to yield?",
    scene: "A pedestrian waits where two roads meet, but no white crosswalk lines are painted.",
    answer: "Yield. Pedestrians have the right-of-way in marked and unmarked crosswalks.",
    why: "A crosswalk can legally exist without paint.", memory: "No paint does not mean no crosswalk.", page: 41, tags: ["pedestrian", "right-of-way"]
  },
  {
    id: "right-way-07", deck: "right-way", title: "The stopped car at the crosswalk",
    question: "May you pass the car stopped at the crosswalk?",
    scene: "A car in the next lane is stopped at a crosswalk, but you cannot see anyone ahead of it.",
    answer: "Do not pass the stopped car.",
    why: "It may be hiding a pedestrian crossing in front.", memory: "A stopped car may be a curtain.", page: 41, tags: ["pedestrian", "passing"]
  },
  {
    id: "right-way-08", deck: "right-way", title: "The white cane pauses",
    question: "How should you respond to this pedestrian?",
    scene: "A pedestrian with a white cane stands at the corner as you prepare to turn.",
    answer: "Yield; pedestrians using a guide dog or white cane have the right-of-way at all times.",
    why: "Do not honk. A pulled-in cane and step back usually signals that you may go.", memory: "White cane: quiet, patient, yielding.", page: 42, tags: ["pedestrian", "right-of-way"]
  },
  {
    id: "right-way-09", deck: "right-way", title: "The mountain standoff",
    question: "Which vehicle must back up?",
    scene: "Two cars meet on a steep, narrow road. Neither can pass; you are facing downhill.",
    answer: "Back up until the uphill-facing vehicle can pass.",
    why: "The downhill-facing driver has more control when backing uphill.", memory: "Uphill car goes; downhill car backs.", page: 42, tags: ["right-of-way", "mountain"]
  },
  {
    id: "right-way-10", deck: "right-way", title: "Siren inside the intersection",
    question: "Should you stop in the intersection or clear it first?",
    scene: "You hear a siren after you have already entered an intersection.",
    answer: "Continue through, then pull to the right and stop as soon as it is safe.",
    why: "Stopping inside blocks the emergency vehicle and other escape paths.", memory: "Clear first, pull right second.", page: 45, tags: ["emergency", "right-of-way"]
  },
  {
    id: "right-way-11", deck: "right-way", title: "Lights on the shoulder",
    revision: 2,
    question: "How should you pass this stopped vehicle?",
    scene: "On the freeway, a passenger car is stopped on the shoulder with its hazard lights flashing.",
    answer: "Slow down and move into a nonadjacent lane when safe. If changing lanes would be unsafe or impracticable, slow to a reasonable, safe speed and pass cautiously.",
    why: "California expanded its move-over rule in 2026 to include stopped vehicles displaying hazard lights or another warning device, including ordinary passenger cars.", memory: "Warning lights: slow down and make room.", page: 49, tags: ["emergency", "work-zone"]
  },
  {
    id: "right-way-12", deck: "right-way", title: "The officer’s contradiction",
    question: "Should you follow the signal or the officer?",
    scene: "A law-enforcement officer waves you through while the traffic signal remains red.",
    answer: "Follow the officer’s direction.",
    why: "An officer’s order takes priority over existing signs, signals, and ordinary rules.", memory: "Officer over signal.", page: 45, tags: ["signals", "law"]
  },

  {
    id: "sharing-01", deck: "sharing", title: "The missing truck mirror",
    question: "Can the truck driver reliably see your vehicle?",
    scene: "You are beside a tractor-trailer and cannot see the truck’s side mirror.",
    answer: "Move out of that No Zone as soon as it is safe; the truck driver likely cannot see you.",
    why: "Large vehicles have extensive blind spots beside and behind them.", memory: "No mirror in sight? You’re out of sight.", page: 42, tags: ["truck", "blind-spot"]
  },
  {
    id: "sharing-02", deck: "sharing", title: "The truck-sized stopping gap",
    revision: 2,
    question: "Is this a safe place to merge and brake?",
    scene: "At 55 mph, you plan to merge directly in front of a loaded truck and brake for an exit.",
    answer: "Do not cut in or brake in the truck’s stopping space. Leave a generous gap and take the next exit if needed.",
    why: "The handbook compares about 300 feet for a passenger car with up to 400 feet for a large vehicle at 55 mph. These are examples, not guaranteed stopping distances; a loaded truck or poor conditions can need more room.", memory: "A truck’s gap is its braking room.", page: 42, tags: ["numbers", "truck", "following"]
  },
  {
    id: "sharing-03", deck: "sharing", title: "The wide-turn illusion",
    question: "May you use the space on the truck’s right?",
    scene: "A truck ahead swings left while signaling right, opening space beside its right wheels.",
    answer: "Stay back; do not squeeze into the space.",
    why: "Long vehicles swing wide because rear wheels track inside the front wheels’ path.", memory: "Wide swing hides a tight turn.", page: 43, tags: ["truck", "turns"]
  },
  {
    id: "sharing-04", deck: "sharing", title: "Passing the long rig",
    question: "How should you pass the truck?",
    scene: "You need to pass a large truck on a multilane highway.",
    answer: "Pass on the left and move ahead; avoid lingering alongside.",
    why: "The left side offers better visibility and less time in large blind spots.", memory: "Truck pass: left and through.", page: 43, tags: ["truck", "passing"]
  },
  {
    id: "sharing-05", deck: "sharing", title: "The trolley safety zone",
    question: "Where must you stay, and how fast may you pass?",
    scene: "A streetcar is stopped beside a safety zone marked by raised buttons or dotted white lines.",
    answer: "Never drive through the safety zone; if passing the stopped vehicle where allowed, travel no faster than 10 mph.",
    why: "Passengers may be entering or leaving the transit vehicle.", memory: "Safety zone: never through; pass at 10.", page: 43, tags: ["numbers", "transit"]
  },
  {
    id: "sharing-06", deck: "sharing", title: "The full-lane motorcycle",
    question: "May you pass the motorcycle within its lane?",
    scene: "A motorcycle rides ahead near the center of its lane, leaving room on either side.",
    answer: "Give it the full lane; never pass a motorcycle in the same lane.",
    why: "Motorcyclists may need the entire lane to avoid surface hazards.", memory: "Small vehicle, full lane.", page: 44, tags: ["motorcycle", "passing"]
  },
  {
    id: "sharing-07", deck: "sharing", title: "The motorcycle gap",
    revision: 2,
    question: "How should the road surface affect your following gap?",
    scene: "A motorcycle moves onto bridge grating ahead of you.",
    answer: "Increase your following gap beyond the normal three-second guideline when the motorcycle is on metal grating or another slippery surface.",
    why: "The rider may brake or change direction suddenly on metal, gravel, or rough pavement.", memory: "Motorcycle: three seconds, more on rough.", page: 44, tags: ["numbers", "motorcycle", "following"]
  },
  {
    id: "sharing-08", deck: "sharing", title: "The three-foot bicycle bubble",
    revision: 2,
    question: "When is it safe to pass the cyclist?",
    scene: "A cyclist occupies your lane. You cannot safely move into another lane, and the available gap beside the cyclist is less than three feet.",
    answer: "Stay behind. Change into another available lane to pass when safe; when you cannot change lanes, leave at least three feet. Wait if that space is unavailable.",
    why: "If three feet is unavailable, do not pass yet.", memory: "Three feet or stay behind.", page: 48, tags: ["numbers", "bicycle", "passing"]
  },
  {
    id: "sharing-09", deck: "sharing", title: "Yellow lights on the school bus",
    question: "What should you do before the bus stops?",
    scene: "A school bus ahead begins flashing yellow lights.",
    answer: "Slow down and prepare to stop.",
    why: "Yellow warns that the bus is about to stop for children.", memory: "Bus yellow: prepare. Bus red: stop.", page: 50, tags: ["school", "signals"]
  },
  {
    id: "sharing-10", deck: "sharing", title: "Red bus lights across the road",
    question: "Does traffic on your side have to stop for this bus?",
    scene: "A school bus flashes red. It is on the opposite side of a road with two lanes in each direction.",
    answer: "You do not need to stop when the bus is on the other side of a divided or multilane highway with at least two lanes each way.",
    why: "Otherwise, traffic in both directions must stop until the red lights stop flashing.", memory: "Bus red stops both ways—except across a divided/multilane road.", page: 51, tags: ["school", "signals"]
  },
  {
    id: "sharing-11", deck: "sharing", title: "The train with no room beyond",
    question: "Should you start crossing the tracks?",
    scene: "The gate is up, but traffic beyond the railroad tracks leaves no room for your whole car.",
    answer: "Wait before the tracks until you can cross completely.",
    why: "Never begin a crossing if congestion could trap you on the rails.", memory: "Tracks need a full-car exit.", page: 52, tags: ["railroad", "right-of-way"]
  },
  {
    id: "sharing-12", deck: "sharing", title: "The emergency-vehicle shadow",
    question: "How far back must you stay?",
    scene: "An ambulance with lights and siren passes, and the empty lane behind it looks convenient.",
    answer: "Stay at least 300 feet behind an emergency vehicle using its siren or flashing lights.",
    why: "Following closely interferes with the response and is illegal.", memory: "Emergency lights ahead: 300 feet behind.", page: 45, tags: ["numbers", "emergency", "following"]
  },

  {
    id: "speed-parking-01", deck: "speed-parking", title: "The number is not a promise",
    question: "Does the posted limit make 65 mph safe here?",
    scene: "The sign says 65 mph, but rain, traffic, and spray make 65 unsafe.",
    answer: "Slow to a speed that is safe for the conditions, even if it is below the posted limit.",
    why: "California’s Basic Speed Law never allows driving faster than is safe for current conditions.", memory: "The sign is a ceiling, not a target.", page: 67, tags: ["speed", "law"]
  },
  {
    id: "speed-parking-02", deck: "speed-parking", title: "Two lanes, no divider",
    revision: 2,
    question: "What is the unposted maximum speed on this road?",
    scene: "You are on an undivided highway with one lane in each direction. No speed limit is posted, and conditions are otherwise good.",
    answer: "The maximum speed is 55 mph.",
    why: "The same 55 mph maximum generally applies to a vehicle towing a trailer.", memory: "Two-lane undivided or towing: 55.", page: 67, tags: ["numbers", "speed"]
  },
  {
    id: "speed-parking-03", deck: "speed-parking", title: "The children outside the gate",
    question: "What speed limit applies while the children are outside?",
    scene: "Children are outside a school, 400 feet ahead. No lower speed is posted.",
    answer: "Drive no faster than 25 mph within 500 feet; some school zones are posted as low as 15 mph.",
    why: "The special limit applies while children are outside or crossing.", memory: "School: 25 within 500; watch for 15.", page: 50, tags: ["numbers", "speed", "school"]
  },
  {
    id: "speed-parking-04", deck: "speed-parking", title: "The blind corner creep",
    question: "What speed applies as you approach the blind intersection?",
    scene: "No stop signs control an intersection, and buildings block your view of cross traffic.",
    answer: "Treat it as a blind intersection and limit speed to 15 mph; edge forward slowly until you can see.",
    why: "The lower speed gives time to find traffic hidden by the obstruction.", memory: "Blind intersection: 15.", page: 51, tags: ["numbers", "speed", "intersection"]
  },
  {
    id: "speed-parking-05", deck: "speed-parking", title: "The narrow alley",
    question: "What is the maximum speed in this alley?",
    scene: "You enter a rear-access road no wider than 25 feet.",
    answer: "The alley speed limit is 15 mph.",
    why: "Doors, driveways, pedestrians, and limited sight distance create close hazards.", memory: "Alley: 15.", page: 51, tags: ["numbers", "speed"]
  },
  {
    id: "speed-parking-06", deck: "speed-parking", title: "The hidden railroad view",
    question: "What speed limit applies at this restricted-view crossing?",
    scene: "Within 100 feet of an uncontrolled rail crossing, you cannot see 400 feet in both directions.",
    answer: "The speed limit is 15 mph.",
    why: "You may go faster only when gates, a signal, or a flagger controls the crossing.", memory: "Rail: 100 near + 400 hidden = 15.", page: 51, tags: ["numbers", "speed", "railroad"]
  },
  {
    id: "speed-parking-07", deck: "speed-parking", title: "The curb color code",
    revision: 2,
    question: "What does each curb color allow?",
    scene: "You see five curb colors and need a quick translation.",
    answer: "White: passenger pickup/drop-off. Green: time-limited parking. Yellow: loading within posted limits. Red: no stopping, standing, or parking, except buses in designated bus zones. Blue: parking for a qualifying disabled person with a valid placard or plate.",
    why: "Check nearby signs too. Noncommercial drivers usually must stay with the vehicle in a yellow loading zone; a blue permit is for the qualifying person, not any driver using their car.", memory: "White: passengers. Green: time. Yellow: loading. Red: stop prohibited. Blue: access.", page: 28, tags: ["parking", "signs"]
  },
  {
    id: "speed-parking-08", deck: "speed-parking", title: "Parallel but too far",
    question: "How close to the curb must you finish?",
    scene: "Your parallel park is straight, but the tires finish two feet from the curb.",
    answer: "Adjust until the vehicle is parallel and within 18 inches of the curb.",
    why: "The target is both alignment and distance.", memory: "Parallel park: within 18 inches.", page: 26, tags: ["numbers", "parking"]
  },
  {
    id: "speed-parking-09", deck: "speed-parking", title: "Hill wheels, three ways",
    revision: 2,
    question: "Which way should the front wheels point in each case?",
    scene: "You park on a hill and want the curb or shoulder to catch the vehicle if it rolls.",
    answer: "For parking on the usual right side: downhill with a curb, point wheels toward it; uphill with a curb, point them away; with no curb, point them right toward the shoulder. Set the parking brake and leave an automatic in Park or a manual in gear.",
    why: "Each position aims a rolling vehicle away from traffic or into the curb.", memory: "Down in, up out, no curb right.", page: 27, tags: ["parking", "hill"]
  },
  {
    id: "speed-parking-10", deck: "speed-parking", title: "The fire-hydrant buffer",
    question: "Is this parking space far enough from the hydrant?",
    scene: "A space ends 12 feet from a fire hydrant.",
    answer: "Do not park there. Keep at least 15 feet from a fire hydrant or fire-station driveway.",
    why: "Emergency access must remain open.", memory: "Fire access: 15 feet.", page: 28, tags: ["numbers", "parking"]
  },
  {
    id: "speed-parking-11", deck: "speed-parking", title: "The daylighted crosswalk",
    revision: 2,
    question: "May you park on this approach to the crosswalk?",
    scene: "You find a curb space 10 feet before a marked crosswalk.",
    answer: "Do not park there. On the vehicle-approach side, keep at least 20 feet before a marked or unmarked crosswalk, or 15 feet where there is a curb extension. The rule applies even without red curb paint; obey lawful local signs or markings.",
    why: "The clear approach helps drivers and pedestrians see one another.", memory: "Crosswalk: 20 feet; curb extension: 15.", page: 28, tags: ["numbers", "parking", "pedestrian", "daylighting"]
  },
  {
    id: "speed-parking-12", deck: "speed-parking", title: "The safer passing side",
    question: "May you overtake when you cannot see beyond the hill?",
    scene: "You approach a hill or curve where you cannot see oncoming traffic.",
    answer: "Do not pass. Also avoid passing within 100 feet of an intersection, bridge, tunnel, railroad crossing, or similar hazard.",
    why: "A legal-looking opening is useless without enough sight and return space.", memory: "Can’t see? Don’t pass. Hazard buffer: 100 feet.", page: 24, tags: ["numbers", "passing"]
  },

  {
    id: "conditions-01", deck: "conditions", title: "The first greasy rain",
    question: "When is this rain especially hazardous, and how should you react?",
    scene: "Rain begins after weeks of hot, dry weather.",
    answer: "Slow down immediately and increase following distance.",
    why: "Early rain lifts oil and dust before washing them away, making pavement especially slippery.", memory: "First rain, least grip.", page: 61, tags: ["weather", "rain"]
  },
  {
    id: "conditions-02", deck: "conditions", title: "The weather speed ladder",
    revision: 2,
    question: "How should you adjust speed as traction gets worse?",
    scene: "Conditions move from wet pavement to packed snow to ice.",
    answer: "The handbook’s guidelines are 5–10 mph below dry-road speed on wet pavement, about half your dry-road speed on packed snow, and no more than 5 mph on ice. Go slower or stop traveling when conditions require it.",
    why: "Available traction shrinks rapidly as conditions worsen.", memory: "Wet minus 5–10; snow half; ice 5.", page: 61, tags: ["numbers", "weather", "speed"]
  },
  {
    id: "conditions-03", deck: "conditions", title: "Wipers wake the headlights",
    question: "Which headlights should you switch on?",
    scene: "Rain is light but steady enough to require windshield wipers.",
    answer: "Turn on low-beam headlights.",
    why: "California requires low beams when weather requires continuous wiper use; they also make you easier to see.", memory: "Wipers on, low beams on.", page: 11, tags: ["weather", "headlights"]
  },
  {
    id: "conditions-04", deck: "conditions", title: "One hundred feet of rain",
    revision: 2,
    question: "Does 100-foot visibility permit driving at 30 mph or more?",
    scene: "Heavy rain limits visibility to about 100 feet.",
    answer: "More than 30 mph is unsafe when you cannot see beyond 100 feet. Even 30 mph may be too fast: drive slowly enough to stop within your view, or pull safely off the road if visibility is inadequate.",
    why: "You must be able to stop within the distance you can see.", memory: "See only 100? No faster than 30.", page: 62, tags: ["numbers", "weather", "speed"]
  },
  {
    id: "conditions-05", deck: "conditions", title: "Floating tires",
    question: "What should you do as the tires lose road contact?",
    scene: "Steering feels light and tire sounds change as your car begins to hydroplane.",
    answer: "Slow gradually and do not brake suddenly.",
    why: "Abrupt braking or steering can turn loss of road contact into a skid.", memory: "Hydroplane: ease, don’t squeeze.", page: 62, tags: ["weather", "rain", "emergency"]
  },
  {
    id: "conditions-06", deck: "conditions", title: "The skid direction",
    revision: 2,
    question: "Which way should you steer, and what should your feet do?",
    scene: "Your rear tires slide right on a slippery curve.",
    answer: "Ease off the accelerator, avoid braking, and gently steer right, toward the direction the rear is sliding. Straighten the wheel as grip returns.",
    why: "This is a slippery-surface rear-wheel skid. Do not confuse it with emergency braking in a car equipped with four-wheel ABS.", memory: "Rear slides right: ease off, gently steer right.", page: 60, tags: ["emergency", "skid"]
  },
  {
    id: "conditions-07", deck: "conditions", title: "Fog throws the light back",
    question: "Will high beams improve your view through fog?",
    scene: "Dense fog makes you want the brightest headlights available.",
    answer: "Use low beams, slow down, increase following distance, and be ready to stop within what you can see.",
    why: "High beams reflect off fog and create glare.", memory: "Fog stays low: low speed, low beams.", page: 64, tags: ["weather", "headlights"]
  },
  {
    id: "conditions-08", deck: "conditions", title: "The traffic-break weave",
    question: "How should you respond to the officer’s traffic break?",
    scene: "A patrol car ahead turns on emergency lights and weaves slowly across lanes.",
    answer: "Turn on flashers, slow gradually to the officer’s speed, stay back, and do not pass.",
    why: "The traffic break deliberately slows or stops traffic for a hazard.", memory: "Officer weaving: follow, never overtake.", page: 64, tags: ["emergency", "law"]
  },
  {
    id: "conditions-09", deck: "conditions", title: "The blowout instinct",
    question: "What should you do before slowing and pulling off?",
    scene: "A tire bursts at highway speed and your first impulse is to stomp the brake.",
    answer: "Hold the wheel with both hands, maintain speed if safe, release the accelerator gradually, stabilize, then slow and pull off.",
    why: "Sudden braking or lifting can cause a loss of control.", memory: "Blowout: hold, ease, stabilize, exit.", page: 68, tags: ["emergency", "vehicle"]
  },
  {
    id: "conditions-10", deck: "conditions", title: "Two wheels leave the pavement",
    question: "How do you return to the pavement without losing control?",
    scene: "Your right wheels drift onto the shoulder.",
    answer: "Grip firmly, ease off the accelerator, brake gently, check traffic, then steer back carefully.",
    why: "A sharp yank toward pavement can send you into opposing traffic.", memory: "Shoulder drop: steady, slow, check, return.", page: 68, tags: ["emergency", "vehicle"]
  },
  {
    id: "conditions-11", deck: "conditions", title: "Disabled on the freeway",
    revision: 2,
    question: "Where should you wait, and how can you call for help?",
    scene: "Your engine fails, but the car can still coast to the shoulder.",
    answer: "Coast safely to the right shoulder, turn on hazard lights, and call 511 for roadside help (911 for an emergency). Usually wait belted inside. If the vehicle is exposed to traffic and a safer protected area is reachable, leave from the side away from traffic.",
    why: "Where you wait depends on traffic exposure, shoulder width, and whether you can safely reach protection away from the lanes.", memory: "Off the lanes; choose the safest waiting place.", page: 69, tags: ["numbers", "emergency", "freeway"]
  },
  {
    id: "conditions-12", deck: "conditions", title: "Stalled with a train coming",
    question: "Which direction should you run after leaving the car?",
    scene: "Your vehicle is stuck on tracks and a train is approaching.",
    answer: "Exit immediately and run diagonally toward the oncoming train, away from the tracks; then call 911.",
    why: "Running toward the train takes you away from debris pushed forward by the impact.", memory: "Train coming: out, toward it, diagonal, 911.", page: 70, tags: ["emergency", "railroad"]
  },

  {
    id: "safe-driver-01", deck: "safe-driver", title: "Ten seconds of future",
    question: "How far ahead should you scan?",
    scene: "Your eyes settle on the bumper directly ahead in city traffic.",
    answer: "Keep your eyes moving and scan at least 10 seconds ahead.",
    why: "Looking well ahead gives time for smooth decisions instead of last-second moves.", memory: "Drive where you’ll be in 10 seconds.", page: 57, tags: ["numbers", "scanning"]
  },
  {
    id: "safe-driver-02", deck: "safe-driver", title: "The roadside marker count",
    question: "How can you measure a safer following gap?",
    scene: "The car ahead passes a sign. You reach it two seconds later on a dry road.",
    answer: "Increase the gap to at least three seconds, and add more for poor conditions.",
    why: "Three seconds creates basic reaction space under normal conditions.", memory: "Pick a point; count to three.", page: 57, tags: ["numbers", "following"]
  },
  {
    id: "safe-driver-03", deck: "safe-driver", title: "The tailgater behind",
    question: "How can you make room without provoking the tailgater?",
    scene: "A driver follows inches from your bumper and flashes headlights.",
    answer: "Maintain course and speed, create more space ahead, then move right when safe to let the driver pass.",
    why: "Do not brake-check or race; your extra front space gives you room to slow gradually.", memory: "Tailgater behind? Space ahead, move right.", page: 57, tags: ["following", "safety"]
  },
  {
    id: "safe-driver-04", deck: "safe-driver", title: "Mirror says clear",
    revision: 2,
    question: "What check is still needed before changing lanes?",
    scene: "You are ready to change lanes. Your mirror shows no traffic in the next lane.",
    answer: "Signal and look over your shoulder for the blind spot before moving.",
    why: "Mirrors do not show every vehicle, motorcycle, or bicycle beside you.", memory: "Mirror, signal, shoulder, move.", page: 58, tags: ["blind-spot", "lanes"]
  },
  {
    id: "safe-driver-05", deck: "safe-driver", title: "High beams meet headlights",
    question: "When must you switch from high beams to low beams?",
    scene: "An oncoming vehicle appears on a dark road while your high beams are on.",
    answer: "Dim to low beams within 500 feet of oncoming traffic, or within 300 feet when following another vehicle.",
    why: "High beams can blind other drivers through the windshield or mirrors.", memory: "Dim: 500 toward, 300 behind.", page: 11, tags: ["numbers", "headlights", "night"]
  },
  {
    id: "safe-driver-06", deck: "safe-driver", title: "Both ears disappear",
    question: "Is covering both ears legal while driving?",
    scene: "Noise-canceling headphones cover both ears while you drive.",
    answer: "Remove one or both; covering both ears with a headset or earplugs while driving is illegal.",
    why: "You need to hear horns, sirens, motorcycles, and tire noise.", memory: "Never seal both ears.", page: 9, tags: ["law", "distraction"]
  },
  {
    id: "safe-driver-07", deck: "safe-driver", title: "The phone at the red light",
    question: "Does the red light make handheld texting legal?",
    scene: "Your car is stopped at a red light and a text arrives on the phone in your hand.",
    answer: "Do not read or send it while driving. Adults should use hands-free only when necessary; pull safely off the road for more interaction.",
    why: "A red light does not remove the distraction or handheld-phone restriction.", memory: "Park before you tap.", page: 70, tags: ["law", "distraction", "phone"]
  },
  {
    id: "safe-driver-08", deck: "safe-driver", title: "The minor’s emergency call",
    question: "May a minor take this hands-free call?",
    scene: "A driver under 18 wants to answer a routine hands-free call.",
    answer: "Do not. Minors may not use a wireless device while driving except to call for emergency assistance.",
    why: "The minor restriction is stricter than the adult hands-free rule.", memory: "Minor phone: emergency only.", page: 71, tags: ["minor", "phone", "law"]
  },
  {
    id: "safe-driver-09", deck: "safe-driver", title: "The child-seat thresholds",
    revision: 2,
    question: "Which child-restraint rule applies?",
    scene: "One child is 18 months old, 25 pounds, and 30 inches tall. Another is six years old and 45 inches tall.",
    answer: "The toddler needs a rear-facing seat. The six-year-old needs a suitable car seat or booster in the back. Under age two, rear-facing is required unless the child reaches 40 pounds or 40 inches. At age eight or a height of 4 feet 9 inches, a properly fitting safety belt may meet the legal minimum.",
    why: "Follow the seat manufacturer’s limits. A legal age or height threshold does not guarantee the adult belt fits; keep using a booster if needed. CHP explains the age/height exception more clearly than the condensed handbook bullets.", memory: "Rear-facing: under 2 unless 40 lb or 40 in. Then choose the seat that fits.", page: 66, tags: ["numbers", "child", "safety"]
  },
  {
    id: "safe-driver-10", deck: "safe-driver", title: "The airbag ruler",
    question: "How far should your chest be from the airbag cover?",
    scene: "Your chest sits close to the steering-wheel airbag.",
    answer: "Sit at least 10 inches from the airbag cover while keeping full control.",
    why: "Distance reduces injury from deployment while the seat belt still positions you safely.", memory: "Airbag: 10 inches, full control.", page: 67, tags: ["numbers", "safety"]
  },
  {
    id: "safe-driver-11", deck: "safe-driver", title: "Six-year-old in the car",
    question: "Can you leave the child alone for this errand?",
    scene: "You need to run into a store for one minute while a six-year-old waits in the vehicle.",
    answer: "Do not leave the child unattended. A child six or younger may be left only under supervision of someone at least 12.",
    why: "Vehicle heat and other hazards rise quickly, even with a window cracked.", memory: "Six or under needs a 12+ watcher.", page: 67, tags: ["numbers", "child", "law"]
  },
  {
    id: "safe-driver-12", deck: "safe-driver", title: "The drowsy medicine",
    question: "Does a legal medicine make it safe to drive?",
    scene: "A legal over-the-counter medicine warns that it may cause sleepiness.",
    answer: "Do not drive until you know you can do so safely; legal medicine can still make driving under the influence illegal.",
    why: "California’s DUI rules focus on impairment, not whether a drug was prescribed or sold legally.", memory: "Legal drug can still mean illegal driving.", page: 72, tags: ["medication", "dui", "safety"]
  },

  {
    id: "dui-collisions-01", deck: "dui-collisions", title: "The BAC ladder",
    question: "What BAC thresholds apply to these driver groups?",
    scene: "Four drivers compare the per se BAC limits that apply to them.",
    answer: "Age 21+: 0.08%. Under 21 or any age on DUI probation: 0.01%. Commercial or passenger-for-hire: 0.04%.",
    why: "A driver may still be impaired and arrested below these numbers.", memory: ".08 adult; .01 youth/probation; .04 commercial/hire.", page: 73, tags: ["numbers", "dui", "law"]
  },
  {
    id: "dui-collisions-02", deck: "dui-collisions", title: "Below the line, still impaired",
    question: "Does being below the threshold make driving safe or legal?",
    scene: "A driver’s BAC is below the legal threshold, but alcohol clearly affects safe driving.",
    answer: "Do not drive. A BAC below a per se limit is not proof that driving is safe or legal.",
    why: "A driver can be arrested and convicted based on impairment even without a threshold-level BAC.", memory: "Limit is not a safety guarantee.", page: 73, tags: ["dui", "law"]
  },
  {
    id: "dui-collisions-03", deck: "dui-collisions", title: "The open bottle in the glovebox",
    question: "Where must the opened container be stored?",
    scene: "A passenger reseals an opened bottle and puts it in the glove compartment.",
    answer: "Move it to the trunk or another area where passengers do not sit; an open container cannot stay in the glovebox.",
    why: "Alcohol or cannabis containers carried in the passenger area generally must be sealed and unopened.", memory: "Opened goes in trunk, never glovebox.", page: 72, tags: ["dui", "law"]
  },
  {
    id: "dui-collisions-04", deck: "dui-collisions", title: "Consent by driving",
    question: "What can happen if you refuse the required chemical test?",
    scene: "An officer lawfully arrests a driver for suspected DUI and requests a chemical test.",
    answer: "California drivers are deemed to consent; refusal can bring a one-year suspension or revocation.",
    why: "A roadside screening test does not necessarily replace a later breath, blood, or urine test.", memory: "DUI test refusal: one-year consequence.", page: 72, tags: ["numbers", "dui", "law"]
  },
  {
    id: "dui-collisions-05", deck: "dui-collisions", title: "Ten days to be heard",
    question: "What is the deadline to request the DMV hearing?",
    scene: "After a DUI arrest, the driver wants to challenge the administrative suspension.",
    answer: "Request a DMV administrative hearing within 10 days of the arrest.",
    why: "The officer may issue a temporary license for 30 days, but the hearing deadline is much sooner.", memory: "DUI: 10 days to request, 30-day temporary license.", page: 74, tags: ["numbers", "dui", "test"]
  },
  {
    id: "dui-collisions-06", deck: "dui-collisions", title: "The coverage trio",
    question: "What are the three minimum liability coverage amounts?",
    scene: "You shop for the minimum California liability coverage in the 2025 handbook.",
    answer: "$30,000 for one person’s death/injury, $60,000 for more than one, and $15,000 for property damage.",
    why: "Proof of financial responsibility must be carried when driving and brought to a drive test.", memory: "Liability: 30 / 60 / 15.", page: 76, tags: ["numbers", "insurance"]
  },
  {
    id: "dui-collisions-07", deck: "dui-collisions", title: "Uninsured but not at fault",
    question: "Does being blameless avoid the uninsured-driver consequence?",
    scene: "An uninsured driver is in a collision that someone else caused.",
    answer: "The driver’s privilege may still be suspended for up to four years.",
    why: "The insurance consequence does not depend on collision fault.", memory: "No insurance: fault does not rescue you.", page: 76, tags: ["numbers", "insurance", "law"]
  },
  {
    id: "dui-collisions-08", deck: "dui-collisions", title: "First minute after impact",
    question: "What should you do first at the collision scene?",
    scene: "A collision has just happened and someone may be injured.",
    answer: "Stop, call 911 if anyone is hurt, and exchange license, registration, insurance, and current-address information.",
    why: "Leaving is hit-and-run; if no one is hurt, move vehicles out of traffic before calling.", memory: "Stop, protect, call, exchange.", page: 77, tags: ["collision", "emergency"]
  },
  {
    id: "dui-collisions-09", deck: "dui-collisions", title: "Two collision clocks",
    question: "Who must receive reports, and by when?",
    scene: "A crash causes an injury and more than $1,000 in property damage.",
    answer: "Report to law enforcement within 24 hours for injury/death, and file an SR-1 with DMV within 10 days.",
    why: "Each driver files the DMV report even if not at fault, even on private property; police do not file it for you.", memory: "Injury: police 24 hours; DMV 10 days.", page: 78, tags: ["numbers", "collision", "law"]
  },
  {
    id: "dui-collisions-10", deck: "dui-collisions", title: "The parked-car note",
    question: "What should you do if you cannot find the owner?",
    scene: "Your car rolls into an empty parked vehicle and the owner is nowhere nearby.",
    answer: "Try to find the owner; otherwise leave a secure note with your name, phone, and address, and report it to law enforcement.",
    why: "Unattended property does not remove the duty to identify yourself and report.", memory: "Find, note, report.", page: 77, tags: ["collision", "parking"]
  },
  {
    id: "dui-collisions-11", deck: "dui-collisions", title: "Buying and selling clocks",
    question: "What deadlines apply to the buyer and seller?",
    scene: "One person buys a used car while another sells theirs.",
    answer: "A buyer has 10 days to transfer ownership; a seller has five days to notify DMV with a release of liability.",
    why: "The two parties have different deadlines and filings.", memory: "Buyer 10; seller 5.", page: 79, tags: ["numbers", "registration"]
  },
  {
    id: "dui-collisions-12", deck: "dui-collisions", title: "New resident, same car",
    question: "When must you register the vehicle in California?",
    scene: "You become a California resident or take a California job while keeping an out-of-state vehicle.",
    answer: "Register the vehicle in California within 20 days.",
    why: "The clock starts with residency or employment, not when the old plates expire.", memory: "New California tie: register in 20.", page: 79, tags: ["numbers", "registration"]
  }
];

// Keep printed-page references while linking learners directly to the relevant rule.
window.ROAD_CARDS.forEach((card) => {
  const sections = [
    [4, "getting-an-instruction-permit-and-drivers-license"], [7, "the-testing-process"],
    [12, "introduction-to-driving"], [25, "navigating-the-roads"],
    [32, "navigating-the-roads-cont1"], [42, "laws-and-rules-of-the-road"],
    [48, "laws-and-rules-of-the-road-cont1"], [56, "laws-and-rules-of-the-road-cont2"],
    [64, "safe-driving"], [67, "safe-driving-cont1"], [71, "safe-driving-cont2"],
    [75, "alcohol-and-drugs"], [78, "financial-responsibility-insurance-requirements-and-collisions"],
    [84, "vehicle-registration-requirements"]
  ];
  const section = card.deck === "sharing" && card.page <= 48 ? "laws-and-rules-of-the-road-cont1" : card.page === 9 || card.page === 11 ? "introduction-to-driving" : sections.find(([lastPage]) => card.page <= lastPage)[1];
  card.sourceUrl = `https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/${section}/`;
  card.sourceLabel = "Read the DMV rule";
  card.verifiedOn = "2025 handbook · source audit July 2026";
  const illustrations = {
    "signals-09": ["stop.gif", "Official red eight-sided STOP sign."],
    "signals-10": ["school.png", "Official five-sided school warning sign with two people."],
    "right-way-04": ["roundabout.png", "Official DMV overhead diagram showing a right turn through a counterclockwise roundabout."],
    "sharing-01": ["truck-blind-spots.png", "Official DMV diagram shading the truck driver’s blind spots at the front, rear, and sides."],
    "sharing-08": ["bike-clearance.png", "Official DMV example of a car leaving space when passing a cyclist."],
    "speed-parking-07": ["curbs.png", "Official DMV street scene showing different colored curb restrictions; read the answer for each color’s meaning."],
    "speed-parking-09": ["hill-parking.jpg", "Official DMV wheel positions for downhill, uphill with a curb, and parking without a curb."]
  };
  if (illustrations[card.id]) {
    const [file, alt] = illustrations[card.id];
    card.illustration = { src: `assets/dmv/${file}`, alt };
  }
  if (card.id === "right-way-11") {
    card.sourceUrl = "https://www.dmv.ca.gov/portal/news-and-media/dmv-highlights-new-laws-in-2026/";
    card.sourceLabel = "Read the 2026 DMV update";
    card.verifiedOn = "Checked October 17, 2026";
  }
  if (card.id === "safe-driver-09") {
    card.sourceUrl = "https://www.chp.ca.gov/programs-services/programs/child-safety-seats";
    card.sourceLabel = "Read CHP child-seat guidance";
    card.verifiedOn = "Checked October 17, 2026";
  }
  if (card.id === "speed-parking-11") {
    card.sourceUrl = "https://www.oaklandca.gov/Public-Safety-Streets/Parking-Vehicles/Daylighting";
    card.sourceLabel = "Read the official daylighting explanation";
    card.verifiedOn = "Checked October 17, 2026";
  }
});
