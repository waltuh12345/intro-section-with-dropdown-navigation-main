import {
  animate,
  elemDisplay,
  isAnimating,
  isScrollable,
} from "../helper/animation";

const menuToggle = document.querySelector("#menu-toggle");

function menuAppearance(e) {
  const target = e.target;
  const wrapper = document.querySelector("aside");
  const content = wrapper.querySelector(".menu-container");

  if (isAnimating) return;

  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    isScrollable(false);
    elemDisplay(wrapper, "block");
    elemDisplay(content, "none");

    animate(wrapper, "fadeIn", 400).then(() => {
      elemDisplay(content, "");
      return animate(content, "fadeInRight", 800);
    });
  } else {
    isScrollable(true);
    animate(content, "fadeOutRight", 600)
      .then(() => {
        elemDisplay(content, "none");
        return animate(wrapper, "fadeOut", 500);
      })
      .then(() => {
        elemDisplay(wrapper, "");
        elemDisplay(content, "");
      });
  }
}

menuToggle.addEventListener("click", menuAppearance);

import("../components/dropdown");
