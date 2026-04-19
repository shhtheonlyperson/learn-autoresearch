const LOCALE_KEYS = {
  EN: "en",
  ZH_TW: "zh-TW",
};

const THEME_KEYS = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS_VALUES = {
  keep: "keep",
  discard: "discard",
  crash: "crash",
};

const PHASE_KEYS = ["baseline", "reversion", "robustness", "blend", "modelT"];

const localeContent = {
  en: {
    htmlLang: "en",
    pageTitle: "BTC Price Autoresearch Demo",
    metaDescription:
      "A curated interactive demo of BTCautoresearch: autonomous formula discovery for Bitcoin price prediction.",
    brand: {
      title: "BTC Autoresearch",
      subtitle: "Curated demo",
    },
    nav: {
      contract: "Contract",
      evaluation: "Harness",
      replay: "Replay",
      simulator: "Simulator",
      promptLab: "Prompt Lab",
      back: "Back to overview",
      viewRepo: "View BTC repo",
    },
    hero: {
      eyebrow: "Bitcoin price formula discovery, replayed",
      titleHtml: "A curated demo of <span>BTCautoresearch</span> in one page.",
      textHtml:
        "This demo shows how an autonomous agent improved a Bitcoin price formula by editing only <code>fit.py</code>, evaluating with walk-forward <code>mean_rmse</code>, and keeping only better commits.",
      primaryCta: "See the curated replay",
      secondaryCta: "Generate a BTC prompt",
      noteHtml:
        'Built from the upstream <a href="https://github.com/CBaquero/BTCautoresearch" target="_blank" rel="noreferrer">README</a>, <a href="https://github.com/CBaquero/BTCautoresearch/blob/main/program.md" target="_blank" rel="noreferrer">program.md</a>, <a href="https://github.com/CBaquero/BTCautoresearch/blob/main/prepare.py" target="_blank" rel="noreferrer">prepare.py</a>, and <a href="https://github.com/CBaquero/BTCautoresearch/blob/main/fit.py" target="_blank" rel="noreferrer">fit.py</a>.',
    },
    signalCard: {
      chip: "Demo framing",
      title: "A monotonic research log",
      body:
        "328 experiments ran in one autonomous session, 114 were kept, and every kept change had to beat the current best out-of-sample score.",
    },
    heroStats: [
      {
        label: "Experiments",
        value: "328",
        body: "Autonomous trials in one session.",
      },
      {
        label: "Kept",
        value: "114",
        body: "Only winners survive in branch history.",
      },
      {
        label: "Baseline",
        value: "0.267",
        body: "Power-law mean_rmse.",
      },
      {
        label: "Best",
        value: "0.132",
        body: "Model T mean_rmse.",
      },
      {
        label: "Improvement",
        value: "50.5%",
        body: "Headline gain versus baseline.",
      },
      {
        label: "Loop cost",
        value: "~1-2s",
        body: "Typical fit-and-evaluate cycle per run.",
      },
    ],
    sections: {
      contractEyebrow: "Autoresearch contract",
      contractTitle: "Four files define the whole game.",
      evaluationEyebrow: "Evaluation harness",
      evaluationTitle: "The protocol is fixed before the agent touches the model.",
      replayEyebrow: "Curated replay",
      replayTitle: "The important improvements happened in recognizable phases.",
      findingEyebrow: "Core finding",
      findingTitle: "A decaying residual on top of the power law captures the main edge.",
      simulatorEyebrow: "Keep-or-discard simulator",
      simulatorTitle: "Would this fit.py experiment survive the loop?",
      promptEyebrow: "Prompt lab",
      promptTitle: "Generate a BTC-specific kickoff prompt.",
      sourcesEyebrow: "Source deck",
      sourcesTitle: "Every claim in this demo points back to upstream files.",
    },
    replayLabels: {
      focus: "What this phase optimized",
      shape: "Representative shape",
    },
    contractCards: [
      {
        name: "prepare.py",
        kicker: "Read-only harness",
        rule: "Never modify",
        body:
          "Loads the BTC dataset, runs the walk-forward evaluation, and penalizes broken predictions so the benchmark stays trustworthy.",
        facts: [
          ["Protocol", "9 splits x 7 horizons"],
          ["Penalty", "Crashes become 999.0"],
          ["Output", "Prints exact mean_rmse"],
        ],
      },
      {
        name: "fit.py",
        kicker: "Mutable model file",
        rule: "This is the search space",
        body:
          "The agent edits the functional form, fitting routine, and hyperparameters here. Every experiment lives or dies by this single file.",
        facts: [
          ["Ideas", "Formula, bounds, and fitting procedure"],
          ["Command", "uv run fit.py"],
          ["Loop", "Commit, run, keep or revert"],
        ],
      },
      {
        name: "program.md",
        kicker: "Operating manual",
        rule: "Sets the protocol",
        body:
          "Defines branch naming, setup ritual, results logging, and the forever loop that keeps the agent from drifting into ad hoc experimentation.",
        facts: [
          ["Branch", "autoresearch/<tag>"],
          ["Log", "results.tsv stays uncommitted"],
          ["Rule", "Only fit.py may change"],
        ],
      },
      {
        name: "btc_daily_prices.csv",
        kicker: "Dataset",
        rule: "Daily price history",
        body:
          "The repo ships the daily BTC price series so experiments stay fast, reproducible, and centered on formula discovery rather than data plumbing.",
        facts: [
          ["Span", "2009 to 2026"],
          ["Target", "log10(price_usd)"],
          ["Usage", "Train by split, predict forward"],
        ],
      },
    ],
    evaluation: {
      summaryCards: [
        {
          label: "Data shape",
          value: "Daily BTC prices",
          body: "One fixed series, no live fetches, no hidden data source changes.",
        },
        {
          label: "Splits",
          value: "2016-2024",
          body: "Nine expanding cutoffs define the walk-forward checkpoints.",
        },
        {
          label: "Horizons",
          value: "1m to 36m",
          body: "Seven forward windows test both near-term and long-term behavior.",
        },
        {
          label: "Metric",
          value: "mean_rmse",
          body: "The harness averages RMSE of log10(price) across all 63 evaluations.",
        },
      ],
      splitTitle: "Expanding walk-forward cutoffs",
      splitCaption: "Each split only sees the past.",
      horizonTitle: "Forward horizons",
      horizonCaption: "Longer windows get harder on purpose.",
      protocolLead: "Each run is judged on 63 out-of-sample evaluations.",
      protocolText:
        "The model receives training data only up to each split, then predicts 1, 3, 6, 12, 18, 24, and 36 months forward. The harness averages those RMSEs into one score. Lower is better. Crashes are penalized instead of skipped.",
      splitDates: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      horizons: [
        { label: "1 month", width: "18%" },
        { label: "3 months", width: "28%" },
        { label: "6 months", width: "38%" },
        { label: "12 months", width: "50%" },
        { label: "18 months", width: "62%" },
        { label: "24 months", width: "74%" },
        { label: "36 months", width: "92%" },
      ],
      callouts: [
        ["Metric", "mean_rmse"],
        ["Comparability", "Fixed harness, changing fit.py"],
        ["Failure mode", "NaN, Inf, bad shape, or exceptions become 999.0"],
      ],
    },
    phases: {
      baseline: {
        chip: "Baseline",
        step: "Phase 01",
        title: "Start from the classic power law",
        tag: "Orientation",
        summary:
          "The loop begins with the well-known log-log power law. It explains the broad BTC trajectory, but the residuals still carry obvious structure once you evaluate out of sample.",
        focus: "Lock the untouched baseline and make sure the loop mechanics work before experimenting.",
        points: [
          ["Model shape", "Simple trend: log10(price) as a function of log10(day)."],
          ["Why it matters", "A strong baseline prevents the agent from congratulating itself for weak ideas."],
          ["What the loop learns", "Good in-sample fit is not enough if the future residuals remain patterned."],
        ],
        result: "Baseline mean_rmse: 0.267",
        snippet: "log10(price) = a * log10(day) + b",
      },
      reversion: {
        chip: "Structural jump",
        step: "Phase 02",
        title: "Add mean-reversion to trend",
        tag: "Core insight",
        summary:
          "The first major win is not replacing the power law. It is correcting the forecast by how far the latest price sits above or below the trend, then letting that correction fade over time.",
        focus: "Treat the latest deviation from trend as temporary information instead of permanent slope change.",
        points: [
          ["Signal", "The last residual tells you whether BTC is temporarily hot or cold versus trend."],
          ["Behavior", "Short horizons keep more of that residual; long horizons decay it away."],
          ["Why it wins", "It improves responsiveness without giving up the long-term anchor."],
        ],
        result: "The README highlights this as the central explanatory idea.",
        snippet: "forecast = trend(test_day) + residual_now * decay(delta_days)",
      },
      robustness: {
        chip: "Stability pass",
        step: "Phase 03",
        title: "Harden the fit against noisy eras",
        tag: "Reliability",
        summary:
          "After the structural jump, the search shifts into fit quality. Robust losses, local residual views, and less fragile estimation improve consistency across awkward splits.",
        focus: "Reduce the odds that bubbles and crash periods dominate the fit in the wrong way.",
        points: [
          ["Fitting", "Use fitting strategies that resist outlier-heavy market eras."],
          ["Local view", "Estimate recent residual direction instead of assuming every miss is random noise."],
          ["Outcome", "Short-horizon wins stop disappearing on the ugliest cutoffs."],
        ],
        result: "The branch gets better without abandoning the one-file experiment contract.",
        snippet: "fit trend with robust loss; estimate a local residual slope",
      },
      blend: {
        chip: "Horizon-aware",
        step: "Phase 04",
        title: "Blend long-term and recent trend views",
        tag: "Adaptivity",
        summary:
          "The later gains recognize that a one-size-fits-all trend is too blunt. Near horizons should care more about recent shape, while distant horizons should relax back toward the slow trend.",
        focus: "Use the forecast horizon itself to decide how much recency should matter.",
        points: [
          ["Near term", "Lean toward the recent trend when delta_days is small."],
          ["Far term", "Fade back toward the slower, more stable past trend over time."],
          ["Why it matters", "The same model now behaves differently when forecasting one month versus three years."],
        ],
        result: "The final model stays ahead of baseline from 1 month out to 5 years.",
        snippet: "blend = weight(delta_days) * recent_trend + (1 - weight(delta_days)) * past_trend",
      },
      modelT: {
        chip: "Model T",
        step: "Phase 05",
        title: "Tune the final ensemble without breaking the loop",
        tag: "Finish",
        summary:
          "The endgame is disciplined tuning, not a flashy rewrite. The agent keeps adjusting decay windows, blending rates, and residual corrections while the read-only harness keeps it honest.",
        focus: "Preserve the loop discipline while squeezing out the last clean improvements.",
        points: [
          ["Tuning", "Average across several decay half-lives instead of betting everything on one number."],
          ["Constraint", "Every kept change still has to win under the identical harness."],
          ["Result", "Model T lands at mean_rmse 0.132, roughly 50.5% better than the baseline."],
        ],
        result: "114 kept experiments add up to the final best model rather than one dramatic leap.",
        snippet: "ensemble several decays, keep only the variants that still win",
      },
    },
    finding: {
      lead:
        "The best story here is not that the agent found a magical replacement for the power law. It found a reliable correction on top of it. The long-term trend remains the anchor; the residual tells you how far reality currently sits from that anchor.",
      bullets: [
        [
          "Long-term structure",
          "The power law still carries the long arc of Bitcoin price history.",
        ],
        [
          "Short-term edge",
          "Recent deviation from trend adds signal, but only if it fades rather than pretending to last forever.",
        ],
        [
          "Why autoresearch fits",
          "A strict keep-or-revert loop is good at discovering small structural corrections like this.",
        ],
      ],
      codeLabel: "Pseudocode",
      code: `fit trend on the training window
residual_now = last_train_log_price - trend(last_train_day)
delta_days = forecast_days - last_train_day

forecast =
  trend(forecast_days)
  + residual_now * exp(-ln(2) * delta_days / half_life_days)`,
    },
    forms: {
      defaults: {
        baseline: "0.267000",
        candidate: "0.171000",
        experimentNote: "add decaying residual term",
        runTag: "btc-apr5",
        extraFocus: "keep the diff small and only touch fit.py",
      },
      baselineLabel: "Baseline",
      candidateLabel: "Candidate",
      experimentNoteLabel: "Experiment note",
      runCrashedLabel: "Treat this run as a crash",
      resultsPreviewChip: "results.tsv preview",
      runTagLabel: "Run tag",
      goalLabel: "Goal",
      extraFocusLabel: "Extra focus",
      promptOutputChip: "Prompt output",
      goalOptions: {
        setup: "Set up the loop correctly",
        baseline: "Record the untouched baseline",
        next: "Run one new fit.py idea",
      },
    },
    decision: {
      statusLabels: {
        keep: "keep",
        discard: "discard",
        crash: "crash",
      },
      summary: {
        keep:
          "This beats the current best mean_rmse, so the commit survives and becomes the new base for the next idea.",
        discard:
          "This does not improve the score, so the branch should roll back to the previous good commit.",
        crash:
          "Treat this as a failed experiment. Log it, inspect run.log if the bug is simple, and continue from the last good commit.",
      },
      ruleLabel: "Rule of thumb:",
      ruleHtml:
        "Lower <code>mean_rmse</code> wins. Keep improvements, revert ties or worse runs, and never count a crash as progress.",
      unnamedExperiment: "unnamed fit.py idea",
      header: "commit\tmean_rmse\tstatus\tdescription",
    },
    buttons: {
      copyRow: "Copy row",
      copyPrompt: "Copy prompt",
      copyBlock: "Copy block",
      copied: "Copied",
      copyFailed: "Copy failed",
    },
    sources: [
      {
        title: "README.md",
        body: "Headline metrics, project structure, evaluation summary, and the core finding.",
        href: "https://github.com/CBaquero/BTCautoresearch/blob/main/README.md",
        linkLabel: "Open README",
      },
      {
        title: "program.md",
        body: "Branch ritual, loop rules, and the instruction that only fit.py may change.",
        href: "https://github.com/CBaquero/BTCautoresearch/blob/main/program.md",
        linkLabel: "Open program.md",
      },
      {
        title: "prepare.py",
        body: "Read-only evaluation harness with 9 splits, 7 horizons, and crash penalties.",
        href: "https://github.com/CBaquero/BTCautoresearch/blob/main/prepare.py",
        linkLabel: "Open prepare.py",
      },
      {
        title: "fit.py",
        body: "Current best model shape, fitting strategy, and the final horizon-adaptive blend.",
        href: "https://github.com/CBaquero/BTCautoresearch/blob/main/fit.py",
        linkLabel: "Open fit.py",
      },
    ],
    goalTemplates: {
      setup: ({ runTag, extraFocus }) =>
        `Read program.md and start a new BTC autoresearch loop on branch autoresearch/${runTag}. Confirm btc_daily_prices.csv exists, read prepare.py and fit.py, initialize results.tsv with the header commit\\tmean_rmse\\tstatus\\tdescription, run uv run fit.py once to verify the baseline command works, and stop after summarizing the setup state. Only fit.py may be modified later, never prepare.py, and do not commit results.tsv. ${extraFocus}.`,
      baseline: ({ runTag, extraFocus }) =>
        `Read program.md, work on branch autoresearch/${runTag}, verify btc_daily_prices.csv is present, initialize results.tsv with commit\\tmean_rmse\\tstatus\\tdescription, run uv run fit.py > run.log 2>&1, extract the score with grep "^mean_rmse:" run.log, append the untouched baseline result to results.tsv without committing results.tsv, and summarize the baseline before proposing any new idea. Only fit.py may change. ${extraFocus}.`,
      next: ({ runTag, extraFocus }) =>
        `Read program.md and continue the BTC loop on branch autoresearch/${runTag}. Propose one small, reviewable fit.py change, commit it, run uv run fit.py > run.log 2>&1, extract mean_rmse with grep "^mean_rmse:" run.log, append the result to results.tsv without committing results.tsv, and keep or revert the commit strictly based on whether mean_rmse improves. Only modify fit.py, never prepare.py. ${extraFocus}.`,
    },
    footer: {
      title: "BTC Price Autoresearch Demo",
      sourceHtml:
        'Inspired by <a href="https://github.com/CBaquero/BTCautoresearch" target="_blank" rel="noreferrer">CBaquero/BTCautoresearch</a>.',
    },
  },
};

