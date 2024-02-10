"use strict";
let guestList = ["Mark", "Angela", "Igor", "Marina"];

let guest = prompt("What's your name", "");

if (guestList.includes(guest)) {
  alert("Welcome");
} else {
  alert("Maybe in the next time");
}
