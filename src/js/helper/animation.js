let isAnimating = false;
const body = document.querySelector("body");

const animate = (elem, name, duration = "800") => {
  return new Promise((resolve, reject) => {
    if (isAnimating) {
      reject("elem is animating");
    }

    isAnimating = true;
    elem.style.animation = `${name} ${duration}ms`;

    elem.addEventListener(
      "animationend",
      (e) => {
        e.stopPropagation();
        elem.style.animation = "";
        isAnimating = false;
        resolve("animation ended");
      },
      { once: true }
    );
  });
};

const elemDisplay = (elem, value) => (elem.style.display = value);
const isScrollable = (value) => {
  if (!value) {
    body.classList.add("hide-scrollbar");
  } else {
    body.classList.remove("hide-scrollbar");
  }
};

export { isAnimating, animate, elemDisplay, isScrollable };
