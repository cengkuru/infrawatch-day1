/* Definitions library navigation, shared across the partner-guidance pages.
   One entry per page; append new terms to the array in any order, the menu
   always renders them alphabetically. Built to stay usable at 20 or 30 terms:
   - alphabetical order, sorted at runtime (glossary convention)
   - find-as-you-type filter over term + note text
   - wide screens (>=1380px): fixed right rail, internally scrollable
   - narrow screens: collapsed bar under the brand bar; opens to a panel
   - Escape closes the panel; current page marked with aria-current
   No-JS fallback: the footer companion links on each page. */
(function () {
  var pages = [
    { href: "eligibility.html", term: "Eligibility test", note: "does a project enter the dataset?" },
    { href: "foreign-financing.html", term: "Foreign financing", note: "one shared definition, asked everywhere" },
    { href: "financing-forms.html", term: "Financing forms", note: "six ways projects are paid for" },
    { href: "power-purchase-agreement.html", term: "Power purchase agreement", note: "the promise that is public money" },
    { href: "buffer-list.html", term: "Buffer list", note: "documented substitution, not reopened selection" }
  ];

  pages.sort(function (a, b) { return a.term.localeCompare(b.term); });

  var here = (location.pathname.split("/").pop() || "").toLowerCase();
  var currentTerm = "";
  pages.forEach(function (p) {
    if (p.href.toLowerCase() === here) currentTerm = p.term;
  });

  var css =
    /* shared */
    ".lib-nav{background:#fff;border-bottom:1px solid var(--light,#E2E8ED);}" +
    ".lib-nav .lib-inner{max-width:1040px;margin:0 auto;padding:0 1.2rem;}" +
    ".lib-nav .lib-toggle{display:flex;align-items:center;gap:.6rem;width:100%;background:none;border:0;cursor:pointer;padding:.6rem 0;font-family:var(--mono,monospace);font-size:.64rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--mid,#5A6B7B);text-align:left;}" +
    ".lib-nav .lib-toggle .lib-cur{color:var(--brand,#28496A);}" +
    ".lib-nav .lib-toggle .lib-caret{margin-left:auto;transition:transform .15s;color:var(--brand-soft,#3d6491);}" +
    ".lib-nav.open .lib-toggle .lib-caret{transform:rotate(180deg);}" +
    ".lib-nav .lib-panel{display:none;padding:0 0 .9rem;}" +
    ".lib-nav.open .lib-panel{display:block;}" +
    ".lib-nav .lib-find{display:block;width:100%;max-width:340px;font-family:var(--sans,sans-serif);font-size:.88rem;color:var(--dark,#1E2A38);background:var(--surface,#F6F8FA);border:1px solid var(--light,#E2E8ED);border-radius:8px;padding:.5rem .7rem;margin:.1rem 0 .7rem;}" +
    ".lib-nav .lib-find:focus{outline:none;border-color:var(--brand-soft,#3d6491);box-shadow:0 0 0 3px rgba(61,100,145,.15);}" +
    ".lib-nav a{display:block;color:var(--dark,#1E2A38);text-decoration:none;border-left:3px solid var(--light,#E2E8ED);padding:.32rem 0 .32rem .7rem;margin:0 0 .3rem;font-size:.86rem;font-weight:600;}" +
    ".lib-nav a:hover{border-left-color:var(--brand-soft,#3d6491);color:var(--brand-deep,#142334);}" +
    ".lib-nav a[aria-current=page]{border-left-color:var(--brand,#28496A);color:var(--brand-deep,#142334);}" +
    ".lib-nav a .lib-note{display:block;font-size:.74rem;font-weight:400;color:var(--mid,#5A6B7B);margin-top:.05rem;}" +
    ".lib-nav .lib-empty{display:none;font-size:.82rem;color:var(--mid,#5A6B7B);padding:.2rem 0;}" +
    ".lib-nav.no-match .lib-empty{display:block;}" +
    /* wide: fixed rail, always open, internally scrollable */
    "@media(min-width:1380px){" +
    ".lib-nav{position:fixed;top:120px;right:18px;width:236px;border:1px solid var(--light,#E2E8ED);border-radius:16px;box-shadow:0 18px 50px rgba(20,35,52,.16);z-index:40;}" +
    ".lib-nav .lib-inner{max-width:none;padding:1rem 1.1rem;}" +
    ".lib-nav .lib-toggle{cursor:default;padding:0 0 .55rem;}" +
    ".lib-nav .lib-toggle .lib-cur,.lib-nav .lib-toggle .lib-caret{display:none;}" +
    ".lib-nav .lib-panel{display:block;max-height:calc(100vh - 260px);overflow-y:auto;padding:0;}" +
    "}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.className = "lib-nav";
  nav.setAttribute("aria-label", "Definitions library");

  var inner = document.createElement("div");
  inner.className = "lib-inner";

  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "lib-toggle";
  toggle.setAttribute("aria-expanded", "false");
  var head = document.createElement("span");
  head.textContent = "Definitions library (" + pages.length + ")";
  toggle.appendChild(head);
  if (currentTerm) {
    var cur = document.createElement("span");
    cur.className = "lib-cur";
    cur.textContent = "reading: " + currentTerm;
    toggle.appendChild(cur);
  }
  var caret = document.createElement("span");
  caret.className = "lib-caret";
  caret.setAttribute("aria-hidden", "true");
  caret.textContent = "v";
  toggle.appendChild(caret);
  inner.appendChild(toggle);

  var panel = document.createElement("div");
  panel.className = "lib-panel";

  var find = document.createElement("input");
  find.type = "search";
  find.className = "lib-find";
  find.placeholder = "Find a term";
  find.setAttribute("aria-label", "Find a term in the definitions library");
  panel.appendChild(find);

  var rows = [];
  pages.forEach(function (p) {
    var a = document.createElement("a");
    a.href = p.href;
    if (p.href.toLowerCase() === here) a.setAttribute("aria-current", "page");
    var term = document.createElement("span");
    term.textContent = p.term;
    a.appendChild(term);
    var note = document.createElement("span");
    note.className = "lib-note";
    note.textContent = p.note;
    a.appendChild(note);
    panel.appendChild(a);
    rows.push({ el: a, text: (p.term + " " + p.note).toLowerCase() });
  });

  var empty = document.createElement("p");
  empty.className = "lib-empty";
  empty.textContent = "No term matches. Try a shorter word.";
  panel.appendChild(empty);

  inner.appendChild(panel);
  nav.appendChild(inner);

  function applyFilter() {
    var q = find.value.trim().toLowerCase();
    var any = false;
    rows.forEach(function (r) {
      var show = !q || r.text.indexOf(q) !== -1;
      r.el.style.display = show ? "" : "none";
      if (show) any = true;
    });
    nav.classList.toggle("no-match", !any);
  }
  find.addEventListener("input", applyFilter);

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) find.focus();
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
