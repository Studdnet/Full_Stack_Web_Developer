"use strict";

let buttons = document.querySelectorAll(".drum");
let backgroundColorButtons = ["white", "red", "purple", "orange", "blue", "green", "lightgreen"];

buttons.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.cssText = `background-color: var(--${backgroundColorButtons[randomColor(backgroundColorButtons)]});`;
  });
  item.addEventListener("click", (e) => {
    e.target.style.cssText = `background-color: var(--white);`;
  });
});

function randomColor(arr) {
  return Math.floor(Math.random() * arr.length);
}
