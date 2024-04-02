"use strict";

let buttons = document.querySelectorAll(".drum");
let backgroundColorButtons = ["white", "red", "purple", "orange"];

buttons.forEach((item) => {
  item.style.cssText = "cursor: pointer; line-height: 0;";
});

backgroundColorButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.style.cssText = `background-color: var(--red)`;
  });
});

function randomColor(arr) {
  return Math.floor(Math.random() * arr.length);
}