const state = {
  locale: detectLocale(),
  theme: detectTheme(),
  activePhase: PHASE_KEYS[0],
};

const metaDescriptionEl = document.querySelector('meta[name="description"]');
const themeColorMetaEl = document.querySelector('meta[name="theme-color"]');
const brandTitleEl = document.querySelector(".brand-copy strong");
const brandSubtitleEl = document.querySelector(".brand-copy small");
const siteNavEl = document.querySelector(".site-nav");
const headerActionEls = [...document.querySelectorAll(".header-actions a")];
const heroEyebrowEl = document.querySelector("#hero-eyebrow");
const heroTitleEl = document.querySelector("#hero-title");
const heroTextEl = document.querySelector("#hero-text");
const heroPrimaryEl = document.querySelector("#hero-primary");
const heroSecondaryEl = document.querySelector("#hero-secondary");
const heroNoteEl = document.querySelector("#hero-note");
const signalCardEl = document.querySelector("#signal-card");
const heroStatsEl = document.querySelector("#hero-stats");
const contractEyebrowEl = document.querySelector("#contract-eyebrow");
const contractTitleEl = document.querySelector("#contract-title");
const contractGridEl = document.querySelector("#contract-grid");
const evaluationEyebrowEl = document.querySelector("#evaluation-eyebrow");
const evaluationTitleEl = document.querySelector("#evaluation-title");
const evaluationSummaryEl = document.querySelector("#evaluation-summary");
const splitTitleEl = document.querySelector("#split-title");
const splitCaptionEl = document.querySelector("#split-caption");
const splitBadgesEl = document.querySelector("#split-badges");
const horizonTitleEl = document.querySelector("#horizon-title");
const horizonCaptionEl = document.querySelector("#horizon-caption");
const horizonBadgesEl = document.querySelector("#horizon-badges");
const protocolCalloutEl = document.querySelector("#protocol-callout");
const replayEyebrowEl = document.querySelector("#replay-eyebrow");
const replayTitleEl = document.querySelector("#replay-title");
const phaseListEl = document.querySelector("#phase-list");
const phaseDetailEl = document.querySelector("#phase-detail");
const findingEyebrowEl = document.querySelector("#finding-eyebrow");
const findingTitleEl = document.querySelector("#finding-title");
const findingCopyEl = document.querySelector("#finding-copy");
const findingCodeLabelEl = document.querySelector("#finding-code-label");
const findingCodeEl = document.querySelector("#finding-code");
const simulatorEyebrowEl = document.querySelector("#simulator-eyebrow");
const simulatorTitleEl = document.querySelector("#simulator-title");
const decisionFormEl = document.querySelector("#decision-form");
const resultsChipEl = document.querySelector("#results-chip");
const resultsPreviewEl = document.querySelector("#results-preview");
const decisionSummaryEl = document.querySelector("#decision-summary");
const resultsCopyButtonEl = document.querySelector('[data-copy-target="#results-preview"]');
const promptEyebrowEl = document.querySelector("#prompt-eyebrow");
const promptTitleEl = document.querySelector("#prompt-title");
const promptFormEl = document.querySelector("#prompt-form");
const promptChipEl = document.querySelector("#prompt-chip");
const promptOutputEl = document.querySelector("#prompt-output");
const promptCopyButtonEl = document.querySelector('[data-copy-target="#prompt-output"]');
const sourcesEyebrowEl = document.querySelector("#sources-eyebrow");
const sourcesTitleEl = document.querySelector("#sources-title");
const sourceGridEl = document.querySelector("#source-grid");
const footerTitleEl = document.querySelector("#footer-title");
const footerSourceEl = document.querySelector("#footer-source");
const findingCopyButtonEl = document.querySelector('[data-copy-target="#finding-code"]');

