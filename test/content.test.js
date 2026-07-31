const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "cards.js"), "utf8"), context);

const cards = context.window.ROAD_CARDS;
const decks = context.window.ROAD_DECKS;

test("curriculum has nine complete 12-card decks", () => {
  assert.equal(decks.length, 9);
  assert.equal(cards.length, 108);
  for (const deck of decks) {
    assert.equal(cards.filter((card) => card.deck === deck.id).length, 12, deck.id);
  }
});

test("every card has unique identity and complete learning fields", () => {
  assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
  for (const card of cards) {
    for (const field of ["id", "deck", "title", "scene", "answer", "why", "memory"]) {
      assert.equal(typeof card[field], "string", `${card.id}.${field}`);
      assert.ok(card[field].trim().length > 0, `${card.id}.${field}`);
    }
    assert.ok(decks.some((deck) => deck.id === card.deck), `${card.id}.deck`);
    assert.ok(Number.isInteger(card.page) && card.page >= 1 && card.page <= 84, `${card.id}.page`);
    assert.ok(Array.isArray(card.tags) && card.tags.length > 0, `${card.id}.tags`);
  }
});

test("high-volatility facts use current handbook values", () => {
  const insurance = cards.find((card) => card.id === "dui-collisions-06");
  assert.match(insurance.answer, /\$30,000/);
  assert.match(insurance.answer, /\$60,000/);
  assert.match(insurance.answer, /\$15,000/);
  assert.doesNotMatch(insurance.answer, /\$5,000/);

  const bac = cards.find((card) => card.id === "dui-collisions-01");
  assert.match(bac.answer, /0\.08%/);
  assert.match(bac.answer, /0\.01%/);
  assert.match(bac.answer, /0\.04%/);
});

test("the page has source, accessibility, and study controls", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /class="skip-link"/);
  assert.match(html, /<dialog class="study-dialog"/);
  assert.match(html, /California Department of Motor Vehicles/);
  assert.match(html, /CC BY-NC 4\.0/);
  assert.match(html, /Not affiliated with or endorsed by the DMV/);
  assert.match(html, /80%/);
  assert.match(html, /does not publish a fixed live-test question count/);
  assert.match(html, /sample-driver-license-dl-knowledge-tests/);
});
