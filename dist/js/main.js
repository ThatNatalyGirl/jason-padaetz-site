"use strict";

console.log("art");

//hamburger
var dropdown = document.querySelector("nav ul");
var burger = document.querySelector(".hamburger");
var burgerBars = document.querySelectorAll(".hamburger div");
var x = document.querySelector("nav ul div");

dropdown.style.display = "none";

burger.addEventListener("click", function () {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    // burger.style.display = "none";
    burgerBars.forEach(function (element) {
      element.style.background = "transparent";
    });
  }
});

x.addEventListener("click", function () {
  dropdown.style.display = "none";
  burger.style.display = "block";
  burgerBars.forEach(function (element) {
    element.style.background = "#000";
  });
});

//lightbox
var makeLightBox = function makeLightBox() {
  var imageSource = event.target.getAttribute("png");
  var $overlay = document.createElement("div");
  $overlay.classList.add("lightbox-overlay");

  var $lightbox = document.createElement("div");
  $lightbox.classList.add("lightbox");

  var $image = document.createElement("img");
  $image.setAttribute("png", imageSource);

  document.body.appendChild($overlay);
  document.body.appendChild($lightbox);
  $lightbox.appendChild($image);

  $overlay.addEventListener("click", function () {
    document.body.removeChild($overlay);
    document.body.removeChild($lightbox);
  });
};
//# sourceMappingURL=main.js.map
