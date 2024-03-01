"use strict";
let heading = document.querySelector("h1");
let button = document.querySelector("button");
let list = document.querySelectorAll("li");
let checkBox = document.querySelector("input");

checkBox.click();
heading.style.cssText = "color: green; text-align: center";

list[2].style.cssText = "color: red; text-decoration: underline";

button.innerHTML = "Please, don't do it!";
