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

const FILE_KEYS = ["prepare", "train", "program"];

const localeContent = {
  en: {
    htmlLang: "en",
    pageTitle: "Autoresearch, Explained",
    metaDescription:
      "An interactive learning site that explains karpathy/autoresearch and shows how to use it step by step.",
    brand: {
      title: "Autoresearch",
      subtitle: "Interactive field guide",
    },
    nav: {
      what: "What It Is",
      stepGuide: "Step Guide",
      simulator: "Simulator",
      promptLab: "Prompt Lab",
      viewRepo: "View repo",
    },
    hero: {
      eyebrow: "A research-lab walkthrough for humans",
      titleHtml: "What <span>karpathy/autoresearch</span> is, and how to actually run it.",
      textHtml:
        "<code>autoresearch</code> is a tiny repo designed for autonomous model experimentation: you prepare data once, let an agent edit <code>train.py</code>, and compare every run on the same five-minute budget.",
      primaryCta: "Start the guided tour",
      secondaryCta: "Generate a starter prompt",
      noteHtml:
        'Built from the upstream <a href="https://github.com/karpathy/autoresearch" target="_blank" rel="noreferrer">README</a>, <a href="https://github.com/karpathy/autoresearch/blob/master/program.md" target="_blank" rel="noreferrer">program.md</a>, <a href="https://github.com/karpathy/autoresearch/blob/master/train.py" target="_blank" rel="noreferrer">train.py</a>, and <a href="https://github.com/karpathy/autoresearch/blob/master/prepare.py" target="_blank" rel="noreferrer">prepare.py</a>.',
    },
    coreLoop: {
      chip: "Core loop",
      title: "Agent edits one file",
      body: "The repo stays intentionally small so experiments stay legible and reviewable.",
    },
    metrics: [
      {
        label: "Hardware",
        valueHtml: "1 NVIDIA GPU",
        body: "Tested upstream on H100.",
      },
      {
        label: "Runtime",
        valueHtml: "300 seconds",
        body: "Fixed wall-clock training budget.",
      },
      {
        label: "Mutable code",
        valueHtml: "<code>train.py</code>",
        body: "The agent’s playground.",
      },
      {
        label: "Score",
        valueHtml: "<code>val_bpb</code>",
        body: "Lower is better.",
      },
    ],
    sections: {
      principlesEyebrow: "The repo in one glance",
      principlesTitle: "Autoresearch is less “framework” and more “tight experiment contract.”",
      interactiveEyebrow: "Interactive example 1",
      interactiveTitle: "Click a file to see who controls it and why it exists.",
      guideEyebrow: "Interactive example 2",
      guideTitle: "Walk through the workflow step by step.",
      simulatorEyebrow: "Interactive example 3",
      simulatorTitle: "Simulate the keep-or-discard decision.",
      promptEyebrow: "Interactive example 4",
      promptTitle: "Generate a starter prompt for your coding agent.",
      realityEyebrow: "Practical notes",
      realityTitle: "What to remember before you try it for real.",
    },
    principles: [
      {
        index: "01",
        title: "You program the research org in Markdown.",
        body:
          "The human mostly shapes <code>program.md</code>: the rules, goals, output format, and experiment loop that the coding agent follows.",
      },
      {
        index: "02",
        title: "The agent explores by editing only one file.",
        body:
          "The entire architecture, optimizer setup, and training loop live in <code>train.py</code>, so diffs stay focused and the search space stays understandable.",
      },
      {
        index: "03",
        title: "Every experiment gets the same clock.",
        body:
          "Training is compared under the same five-minute budget, which makes “keep or discard” decisions much more consistent.",
      },
    ],
    realityCards: [
      {
        title: "It is not a general-purpose training platform.",
        body:
          "Upstream is optimized around a single-GPU, single-file, fixed-budget experiment loop. That simplicity is the point.",
      },
      {
        title: "Smaller hardware usually needs retuning.",
        body:
          "The README suggests reducing vocabulary size, sequence length, depth, eval tokens, and batch size when you move far below the tested H100 setup.",
      },
      {
        title: "Fairness comes from the budget, not identical hardware.",
        body:
          "Five minutes makes changes comparable on one machine, but results are still not directly portable across every GPU or platform.",
      },
    ],
    fileTabsAria: "Autoresearch files",
    stepTabsAria: "Setup steps",
    forms: {
      defaults: {
        baseline: "0.997900",
        candidate: "0.993200",
        peakVram: "45260.2",
        experimentNote: "raise matrix LR slightly",
        runTag: "apr5",
        extraFocus: "stay disciplined about only changing train.py",
      },
      baselineLabel: "Baseline",
      candidateLabel: "New run",
      peakVramLabel: "Peak VRAM in MB",
      experimentNoteLabel: "Experiment note",
      runCrashedLabel: "Treat this run as a crash",
      resultsPreviewChip: "results.tsv preview",
      promptOutputChip: "Prompt output",
      runTagLabel: "Run tag",
      goalLabel: "Goal",
      extraFocusLabel: "Extra focus",
      goalOptions: {
        setup: "Do the setup correctly",
        baseline: "Get a clean baseline run",
        throughput: "Try a small optimization idea",
        "small-gpu": "Adapt for a smaller machine",
      },
    },
    footer: {
      title: "Autoresearch, Explained",
      sourcePrefix: "Source:",
    },
    buttons: {
      copyRow: "Copy row",
      copyPrompt: "Copy prompt",
      copyBlock: "Copy block",
      previous: "Previous step",
      next: "Next step",
      copied: "Copied",
      copyFailed: "Copy failed",
    },
    decision: {
      statusLabels: {
        keep: "keep",
        discard: "discard",
        crash: "crash",
      },
      summary: {
        keep:
          "This beat the baseline, so the agent should keep the commit and continue iterating forward from here.",
        discard:
          "The new result is not better than baseline, so the branch should roll back.",
        crash:
          "Treat this as a failed idea: inspect run.log if the bug is trivial, otherwise log the crash and move on.",
      },
      ruleLabel: "Rule of thumb:",
      ruleHtml:
        "lower <code>val_bpb</code> wins. If the run crashes, log it, avoid committing <code>results.tsv</code>, and continue the search from the previous good commit.",
      unnamedExperiment: "unnamed experiment",
    },
    fileData: {
      prepare: {
        name: "prepare.py",
        owner: "Fixed infrastructure",
        editRule: "Do not modify during experiments",
        purpose:
          "Handles data download, tokenizer training, dataloading, evaluation utilities, and the fixed 300-second time budget.",
        why:
          "This file keeps the benchmark stable. If you change the prep or evaluation harness, your comparisons stop being trustworthy.",
        facts: [
          ["Key constants", "MAX_SEQ_LEN = 2048, TIME_BUDGET = 300, VOCAB_SIZE = 8192"],
          ["One-time job", "Download data shards and train the tokenizer before research mode"],
          ["Upstream role", "Provides the ground-truth evaluation helper used by train.py"],
        ],
      },
      train: {
        name: "train.py",
        owner: "Agent playground",
        editRule: "This is the file the agent experiments on",
        purpose:
          "Contains the model, optimizer, schedules, architecture knobs, batch sizing, and training loop.",
        why:
          "Autoresearch keeps experimentation inside one file so branch history stays readable and every idea is easy to review or revert.",
        facts: [
          ["Editable knobs", "DEPTH, WINDOW_PATTERN, TOTAL_BATCH_SIZE, optimizer LRs, model internals"],
          ["Default score", "The output summary prints val_bpb, timing, VRAM, steps, and depth"],
          ["Decision rule", "If val_bpb goes lower, keep the commit; otherwise revert it"],
        ],
      },
      program: {
        name: "program.md",
        owner: "Human-authored research plan",
        editRule: "You refine this, not the agent’s benchmark harness",
        purpose:
          "Defines the branch naming, setup checklist, output format, results logging, and the forever experiment loop.",
        why:
          "This is the actual control surface for the researcher. You are not just prompting casually; you are specifying the operating system for the agent.",
        facts: [
          ["Startup ritual", "Create an autoresearch/<tag> branch and initialize results.tsv"],
          ["Loop contract", "Commit, run, compare, log, keep winners, discard losers"],
          ["Autonomy style", "The agent is instructed not to stop and ask between experiments"],
        ],
      },
    },
    steps: [
      {
        label: "Map the contract",
        tag: "Orientation",
        title: "Read the repo as an experiment contract, not a normal training project.",
        intro:
          "The upstream repo is intentionally tiny. The most important mindset shift is that the human mainly authors the instructions and the agent mainly searches inside train.py.",
        commandLabel: "Read these files first",
        command: `README.md
prepare.py
train.py
program.md`,
        points: [
          {
            title: "Why this comes first",
            body:
              "If you skip the contract, it is easy to let an agent wander into the wrong files or accidentally invalidate the benchmark.",
          },
          {
            title: "What matters most",
            body:
              "prepare.py is fixed, train.py is mutable, and program.md defines how the autonomous loop should behave.",
          },
        ],
        note: "Think of program.md as the lightweight operating manual for your research swarm.",
      },
      {
        label: "Install dependencies",
        tag: "Setup",
        title: "Prepare the Python environment with uv.",
        intro:
          "The upstream quick start assumes Python 3.10+, uv, and a single NVIDIA GPU. Once uv is available, dependency setup is a one-command step.",
        commandLabel: "Terminal",
        command: `curl -LsSf https://astral.sh/uv/install.sh | sh
uv sync`,
        points: [
          {
            title: "What this installs",
            body:
              "The project depends on PyTorch, tokenizer tooling, requests, parquet reading, and a small kernels package used by the training script.",
          },
          {
            title: "Hardware expectation",
            body:
              "Upstream explicitly frames this repo around one NVIDIA GPU and says it was tested on H100-class hardware.",
          },
        ],
        note:
          "If you do not have the expected GPU setup, you can still learn from the workflow, but you will probably need a fork or smaller-machine retuning.",
      },
      {
        label: "Run one-time prep",
        tag: "Data",
        title: "Download the data shards and train the tokenizer.",
        intro:
          "This step populates ~/.cache/autoresearch with the dataset shards and tokenizer files that train.py expects later.",
        commandLabel: "Terminal",
        command: "uv run prepare.py",
        points: [
          {
            title: "What it writes",
            body:
              "Data lands in ~/.cache/autoresearch/data and the tokenizer lands in ~/.cache/autoresearch/tokenizer.",
          },
          {
            title: "Why it is separated",
            body:
              "Autoresearch wants experimentation to be fast and repeatable, so the costly prep step happens only once.",
          },
        ],
        note:
          "The program.md setup flow also suggests verifying that ~/.cache/autoresearch already contains the expected assets before you hand off to the agent.",
      },
      {
        label: "Establish baseline",
        tag: "Benchmark",
        title: "Run train.py once before any changes so you know the starting point.",
        intro:
          "The first experiment should always be the untouched baseline. That gives you a number to beat and proves your environment works end-to-end.",
        commandLabel: "Terminal",
        command: `uv run train.py

# later, if the run was redirected
grep "^val_bpb:" run.log`,
        points: [
          {
            title: "What the script prints",
            body:
              "The summary includes val_bpb, training_seconds, total_seconds, peak_vram_mb, total tokens, steps, parameters, and depth.",
          },
          {
            title: "How to think about the score",
            body:
              "val_bpb is the real decision metric. Lower beats higher, and the fixed time budget makes comparisons cleaner.",
          },
        ],
        note:
          "Upstream examples show runs ending after roughly five minutes of actual training, plus a bit of startup and evaluation overhead.",
      },
      {
        label: "Start the agent loop",
        tag: "Autonomy",
        title: "Create a fresh branch and point your agent at program.md.",
        intro:
          "The upstream program asks the agent to create a fresh autoresearch/<tag> branch, initialize results.tsv, verify setup, and then begin iterating.",
        commandLabel: "Terminal + starter prompt",
        command: `git checkout -b autoresearch/<tag>

Hi, have a look at program.md and let's kick off a new experiment.
Let's do the setup first.`,
        points: [
          {
            title: "Branch strategy",
            body:
              "Each run gets its own branch so good ideas accumulate forward and failed ideas can be discarded without polluting the main line.",
          },
          {
            title: "Results logging",
            body:
              "program.md defines a tab-separated results.tsv with commit, val_bpb, memory_gb, status, and description.",
          },
        ],
        note:
          "The upstream instructions explicitly tell the agent not to stop and ask for permission between experiments once the loop has begun.",
      },
      {
        label: "Keep winners only",
        tag: "Decision loop",
        title: "Commit, run, compare, log, and revert anything that does not help.",
        intro:
          "This is the heart of autoresearch: treat every code change as a fast hypothesis test under the same budget and keep the branch clean.",
        commandLabel: "Suggested loop",
        command: `git commit -am "try a focused training change"
uv run train.py > run.log 2>&1
grep "^val_bpb:\\|^peak_vram_mb:" run.log

# if better: keep it
# if worse: reset back to the previous good commit`,
        points: [
          {
            title: "Crash handling",
            body:
              "If the grep output is empty, inspect the tail of run.log, fix obvious mistakes, or mark the idea as a crash and move on.",
          },
          {
            title: "Simplicity rule",
            body:
              "Small gains that add lots of messy code are not automatically worth keeping. program.md explicitly values simpler wins.",
          },
        ],
        note:
          "Autoresearch is designed to feel like a disciplined overnight search process, not a random pile of speculative edits.",
      },
    ],
    goalTemplates: {
      setup: ({ runTag, extraFocus }) =>
        `Have a look at program.md and help me set up a fresh autoresearch run on branch autoresearch/${runTag}. Read README.md, prepare.py, and train.py, verify whether ~/.cache/autoresearch already has data shards and a tokenizer, initialize results.tsv with only the header row, and stop once setup is confirmed. ${extraFocus}.`,
      baseline: ({ runTag, extraFocus }) =>
        `Work inside a fresh branch named autoresearch/${runTag}. Follow program.md carefully, complete the setup checks, then run the untouched baseline experiment and summarize the resulting val_bpb, peak_vram_mb, and any setup issues. ${extraFocus}.`,
      throughput: ({ runTag, extraFocus }) =>
        `Use branch autoresearch/${runTag}. After establishing the untouched baseline from program.md, propose one small, reviewable change inside train.py that could improve the five-minute result, explain the hypothesis in one sentence, run it, and decide whether to keep or discard it based on val_bpb. ${extraFocus}.`,
      "small-gpu": ({ runTag, extraFocus }) =>
        `Use branch autoresearch/${runTag}. I am likely on smaller hardware than the tested upstream setup, so start by adapting the plan conservatively: propose reduced model complexity and evaluation cost in line with the README guidance, explain the tradeoffs briefly, then do the minimum setup needed to validate the environment. ${extraFocus}.`,
    },
  },
  "zh-TW": {
    htmlLang: "zh-Hant-TW",
    pageTitle: "Autoresearch 互動解說",
    metaDescription: "一個用瀏覽器語系自動切換的互動網站，帶你理解 karpathy/autoresearch 是什麼，以及如何一步步使用它。",
    brand: {
      title: "Autoresearch",
      subtitle: "互動導覽",
    },
    nav: {
      what: "是什麼",
      stepGuide: "操作步驟",
      simulator: "模擬器",
      promptLab: "提示詞",
      viewRepo: "看原始 repo",
    },
    hero: {
      eyebrow: "給人類研究員的互動導覽",
      titleHtml: "什麼是 <span>karpathy/autoresearch</span>，以及怎麼一步步用它。",
      textHtml:
        "<code>autoresearch</code> 是一個刻意做得很小的 repo，用來跑自治模型實驗：先做一次資料準備，再讓 agent 改 <code>train.py</code>，並用相同的五分鐘預算比較每次結果。",
      primaryCta: "開始導覽",
      secondaryCta: "產生起手 prompt",
      noteHtml:
        '內容整理自上游 <a href="https://github.com/karpathy/autoresearch" target="_blank" rel="noreferrer">README</a>、<a href="https://github.com/karpathy/autoresearch/blob/master/program.md" target="_blank" rel="noreferrer">program.md</a>、<a href="https://github.com/karpathy/autoresearch/blob/master/train.py" target="_blank" rel="noreferrer">train.py</a> 與 <a href="https://github.com/karpathy/autoresearch/blob/master/prepare.py" target="_blank" rel="noreferrer">prepare.py</a>。',
    },
    coreLoop: {
      chip: "核心循環",
      title: "Agent 只改一個檔案",
      body: "整個 repo 故意保持很小，這樣每次實驗都還看得懂，也方便回顧與捨棄。",
    },
    metrics: [
      {
        label: "硬體",
        valueHtml: "1 張 NVIDIA GPU",
        body: "上游測試環境是 H100。",
      },
      {
        label: "執行時間",
        valueHtml: "300 秒",
        body: "固定的 wall-clock 訓練預算。",
      },
      {
        label: "可修改程式",
        valueHtml: "<code>train.py</code>",
        body: "就是 agent 的遊樂場。",
      },
      {
        label: "評分指標",
        valueHtml: "<code>val_bpb</code>",
        body: "越低越好。",
      },
    ],
    sections: {
      principlesEyebrow: "一眼看懂這個 repo",
      principlesTitle: "Autoresearch 與其說是框架，不如說是一份很緊的實驗契約。",
      interactiveEyebrow: "互動範例 1",
      interactiveTitle: "點一個檔案，看看誰負責它，以及它存在的理由。",
      guideEyebrow: "互動範例 2",
      guideTitle: "照著步驟，一步步走完整個流程。",
      simulatorEyebrow: "互動範例 3",
      simulatorTitle: "模擬一次 keep-or-discard 的決策。",
      promptEyebrow: "互動範例 4",
      promptTitle: "為你的 coding agent 產生一段起手 prompt。",
      realityEyebrow: "實務提醒",
      realityTitle: "真正要跑之前，最值得記住的是這些事。",
    },
    principles: [
      {
        index: "01",
        title: "你是在用 Markdown 編排研究組織。",
        body:
          "人類主要是在塑形 <code>program.md</code>：定義規則、目標、輸出格式，以及 agent 要遵守的實驗循環。",
      },
      {
        index: "02",
        title: "Agent 的探索空間只在一個檔案裡。",
        body:
          "模型架構、optimizer、訓練迴圈都集中在 <code>train.py</code>，所以 diff 很集中，也比較容易知道每次到底改了什麼。",
      },
      {
        index: "03",
        title: "每次實驗都用同一個時鐘。",
        body:
          "所有比較都在同樣的五分鐘預算下進行，因此 keep 或 discard 的判斷會乾淨很多。",
      },
    ],
    realityCards: [
      {
        title: "它不是萬用型的訓練平台。",
        body:
          "上游的重點是單 GPU、單檔案、固定預算的實驗循環。這種刻意的簡化就是它的設計核心。",
      },
      {
        title: "如果硬體比較小，通常要先重調參數。",
        body:
          "README 直接建議在遠低於 H100 的機器上，先把 vocabulary、sequence length、depth、eval tokens 與 batch size 一起往下縮。",
      },
      {
        title: "公平來自固定預算，不是來自完全相同的硬體。",
        body:
          "五分鐘能讓同一台機器上的改動變得好比較，但不同 GPU 或平台之間的結果仍然不能直接橫向對照。",
      },
    ],
    fileTabsAria: "Autoresearch 檔案",
    stepTabsAria: "設定步驟",
    forms: {
      defaults: {
        baseline: "0.997900",
        candidate: "0.993200",
        peakVram: "45260.2",
        experimentNote: "稍微提高 matrix LR",
        runTag: "apr5",
        extraFocus: "嚴格只改 train.py",
      },
      baselineLabel: "基準值",
      candidateLabel: "新結果",
      peakVramLabel: "峰值 VRAM（MB）",
      experimentNoteLabel: "實驗說明",
      runCrashedLabel: "把這次視為 crash",
      resultsPreviewChip: "results.tsv 預覽",
      promptOutputChip: "提示詞輸出",
      runTagLabel: "Run tag",
      goalLabel: "目標",
      extraFocusLabel: "額外提醒",
      goalOptions: {
        setup: "先把 setup 做對",
        baseline: "先拿到乾淨的 baseline",
        throughput: "試一個小而明確的優化點子",
        "small-gpu": "先適配較小的機器",
      },
    },
    footer: {
      title: "Autoresearch 互動解說",
      sourcePrefix: "來源：",
    },
    buttons: {
      copyRow: "複製列",
      copyPrompt: "複製提示詞",
      copyBlock: "複製區塊",
      previous: "上一步",
      next: "下一步",
      copied: "已複製",
      copyFailed: "複製失敗",
    },
    decision: {
      statusLabels: {
        keep: "保留",
        discard: "捨棄",
        crash: "崩潰",
      },
      summary: {
        keep: "這次優於 baseline，所以 agent 應該保留這個 commit，並從這裡繼續往前迭代。",
        discard: "新結果沒有打敗 baseline，所以這個分支應該回退到前一個好的 commit。",
        crash: "把這當成失敗的點子：如果是小 bug 就看 run.log 修掉，否則記成 crash 後直接往下一個想法走。",
      },
      ruleLabel: "判斷原則：",
      ruleHtml:
        "<code>val_bpb</code> 越低越好。如果這次 crash，就把它記錄下來、不要把 <code>results.tsv</code> commit 進去，然後從上一個好的 commit 繼續。",
      unnamedExperiment: "未命名實驗",
    },
    fileData: {
      prepare: {
        name: "prepare.py",
        owner: "固定基礎設施",
        editRule: "實驗期間不要改它",
        purpose:
          "負責下載資料、訓練 tokenizer、提供 dataloader、評估工具，以及固定 300 秒的訓練預算。",
        why:
          "這個檔案負責維持 benchmark 的穩定性。如果你連資料準備或 evaluation harness 都一起改，實驗就不再可比。",
        facts: [
          ["關鍵常數", "MAX_SEQ_LEN = 2048、TIME_BUDGET = 300、VOCAB_SIZE = 8192"],
          ["一次性工作", "先把資料 shard 和 tokenizer 準備好，之後再進入研究模式"],
          ["上游角色", "提供 train.py 依賴的地面真相評估函式"],
        ],
      },
      train: {
        name: "train.py",
        owner: "Agent 實驗場",
        editRule: "這就是 agent 可以不斷試驗的檔案",
        purpose:
          "裡面放了模型、optimizer、schedule、架構旋鈕、batch size 與訓練迴圈。",
        why:
          "Autoresearch 把實驗空間收斂到單一檔案，這樣 branch 歷史容易讀，想法也容易 review 或回退。",
        facts: [
          ["可調旋鈕", "DEPTH、WINDOW_PATTERN、TOTAL_BATCH_SIZE、各種 optimizer LR 與模型內部設定"],
          ["預設輸出", "summary 會列出 val_bpb、時間、VRAM、steps 與 depth"],
          ["決策規則", "如果 val_bpb 更低就保留，不然就回退"],
        ],
      },
      program: {
        name: "program.md",
        owner: "人類寫的研究規格",
        editRule: "你應該主要打磨它，而不是動 benchmark harness",
        purpose:
          "定義 branch 命名、setup 檢查清單、輸出格式、結果記錄，以及會一直跑下去的實驗循環。",
        why:
          "對研究者來說，真正的控制面板其實是這份文件。你不是在隨便 prompt；你是在指定 agent 的作業系統。",
        facts: [
          ["啟動儀式", "建立 autoresearch/<tag> 分支，並初始化 results.tsv"],
          ["循環契約", "commit、run、比較、記錄、留下贏家、丟掉輸家"],
          ["自治風格", "一旦進入循環，agent 被要求不要中途停下來詢問"],
        ],
      },
    },
    steps: [
      {
        label: "先讀懂契約",
        tag: "定位",
        title: "把這個 repo 當成實驗契約來讀，不是一般的訓練專案。",
        intro:
          "上游 repo 故意維持得很小。最重要的心態切換是：人類主要在寫規則，agent 主要在 <code>train.py</code> 裡搜尋更好的做法。",
        commandLabel: "先讀這些檔案",
        command: `README.md
prepare.py
train.py
program.md`,
        points: [
          {
            title: "為什麼先做這步",
            body:
              "如果沒先讀懂契約，很容易讓 agent 改錯檔案，或不小心把 benchmark 本身也一起改掉。",
          },
          {
            title: "最重要的分工",
            body:
              "<code>prepare.py</code> 是固定的，<code>train.py</code> 是可變的，而 <code>program.md</code> 決定整個自治循環怎麼跑。",
          },
        ],
        note: "可以把 <code>program.md</code> 想成你的研究 swarm 作業手冊。",
      },
      {
        label: "安裝依賴",
        tag: "安裝",
        title: "先用 uv 把 Python 環境準備好。",
        intro:
          "上游 quick start 預設你有 Python 3.10+、uv，以及一張 NVIDIA GPU。只要 uv 在，依賴安裝其實就是一個步驟。",
        commandLabel: "終端機",
        command: `curl -LsSf https://astral.sh/uv/install.sh | sh
uv sync`,
        points: [
          {
            title: "這會裝什麼",
            body:
              "會裝到 PyTorch、tokenizer 工具、requests、parquet 讀取，以及訓練腳本會用到的小型 kernels 套件。",
          },
          {
            title: "硬體前提",
            body:
              "上游明確把這個 repo 定位成單一 NVIDIA GPU 的流程，而且公開說主要測在 H100 等級的機器上。",
          },
        ],
        note: "如果你沒有同級硬體，流程本身仍值得學，但多半要靠 fork 或較小機器的重新調參。",
      },
      {
        label: "做一次性準備",
        tag: "資料",
        title: "下載資料 shards，並訓練 tokenizer。",
        intro:
          "這一步會把 train.py 之後要用到的資料與 tokenizer 放進 ~/.cache/autoresearch。",
        commandLabel: "終端機",
        command: "uv run prepare.py",
        points: [
          {
            title: "它會寫到哪裡",
            body:
              "資料放在 ~/.cache/autoresearch/data，tokenizer 放在 ~/.cache/autoresearch/tokenizer。",
          },
          {
            title: "為什麼獨立出來",
            body:
              "Autoresearch 想讓實驗本身夠快、夠可重複，所以昂貴的準備流程只做一次。",
          },
        ],
        note:
          "program.md 的 setup 流程也特別要求你先確認 ~/.cache/autoresearch 已經有這些資產，再把工作交給 agent。",
      },
      {
        label: "建立 baseline",
        tag: "基準",
        title: "在改任何東西之前，先跑一次原版 train.py。",
        intro:
          "第一個實驗永遠應該是 untouched baseline。這樣你才知道要打敗的目標，也能證明環境真的能端到端跑起來。",
        commandLabel: "終端機",
        command: `uv run train.py

# 如果輸出被導到檔案
grep "^val_bpb:" run.log`,
        points: [
          {
            title: "腳本會印出什麼",
            body:
              "summary 會列出 val_bpb、training_seconds、total_seconds、peak_vram_mb、總 token 數、steps、參數量與 depth。",
          },
          {
            title: "怎麼看分數",
            body:
              "<code>val_bpb</code> 才是真正的決策指標。越低越好，而固定時間預算讓比較更乾淨。",
          },
        ],
        note: "上游範例顯示，實際訓練大約五分鐘，再加上一點啟動與評估的額外時間。",
      },
      {
        label: "啟動 agent 迴圈",
        tag: "自治",
        title: "建立新的 branch，然後把 agent 指向 program.md。",
        intro:
          "上游 program 會要求 agent 建立新的 autoresearch/<tag> 分支、初始化 results.tsv、確認 setup 無誤，然後開始迭代。",
        commandLabel: "終端機 + 起手 prompt",
        command: `git checkout -b autoresearch/<tag>

Hi, have a look at program.md and let's kick off a new experiment.
Let's do the setup first.`,
        points: [
          {
            title: "分支策略",
            body:
              "每次 run 都有獨立 branch，好的想法能一路往前累積，失敗的想法也能乾淨地被丟掉。",
          },
          {
            title: "結果記錄",
            body:
              "<code>program.md</code> 定義了 tab-separated 的 results.tsv，包含 commit、val_bpb、memory_gb、status 與 description。",
          },
        ],
        note:
          "上游還明確要求：一旦開始循環，agent 不要每次實驗都停下來等人批准。",
      },
      {
        label: "只留下贏家",
        tag: "決策循環",
        title: "Commit、run、比較、記錄，沒幫助的改動就回退。",
        intro:
          "這就是 autoresearch 的核心：把每次改動都當成固定預算下的快速假說測試，並保持 branch 乾淨。",
        commandLabel: "建議循環",
        command: `git commit -am "try a focused training change"
uv run train.py > run.log 2>&1
grep "^val_bpb:\\|^peak_vram_mb:" run.log

# 如果更好：保留
# 如果更差：回到前一個好 commit`,
        points: [
          {
            title: "Crash 怎麼處理",
            body:
              "如果 grep 沒抓到結果，就去看 run.log 尾巴；小 typo 可以修，大方向本身壞掉就直接記成 crash 往下走。",
          },
          {
            title: "簡潔性規則",
            body:
              "小提升如果換來一堆醜程式碼，未必值得。<code>program.md</code> 明確把簡潔也算進決策成本。",
          },
        ],
        note: "Autoresearch 的理想狀態，是像整晚穩定運轉的研究流程，而不是亂試一堆零碎改動。",
      },
    ],
    goalTemplates: {
      setup: ({ runTag, extraFocus }) =>
        `請先看 program.md，幫我在 autoresearch/${runTag} 這個新分支上完成一次正確的 setup。讀 README.md、prepare.py、train.py，檢查 ~/.cache/autoresearch 裡是否已經有 data shards 和 tokenizer，建立只有 header 的 results.tsv，並在 setup 確認完成後停下來。${extraFocus}。`,
      baseline: ({ runTag, extraFocus }) =>
        `請在 autoresearch/${runTag} 這個新分支工作，嚴格依照 program.md 先完成 setup 檢查，然後跑一遍完全沒改過的 baseline，最後整理這次的 val_bpb、peak_vram_mb，以及任何 setup 問題。${extraFocus}。`,
      throughput: ({ runTag, extraFocus }) =>
        `請在 autoresearch/${runTag} 分支工作。先依照 program.md 建立 untouched baseline，再提出一個小而可 review 的 train.py 改動，先用一句話說明假設，接著實跑，並根據 val_bpb 決定要 keep 還是 discard。${extraFocus}。`,
      "small-gpu": ({ runTag, extraFocus }) =>
        `請在 autoresearch/${runTag} 分支工作。我很可能不是上游測試的那種大 GPU，所以先依 README 的建議保守地下修模型複雜度與評估成本，簡短說明取捨，再做最小必要的 setup 驗證。${extraFocus}。`,
    },
  },
};

