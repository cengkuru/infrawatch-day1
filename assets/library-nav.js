/* Definitions library navigation, shared across the partner-guidance pages.
   One entry per page; add new terms here and they appear on every page.
   Wide screens (>=1380px): fixed side rail on the right.
   Narrow screens: horizontal chip strip under the brand bar.
   No-JS fallback: the footer companion links on each page. */
(function () {
  var pages = [
    { href: "eligibility.html", term: "Eligibility test", note: "does a project enter the dataset?" },
    { href: "foreign-financing.html", term: "Foreign financing", note: "one shared definition, asked everywhere" },
    { href: "financing-forms.html", term: "Financing forms", note: "six ways projects are paid for" },
    { href: "power-purchase-agreement.html", term: "Power purchase agreement", note: "the promise that is public money" },
    { href: "buffer-list.html", term: "Buffer list", note: "documented substitution, not reopened selection" }
  ];

  var here = (location.pathname.split("/").pop() || "").toLowerCase();

  var css =
    ".lib-nav{background:#fff;border-bottom:1px solid var(--light,#E2E8ED);}" +
    ".lib-nav .lib-inner{max-width:1040px;margin:0 auto;padding:.55rem 1.2rem;display:flex;align-items:center;gap:.55rem;overflow-x:auto;-webkit-overflow-scrolling:touch;}" +
    ".lib-nav .lib-head{font-family:var(--mono,monospace);font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--mid,#5A6B7B);white-space:nowrap;flex:0 0 auto;}" +
    ".lib-nav a{flex:0 0 auto;font-family:var(--mono,monospace);font-size:.64rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--brand-soft,#3d6491);text-decoration:none;border:1px solid var(--light,#E2E8ED);border-radius:99px;padding:.28rem .7rem;white-space:nowrap;}" +
    ".lib-nav a:hover{color:var(--brand-deep,#142334);border-color:var(--brand-soft,#3d6491);}" +
    ".lib-nav a[aria-current=page]{color:#fff;background:var(--brand,#28496A);border-color:var(--brand,#28496A);}" +
    ".lib-nav .lib-note{display:none;}" +
    "@media(min-width:1380px){" +
    ".lib-nav{position:fixed;top:120px;right:18px;width:216px;background:#fff;border:1px solid var(--light,#E2E8ED);border-radius:16px;box-shadow:0 18px 50px rgba(20,35,52,.16);z-index:40;}" +
    ".lib-nav .lib-inner{display:block;max-width:none;margin:0;padding:1rem 1.1rem;overflow:visible;}" +
    ".lib-nav .lib-head{display:block;margin:0 0 .6rem;}" +
    ".lib-nav a{display:block;border:0;border-left:3px solid var(--light,#E2E8ED);border-radius:0;padding:.35rem 0 .35rem .7rem;margin:0 0 .35rem;white-space:normal;font-size:.66rem;}" +
    ".lib-nav a:last-child{margin-bottom:0;}" +
    ".lib-nav a[aria-current=page]{color:var(--brand-deep,#142334);background:transparent;border-left-color:var(--brand,#28496A);}" +
    ".lib-nav .lib-note{display:block;font-family:var(--sans,sans-serif);font-size:.72rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--mid,#5A6B7B);margin-top:.1rem;}" +
    "}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.className = "lib-nav";
  nav.setAttribute("aria-label", "Definitions library");

  var inner = document.createElement("div");
  inner.className = "lib-inner";

  var head = document.createElement("span");
  head.className = "lib-head";
  head.textContent = "Definitions library";
  inner.appendChild(head);

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
    inner.appendChild(a);
  });

  nav.appendChild(inner);

  var bar = document.querySelector(".brandbar");
  if (bar && bar.parentNode) {
    bar.insertAdjacentElement("afterend", nav);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }
})();
