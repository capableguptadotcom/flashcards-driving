const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "europe", "cards.js"), "utf8"), context);

const curriculum = context.window.EUROPE_DRIVING;
const { cards, decks, sources } = curriculum;

test("Europe curriculum has nine independent 12-card decks", () => {
  assert.equal(curriculum.id, "europe-core");
  assert.equal(decks.length, 9);
  assert.equal(cards.length, 108);
  for (const deck of decks) {
    assert.equal(cards.filter((card) => card.deck === deck.id).length, 12, deck.id);
  }
});
test("every Europe card is complete, scoped, dated and linked to an official source", () => {
  assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
  for (const card of cards) {
    for (const field of ["id", "deck", "title", "scene", "answer", "why", "memory", "scope", "scopeLabel", "jurisdiction", "source", "sourceTitle", "sourceUrl", "verifiedAt"]) {
      assert.equal(typeof card[field], "string", `${card.id}.${field}`);
      assert.ok(card[field].trim(), `${card.id}.${field}`);
    }
    assert.ok(decks.some((deck) => deck.id === card.deck), `${card.id}.deck`);
    assert.ok(["common", "country-check"].includes(card.scope), `${card.id}.scope`);
    assert.equal(card.verifiedAt, curriculum.verified, `${card.id}.verifiedAt`);
    assert.equal(card.sourceUrl, sources[card.source].url, `${card.id}.sourceUrl`);
    assert.match(card.sourceUrl, /^https:\/\/(europa\.eu|road-safety\.transport\.ec\.europa\.eu|digital-strategy\.ec\.europa\.eu|eur-lex\.europa\.eu)\//, `${card.id}.sourceUrl`);
    assert.ok(Array.isArray(card.tags) && card.tags.length, `${card.id}.tags`);
  }
});

test("high-risk Europe claims keep their verified scope and values", () => {
  const side = cards.find((card) => card.id === "borders-01");
  assert.deepEqual(Array.from(side.countries), ["Ireland", "Cyprus", "Malta"]);
  assert.match(side.answer, /left/);

  const child = cards.find((card) => card.id === "people-04");
  assert.match(child.answer, /150 cm/);
  assert.match(child.answer, /135 cm/);
  assert.equal(child.scope, "country-check");

  const movingGap = cards.find((card) => card.id === "speed-12");
  const stoppedGap = cards.find((card) => card.id === "motorways-06");
  assert.match(movingGap.answer, /two seconds/);
  assert.match(stoppedGap.answer, /5 metres/);

  const emergency = cards.find((card) => card.id === "emergencies-01");
  assert.match(emergency.answer, /112/);
  assert.match(emergency.answer, /fixed or mobile/);
});

test("Europe page and browser state stay separate from California", () => {
  const html = fs.readFileSync(path.join(root, "europe", "index.html"), "utf8");
  const app = fs.readFileSync(path.join(root, "europe", "app.js"), "utf8");
  const californiaApp = fs.readFileSync(path.join(root, "app.js"), "utf8");

  assert.match(html, /Continental Roadbook/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /<dialog class="study-dialog"/);
  assert.match(html, /Europe is not one driving jurisdiction/);
  assert.doesNotMatch(html, /California|DMV/);
  assert.match(app, /window\.EUROPE_DRIVING/);
  assert.match(app, /continental-roadbook-/);
  assert.doesNotMatch(app, /ROAD_CARDS|golden-state-roadtrip/);
  assert.match(californiaApp, /golden-state-roadtrip-progress-v1/);
  assert.doesNotMatch(californiaApp, /EUROPE_DRIVING|continental-roadbook/);
});