const state = {
  locale: detectLocale(),
  theme: detectTheme(),
  activeFile: "prepare",
  activeStepIndex: 0,
};

const metaDescriptionEl = document.querySelector('meta[name="description"]');
const brandTitleEl = document.querySelector(".brand-copy strong");
const brandSubtitleEl = document.querySelector(".brand-copy small");
const siteNavEl = document.querySelector(".site-nav");
const repoButtonEl = document.querySelector(".ghost-button");
const heroEyebrowEl = document.querySelector(".hero-copy .eyebrow");
const heroTitleEl = document.querySelector(".hero-copy h1");
const heroTextEl = document.querySelector(".hero-text");
const heroActionEls = [...document.querySelectorAll(".hero-actions a")];
const heroNoteEl = document.querySelector(".hero-note");
const signalCardEl = document.querySelector(".signal-card");
const metricGridEl = document.querySelector(".metric-grid");
const principleHeadingEyebrowEl = document.querySelector("#what-it-is .section-heading .eyebrow");
const principleHeadingTitleEl = document.querySelector("#what-it-is .section-heading h2");
const principleGridEl = document.querySelector(".principle-grid");
const interactiveHeadingEyebrowEl = document.querySelector(".interactive .section-heading .eyebrow");
const interactiveHeadingTitleEl = document.querySelector(".interactive .section-heading h2");
const guideHeadingEyebrowEl = document.querySelector("#step-guide .section-heading .eyebrow");
const guideHeadingTitleEl = document.querySelector("#step-guide .section-heading h2");
const simulatorHeadingEyebrowEl = document.querySelector("#simulator .section-heading .eyebrow");
const simulatorHeadingTitleEl = document.querySelector("#simulator .section-heading h2");
const promptHeadingEyebrowEl = document.querySelector("#prompt-lab .section-heading .eyebrow");
const promptHeadingTitleEl = document.querySelector("#prompt-lab .section-heading h2");
const realityHeadingEyebrowEl = document.querySelector(".reality .section-heading .eyebrow");
const realityHeadingTitleEl = document.querySelector(".reality .section-heading h2");
const realityGridEl = document.querySelector(".reality-grid");
const fileTabsEl = document.querySelector(".file-tabs");
const fileDetailEl = document.querySelector("#file-detail");
const stepListEl = document.querySelector("#step-list");
const stepPanelEl = document.querySelector("#step-panel");
const decisionFormEl = document.querySelector("#decision-form");
const decisionChipEl = document.querySelector("#decision-card .chip");
const resultsCopyButtonEl = document.querySelector('[data-copy-target="#results-preview"]');
const resultsPreviewEl = document.querySelector("#results-preview");
const decisionSummaryEl = document.querySelector("#decision-summary");
const promptFormEl = document.querySelector("#prompt-form");
const promptChipEl = document.querySelector("#prompt-lab .prompt-card .chip");
const promptCopyButtonEl = document.querySelector('[data-copy-target="#prompt-output"]');
const promptOutputEl = document.querySelector("#prompt-output");
const footerParagraphEls = [...document.querySelectorAll(".site-footer p")];

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