function normalizeLocale(value) {
  if (!value) {
    return null;
  }

  const normalized = String(value).trim().toLowerCase().replace(/_/g, "-");

  if (normalized === LOCALE_KEYS.EN) {
    return LOCALE_KEYS.EN;
  }

  if (normalized === "zh-tw") {
    return LOCALE_KEYS.ZH_TW;
  }

  return null;
}

function detectLocale() {
  const bootstrappedLocale = normalizeLocale(document.documentElement.lang);
  const url = new URL(window.location.href);
  const override = normalizeLocale(url.searchParams.get("locale"));
  const candidate = override || bootstrappedLocale;

  if (candidate && localeContent[candidate]) {
    return candidate;
  }

  return LOCALE_KEYS.EN;
}

function normalizeTheme(value) {
  if (value === THEME_KEYS.DARK || value === THEME_KEYS.LIGHT) {
    return value;
  }

  return null;
}

function detectTheme() {
  const bootstrappedTheme = normalizeTheme(document.documentElement.dataset.theme);

  if (bootstrappedTheme) {
    return bootstrappedTheme;
  }

  if (!window.matchMedia) {
    return THEME_KEYS.LIGHT;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME_KEYS.DARK
    : THEME_KEYS.LIGHT;
}

function applyTheme(theme = detectTheme()) {
  const resolvedTheme = normalizeTheme(theme) || THEME_KEYS.LIGHT;

  state.theme = resolvedTheme;
  document.documentElement.dataset.theme = resolvedTheme;

  if (themeColorMetaEl) {
    themeColorMetaEl.content = resolvedTheme === THEME_KEYS.DARK ? "#101217" : "#f3ebda";
  }
}

function setupThemeWatcher() {
  if (!window.matchMedia) {
    return;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleThemeChange = (event) => {
    applyTheme(event.matches ? THEME_KEYS.DARK : THEME_KEYS.LIGHT);
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleThemeChange);
    return;
  }

  if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleThemeChange);
  }
}

