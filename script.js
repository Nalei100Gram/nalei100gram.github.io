const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const THEME_COLORS = { dark: "#0b1430", light: "#8fd2f7" };

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(theme === "light"));
  themeToggle?.setAttribute("aria-label", theme === "light" ? "Увімкнути нічну тему" : "Увімкнути денну тему");
  if (themeMeta) themeMeta.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.dark);
}

applyTheme(root.dataset.theme === "light" ? "light" : "dark");

themeToggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
  try {
    localStorage.setItem("nalei-theme", next);
  } catch (e) {}
});

const toggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
