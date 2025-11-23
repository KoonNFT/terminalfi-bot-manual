(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (btn) {
      btn.dataset.theme = theme;
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  const stored = localStorage.getItem("terminalfi-theme");
  if (stored) {
    applyTheme(stored);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("terminalfi-theme", next);
    });
  }
})();
