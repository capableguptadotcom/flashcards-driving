(() => {
  "use strict";

  const curriculum = window.EUROPE_DRIVING;
  const cards = curriculum.cards;
  const decks = curriculum.decks;
  const sources = curriculum.sources;
  const visuals = window.EUROPE_VISUALS;
  const deckById = Object.fromEntries(decks.map((deck) => [deck.id, deck]));
  const STORAGE_KEY = `continental-roadbook-${curriculum.id}-progress-v1`;
  const THEME_KEY = "continental-roadbook-theme";

  const elements = {
    deckGrid: document.querySelector("#deck-grid"),
    library: document.querySelector("#card-library"),
    filterRow: document.querySelector("#filter-row"),
    resultsCount: document.querySelector("#results-count"),
    search: document.querySelector("#search-input"),
    loadMore: document.querySelector("#load-more"),
    totalCount: document.querySelector("#total-count"),
    overallBar: document.querySelector("#overall-progress-bar"),
    overallText: document.querySelector("#overall-progress-text"),
    start: document.querySelector("#start-session"),
    review: document.querySelector("#review-due"),
    reset: document.querySelector("#reset-progress"),
    theme: document.querySelector("#theme-toggle"),
    dialog: document.querySelector("#study-dialog"),
    close: document.querySelector("#close-study"),
    stage: document.querySelector("#study-stage"),
    controls: document.querySelector("#study-controls"),
    position: document.querySelector("#study-position"),
    deckLabel: document.querySelector("#study-deck-label"),
    studyBar: document.querySelector("#study-progress-bar"),
    toast: document.querySelector("#toast")
  };

  let progress = loadProgress();
  let activeFilter = "all";
  let visibleCount = 12;
  let session = [];
  let sessionIndex = 0;
  let isRevealed = false;
  let sessionRatings = [];
  let toastTimer;

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      showToast("Progress could not be saved in this browser.");
    }
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2600);
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function getCardStatus(cardId) {
    return progress[cardId] || null;
  }

  function isDue(card) {
    const status = getCardStatus(card.id);
    return status && status.dueAt <= Date.now();
  }

  function isLearned(card) {
    return getCardStatus(card.id)?.rating === 3;
  }

  function escapeAttribute(value) {
    return value.replace(/[&"<>]/g, (character) => ({
      "&": "&amp;",
      '"': "&quot;",
      "<": "&lt;",
      ">": "&gt;"
    })[character]);
  }

  function cardVisual(card, className = "study-visual") {
    const visual = visuals[card.id];
    const alt = escapeAttribute(`Road-rule illustration for ${card.title}: ${visual.cue}`);
    return `<img class="${className}" src="assets/card-visuals/${card.id}.svg" alt="${alt}" width="640" height="360" />`;
  }

  function cardScope(card) {
    return ["EU", "Destination country"].includes(card.jurisdiction)
      ? card.scopeLabel
      : `${card.scopeLabel} · ${card.jurisdiction}`;
  }

  function deckProgress(deckId) {
    const deckCards = cards.filter((card) => card.deck === deckId);
    const learned = deckCards.filter(isLearned).length;
    return { learned, total: deckCards.length, percent: Math.round((learned / deckCards.length) * 100) };
  }

  function renderDecks() {
    elements.deckGrid.innerHTML = decks.map((deck, index) => {
      const route = deckProgress(deck.id);
      return `
        <button class="deck-card" type="button" data-deck="${deck.id}" style="--deck-color:${deck.color}">
          <span class="deck-topline"><span>Route ${String(index + 1).padStart(2, "0")}</span><span>${route.learned}/${route.total} learned</span></span>
          <span class="deck-icon" aria-hidden="true">${deck.icon}</span>
          <h3>${deck.name}</h3>
          <p>${deck.description}</p>
          <span class="deck-progress" aria-hidden="true"><span style="width:${route.percent}%"></span></span>
        </button>
      `;
    }).join("");
  }

  function renderFilters() {
    const filters = [
      { id: "all", label: `All ${cards.length}` },
      ...decks.map((deck) => ({ id: deck.id, label: deck.short })),
      { id: "common", label: "EU baseline" },
      { id: "country-check", label: "Country check" },
      { id: "numbers", label: "Numbers" }
    ];

    elements.filterRow.innerHTML = filters.map((filter) => `
      <button class="filter-chip ${filter.id === activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">${filter.label}</button>
    `).join("");
  }

  function filteredCards() {
    const query = elements.search.value.trim().toLowerCase();
    return cards.filter((card) => {
      const matchesFilter = activeFilter === "all"
        || card.deck === activeFilter
        || card.scope === activeFilter
        || (activeFilter === "numbers" && card.tags.includes("numbers"));
      if (!matchesFilter) return false;
      if (!query) return true;
      const haystack = [card.title, card.scene, card.answer, card.why, card.memory, card.scopeLabel, ...card.countries, ...card.tags].join(" ").toLowerCase();
      if (query.length <= 3 && /^[a-z0-9]+$/.test(query)) {
        return new RegExp(`\\b${query}\\b`).test(haystack);
      }
      return haystack.includes(query);
    });
  }

  function renderLibrary() {
    const matches = filteredCards();
    const visible = matches.slice(0, visibleCount);
    elements.resultsCount.textContent = `${matches.length} card${matches.length === 1 ? "" : "s"} on this route`;
    elements.library.innerHTML = visible.map((card) => {
      const deck = deckById[card.deck];
      const cardNumber = String(cards.indexOf(card) + 1).padStart(3, "0");
      return `
        <button class="library-card ${isLearned(card) ? "learned" : ""}" type="button" data-card="${card.id}">
          <span class="card-index">${cardNumber}</span>
          ${cardVisual(card, "library-thumb")}
          <span><span class="card-deck">${deck.short} · ${cardScope(card)}</span><strong>${card.title}</strong></span>
          <span class="card-arrow" aria-hidden="true">→</span>
        </button>
      `;
    }).join("");
    elements.loadMore.hidden = visible.length >= matches.length;
  }

  function renderOverallProgress() {
    const learned = cards.filter(isLearned).length;
    const reviewed = cards.filter((card) => getCardStatus(card.id)).length;
    const percentage = Math.round((learned / cards.length) * 100);
    elements.overallBar.style.width = `${percentage}%`;
    elements.overallText.textContent = reviewed
      ? `${learned} learned · ${reviewed} seen · ${percentage}% complete`
      : "0 learned · start anywhere";
  }

  function refreshDashboard() {
    renderDecks();
    renderLibrary();
    renderOverallProgress();
  }

  function buildSession(sourceCards, size = 10) {
    const due = shuffle(sourceCards.filter(isDue));
    const unseen = shuffle(sourceCards.filter((card) => !getCardStatus(card.id)));
    const learning = shuffle(sourceCards.filter((card) => getCardStatus(card.id) && !isDue(card) && !isLearned(card)));
    const learned = shuffle(sourceCards.filter((card) => isLearned(card) && !isDue(card)));
    const unique = [];
    const seen = new Set();
    [...due, ...unseen, ...learning, ...learned].forEach((card) => {
      if (!seen.has(card.id)) {
        seen.add(card.id);
        unique.push(card);
      }
    });
    return unique.slice(0, Math.min(size, unique.length));
  }

  function openSession(sourceCards, options = {}) {
    session = options.single ? [...sourceCards] : buildSession(sourceCards, options.size || 10);
    if (!session.length) {
      showToast("No cards are due. Try a fresh mixed route.");
      return;
    }
    sessionIndex = 0;
    isRevealed = false;
    sessionRatings = [];
    elements.deckLabel.textContent = options.label || "Mixed route";
    renderStudyCard();
    elements.dialog.showModal();
  }

  function currentCard() {
    return session[sessionIndex];
  }

  function renderStudyCard() {
    const card = currentCard();
    if (!card) {
      renderCompletion();
      return;
    }
    const deck = deckById[card.deck];
    const source = sources[card.source];
    elements.position.textContent = `Card ${sessionIndex + 1} of ${session.length}`;
    elements.studyBar.style.width = `${(sessionIndex / session.length) * 100}%`;

    if (!isRevealed) {
      elements.stage.innerHTML = `
        <article class="study-card" style="--card-color:${deck.color}">
          <div class="study-card-top"><span>${deck.name}</span><span>${cardScope(card)}</span></div>
          ${cardVisual(card)}
          <h2>${card.title}</h2>
          <p class="scene-copy">${card.scene}</p>
          <p class="prediction-cue">Pause. What would you do?</p>
        </article>
      `;
      elements.stage.scrollTop = 0;
      elements.controls.innerHTML = `
        <button class="primary-button reveal-button" id="reveal-card" type="button">Reveal the road rule <span aria-hidden="true">→</span></button>
      `;
      document.querySelector("#reveal-card").focus();
      return;
    }

    elements.stage.innerHTML = `
      <article class="study-card reveal-card" style="--card-color:${deck.color}">
        <div class="study-card-top"><span>${deck.name}</span><span>${cardScope(card)}</span></div>
        ${cardVisual(card)}
        <h2>${card.title}</h2>
        <div class="answer-callout">${card.answer}</div>
        <div class="reason-block">
          <div><span>Why it matters</span><p>${card.why}</p></div>
          <div><span>Pocket rule</span><p><strong>${card.memory}</strong></p></div>
        </div>
        <a class="source-chip" href="${source.url}" target="_blank" rel="noreferrer">${source.short} · verified ${curriculum.verified} ↗</a>
      </article>
    `;
    elements.stage.scrollTop = 0;
    elements.controls.innerHTML = `
      <button class="rating-button" style="--rating-color:#c64b38" type="button" data-rating="1"><small>1</small>Revisit</button>
      <button class="rating-button" style="--rating-color:#bc8422" type="button" data-rating="2"><small>2</small>Almost</button>
      <button class="rating-button" style="--rating-color:#2f7650" type="button" data-rating="3"><small>3</small>Got it</button>
    `;
    elements.controls.querySelector("[data-rating='3']").focus();
  }

  function revealCard() {
    if (!currentCard() || isRevealed) return;
    isRevealed = true;
    renderStudyCard();
  }

  function rateCard(rating) {
    if (!isRevealed || !currentCard()) return;
    const card = currentCard();
    const intervals = { 1: 0, 2: 24 * 60 * 60 * 1000, 3: 7 * 24 * 60 * 60 * 1000 };
    progress[card.id] = {
      rating,
      reviewedAt: Date.now(),
      dueAt: Date.now() + intervals[rating]
    };
    saveProgress();
    sessionRatings.push(rating);
    sessionIndex += 1;
    isRevealed = false;
    renderStudyCard();
  }

  function renderCompletion() {
    const gotIt = sessionRatings.filter((rating) => rating === 3).length;
    const revisit = sessionRatings.filter((rating) => rating === 1).length;
    elements.position.textContent = "Route complete";
    elements.studyBar.style.width = "100%";
    elements.stage.innerHTML = `
      <div class="session-complete">
        <div class="completion-mark" aria-hidden="true">✓</div>
        <h2>That crossing is yours.</h2>
        <p>You practiced ${session.length} road decisions. Cards marked “revisit” are already waiting for another pass.</p>
        <div class="completion-stats">
          <div><strong>${gotIt}</strong><span>got it</span></div>
          <div><strong>${session.length - gotIt - revisit}</strong><span>almost</span></div>
          <div><strong>${revisit}</strong><span>revisit</span></div>
        </div>
      </div>
    `;
    elements.controls.innerHTML = `<button class="primary-button" id="finish-session" type="button">Back to the map <span aria-hidden="true">→</span></button>`;
    document.querySelector("#finish-session").focus();
    refreshDashboard();
  }

  function closeSession() {
    elements.dialog.close();
    refreshDashboard();
  }

  function applyTheme(theme) {
    const dark = theme === "dark";
    document.body.classList.toggle("dark", dark);
    elements.theme.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    document.querySelector("meta[name='theme-color']").content = dark ? "#10251f" : "#edf2ec";
  }

  elements.deckGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-deck]");
    if (!button) return;
    const deck = deckById[button.dataset.deck];
    openSession(cards.filter((card) => card.deck === deck.id), { label: deck.name });
  });

  elements.filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    visibleCount = 12;
    renderFilters();
    renderLibrary();
  });

  elements.library.addEventListener("click", (event) => {
    const button = event.target.closest("[data-card]");
    if (!button) return;
    const card = cards.find((item) => item.id === button.dataset.card);
    openSession([card], { single: true, label: deckById[card.deck].name });
  });

  elements.search.addEventListener("input", () => {
    visibleCount = 12;
    renderLibrary();
  });

  elements.loadMore.addEventListener("click", () => {
    visibleCount += 12;
    renderLibrary();
  });

  elements.start.addEventListener("click", () => openSession(cards, { label: "Mixed European crossing" }));
  elements.review.addEventListener("click", () => {
    const dueCards = cards.filter(isDue);
    openSession(dueCards, { label: "Cards to revisit", size: 10 });
  });

  elements.reset.addEventListener("click", () => {
    if (!Object.keys(progress).length) {
      showToast("Your crossing is already clear.");
      return;
    }
    if (window.confirm("Reset all saved card progress on this device?")) {
      progress = {};
      saveProgress();
      refreshDashboard();
      showToast("Europe progress reset.");
    }
  });

  elements.theme.addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  elements.close.addEventListener("click", closeSession);
  elements.dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeSession();
  });
  elements.controls.addEventListener("click", (event) => {
    if (event.target.closest("#reveal-card")) revealCard();
    if (event.target.closest("#finish-session")) closeSession();
    const ratingButton = event.target.closest("[data-rating]");
    if (ratingButton) rateCard(Number(ratingButton.dataset.rating));
  });

  document.addEventListener("keydown", (event) => {
    if (!elements.dialog.open) return;
    if (event.code === "Space" && !isRevealed) {
      event.preventDefault();
      revealCard();
    }
    if (isRevealed && ["1", "2", "3"].includes(event.key)) rateCard(Number(event.key));
  });

  elements.totalCount.textContent = String(cards.length);
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  renderFilters();
  refreshDashboard();
})();
