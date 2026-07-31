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

test("both pages load their own visual module before their application", () => {
  const california = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const europe = fs.readFileSync(path.join(root, "europe", "index.html"), "utf8");

  assert.ok(california.indexOf("visuals.js") < california.indexOf("app.js"));
  assert.ok(europe.indexOf("visuals.js") < europe.indexOf("app.js"));
  assert.match(fs.readFileSync(path.join(root, "app.js"), "utf8"), /window\.ROAD_VISUALS/);
  assert.match(fs.readFileSync(path.join(root, "europe", "app.js"), "utf8"), /window\.EUROPE_VISUALS/);
});
