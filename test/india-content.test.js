const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(
  fs.readFileSync(path.join(root, "india/cards.js"), "utf8"),
  context,
);
vm.runInContext(
  fs.readFileSync(path.join(root, "india/guide.js"), "utf8"),
  context,
);
const guide = context.window.DRIVING_GUIDE;

test("India has an independent national-core curriculum of six complete decks", () => {
  assert.equal(guide.id, "india");
  assert.equal(guide.cards.length, 60);
  assert.equal(guide.decks.length, 6);
  assert.equal(new Set(guide.cards.map((card) => card.id)).size, 60);
  for (const deck of guide.decks) {
    assert.equal(
      guide.cards.filter((card) => card.deck === deck.id).length,
      10,
    );
  }
});

test("every India card has a specific question, explanation and official citation", () => {
  for (const card of guide.cards) {
    for (const field of [
      "title",
      "scene",
      "question",
      "answer",
      "why",
      "memory",
      "sourceLabel",
      "jurisdiction",
      "verifiedOn",
    ]) {
      assert.ok(
        typeof card[field] === "string" && card[field].trim(),
        `${card.id}.${field}`,
      );
    }
    assert.ok(card.id.startsWith("india-"));
    assert.ok(card.tags.length > 0);
    assert.equal(card.revision, 1);
    assert.match(new URL(card.sourceUrl).hostname, /(^|\.)(gov|nic)\.in$/);
  }
});

test("India distinguishes capacity, local tests and left-side driving from California", () => {
  const card = (id) => guide.cards.find((item) => item.id === id);
  assert.match(card("india-licence-01").answer, /not exceeding 50cc/);
  assert.match(card("india-licence-01").answer, /110cc.*outside/);
  assert.match(card("india-licence-04").answer, /30 days/);
  assert.match(card("india-licence-08").jurisdiction, /State\/RTO/);
  assert.match(card("india-lanes-01").answer, /left/);
  assert.match(card("india-sharing-09").answer, /25 km\/h/);
  assert.match(card("india-safe-05").answer, /exceeding 30 mg per 100 ml/);
});

test("all three guides link to India and deployment includes its assets", () => {
  for (const file of ["index.html", "europe/index.html", "india/index.html"]) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    assert.match(html, /aria-label="India"/);
    assert.match(html, /aria-label="California"/);
    assert.match(html, /aria-label="Europe"/);
  }
  const html = fs.readFileSync(path.join(root, "india/index.html"), "utf8");
  assert.match(html, /\.\.\/progress\.js/);
  assert.match(html, /\.\.\/app\.js/);
  assert.match(html, /National core/);
  const workflow = fs.readFileSync(
    path.join(root, ".github/workflows/deploy-pages.yml"),
    "utf8",
  );
  assert.match(workflow, /cp -R india _site\/india/);
});
