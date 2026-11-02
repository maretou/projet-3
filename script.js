const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeLabel = document.querySelector("#theme-label");
const savedTheme = localStorage.getItem("theme");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";

  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeLabel.textContent = isDark ? "Mode clair" : "Mode sombre";
  themeButton.setAttribute(
    "aria-label",
    isDark ? "Activer le thème clair" : "Activer le thème sombre"
  );
}

applyTheme(savedTheme === "dark" ? "dark" : "light");

themeButton.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});