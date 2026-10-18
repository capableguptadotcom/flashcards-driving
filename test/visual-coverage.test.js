const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");

function loadCurriculum(directory, cardsFile, cardsKey, visualsKey) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(directory, cardsFile), "utf8"), context);
  vm.runInContext(fs.readFileSync(path.join(directory, "visuals.js"), "utf8"), context);
  return {
    cards: cardsKey === "ROAD_CARDS" ? context.window[cardsKey] : context.window[cardsKey].cards,
    visuals: context.window[visualsKey]
  };
}

const curricula = [
  {
    name: "California",
    directory: root,
    cardsFile: "cards.js",
    cardsKey: "ROAD_CARDS",
    visualsKey: "ROAD_VISUALS"
  },
  {
    name: "Europe",
    directory: path.join(root, "europe"),
    cardsFile: "cards.js",
    cardsKey: "EUROPE_DRIVING",
    visualsKey: "EUROPE_VISUALS"
  }
];

for (const definition of curricula) {
  test(`${definition.name} has one complete, individual visual for every card`, () => {
    const { cards, visuals } = loadCurriculum(
      definition.directory,
      definition.cardsFile,
      definition.cardsKey,
      definition.visualsKey
    );
    const cardIds = Array.from(cards, (card) => card.id).sort();
    const visualIds = Object.keys(visuals).sort();

    assert.deepEqual(visualIds, cardIds);
    assert.equal(new Set(Object.values(visuals).map((visual) => visual.cue)).size, cards.length);

    for (const card of cards) {
      const visual = visuals[card.id];
      for (const field of ["kind", "symbol", "cue"]) {
        assert.equal(typeof visual[field], "string", `${card.id}.${field}`);
        assert.ok(visual[field].trim(), `${card.id}.${field}`);
      }

      const asset = path.join(definition.directory, "assets", "card-visuals", `${card.id}.svg`);
      assert.ok(fs.existsSync(asset), asset);
      const svg = fs.readFileSync(asset, "utf8");
      assert.match(svg, new RegExp(`data-card-id="${card.id}"`));
      assert.match(svg, /<title[^>]*>[^<]+<\/title>/);
      assert.match(svg, /role="img"/);
    }
  });
}

test("California uses official illustrations while Europe keeps its separate visual module", () => {
  const california = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const europe = fs.readFileSync(path.join(root, "europe", "index.html"), "utf8");

  assert.doesNotMatch(california, /<script src="visuals.js/);
  assert.ok(europe.indexOf("visuals.js") < europe.indexOf("app.js"));
  const { cards } = loadCurriculum(root, "cards.js", "ROAD_CARDS", "ROAD_VISUALS");
  const illustrated = cards.filter((card) => card.illustration);
  assert.equal(illustrated.length, 7);
  for (const card of illustrated) {
    assert.ok(fs.statSync(path.join(root, card.illustration.src)).size > 1000);
    assert.ok(card.illustration.alt.length > 20);
  }
  assert.match(fs.readFileSync(path.join(root, "europe", "app.js"), "utf8"), /window\.EUROPE_VISUALS/);
});

test("regulated signs, markings, parking layouts, and country-check scenes retain their visual meaning", () => {
  const california = path.join(root, "assets", "card-visuals");
  const europe = path.join(root, "europe", "assets", "card-visuals");
  const read = (directory, cardId) => fs.readFileSync(path.join(directory, cardId + ".svg"), "utf8");

  assert.match(read(california, "signals-09"), /data-sign-standard="CA-MUTCD-R1-1"/);
  assert.match(read(california, "signals-10"), /data-sign-standard="CA-MUTCD-S1-1"/);
  assert.doesNotMatch(read(california, "signals-10"), />SCHOOL</);
  assert.match(read(california, "speed-parking-02"), /data-road-layout="undivided-two-lane-highway"/);
  assert.doesNotMatch(read(california, "speed-parking-02"), /CA-MUTCD-R2-1/);
  assert.match(read(california, "lanes-02"), /data-road-marking="double-double-yellow-barrier"/);
  assert.match(read(california, "lanes-03"), /data-road-marking="double-solid-white-hov-barrier"/);
  assert.match(read(california, "lanes-04"), /data-road-marking="yield-line"/);
  assert.match(read(california, "lanes-07"), /data-road-marking="bike-lane"/);
  assert.match(read(california, "lanes-09"), /data-road-marking="one-way-left-on-red"/);
  assert.match(read(california, "speed-parking-07"), /data-road-marking="curb-colour-code"/);
  assert.match(read(california, "speed-parking-08"), /data-road-marking="parallel-curb"/);
  assert.match(read(california, "speed-parking-09"), /data-parking-orientation="downhill-into-curb"/);
  assert.match(read(california, "speed-parking-09"), /data-parking-orientation="uphill-away-from-curb"/);
  assert.match(read(california, "speed-parking-09"), /data-parking-orientation="no-curb-right-edge"/);
  assert.match(read(california, "speed-parking-10"), /data-parking-buffer="fire-hydrant-15-feet"/);
  assert.match(read(california, "right-way-04"), /data-traffic-flow="counterclockwise"/);

  assert.match(read(europe, "signals-01"), /data-sign-standard="UNECE-VIENNA-CLASSES"/);
  assert.match(read(europe, "borders-03"), /data-sign-standard="COUNTRY-SPECIFIC-LIMITS"/);
  assert.match(read(europe, "signals-05"), /data-sign-standard="COUNTRY-SPECIFIC-PARKING-PLATE"/);
  assert.match(read(europe, "junctions-10"), /data-road-marking="yellow-box"/);
  assert.match(read(europe, "junctions-11"), /data-road-marking="merge"/);
  assert.match(read(europe, "motorways-10"), /data-road-marking="emergency-corridor"/);
});
