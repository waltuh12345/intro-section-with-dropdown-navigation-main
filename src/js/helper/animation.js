let isAnimating = false;

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

export { isAnimating, animate };
