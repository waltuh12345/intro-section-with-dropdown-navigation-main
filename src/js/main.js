import "../scss/main.scss";
import "animate.css";
import { animate } from "./helper/animation";
import AOS from "aos";
import "aos/dist/aos.css";

const loadingWrapper = document.querySelector(".loading-wrapper");
const body = document.querySelector("body");

Promise.all([import("./components/toggle-theme")])
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        loadingWrapper.style.display = "none";
        AOS.init();
        resolve("finished loading");
      }, 2000);
    });
  })
  .then(() => animate(body, "fadeIn"));
