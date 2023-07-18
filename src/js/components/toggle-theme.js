import { animate, isAnimating } from "../helper/animation";

let theme = localStorage.getItem("darkTheme");
const body = document.querySelector("body");
const themeToggle = document.querySelector(".theme-toggle");

const toggleThemeElem = {
  input: themeToggle.querySelector("input"),
};

if (theme === "enabled") {
  const { input, lightTheme } = toggleThemeElem;
  toggleThemeElem.input.checked = true;
  body.classList.add("light-mode");
}

toggleThemeElem.input.addEventListener("click", (e) => {
  if (isAnimating) {
    return;
  }

  const { input } = toggleThemeElem;
  animate(body, "fadeIn", 500);

  if (input.checked) {
    localStorage.setItem("darkTheme", "enabled");
    body.classList.add("light-mode");
  } else {
    localStorage.removeItem("darkTheme");
    body.classList.remove("light-mode");
  }
});
