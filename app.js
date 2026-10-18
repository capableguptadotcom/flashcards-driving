(() => {
  "use strict";
  const guide = window.DRIVING_GUIDE || {
    id: "california",
    name: "California",
    cards: window.ROAD_CARDS,
    decks: window.ROAD_DECKS,
  };
  const { cards, decks } = guide;
  const deckById = Object.fromEntries(decks.map((deck) => [deck.id, deck]));
  const storageKey =
    guide.id === "california"
      ? window.RoadProgress.KEY
      : guide.id + "-roadbook-progress-v2";
  const themeKey = guide.id + "-roadbook-theme";
  const storage = {
    getItem: (key) => window.localStorage.getItem(key),
    setItem: (key, value) => window.localStorage.setItem(key, value),
  };
  const store = window.RoadProgress.createStore(
    storage,
    cards,
    Date.now,
    guide.id === "california"
      ? {}
      : {
          key: storageKey,
          legacyKey: guide.id + "-roadbook-progress-v1",
          app: guide.id + "-roadbook",
        },
  );
  const $ = (id) => document.getElementById(id);
  const escape = (value) =>
    String(value).replace(
      /[&"<>]/g,
      (c) => ({ "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" })[c],
    );
  const status = (card) => store.records[card.id];
  const isDue = (card) =>
    Boolean(status(card) && status(card).dueAt <= Date.now());
  const confident = (card) => status(card)?.rating === 3;
  let activeFilter = "all",
    visibleCount = 12,
    session = null,
    preview = false,
    returnFocus,
    toastTimer;

  function toast(message) {
    clearTimeout(toastTimer);
    $("toast").textContent = message;
    $("toast").classList.add("show");
    toastTimer = setTimeout(() => $("toast").classList.remove("show"), 4000);
  }
  function saveFeedback() {
    $("save-status").textContent = store.saved
      ? "Saved automatically in this browser. No account needed."
      : "Progress could not be saved. Download a backup before leaving this visit.";
    $("save-status").classList.toggle("save-warning", !store.saved);
  }
  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function buildSession(source, size) {
    return [
      ...shuffle(source.filter(isDue)),
      ...shuffle(source.filter((card) => !status(card))),
      ...shuffle(
        source.filter(
          (card) => status(card) && !isDue(card) && !confident(card),
        ),
      ),
      ...shuffle(source.filter((card) => confident(card) && !isDue(card))),
    ]
      .slice(0, size)
      .map((card) => card.id);
  }
  function matchesStatus(card) {
    switch ($("status-filter").value) {
      case "unseen":
        return !status(card);
      case "due":
        return isDue(card);
      case "learning":
        return status(card) && !confident(card);
      case "confident":
        return confident(card);
      default:
        return true;
    }
  }
  function filteredCards() {
    const query = $("search-input").value.trim().toLowerCase();
    return cards.filter((card) => {
      if (
        activeFilter !== "all" &&
        card.deck !== activeFilter &&
        !(activeFilter === "numbers" && card.tags.includes("numbers"))
      )
        return false;
      if (!matchesStatus(card)) return false;
      const text = [
        card.title,
        card.question,
        card.scene,
        card.answer,
        card.why,
        card.memory,
        ...card.tags,
      ]
        .join(" ")
        .toLowerCase();
      return (
        !query ||
        (query.length <= 3 && /^[a-z0-9]+$/.test(query)
          ? new RegExp("\\b" + query + "\\b").test(text)
          : text.includes(query))
      );
    });
  }
  function renderFilters() {
    const filters = [
      { id: "all", label: "All " + cards.length },
      ...decks.map((deck) => ({ id: deck.id, label: deck.short })),
      { id: "numbers", label: "Numbers" },
    ];
    $("filter-row").innerHTML = filters
      .map(
        (filter) =>
          '<button class="filter-chip ' +
          (filter.id === activeFilter ? "active" : "") +
          '" aria-pressed="' +
          (filter.id === activeFilter) +
          '" type="button" data-filter="' +
          filter.id +
          '">' +
          escape(filter.label) +
          "</button>",
      )
      .join("");
  }
  function progressLabel(card) {
    if (!status(card)) return "Not studied";
    if (isDue(card)) return "Review due";
    return confident(card) ? "Confident" : "Practicing";
  }
  function renderLibrary() {
    const matches = filteredCards();
    $("results-count").textContent =
      `${matches.length} card${matches.length === 1 ? "" : "s"} found`;
    $("study-results").disabled = !matches.length;
    $("card-library").innerHTML =
      matches
        .slice(0, visibleCount)
        .map(
          (card) => `
      <button class="library-card" type="button" data-card="${card.id}">
        <span class="card-index">${String(cards.indexOf(card) + 1).padStart(3, "0")}</span>
        <span><span class="card-deck">${escape(deckById[card.deck].short)} · ${progressLabel(card)}</span>
          <strong>${escape(card.title)}</strong><span class="library-question">${escape(card.question)}</span></span>
        <span class="card-arrow" aria-hidden="true">→</span>
      </button>`,
        )
        .join("") ||
      '<p class="empty-state">No cards match. Try another topic, progress filter, or search.</p>';
    $("load-more").hidden = visibleCount >= matches.length;
  }
  function refreshDashboard() {
    const seen = cards.filter((card) => status(card)).length;
    const due = cards.filter(isDue).length;
    $("overall-progress-bar").style.width = `${(seen / cards.length) * 100}%`;
    $("overall-progress-text").textContent =
      `${seen}/${cards.length} studied · ${cards.filter(confident).length} confident · ${due} due`;
    $("due-count").textContent = due;
    $("review-due").textContent = due
      ? `Review ${due} due card${due === 1 ? "" : "s"}`
      : "No cards due yet";
    $("review-due").disabled = !due;
    $("resume-session").hidden = !store.session;
    if (store.session) {
      $("resume-session").textContent =
        `Resume · card ${store.session.index + 1} of ${store.session.ids.length}`;
    }
    $("deck-grid").innerHTML = decks
      .map((deck, index) => {
        const group = cards.filter((card) => card.deck === deck.id);
        const count = group.filter((card) => status(card)).length;
        return `
        <button class="deck-card" type="button" data-deck="${deck.id}" style="--deck-color:${deck.color}">
          <span class="deck-topline"><span>Deck ${String(index + 1).padStart(2, "0")}</span><span>${count}/${group.length} studied</span></span>
          <h3>${escape(deck.name)}</h3><p>${escape(deck.description)}</p>
          <span class="deck-detail">${group.filter(isDue).length} due · ${group.length} cards</span>
          <span class="deck-progress" aria-hidden="true"><span style="width:${(count / group.length) * 100}%"></span></span>
        </button>`;
      })
      .join("");
    saveFeedback();
    renderLibrary();
  }
  function rememberSession() {
    if (!preview)
      store.saveSession(session.index < session.ids.length ? session : null);
    saveFeedback();
  }
  function openSession(source, label, options = {}) {
    if (!source.length) {
      toast("No cards match this session.");
      return;
    }
    returnFocus = document.activeElement;
    preview = Boolean(options.preview);
    session = options.resume || {
      ids: options.preview
        ? source.map((card) => card.id)
        : buildSession(source, options.size || source.length),
      index: 0,
      ratings: [],
      label,
      revealed: false,
    };
    rememberSession();
    $("study-dialog").showModal();
    renderStudy();
  }
  function currentCard() {
    return cards.find((card) => card.id === session?.ids[session.index]);
  }
  function renderStudy() {
    const card = currentCard();
    $("study-deck-label").textContent = session.label;
    $("study-progress-bar").style.width =
      `${(session.index / session.ids.length) * 100}%`;
    if (!card) {
      renderCompletion();
      return;
    }
    $("study-position").textContent =
      `Card ${session.index + 1} of ${session.ids.length}`;
    let scope = "";
    if (card.jurisdiction)
      scope = `<p class="scope-note">${escape(card.jurisdiction)}</p>`;
    const top = `<div class="study-card-top"><span>${escape(deckById[card.deck].name)}</span><span>${session.revealed ? "The rule" : "Think it through"}</span></div>${scope}`;
    let body;
    if (!session.revealed) {
      body = `<p class="scene-copy">${escape(card.scene)}</p>
        <h2 id="card-question">${escape(card.question)}</h2>
        <p class="recall-hint">Say your answer before revealing the rule.</p>`;
      $("study-controls").innerHTML =
        '<button class="primary-button reveal-button" id="reveal-card" type="button">Reveal the rule</button>';
    } else {
      let picture = "";
      if (card.illustration) {
        picture = `<details class="official-illustration"><summary>See the official DMV illustration</summary>
          <figure><img src="${escape(card.illustration.src)}" alt="${escape(card.illustration.alt)}" loading="lazy" />
            <figcaption>California DMV · handbook illustration</figcaption></figure></details>`;
      }
      let pageReference = "";
      if (card.page) pageReference = `Handbook printed p. ${card.page} · `;
      body = `<h2 id="card-question">${escape(card.question)}</h2>
        <div class="answer-callout">${escape(card.answer)}</div>
        <div class="reason-block">
          <div><span>Why it matters</span><p>${escape(card.why)}</p></div>
          <div><span>Remember</span><p>${escape(card.memory)}</p></div>
        </div>${picture}
        <a class="source-chip" href="${escape(card.sourceUrl)}" target="_blank" rel="noreferrer">${escape(card.sourceLabel)} ↗</a>
        <p class="source-date">${pageReference}${escape(card.verifiedOn)}</p>
        <p class="rating-instruction">How well did you recall this? Your rating sets the next review.</p>`;
      $("study-controls").innerHTML = `
        <button class="rating-button" type="button" data-rating="1">1 · Again<small>Review now</small></button>
        <button class="rating-button" type="button" data-rating="2">2 · Almost<small>Tomorrow</small></button>
        <button class="rating-button" type="button" data-rating="3">3 · Got it<small>In ${store.nextReviewDays(card.id, 3)} days</small></button>`;
    }
    $("study-stage").innerHTML =
      `<article class="study-card ${session.revealed ? "reveal-card" : "question-card"}" style="--card-color:${deckById[card.deck].color}">${top}${body}</article>`;
    $("study-stage").scrollTop = 0;
    $("study-controls").querySelector("button").focus({ preventScroll: true });
  }
  function reveal() {
    if (currentCard() && !session.revealed) {
      session.revealed = true;
      renderStudy();
    }
  }
  function rate(rating) {
    const card = currentCard();
    if (!card || !session.revealed) return;
    store.record(card.id, rating);
    session.ratings.push(rating);
    session.index += 1;
    session.revealed = false;
    rememberSession();
    renderStudy();
  }
  function renderCompletion() {
    const gotIt = session.ratings.filter((rating) => rating === 3).length;
    const again = session.ratings.filter((rating) => rating === 1).length;
    $("study-position").textContent = "Session complete";
    $("study-stage").innerHTML = `
      <div class="session-complete">
        <h2>One step more confident.</h2>
        <p>You studied ${session.ids.length} card${session.ids.length === 1 ? "" : "s"}. These are self-ratings, not a test score.</p>
        <div class="completion-stats">
          <div><strong>${gotIt}</strong><span>got it</span></div>
          <div><strong>${session.ratings.length - gotIt - again}</strong><span>almost</span></div>
          <div><strong>${again}</strong><span>again</span></div>
        </div>
      </div>`;
    let retryButton = "";
    if (again)
      retryButton =
        '<button class="secondary-button" id="retry-cards" type="button">Retry the difficult cards</button>';
    $("study-controls").innerHTML =
      retryButton +
      '<button class="primary-button" id="finish-session" type="button">Back to my progress</button>';
    refreshDashboard();
    $("study-controls").querySelector("button").focus({ preventScroll: true });
  }
  function closeSession() {
    $("study-dialog").close();
    refreshDashboard();
    let focusTarget = returnFocus?.isConnected ? returnFocus : null;
    if (!focusTarget && returnFocus?.dataset.card)
      focusTarget = document.querySelector(
        `[data-card="${returnFocus.dataset.card}"]`,
      );
    if (!focusTarget && returnFocus?.dataset.deck)
      focusTarget = document.querySelector(
        `[data-deck="${returnFocus.dataset.deck}"]`,
      );
    (focusTarget || $("start-session")).focus({ preventScroll: true });
  }
  function changeLibrary() {
    visibleCount = 12;
    renderLibrary();
  }
  $("deck-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-deck]");
    if (button)
      openSession(
        cards.filter((card) => card.deck === button.dataset.deck),
        deckById[button.dataset.deck].name,
      );
  });
  $("filter-row").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderFilters();
    $("filter-row")
      .querySelector('[data-filter="' + activeFilter + '"]')
      .focus({ preventScroll: true });
    changeLibrary();
  });
  $("card-library").addEventListener("click", (event) => {
    const button = event.target.closest("[data-card]");
    if (button)
      openSession(
        [cards.find((card) => card.id === button.dataset.card)],
        "Single card",
        { preview: true },
      );
  });
  $("search-input").addEventListener("input", changeLibrary);
  $("status-filter").addEventListener("change", changeLibrary);
  $("load-more").addEventListener("click", () => {
    visibleCount += 12;
    renderLibrary();
  });
  $("start-session").addEventListener("click", () =>
    openSession(cards, guide.name + " · mixed practice", { size: 10 }),
  );
  $("study-results").addEventListener("click", () =>
    openSession(filteredCards(), "My filtered cards", { size: 10 }),
  );
  $("review-due").addEventListener("click", () =>
    openSession(cards.filter(isDue), "Due for review", { size: 10 }),
  );
  $("resume-session").addEventListener("click", () => {
    if (store.session)
      openSession(cards, store.session.label, {
        resume: structuredClone(store.session),
      });
  });
  $("close-study").addEventListener("click", closeSession);
  $("study-dialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    closeSession();
  });
  $("study-controls").addEventListener("click", (event) => {
    if (event.target.closest("#reveal-card")) reveal();
    if (event.target.closest("#finish-session")) closeSession();
    const rating = event.target.closest("[data-rating]");
    if (rating) rate(Number(rating.dataset.rating));
    if (event.target.closest("#retry-cards")) {
      const difficult = session.ids
        .filter((id, i) => session.ratings[i] === 1)
        .map((id) => cards.find((card) => card.id === id));
      closeSession();
      openSession(difficult, "Another pass at difficult cards");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      !$("study-dialog").open ||
      event.repeat ||
      /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) ||
      event.target.isContentEditable
    )
      return;
    if (event.code === "Space" && currentCard() && !session.revealed) {
      event.preventDefault();
      reveal();
    } else if (session.revealed && ["1", "2", "3"].includes(event.key)) {
      event.preventDefault();
      rate(Number(event.key));
    }
  });
  $("export-progress").addEventListener("click", () => {
    const url = URL.createObjectURL(
      new Blob([store.exportBackup()], { type: "application/json" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download =
      guide.id +
      "-driving-progress-" +
      new Date().toISOString().slice(0, 10) +
      ".json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Backup downloaded. Keep it to restore your progress later.");
  });
  $("import-progress").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (file.size > 1000000)
        throw new Error("Choose a progress backup smaller than 1 MB.");
      const count = store.importBackup(await file.text());
      refreshDashboard();
      toast(
        "Restored " +
          count +
          " newer card review" +
          (count === 1 ? "" : "s") +
          ".",
      );
    } catch (error) {
      toast(
        error instanceof SyntaxError
          ? "This file is not a valid JSON backup."
          : error.message,
      );
    }
    event.target.value = "";
  });
  $("reset-progress").addEventListener("click", () => {
    if (
      window.confirm(
        "Reset all " +
          guide.name +
          " progress and the unfinished session in this browser? Download a backup first if you want to keep a copy.",
      )
    ) {
      store.reset();
      refreshDashboard();
      toast(guide.name + " progress reset.");
    }
  });
  function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    $("theme-toggle").setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#15231c" : "#f4efe4";
  }
  $("theme-toggle").addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    try {
      storage.setItem(themeKey, next);
    } catch {
      /* Theme still works for this visit. */
    }
    applyTheme(next);
  });
  let theme;
  try {
    theme =
      storage.getItem(themeKey) ||
      (guide.id === "california"
        ? storage.getItem("golden-state-roadtrip-theme")
        : null);
  } catch {
    /* Use system preference. */
  }
  applyTheme(
    theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey && !$("study-dialog").open && store.reload())
      refreshDashboard();
  });
  window.addEventListener("focus", () => {
    if (!$("study-dialog").open) {
      store.reload();
      refreshDashboard();
    }
  });
  $("total-count").textContent = cards.length;
  $("current-year").textContent = new Date().getFullYear();
  renderFilters();
  refreshDashboard();
})();
