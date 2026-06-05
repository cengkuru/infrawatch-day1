/* InfraWatch Nairobi visit counter.
   Privacy-light, cookieless. Hits a free no-signup counter API once per page load.
   Renders the running total into any element with class "visit-counter".
   Fails silently if the service is unreachable (the page never breaks). */
(function () {
  "use strict";
  var NS = "infrawatch-day1";
  var KEY = "visits-live";
  var BASE = "https://api.counterapi.dev/v1/" + NS + "/" + KEY;

  function render(n) {
    var els = document.querySelectorAll(".visit-counter");
    if (!els.length) return;
    var ok = (typeof n === "number" && isFinite(n));
    for (var i = 0; i < els.length; i++) {
      if (!ok) { els[i].setAttribute("hidden", ""); continue; } // stay hidden if unavailable
      var num = els[i].querySelector(".vc-num");
      if (num) { num.textContent = n.toLocaleString("en-US"); }
      else { els[i].textContent = n.toLocaleString("en-US"); }
      els[i].removeAttribute("hidden");
    }
  }

  function go() {
    // "/up" increments by one (this load = one visit) and returns the new total.
    fetch(BASE + "/up", { method: "GET", cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (d) { render(d && typeof d.count === "number" ? d.count : null); })
      .catch(function () { render(null); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", go);
  } else {
    go();
  }
})();
