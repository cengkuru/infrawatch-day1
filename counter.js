/* InfraWatch visit counter.
   Privacy-light, cookieless. Counting itself is done by GoatCounter (script
   tag on every page; dashboard at infraatch.goatcounter.com). This file only
   READS the public site total from GoatCounter's visitor-counter endpoint and
   renders it into any element with class "visit-counter".
   Requires the "visitor counter" option to stay enabled in the GoatCounter
   site settings; fails silently (counter stays hidden) if it is off or the
   service is unreachable. Replaced the retired counterapi.dev v1, 2026-08-11. */
(function () {
  "use strict";
  var URL = "https://infraatch.goatcounter.com/counter/TOTAL.json";

  function render(n) {
    var els = document.querySelectorAll(".visit-counter");
    if (!els.length) return;
    var ok = (typeof n === "string" && n.length) || (typeof n === "number" && isFinite(n));
    for (var i = 0; i < els.length; i++) {
      if (!ok) { els[i].setAttribute("hidden", ""); continue; } // stay hidden if unavailable
      var num = els[i].querySelector(".vc-num");
      if (num) { num.textContent = String(n); }
      else { els[i].textContent = String(n); }
      els[i].removeAttribute("hidden");
    }
  }

  function go() {
    fetch(URL, { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (d) { render(d && d.count ? d.count : null); })
      .catch(function () { render(null); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", go);
  } else {
    go();
  }
})();
