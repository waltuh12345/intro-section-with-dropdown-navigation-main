let theme = localStorage.getItem("darkTheme");
const themeToggle = document.querySelector(".toggle-theme");

const toggleThemeElem = {
  input: themeToggle.querySelector("input"),

  lightTheme: (value) => {
    const changeValue = (property, value) =>
      document.documentElement.style.setProperty(property, value);

    changeValue("--clr-bg", "#ffffff");
    changeValue("--clr-text", "#121212");
    changeValue("--loading-bg", "#12121249");

    if (value === false) {
      changeValue("--clr-bg", "#121212");
      changeValue("--clr-text", "#ffffff");
      changeValue("--clr-primary", " #89d7f3");
      changeValue("--clr-neutral", "#f1d39d");
      changeValue("--clr-err", "#cf6679");
      changeValue("--loading-bg", "#ffffff1c");
    }
  },
};

if (theme === "enabled") {
  const { input, lightTheme } = toggleThemeElem;

  toggleThemeElem.input.checked = true;
  lightTheme();
}

toggleThemeElem.input.addEventListener("click", (e) => {
  const { input, lightTheme } = toggleThemeElem;

  if (input.checked) {
    localStorage.setItem("darkTheme", "enabled");
    lightTheme();
  } else {
    localStorage.removeItem("darkTheme");
    lightTheme(false);
  }
});
