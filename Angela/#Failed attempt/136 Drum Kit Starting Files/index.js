"use strict";

let buttons = document.querySelectorAll(".drum");
let backgroundColorButtons = ["red", "purple", "orange", "blue", "green", "lightgreen"];
const soundsArr = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];

buttons.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    e.target.classList.add("hoverEffect");
    e.target.style.cssText = `background-color: var(--${backgroundColorButtons[randomColor(backgroundColorButtons)]});`;
  });

  item.addEventListener("mouseout", (e) => {
    e.target.classList.remove("hoverEffect");
    e.target.style.cssText = `background-color: var(--white);`;
  });

  item.addEventListener("click", () => {
    const audioDrum = new Audio(soundsArr[index]);
    audioDrum.play();
  });
});

function randomColor(arr) {
  return Math.floor(Math.random() * arr.length);
}
