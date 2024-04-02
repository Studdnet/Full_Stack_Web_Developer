"use strict";

let buttons = document.querySelectorAll(".drum");
let backgroundColorButtons = ["white", "red", "purple", "orange"];

buttons.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.cssText = `background-color: var(--${backgroundColorButtons[randomColor(backgroundColorButtons)]});`;
  });
});

function randomColor(arr) {
  return Math.floor(Math.random() * arr.length);
}
