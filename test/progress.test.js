const assert = require("node:assert/strict");
const test = require("node:test");
const { createStore, KEY } = require("../progress.js");

const cards = [
  { id: "old", revision: 1 },
  { id: "changed", revision: 2 },
];
function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

test("migrates old reviews and returns corrected cards for review without erasing history", () => {
  const review = { rating: 3, reviewedAt: 100, dueAt: 100000 };
  const storage = memoryStorage({
    "golden-state-roadtrip-progress-v1": JSON.stringify({
      old: review,
      changed: review,
    }),
  });
  const store = createStore(storage, cards, () => 200);
  assert.equal(store.records.old.rating, 3);
  assert.equal(store.records.changed.rating, 2);
  assert.equal(store.records.changed.dueAt, 0);
  assert.equal(store.records.changed.reviewedAt, 100);
  assert.equal(createStore(storage, cards).records.changed.revision, 2);
});

test("a partial session survives reload; previewing a card does not replace it", () => {
  const storage = memoryStorage();
  const store = createStore(storage, cards, () => 200);
  store.saveSession({
    ids: ["old", "changed"],
    index: 1,
    ratings: [3],
    label: "Practice",
    revealed: true,
  });
  store.record("changed", 2);
  const reloaded = createStore(storage, cards);
  assert.deepEqual(reloaded.session.ids, ["old", "changed"]);
  assert.equal(reloaded.session.index, 1);
  assert.equal(reloaded.session.revealed, false);
  assert.deepEqual(reloaded.session.ratings, [3]);
});

test("successful recalls lengthen reviews, while again/almost reset the streak", () => {
  const now = 1000,
    day = 86400000;
  const store = createStore(memoryStorage(), cards, () => now);
  for (const days of [3, 7, 21, 21]) {
    store.record("old", 3);
    assert.equal(store.records.old.dueAt, now + days * day);
  }
  store.record("old", 1);
  assert.equal(store.records.old.dueAt, now);
  assert.equal(store.records.old.streak, 0);
  store.record("old", 2);
  assert.equal(store.records.old.dueAt, now + day);
  assert.equal(store.records.old.reviews, 6);
});

test("backup roundtrip preserves records and session; merge never overwrites newer local reviews", () => {
  const original = createStore(memoryStorage(), cards, () => 100);
  original.record("old", 3);
  original.saveSession({
    ids: ["changed"],
    index: 0,
    ratings: [],
    label: "Resume",
  });
  const restored = createStore(memoryStorage(), cards, () => 200);
  assert.equal(restored.importBackup(original.exportBackup()), 1);
  assert.deepEqual(restored.records, original.records);
  assert.equal(restored.session.label, "Resume");
  restored.record("old", 1);
  assert.equal(restored.importBackup(original.exportBackup()), 0);
  assert.equal(restored.records.old.rating, 1);
});

test("regional backups and storage remain isolated", () => {
  const storage = memoryStorage();
  const ca = createStore(storage, cards, () => 100);
  const india = createStore(storage, cards, () => 100, {
    key: "india",
    app: "india-roadbook",
    legacyKey: "india-v1",
  });
  ca.record("old", 3);
  assert.deepEqual(india.records, {});
  assert.throws(
    () => india.importBackup(ca.exportBackup()),
    /this driving guide/,
  );
  assert.deepEqual(india.records, {});
});

test("corrupt storage, blocked writes and invalid session data do not crash study", () => {
  const broken = createStore(memoryStorage({ [KEY]: "bad json" }), cards);
  assert.equal(broken.saved, false);
  assert.deepEqual(broken.records, {});
  const storage = {
    getItem() {
      throw new Error("denied");
    },
    setItem() {
      throw new Error("quota");
    },
  };
  const blocked = createStore(storage, cards, () => 200);
  assert.doesNotThrow(() => blocked.record("old", 3));
  assert.equal(blocked.records.old.rating, 3);
  assert.equal(blocked.saved, false);
  assert.ok(blocked.exportBackup().includes('"old"'));
  assert.throws(() => blocked.importBackup('{"app":"wrong"}'));
  blocked.saveSession({ ids: ["missing"], index: 0, ratings: [] });
  assert.equal(blocked.session, null);
});

test("reset persists without reimporting the retained legacy data", () => {
  const storage = memoryStorage({
    "golden-state-roadtrip-progress-v1": JSON.stringify({
      old: { rating: 3, reviewedAt: 100, dueAt: 1000 },
    }),
  });
  const store = createStore(storage, cards);
  store.reset();
  assert.deepEqual(createStore(storage, cards).records, {});
});
