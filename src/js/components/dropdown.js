import { animate, elemDisplay, isAnimating } from "../helper/animation";

const dropDown = document.querySelector("#dropdown");

function dropDownClickHandler(e) {
  if (isAnimating) return;
  const target = e.target;

  if (target.matches("button")) {
    const wrapper = target.closest("li");
    const content = wrapper.querySelector(".content");
    wrapper.classList.toggle("active");

    if (wrapper.classList.contains("active")) {
      content.style.display = "flex";
      animate(content, "zoomIn", 600);
    } else {
      animate(content, "zoomOut", 400).then(() => elemDisplay(content, ""));
    }
  }
}

dropDown.addEventListener("click", dropDownClickHandler);
const menuToggle = document.querySelector("#menu-toggle");

function dropdownWindowClickHandler() {
  const width = window.innerWidth;
  const boxes = Array.from(dropDown.children);
  const handleBox = (value) => {
    boxes.forEach((box) => {
      const content = box.querySelector(".content");
      content.style.visibility = value;
    });
  };

  if (width >= 790) {
    dropDown.removeEventListener("click", dropDownClickHandler);
    elemDisplay(menuToggle, "none");
  } else {
    dropDown.addEventListener("click", dropDownClickHandler);
    elemDisplay(menuToggle, "");
  }
}

dropdownWindowClickHandler();
window.addEventListener("resize", dropdownWindowClickHandler);