function getContent() {
  return localeContent[state.locale] || localeContent.en;
}

function getDecisionInputs() {
  return {
    baselineInput: document.querySelector("#baseline-rmse"),
    candidateInput: document.querySelector("#candidate-rmse"),
    noteInput: document.querySelector("#experiment-note"),
    crashedInput: document.querySelector("#run-crashed"),
  };
}

function getPromptInputs() {
  return {
    runTagInput: document.querySelector("#run-tag"),
    goalSelect: document.querySelector("#goal-select"),
    extraFocusInput: document.querySelector("#extra-focus"),
  };
}

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function setHtml(element, value) {
  if (element) {
    element.innerHTML = value;
  }
}

function renderHeroStats(content) {
  heroStatsEl.innerHTML = content.heroStats
    .map(
      (stat) => `
        <article class="stat-card">
          <span>${stat.label}</span>
          <strong>${stat.value}</strong>
          <p>${stat.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderContractCards(content) {
  contractGridEl.innerHTML = content.contractCards
    .map(
      (card) => `
        <article class="contract-card">
          <span class="card-kicker">${card.kicker}</span>
          <h3>${card.name}</h3>
          <span class="card-rule">${card.rule}</span>
          <p>${card.body}</p>
          <div class="fact-list">
            ${card.facts
              .map(
                ([label, value]) => `
                  <div>
                    <strong>${label}</strong>
                    <span>${value}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderEvaluation(content) {
  evaluationSummaryEl.innerHTML = `
    <div class="summary-grid">
      ${content.evaluation.summaryCards
        .map(
          (card) => `
            <article class="summary-card">
              <span>${card.label}</span>
              <strong>${card.value}</strong>
              <p>${card.body}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  setText(splitTitleEl, content.evaluation.splitTitle);
  setText(splitCaptionEl, content.evaluation.splitCaption);
  splitBadgesEl.innerHTML = content.evaluation.splitDates
    .map(
      (year) => `
        <div class="split-pill">
          <strong>${year}</strong>
        </div>
      `,
    )
    .join("");

  setText(horizonTitleEl, content.evaluation.horizonTitle);
  setText(horizonCaptionEl, content.evaluation.horizonCaption);
  horizonBadgesEl.innerHTML = content.evaluation.horizons
    .map(
      (horizon) => `
        <div class="horizon-pill">
          <strong>${horizon.label}</strong>
          <div class="horizon-bar" style="--bar-width: ${horizon.width}"></div>
        </div>
      `,
    )
    .join("");

  protocolCalloutEl.innerHTML = `
    <strong>${content.evaluation.protocolLead}</strong>
    <p>${content.evaluation.protocolText}</p>
    <div class="fact-list">
      ${content.evaluation.callouts
        .map(
          ([label, value]) => `
            <div>
              <strong>${label}</strong>
              <span>${value}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPhaseButtons(content) {
  phaseListEl.innerHTML = PHASE_KEYS.map((key, index) => {
    const phase = content.phases[key];

    return `
      <button
        class="phase-button ${state.activePhase === key ? "is-active" : ""}"
        data-phase-key="${key}"
        role="tab"
        aria-selected="${state.activePhase === key}"
      >
        <span class="phase-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="phase-button-copy">
          <strong>${phase.step}</strong>
          <span>${phase.title}</span>
        </span>
      </button>
    `;
  }).join("");

  [...phaseListEl.querySelectorAll("[data-phase-key]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.activePhase = button.dataset.phaseKey;
      renderReplay(content);
    });
  });
}

function renderPhaseDetail(content) {
  const phase = content.phases[state.activePhase];

  phaseDetailEl.innerHTML = `
    <div class="phase-header">
      <div class="phase-title">
        <span class="chip">${phase.chip}</span>
        <strong>${phase.title}</strong>
        <span>${phase.tag}</span>
      </div>
      <span class="card-rule">${phase.step}</span>
    </div>
    <p>${phase.summary}</p>
    <div class="phase-result">
      <span class="label">${content.replayLabels.focus}</span>
      <p>${phase.focus}</p>
    </div>
    <div class="phase-points">
      ${phase.points
        .map(
          ([label, value]) => `
            <div class="phase-point">
              <strong>${label}</strong>
              <span>${value}</span>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="phase-snippet">
      <span class="label">${content.replayLabels.shape}</span>
      <code>${phase.snippet}</code>
    </div>
    <div class="phase-footer">
      <span class="chip">${phase.chip}</span>
      <strong>${phase.result}</strong>
    </div>
  `;
}

function renderReplay(content) {
  renderPhaseButtons(content);
  renderPhaseDetail(content);
}

function renderFinding(content) {
  findingCopyEl.innerHTML = `
    <p>${content.finding.lead}</p>
    <div class="finding-bullets">
      ${content.finding.bullets
        .map(
          ([label, value]) => `
            <div>
              <strong>${label}</strong>
              <p>${value}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
  setText(findingCodeLabelEl, content.finding.codeLabel);
  findingCodeEl.textContent = content.finding.code;
}

function renderDecisionForm(content) {
  const current = getDecisionInputs();
  const defaults = content.forms.defaults;
  const baselineValue = current.baselineInput?.value || defaults.baseline;
  const candidateValue = current.candidateInput?.value || defaults.candidate;
  const noteValue = current.noteInput?.value || defaults.experimentNote;
  const crashedChecked = current.crashedInput?.checked ? "checked" : "";

  decisionFormEl.innerHTML = `
    <label>
      <span>${content.forms.baselineLabel} <code>mean_rmse</code></span>
      <input type="number" step="0.000001" id="baseline-rmse" value="${baselineValue}" />
    </label>
    <label>
      <span>${content.forms.candidateLabel} <code>mean_rmse</code></span>
      <input type="number" step="0.000001" id="candidate-rmse" value="${candidateValue}" />
    </label>
    <label>
      <span>${content.forms.experimentNoteLabel}</span>
      <input type="text" id="experiment-note" value="${noteValue}" />
    </label>
    <label class="checkbox-row">
      <input type="checkbox" id="run-crashed" ${crashedChecked} />
      <span>${content.forms.runCrashedLabel}</span>
    </label>
  `;

  setText(resultsChipEl, content.forms.resultsPreviewChip);
  resultsCopyButtonEl.textContent = content.buttons.copyRow;
  resultsCopyButtonEl.dataset.copyLabel = content.buttons.copyRow;
}

function renderPromptForm(content) {
  const current = getPromptInputs();
  const defaults = content.forms.defaults;
  const runTagValue = current.runTagInput?.value || defaults.runTag;
  const selectedGoal = current.goalSelect?.value || "setup";
  const extraFocusValue = current.extraFocusInput?.value || defaults.extraFocus;

  promptFormEl.innerHTML = `
    <label>
      <span>${content.forms.runTagLabel}</span>
      <input type="text" id="run-tag" value="${runTagValue}" />
    </label>
    <label>
      <span>${content.forms.goalLabel}</span>
      <select id="goal-select">
        ${Object.entries(content.forms.goalOptions)
          .map(
            ([value, label]) => `
              <option value="${value}" ${value === selectedGoal ? "selected" : ""}>${label}</option>
            `,
          )
          .join("")}
      </select>
    </label>
    <label>
      <span>${content.forms.extraFocusLabel}</span>
      <input type="text" id="extra-focus" value="${extraFocusValue}" />
    </label>
  `;

  setText(promptChipEl, content.forms.promptOutputChip);
  promptCopyButtonEl.textContent = content.buttons.copyPrompt;
  promptCopyButtonEl.dataset.copyLabel = content.buttons.copyPrompt;
}

function renderSources(content) {
  sourceGridEl.innerHTML = content.sources
    .map(
      (source) => `
        <article class="source-card">
          <strong>${source.title}</strong>
          <p>${source.body}</p>
          <a href="${source.href}" target="_blank" rel="noreferrer">${source.linkLabel}</a>
        </article>
      `,
    )
    .join("");
}

function bindFormListeners() {
  const decisionInputs = Object.values(getDecisionInputs()).filter(Boolean);
  decisionInputs.forEach((input) => {
    input.addEventListener("input", formatDecision);
    input.addEventListener("change", formatDecision);
  });

  const promptInputs = Object.values(getPromptInputs()).filter(Boolean);
  promptInputs.forEach((input) => {
    input.addEventListener("input", renderPrompt);
    input.addEventListener("change", renderPrompt);
  });
}

function renderStaticContent() {
  const content = getContent();

  document.documentElement.lang = content.htmlLang;
  document.title = content.pageTitle;
  metaDescriptionEl?.setAttribute("content", content.metaDescription);

  setText(brandTitleEl, content.brand.title);
  setText(brandSubtitleEl, content.brand.subtitle);

  siteNavEl.innerHTML = `
    <a href="#contract">${content.nav.contract}</a>
    <a href="#evaluation">${content.nav.evaluation}</a>
    <a href="#replay">${content.nav.replay}</a>
    <a href="#simulator">${content.nav.simulator}</a>
    <a href="#prompt-lab">${content.nav.promptLab}</a>
  `;
  setText(headerActionEls[0], content.nav.back);
  setText(headerActionEls[1], content.nav.viewRepo);

  setText(heroEyebrowEl, content.hero.eyebrow);
  setHtml(heroTitleEl, content.hero.titleHtml);
  setHtml(heroTextEl, content.hero.textHtml);
  setText(heroPrimaryEl, content.hero.primaryCta);
  setText(heroSecondaryEl, content.hero.secondaryCta);
  setHtml(heroNoteEl, content.hero.noteHtml);

  signalCardEl.innerHTML = `
    <span class="chip">${content.signalCard.chip}</span>
    <strong>${content.signalCard.title}</strong>
    <p>${content.signalCard.body}</p>
  `;
  renderHeroStats(content);

  setText(contractEyebrowEl, content.sections.contractEyebrow);
  setText(contractTitleEl, content.sections.contractTitle);
  renderContractCards(content);

  setText(evaluationEyebrowEl, content.sections.evaluationEyebrow);
  setText(evaluationTitleEl, content.sections.evaluationTitle);
  renderEvaluation(content);

  setText(replayEyebrowEl, content.sections.replayEyebrow);
  setText(replayTitleEl, content.sections.replayTitle);
  renderReplay(content);

  setText(findingEyebrowEl, content.sections.findingEyebrow);
  setText(findingTitleEl, content.sections.findingTitle);
  renderFinding(content);
  findingCopyButtonEl.textContent = content.buttons.copyBlock;
  findingCopyButtonEl.dataset.copyLabel = content.buttons.copyBlock;

  setText(simulatorEyebrowEl, content.sections.simulatorEyebrow);
  setText(simulatorTitleEl, content.sections.simulatorTitle);
  renderDecisionForm(content);

  setText(promptEyebrowEl, content.sections.promptEyebrow);
  setText(promptTitleEl, content.sections.promptTitle);
  renderPromptForm(content);

  setText(sourcesEyebrowEl, content.sections.sourcesEyebrow);
  setText(sourcesTitleEl, content.sections.sourcesTitle);
  renderSources(content);

  setText(footerTitleEl, content.footer.title);
  setHtml(footerSourceEl, content.footer.sourceHtml);

  bindFormListeners();
}

function formatDecision() {
  const content = getContent();
  const { baselineInput, candidateInput, noteInput, crashedInput } = getDecisionInputs();
  const baseline = Number(baselineInput.value);
  const candidate = Number(candidateInput.value);
  const note = noteInput.value.trim() || content.decision.unnamedExperiment;
  const crashed = crashedInput.checked;

  let statusKey = STATUS_VALUES.discard;

  if (crashed) {
    statusKey = STATUS_VALUES.crash;
  } else if (!Number.isNaN(baseline) && !Number.isNaN(candidate) && candidate < baseline) {
    statusKey = STATUS_VALUES.keep;
  }

  const commit = crashed ? "deadbee" : "abc1234";
  const score = crashed ? "999.000000" : candidate.toFixed(6);
  const row = `${commit}\t${score}\t${statusKey}\t${note}`;

  resultsPreviewEl.textContent = `${content.decision.header}\n${row}`;
  decisionSummaryEl.innerHTML = `
    <span class="decision-badge ${statusKey}">${content.decision.statusLabels[statusKey]}</span>
    <p>${content.decision.summary[statusKey]}</p>
    <p><strong>${content.decision.ruleLabel}</strong> ${content.decision.ruleHtml}</p>
  `;
}

function renderPrompt() {
  const content = getContent();
  const { runTagInput, goalSelect, extraFocusInput } = getPromptInputs();
  const runTag = (runTagInput.value.trim() || content.forms.defaults.runTag).replace(/\s+/g, "-");
  const extraFocus = extraFocusInput.value.trim() || content.forms.defaults.extraFocus;
  const template = content.goalTemplates[goalSelect.value];
  promptOutputEl.textContent = template({ runTag, extraFocus });
}

function setupCopyButtons() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-target]");

    if (!button) {
      return;
    }

    const target = document.querySelector(button.dataset.copyTarget);

    if (!target) {
      return;
    }

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      const original = button.dataset.copyLabel || button.textContent;
      button.textContent = getContent().buttons.copied;
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch (error) {
      const original = button.dataset.copyLabel || button.textContent;
      button.textContent = getContent().buttons.copyFailed;
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    }
  });
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

applyTheme(state.theme);
renderStaticContent();
formatDecision();
renderPrompt();
setupCopyButtons();
setupRevealObserver();
setupThemeWatcher();
