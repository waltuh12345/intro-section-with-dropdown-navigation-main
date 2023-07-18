const svgImgs = document.querySelectorAll(".svg-logo");

svgImgs.forEach((svgImg) => {
  const svgUrl = svgImg.getAttribute("src");

  fetch(svgUrl)
    .then((response) => response.text())
    .then((svgText) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      const svgElement = svgDoc.querySelector("svg");
      svgElement.style.fill = "var(--clr-text)";
      svgImg.parentNode.replaceChild(svgElement, svgImg);
    })
    .catch((error) => {
      console.error("Error fetching SVG:", error);
    });
});
