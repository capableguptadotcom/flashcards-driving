(function (root) {
  "use strict";

  const KEY = "golden-state-roadtrip-progress-v2";
  const LEGACY_KEY = "golden-state-roadtrip-progress-v1";
  const DAY = 86400000;

  function createStore(storage, cards, clock = Date.now, options = {}) {
    const key = options.key || KEY;
    const legacyKey = options.legacyKey || LEGACY_KEY;
    const app = options.app || "golden-state-roadtrip-ca";
    const cardById = new Map(cards.map((card) => [card.id, card]));
    let state = { version: 2, records: {}, session: null };
    let saved = true;

    function cleanRecords(records) {
      if (!records || typeof records !== "object" || Array.isArray(records))
        return {};
      const clean = {};
      for (const [id, record] of Object.entries(records)) {
        const card = cardById.get(id);
        if (!card || !record || ![1, 2, 3].includes(record.rating)) continue;
        if (
          ![record.reviewedAt, record.dueAt].every(
            (value) => Number.isFinite(value) && value >= 0,
          )
        )
          continue;
        const revision = card.revision || 1;
        const outdated = (record.revision || 1) < revision;
        let streak = 0;
        if (
          !outdated &&
          Number.isSafeInteger(record.streak) &&
          record.streak >= 0
        ) {
          streak = record.streak;
        }
        clean[id] = {
          rating: outdated ? 2 : record.rating,
          reviewedAt: record.reviewedAt,
          dueAt: outdated ? 0 : record.dueAt,
          reviews:
            Number.isSafeInteger(record.reviews) && record.reviews > 0
              ? record.reviews
              : 1,
          streak,
          revision,
        };
      }
      return clean;
    }

    function cleanSession(session) {
      if (
        !session ||
        !Array.isArray(session.ids) ||
        !Array.isArray(session.ratings)
      )
        return null;
      if (
        !session.ids.length ||
        session.ids.length > cards.length ||
        new Set(session.ids).size !== session.ids.length
      )
        return null;
      if (!session.ids.every((id) => cardById.has(id))) return null;
      if (
        !Number.isInteger(session.index) ||
        session.index < 0 ||
        session.index >= session.ids.length
      )
        return null;
      if (
        session.ratings.length !== session.index ||
        !session.ratings.every((rating) => [1, 2, 3].includes(rating))
      )
        return null;
      return {
        ids: [...session.ids],
        index: session.index,
        ratings: [...session.ratings],
        label:
          typeof session.label === "string"
            ? session.label.slice(0, 100)
            : "Study session",
        // A resumed card starts with the question, so refreshed rules are always visible.
        revealed: false,
      };
    }

    function persist() {
      try {
        storage.setItem(key, JSON.stringify(state));
        saved = true;
      } catch {
        saved = false;
      }
      return saved;
    }

    function nextReviewDays(id, rating) {
      if (rating === 1) return 0;
      if (rating === 2) return 1;
      const streak = state.records[id]?.streak || 0;
      return [3, 7, 21][Math.min(streak, 2)];
    }

    try {
      const current = storage.getItem(key);
      if (current !== null) {
        const parsed = JSON.parse(current);
        if (parsed?.version !== 2)
          throw new Error("Unrecognized saved progress");
        state.records = cleanRecords(parsed.records);
        state.session = cleanSession(parsed.session);
      } else {
        const legacy = JSON.parse(storage.getItem(legacyKey) || "{}");
        state.records = cleanRecords(legacy);
        persist();
      }
    } catch {
      // Keep unreadable saved data intact; the UI offers a backup or a fresh session.
      saved = false;
    }

    return {
      get records() {
        return state.records;
      },
      get session() {
        return state.session;
      },
      get saved() {
        return saved;
      },
      nextReviewDays,
      record(id, rating) {
        if (!cardById.has(id) || ![1, 2, 3].includes(rating))
          throw new Error("Invalid card rating");
        const previous = state.records[id];
        const streak = rating === 3 ? (previous?.streak || 0) + 1 : 0;
        const delay = nextReviewDays(id, rating) * DAY;
        const now = clock();
        state.records[id] = {
          rating,
          reviewedAt: now,
          dueAt: now + delay,
          reviews: (previous?.reviews || 0) + 1,
          streak,
          revision: cardById.get(id).revision || 1,
        };
        return persist();
      },
      saveSession(session) {
        state.session = cleanSession(session);
        return persist();
      },
      reset() {
        state = { version: 2, records: {}, session: null };
        return persist();
      },
      exportBackup() {
        return JSON.stringify({ app, exportedAt: clock(), ...state }, null, 2);
      },
      importBackup(text) {
        const backup = JSON.parse(text);
        if (
          backup?.app !== app ||
          backup.version !== 2 ||
          !backup.records ||
          typeof backup.records !== "object" ||
          Array.isArray(backup.records)
        ) {
          throw new Error("Choose a progress backup for this driving guide.");
        }
        const imported = cleanRecords(backup.records);
        if (Object.keys(backup.records).length && !Object.keys(imported).length)
          throw new Error("No valid card progress was found for this guide.");
        let count = 0;
        for (const [id, record] of Object.entries(imported)) {
          if (
            !state.records[id] ||
            record.reviewedAt > state.records[id].reviewedAt
          ) {
            state.records[id] = record;
            count += 1;
          }
        }
        // An existing local session takes priority over a backup's unfinished session.
        if (!state.session) state.session = cleanSession(backup.session);
        persist();
        return count;
      },
      reload() {
        if (!saved) return false;
        try {
          const parsed = JSON.parse(storage.getItem(key));
          if (parsed?.version !== 2) return false;
          state = {
            version: 2,
            records: cleanRecords(parsed.records),
            session: cleanSession(parsed.session),
          };
          saved = true;
          return true;
        } catch {
          return false;
        }
      },
    };
  }

  const api = { createStore, KEY };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.RoadProgress = api;
})(typeof window !== "undefined" ? window : globalThis);