function isTraditionalChineseLocale(value) {
  if (!value) {
    return false;
  }

  const normalized = String(value).trim().toLowerCase().replace(/_/g, "-");

  return (
    normalized === "zh-tw" ||
    normalized.startsWith("zh-tw-") ||
    normalized === "zh-hk" ||
    normalized.startsWith("zh-hk-") ||
    normalized === "zh-mo" ||
    normalized.startsWith("zh-mo-") ||
    normalized === "zh-hant" ||
    normalized.startsWith("zh-hant-") ||
    normalized.includes("-hant")
  );
}

function detectLocale() {
  const bootstrappedLocale = normalizeLocale(document.documentElement.dataset.locale);

  if (bootstrappedLocale) {
    return bootstrappedLocale;
  }

  const url = new URL(window.location.href);
  const override = normalizeLocale(url.searchParams.get("locale"));

  if (override) {
    return override;
  }

  const languages = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
  const prefersTraditionalChinese = languages.some(isTraditionalChineseLocale);

  return prefersTraditionalChinese ? LOCALE_KEYS.ZH_TW : LOCALE_KEYS.EN;
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
  return localeContent[state.locale];
}

function getDecisionInputs() {
  return {
    baselineInput: document.querySelector("#baseline-bpb"),
    candidateInput: document.querySelector("#candidate-bpb"),
    peakVramInput: document.querySelector("#peak-vram"),
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

function renderMetricGrid(content) {
  metricGridEl.innerHTML = content.metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span class="metric-label">${metric.label}</span>
          <strong>${metric.valueHtml}</strong>
          <p>${metric.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderPrinciples(content) {
  principleGridEl.innerHTML = content.principles
    .map(
      (principle) => `
        <article class="principle-card">
          <span class="principle-index">${principle.index}</span>
          <h3>${principle.title}</h3>
          <p>${principle.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderRealityCards(content) {
  realityGridEl.innerHTML = content.realityCards
    .map(
      (card) => `
        <article class="reality-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderFileTabs(content) {
  fileTabsEl.setAttribute("aria-label", content.fileTabsAria);
  fileTabsEl.innerHTML = FILE_KEYS.map(
    (key) => `
      <button class="file-tab ${state.activeFile === key ? "is-active" : ""}" data-file-tab="${key}">
        ${content.fileData[key].name}
      </button>
    `,
  ).join("");

  [...fileTabsEl.querySelectorAll("[data-file-tab]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFile = button.dataset.fileTab;
      renderFileTabs(getContent());
      renderFile(state.activeFile);
    });
  });
}

function renderDecisionForm(content) {
  const current = getDecisionInputs();
  const defaults = content.forms.defaults;

  const baselineValue = current.baselineInput?.value || defaults.baseline;
  const candidateValue = current.candidateInput?.value || defaults.candidate;
  const peakVramValue = current.peakVramInput?.value || defaults.peakVram;
  const noteValue = current.noteInput?.value || defaults.experimentNote;
  const crashedChecked = current.crashedInput?.checked ? "checked" : "";

  decisionFormEl.innerHTML = `
    <label>
      <span>${content.forms.baselineLabel}</span> <code>val_bpb</code>
      <input type="number" step="0.000001" id="baseline-bpb" value="${baselineValue}" />
    </label>
    <label>
      <span>${content.forms.candidateLabel}</span> <code>val_bpb</code>
      <input type="number" step="0.000001" id="candidate-bpb" value="${candidateValue}" />
    </label>
    <label>
      <span>${content.forms.peakVramLabel}</span>
      <input type="number" step="0.1" id="peak-vram" value="${peakVramValue}" />
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

  setText(decisionChipEl, content.forms.resultsPreviewChip);
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
  document.documentElement.dataset.locale = state.locale;
  document.title = content.pageTitle;
  metaDescriptionEl?.setAttribute("content", content.metaDescription);

  setText(brandTitleEl, content.brand.title);
  setText(brandSubtitleEl, content.brand.subtitle);

  siteNavEl.innerHTML = `
    <a href="#what-it-is">${content.nav.what}</a>
    <a href="#step-guide">${content.nav.stepGuide}</a>
    <a href="#simulator">${content.nav.simulator}</a>
    <a href="#prompt-lab">${content.nav.promptLab}</a>
  `;
  siteNavEl.setAttribute(
    "aria-label",
    content.htmlLang.startsWith("zh") ? "主要導覽" : "Primary",
  );
  setText(repoButtonEl, content.nav.viewRepo);

  setText(heroEyebrowEl, content.hero.eyebrow);
  setHtml(heroTitleEl, content.hero.titleHtml);
  setHtml(heroTextEl, content.hero.textHtml);
  setText(heroActionEls[0], content.hero.primaryCta);
  setText(heroActionEls[1], content.hero.secondaryCta);
  setHtml(heroNoteEl, content.hero.noteHtml);

  signalCardEl.innerHTML = `
    <span class="chip">${content.coreLoop.chip}</span>
    <strong>${content.coreLoop.title}</strong>
    <p>${content.coreLoop.body}</p>
  `;

  renderMetricGrid(content);

  setText(principleHeadingEyebrowEl, content.sections.principlesEyebrow);
  setText(principleHeadingTitleEl, content.sections.principlesTitle);
  renderPrinciples(content);

  setText(interactiveHeadingEyebrowEl, content.sections.interactiveEyebrow);
  setText(interactiveHeadingTitleEl, content.sections.interactiveTitle);

  setText(guideHeadingEyebrowEl, content.sections.guideEyebrow);
  setText(guideHeadingTitleEl, content.sections.guideTitle);

  setText(simulatorHeadingEyebrowEl, content.sections.simulatorEyebrow);
  setText(simulatorHeadingTitleEl, content.sections.simulatorTitle);

  setText(promptHeadingEyebrowEl, content.sections.promptEyebrow);
  setText(promptHeadingTitleEl, content.sections.promptTitle);

  setText(realityHeadingEyebrowEl, content.sections.realityEyebrow);
  setText(realityHeadingTitleEl, content.sections.realityTitle);
  renderRealityCards(content);

  renderFileTabs(content);
  renderDecisionForm(content);
  renderPromptForm(content);
  bindFormListeners();

  setText(footerParagraphEls[0], content.footer.title);
  footerParagraphEls[1].innerHTML = `${content.footer.sourcePrefix} <a href="https://github.com/karpathy/autoresearch" target="_blank" rel="noreferrer">karpathy/autoresearch</a>`;
}

function renderFile(key) {
  const content = getContent();
  const file = content.fileData[key];

  if (!file) {
    return;
  }

  fileDetailEl.innerHTML = `
    <div class="file-title-row">
      <div>
        <span class="chip">${file.owner}</span>
        <h3>${file.name}</h3>
      </div>
      <strong>${file.editRule}</strong>
    </div>
    <div class="file-detail-grid">
      <div class="file-meta">
        <strong>${content.htmlLang.startsWith("zh") ? "用途" : "Purpose"}</strong>
        <span>${file.purpose}</span>
        <p>${file.why}</p>
      </div>
      <div class="callout-strip">
        ${file.facts
          .map(
            ([label, value]) => `
              <div class="callout">
                <strong>${label}</strong>
                <span>${value}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderStepButtons() {
  const content = getContent();
  const steps = content.steps;

  stepListEl.setAttribute("aria-label", content.stepTabsAria);
  stepListEl.innerHTML = steps
    .map(
      (step, index) => `
        <button
          class="step-button ${index === state.activeStepIndex ? "is-active" : ""}"
          data-step-index="${index}"
          role="tab"
          aria-selected="${index === state.activeStepIndex}"
        >
          <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="step-button-copy">
            <strong>${step.label}</strong>
            <span>${step.tag}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderStepPanel() {
  const content = getContent();
  const steps = content.steps;
  const step = steps[state.activeStepIndex];

  stepPanelEl.innerHTML = `
    <div class="step-panel-header">
      <div>
        <span class="chip">${step.tag}</span>
        <h3>${step.title}</h3>
      </div>
      <button
        class="copy-button"
        data-copy-target="#step-command-block"
        data-copy-label="${content.buttons.copyBlock}"
      >
        ${content.buttons.copyBlock}
      </button>
    </div>
    <p>${step.intro}</p>
    <div class="step-command">
      <div class="step-command-header">
        <strong>${step.commandLabel}</strong>
      </div>
      <pre id="step-command-block">${step.command}</pre>
    </div>
    <div class="step-points">
      ${step.points
        .map(
          (point) => `
            <div class="step-point">
              <strong>${point.title}</strong>
              <span>${point.body}</span>
            </div>
          `,
        )
        .join("")}
    </div>
    <p><strong>${content.htmlLang.startsWith("zh") ? "記住：" : "Remember:"}</strong> ${step.note}</p>
    <div class="step-footer">
      <button class="step-nav" id="step-prev" ${state.activeStepIndex === 0 ? "disabled" : ""}>
        ${content.buttons.previous}
      </button>
      <div>${state.activeStepIndex + 1} / ${steps.length}</div>
      <button
        class="step-nav"
        id="step-next"
        ${state.activeStepIndex === steps.length - 1 ? "disabled" : ""}
      >
        ${content.buttons.next}
      </button>
    </div>
  `;

  stepPanelEl.querySelector("#step-prev")?.addEventListener("click", () => {
    if (state.activeStepIndex > 0) {
      state.activeStepIndex -= 1;
      renderSteps();
    }
  });

  stepPanelEl.querySelector("#step-next")?.addEventListener("click", () => {
    if (state.activeStepIndex < steps.length - 1) {
      state.activeStepIndex += 1;
      renderSteps();
    }
  });
}

function renderSteps() {
  renderStepButtons();
  renderStepPanel();

  [...stepListEl.querySelectorAll("[data-step-index]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.activeStepIndex = Number(button.dataset.stepIndex);
      renderSteps();
    });
  });
}

function formatDecision() {
  const content = getContent();
  const { baselineInput, candidateInput, peakVramInput, noteInput, crashedInput } = getDecisionInputs();
  const baseline = Number(baselineInput.value);
  const candidate = Number(candidateInput.value);
  const peakVramMb = Number(peakVramInput.value);
  const note = noteInput.value.trim() || content.decision.unnamedExperiment;
  const crashed = crashedInput.checked;

  const memoryGb = crashed || Number.isNaN(peakVramMb) ? 0 : peakVramMb / 1024;
  const commit = crashed ? "deadbee" : "abc1234";

  let statusKey = STATUS_VALUES.discard;

  if (crashed) {
    statusKey = STATUS_VALUES.crash;
  } else if (!Number.isNaN(baseline) && !Number.isNaN(candidate) && candidate < baseline) {
    statusKey = STATUS_VALUES.keep;
  }

  const row = `${commit}\t${crashed ? "0.000000" : candidate.toFixed(6)}\t${memoryGb.toFixed(1)}\t${statusKey}\t${note}`;
  resultsPreviewEl.textContent = row;
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
    { threshold: 0.2 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

applyTheme(state.theme);
renderStaticContent();
renderFile(state.activeFile);
renderSteps();
formatDecision();
renderPrompt();
setupCopyButtons();
setupRevealObserver();
setupThemeWatcher();
