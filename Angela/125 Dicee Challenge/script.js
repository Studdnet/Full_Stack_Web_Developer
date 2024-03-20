"use strict";

let dicee = document.querySelectorAll("img");
let titleWinner = document.querySelector("h1");

let playerOne = randomNumber();
let playerTwo = randomNumber();

dicee[0].setAttribute("src", `images/dice${playerOne}.png`);
dicee[1].setAttribute("src", `images/dice${playerTwo}.png`);

winner(playerOne, playerTwo);

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function winner(playerOne, playerTwo) {
  if (playerOne > playerTwo) {
    titleWinner.textContent = "🚩 Player 1 is winner!";
  } else if (playerOne < playerTwo) {
    titleWinner.textContent = "Player 2 is winner! 🚩";
  } else {
    titleWinner.textContent = "🚩Draw🚩";
  }
}
