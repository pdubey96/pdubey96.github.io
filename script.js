// Minimal interactivity: theme toggle, footer year.
(function () {
  "use strict";

  // --- Footer year ---
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // --- Theme toggle ---
  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }
})();
