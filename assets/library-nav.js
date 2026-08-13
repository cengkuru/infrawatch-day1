/* Definition bank navigation, shared across the partner-guidance pages.
   One entry per page; append new terms to the array in any order, the menu
   always renders them alphabetically. Built to stay usable at 20 or 30 terms:
   - alphabetical order, sorted at runtime (glossary convention)
   - find-as-you-type filter over term + note text
   - wide screens (>=1380px): fixed right rail, single-line entries (the note
     lives in the tooltip and the search corpus), no internal scrolling at
     realistic list sizes
   - narrow screens: collapsed bar under the brand bar; opens to a panel
     with full notes; Escape closes
   Visit counting: GoatCounter (script tag on every page; dashboard at
   infraatch.goatcounter.com). The old counterapi.dev v1 per-term counters
   and the #term-cloud dynamic sizing that depended on them were removed
   2026-08-11 after the provider retired v1 (HTTP 410).
   No-JS fallback: the footer companion links on each page. */
(function () {
  /* Grouped bank (2026-08-06): five clusters replace the flat A-to-Z list.
     `group` keys must match the GROUPS order below. Pages render grouped,
     alphabetical within each group; search still spans everything. */
  var GROUPS = [
    "Understand the assessment",
    "Decide which projects enter",
    "Classify who does what",
    "Find and score evidence",
    "Carry out and use the work"
  ];
  var pages = [
    { href: "infrastructure-watch.html", term: "Infrastructure Watch, the programme", note: "what it is and aims to achieve", added: "2026-08-04", group: "Understand the assessment" },
    { href: "forty-data-points.html", term: "40 data points", note: "the forty facts every project is scored on", added: "2026-08-05", group: "Understand the assessment" },
    { href: "zero-to-six-scale.html", term: "0 to 6 scale", note: "what each transparency score means; official disclosure starts at 3", added: "2026-08-05", group: "Understand the assessment" },
    { href: "project-result.html", term: "Project result", note: "add the scores that apply, divide by the number you scored", added: "2026-08-05", group: "Understand the assessment" },
    { href: "scoring-guides.html", term: "Scoring guides", note: "every standing ruling, one line each, with status and the page that carries it", added: "2026-08-12", group: "Understand the assessment" },

    { href: "eligibility.html", term: "Eligibility test", note: "does a project enter the dataset?", added: "2026-08-04", group: "Decide which projects enter" },
    { href: "foreign-financing.html", term: "Foreign financing", note: "one shared definition, asked everywhere", added: "2026-08-04", group: "Decide which projects enter" },
    { href: "financing-forms.html", term: "Financing forms", note: "six ways projects are paid for", added: "2026-08-04", group: "Decide which projects enter" },
    { href: "selection-and-sampling.html", term: "Selection and sampling", note: "the workflow for choosing projects before seeing their records", added: "2026-08-05", group: "Decide which projects enter" },
    { href: "buffer-list.html", term: "Buffer list", note: "documented substitution, not reopened selection", added: "2026-08-04", group: "Decide which projects enter" },
    { href: "project-unit.html", term: "Project unit", note: "what counts as one project", added: "2026-08-06", group: "Decide which projects enter" },

    { href: "project-roles.html", term: "Project roles", note: "owner, financier, builder, operator, beneficial owner", added: "2026-08-06", group: "Classify who does what" },
    { href: "responsible-public-authority.html", term: "Responsible public authority", note: "whose publication record is scored", added: "2026-08-05", group: "Classify who does what" },
    { href: "state-owned-enterprise.html", term: "State-owned enterprise (SOE)", note: "classified by role, not ownership", added: "2026-08-05", group: "Classify who does what" },
    { href: "prc-classification.html", term: "PRC and non-PRC projects", note: "the financier's origin decides, not the builder's flag", added: "2026-08-04", group: "Classify who does what" },
    { href: "beneficial-ownership.html", term: "Beneficial ownership", note: "who really gains: how far the record carries a reader", added: "2026-08-05", group: "Classify who does what" },
    { href: "attribution-record.html", term: "Financing and ownership record", note: "who put money in, through which entity, and who stands behind it", added: "2026-08-05", group: "Classify who does what" },
    { href: "public-private-partnership.html", term: "Public-private partnership (PPP)", note: "six tests, defined by risk and time, not the label", added: "2026-08-05", group: "Classify who does what" },
    { href: "ppp-questions.html", term: "PPP questions", note: "the eight extra disclosure themes a PPP is scored on", added: "2026-08-06", group: "Classify who does what" },
    { href: "power-purchase-agreement.html", term: "Power purchase agreement", note: "the promise that is a public commitment", added: "2026-08-04", group: "Classify who does what" },

    { href: "qualifying-government-publication.html", term: "Qualifying government publication", note: "who gets credit for publishing", added: "2026-08-05", group: "Find and score evidence" },
    { href: "sufficient-search.html", term: "Sufficient search", note: "an unsearched point is never a zero", added: "2026-08-05", group: "Find and score evidence" },
    { href: "evidence-states.html", term: "Evidence states", note: "before you score zero: why is it missing?", added: "2026-08-05", group: "Find and score evidence" },
    { href: "conflicting-figures.html", term: "Conflicting figures", note: "keep both numbers, flag the divergence", added: "2026-08-05", group: "Find and score evidence" },
    { href: "lifecycle-and-due.html", term: "Lifecycle and due date", note: "when should this record exist?", added: "2026-08-06", group: "Find and score evidence" },
    { href: "oversight-publication.html", term: "Oversight publication", note: "an audit body scores only for the point it was mandated to publish", added: "2026-08-08", group: "Find and score evidence" },

    { href: "assessment-process.html", term: "Assessment process", note: "how a transparency assessment is actually done, step by step", added: "2026-08-06", group: "Carry out and use the work" },
    { href: "data-collection.html", term: "Data collection", note: "gather the record so every score can show its source", added: "2026-08-06", group: "Carry out and use the work" },
    { href: "assessment-database.html", term: "Assessment database", note: "the six things it must record for every score", added: "2026-08-06", group: "Carry out and use the work" },
    { href: "referral-and-resolution.html", term: "Referral and resolution", note: "what to do when the rule does not settle it", added: "2026-08-06", group: "Carry out and use the work" },
    { href: "partner-validation.html", term: "Partner validation", note: "confirm or correct each recorded fact, with a source", added: "2026-08-06", group: "Carry out and use the work" },
    { href: "validation-progress.html", term: "Validation progress", note: "how partner feedback is affecting the working method and report", added: "2026-08-13", group: "Carry out and use the work" },
    { href: "validation-sheet.html", term: "Validation sheet", note: "the form a country team returns to confirm or correct the recorded facts", added: "2026-08-11", group: "Carry out and use the work" },
    { href: "case-study.html", term: "Case study", note: "a deep dive into one scored project: why the record looks like this", added: "2026-08-06", group: "Carry out and use the work" }
  ];

  /* Meaning-aware search expansion (generated 2026-08-11 via Gemini flash-lite
     at build time; regenerate with tools/build-search-syn.md when terms change).
     Plain-language phrasings, synonyms and related concepts per page, searched
     alongside term + note. No runtime AI calls, nothing leaves the browser. */
  var SYN = {
    "infrastructure-watch.html": "cost cipe transparency initiative government project monitoring goals mission objectives tracking foreign investment accountability portal",
    "forty-data-points.html": "40 facts metrics indicators checklist requirements criteria scoring items information fields disclosure checklist",
    "zero-to-six-scale.html": "scoring system rating levels transparency grades ranking methodology disclosure threshold meaning of numbers",
    "project-result.html": "final score calculation average grade total points outcome assessment math formula",
    "scoring-guides.html": "rulings decision register summary cheat sheet quick reference all rules index digest standing decisions status pending agreed working guidance",
    "eligibility.html": "inclusion criteria project selection rules entry requirements qualification check scope filter",
    "foreign-financing.html": "international funding external capital overseas money cross-border investment donor support",
    "financing-forms.html": "payment methods funding types budget models investment structures capital sources",
    "selection-and-sampling.html": "choosing projects methodology sampling strategy workflow picking cases research design",
    "buffer-list.html": "backup projects replacement list substitution protocol alternative cases standby selection",
    "project-unit.html": "defining a project scope boundaries what constitutes one project individual contract grouping",
    "project-roles.html": "stakeholders participants key players responsibilities entities involved contractor developer investor",
    "responsible-public-authority.html": "government agency department ministry accountable body reporting entity publisher",
    "state-owned-enterprise.html": "soe government business public company state entity classification criteria",
    "prc-classification.html": "china funded projects origin of money financier nationality foreign investment source",
    "beneficial-ownership.html": "ultimate owner real beneficiary who profits hidden interests control structure",
    "attribution-record.html": "funding trail ownership history money flow capital origin documentation",
    "public-private-partnership.html": "ppp definition risk sharing long term contracts private sector involvement joint venture",
    "ppp-questions.html": "extra criteria specific ppp metrics additional disclosure requirements specialized scoring",
    "power-purchase-agreement.html": "ppa energy contract utility commitment electricity supply deal",
    "qualifying-government-publication.html": "official source valid document authorized release credible information channel",
    "sufficient-search.html": "thorough investigation due diligence look everywhere exhaustive check missing data verification",
    "evidence-states.html": "missing info status reason for absence documentation gap proof availability",
    "conflicting-figures.html": "discrepancies inconsistent data mismatching numbers contradictory reports variance",
    "lifecycle-and-due.html": "project timeline reporting deadlines expected publication dates schedule phases",
    "oversight-publication.html": "audit body report regulatory disclosure mandate monitoring agency accountability",
    "assessment-process.html": "how to evaluate transparency step by step guide methodology procedure review",
    "data-collection.html": "gathering records sourcing information evidence retrieval documentation phase",
    "assessment-database.html": "tracking system record keeping software platform data fields storage requirements",
    "referral-and-resolution.html": "dispute settlement rule clarification help desk guidance ambiguity handling",
    "partner-validation.html": "country team review verification process confirm facts accuracy check",
    "validation-progress.html": "live feedback tracker progress changes incorporated open decisions partner response report draft sri lanka ethiopia verite stalwart",
    "validation-sheet.html": "feedback form correction template review document response file questionnaire survey checklist deadline return submit unreturned silence partner sections",
    "case-study.html": "deep dive analysis project example detailed report investigation narrative"
  };

  pages.forEach(function (p, i) { p.origIdx = i; });
  var recent = pages.slice().sort(function (a, b) {
    return b.added === a.added ? b.origIdx - a.origIdx : (b.added < a.added ? -1 : 1);
  }).slice(0, 3);

  pages.sort(function (a, b) {
    var g = GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group);
    return g !== 0 ? g : a.term.localeCompare(b.term);
  });

  var here = (location.pathname.split("/").pop() || "").toLowerCase();
  var currentTerm = "";
  pages.forEach(function (p) {
    if (p.href.toLowerCase() === here) currentTerm = p.term;
  });

  var css =
    /* shared */
    ".lib-nav{background:#fff;border-bottom:1px solid var(--light,#E2E8ED);position:sticky;top:0;z-index:60;box-shadow:0 2px 10px rgba(20,35,52,.06);}" +
    ".lib-nav .lib-inner{max-width:1040px;margin:0 auto;padding:0 1.2rem;position:relative;}" +
    ".lib-nav .lib-toggle{display:flex;align-items:center;gap:.6rem;width:100%;background:none;border:0;cursor:pointer;padding:.6rem 0;font-family:var(--mono,monospace);font-size:.64rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--brand,#28496A);text-align:left;}" +
    ".lib-nav .lib-toggle:hover{color:var(--brand-deep,#142334);}" +
    ".lib-nav .lib-pill{display:inline-flex;align-items:center;gap:.45rem;background:var(--brand,#28496A);color:#fff;border-radius:99px;padding:.4rem .95rem;font-size:.66rem;letter-spacing:.07em;}" +
    ".lib-nav .lib-toggle:hover .lib-pill{background:var(--brand-deep,#142334);}" +
    ".lib-nav .lib-pill .lib-caret{color:#cdddec;margin-left:0;}" +
    ".lib-nav .lib-burger{display:inline-flex;align-items:center;}" +
    "@keyframes libpulse{0%{box-shadow:0 0 0 0 rgba(40,73,106,.45);}70%{box-shadow:0 0 0 10px rgba(40,73,106,0);}100%{box-shadow:0 0 0 0 rgba(40,73,106,0);}}" +
    ".lib-nav .lib-pill.pulse{animation:libpulse 2s ease-out 3;}" +
    "@media(prefers-reduced-motion:reduce){.lib-nav .lib-pill.pulse{animation:none;}}" +
    ".lib-nav .lib-toggle .lib-cur{color:var(--brand,#28496A);}" +
    ".lib-nav .lib-toggle .lib-caret{margin-left:auto;transition:transform .15s;color:var(--brand-soft,#3d6491);}" +
    ".lib-nav.open .lib-toggle .lib-caret{transform:rotate(180deg);}" +
    ".lib-nav .lib-panel{display:none;position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid var(--light,#E2E8ED);border-top:0;border-radius:0 0 12px 12px;box-shadow:0 18px 50px rgba(20,35,52,.16);padding:1rem 1.2rem;max-height:70vh;overflow-y:auto;}" +
    ".lib-nav.open .lib-panel{display:block;}" +
    ".lib-nav .lib-find{display:block;width:100%;max-width:340px;font-family:var(--sans,sans-serif);font-size:.88rem;color:var(--dark,#1E2A38);background:var(--surface,#F6F8FA);border:1px solid var(--light,#E2E8ED);border-radius:8px;padding:.5rem .7rem;margin:.1rem 0 .7rem;}" +
    ".lib-nav .lib-find:focus{outline:none;border-color:var(--brand-soft,#3d6491);box-shadow:0 0 0 3px rgba(61,100,145,.15);}" +
    ".lib-nav a{display:block;color:var(--dark,#1E2A38);text-decoration:none;border-left:3px solid var(--light,#E2E8ED);padding:.32rem 0 .32rem .7rem;margin:0 0 .3rem;font-size:.86rem;font-weight:600;}" +
    ".lib-nav a:hover{border-left-color:var(--brand-soft,#3d6491);color:var(--brand-deep,#142334);}" +
    ".lib-nav a[aria-current=page]{border-left-color:var(--brand,#28496A);color:var(--brand-deep,#142334);}" +
    ".lib-nav a .lib-note{display:block;font-size:.74rem;font-weight:400;color:var(--mid,#5A6B7B);margin-top:.05rem;}" +
    ".lib-nav .lib-sect{font-family:var(--mono,monospace);font-size:.56rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--mid,#5A6B7B);margin:.55rem 0 .3rem;}" +
    ".lib-nav .lib-newtag{font-family:var(--mono,monospace);font-size:.54rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--amber,#C77F00);border:1px solid rgba(199,127,0,.45);border-radius:99px;padding:.05rem .4rem;margin-left:.35rem;vertical-align:middle;}" +
    ".lib-nav .lib-empty{display:none;font-size:.82rem;color:var(--mid,#5A6B7B);padding:.2rem 0;}" +
    ".lib-nav .lib-close{display:block;width:100%;margin-top:.6rem;background:var(--surface,#F6F8FA);border:1px solid var(--light,#E2E8ED);border-radius:8px;padding:.45rem;cursor:pointer;font-family:var(--mono,monospace);font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--mid,#5A6B7B);}" +
    ".lib-nav .lib-close:hover{color:var(--brand-deep,#142334);border-color:var(--brand-soft,#3d6491);}" +
    ".lib-nav.no-match .lib-empty{display:block;}" +
    /* wide: fixed rail, always open, one line per term (note = tooltip) */
    "@media(min-width:1560px){" +
    ".lib-nav{position:fixed;top:110px;right:18px;width:236px;border:1px solid var(--light,#E2E8ED);border-radius:16px;box-shadow:0 18px 50px rgba(20,35,52,.16);z-index:40;}" +
    ".lib-nav .lib-inner{max-width:none;padding:1rem 1.1rem;position:static;}" +
    ".lib-nav .lib-toggle{cursor:default;padding:0 0 .55rem;color:var(--mid,#5A6B7B);}" +
    ".lib-nav .lib-pill{background:none;color:var(--mid,#5A6B7B);padding:0;border-radius:0;font-size:.62rem;}" +
    ".lib-nav .lib-toggle:hover .lib-pill{background:none;}" +
    ".lib-nav .lib-toggle .lib-cur,.lib-nav .lib-toggle .lib-caret,.lib-nav .lib-burger{display:none;}" +
    ".lib-nav .lib-panel{display:block;position:static;border:0;border-radius:0;box-shadow:none;max-height:calc(100vh - 240px);overflow-y:auto;padding:0;}" +
    ".lib-nav a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:.26rem 0 .26rem .7rem;margin:0 0 .22rem;font-size:.84rem;}" +
    ".lib-nav a .lib-note{display:none;}" +
    ".lib-nav .lib-close{display:none;}" +
    "}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.className = "lib-nav";
  nav.setAttribute("aria-label", "Definition bank");

  var inner = document.createElement("div");
  inner.className = "lib-inner";

  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "lib-toggle";
  toggle.setAttribute("aria-expanded", "false");
  var pill = document.createElement("span");
  pill.className = "lib-pill";
  if (!localStorage.getItem("iw-lib-opened")) pill.className += " pulse";
  var burger = document.createElement("span");
  burger.className = "lib-burger";
  burger.setAttribute("aria-hidden", "true");
  burger.innerHTML = '<svg width="13" height="11" viewBox="0 0 14 12"><path d="M1 1h12M1 6h12M1 11h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  pill.appendChild(burger);
  var head = document.createElement("span");
  head.textContent = "Definition bank (" + pages.length + ")";
  pill.appendChild(head);
  var caret = document.createElement("span");
  caret.className = "lib-caret";
  caret.setAttribute("aria-hidden", "true");
  caret.textContent = "\u25be";
  pill.appendChild(caret);
  toggle.appendChild(pill);
  if (currentTerm) {
    var cur = document.createElement("span");
    cur.className = "lib-cur";
    cur.textContent = "reading: " + currentTerm;
    toggle.appendChild(cur);
  }
  inner.appendChild(toggle);

  var panel = document.createElement("div");
  panel.className = "lib-panel";

  var find = document.createElement("input");
  find.type = "search";
  find.className = "lib-find";
  find.placeholder = "Find a term";
  find.setAttribute("aria-label", "Find a term in the definition bank");
  panel.appendChild(find);

  function makeLink(p, tagNew) {
    var a = document.createElement("a");
    a.href = p.href;
    a.title = p.note;
    if (p.href.toLowerCase() === here) a.setAttribute("aria-current", "page");
    var term = document.createElement("span");
    term.textContent = p.term;
    a.appendChild(term);
    if (tagNew) {
      var t = document.createElement("span");
      t.className = "lib-newtag";
      t.textContent = "new";
      a.appendChild(t);
    }
    var note = document.createElement("span");
    note.className = "lib-note";
    note.textContent = p.note;
    a.appendChild(note);
    return a;
  }

  var recentWrap = document.createElement("div");
  var rsect = document.createElement("div");
  rsect.className = "lib-sect";
  rsect.textContent = "Recently added";
  recentWrap.appendChild(rsect);
  recent.forEach(function (p) { recentWrap.appendChild(makeLink(p, true)); });
  panel.appendChild(recentWrap);

  var rows = [];
  var sects = [];
  GROUPS.forEach(function (g) {
    var gs = document.createElement("div");
    gs.className = "lib-sect";
    gs.textContent = g;
    panel.appendChild(gs);
    sects.push({ el: gs, group: g });
    pages.forEach(function (p) {
      if (p.group !== g) return;
      var a = makeLink(p, false);
      panel.appendChild(a);
      rows.push({ el: a, term: p.term.toLowerCase(), note: p.note.toLowerCase(), syn: (SYN[p.href] || "").toLowerCase() });
    });
  });

  var empty = document.createElement("p");
  empty.className = "lib-empty";
  empty.textContent = "No term matches. Try a shorter word.";
  panel.appendChild(empty);

  var closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "lib-close";
  closeBtn.textContent = "Close ✕";
  closeBtn.addEventListener("click", function () {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  });
  panel.appendChild(closeBtn);

  inner.appendChild(panel);
  nav.appendChild(inner);

  /* Search understands meaning, not just spelling: every query token must
     match the term, the note, or the generated expansion words (SYN), by
     substring or by one-letter tolerance for longer words. */
  function fuzzyHit(hay, tok) {
    if (hay.indexOf(tok) !== -1) return true;
    if (tok.length < 5) return false;
    var words = hay.split(/[^a-z0-9]+/);
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (Math.abs(w.length - tok.length) > 1) continue;
      /* allow one edit (typo, missing or extra letter) */
      var a = w, b = tok, ia = 0, ib = 0, edits = 0, ok = true;
      while (ia < a.length && ib < b.length) {
        if (a[ia] === b[ib]) { ia++; ib++; continue; }
        if (++edits > 1) { ok = false; break; }
        if (a.length > b.length) ia++;
        else if (b.length > a.length) ib++;
        else { ia++; ib++; }
      }
      if (ok && edits + (a.length - ia) + (b.length - ib) <= 1) return true;
    }
    return false;
  }
  function applyFilter() {
    var q = find.value.trim().toLowerCase();
    var toks = q ? q.split(/\s+/) : [];
    recentWrap.style.display = q ? "none" : "";
    sects.forEach(function (sx) { sx.el.style.display = q ? "none" : ""; });
    var any = false;
    rows.forEach(function (r) {
      var show = !q || toks.every(function (t) {
        return fuzzyHit(r.term, t) || fuzzyHit(r.note, t) || fuzzyHit(r.syn, t);
      });
      r.el.style.display = show ? "" : "none";
      if (show) any = true;
    });
    nav.classList.toggle("no-match", !any);
  }
  find.addEventListener("input", applyFilter);

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      find.focus();
      pill.classList.remove("pulse");
      try { localStorage.setItem("iw-lib-opened", "1"); } catch (e) {}
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });

  var bar = document.querySelector(".brandbar");
  if (bar && bar.parentNode) {
    bar.insertAdjacentElement("afterend", nav);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }

})();
