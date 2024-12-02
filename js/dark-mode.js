// from radu-matei.com

updateTheme();

// React to theme changes in other tabs
window.addEventListener("storage", (event) => {
  if (event.key == "dark-mode-storage") updateTheme();
});

function updateTheme() {
  setTheme("light");
}

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
}

window.addEventListener("DOMContentLoaded", () => {
  var toggle = document.getElementById("dark-mode-toggle");
  // Override the click event to do nothing
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
