"use strict";
let heading = document.querySelector("h1");
let button = document.querySelector("button");
let list = document.querySelectorAll("li");
let checkBox = document.querySelector("input");
let link = document.querySelector(".list__link");

checkBox.click();
heading.style.cssText = "color: green; text-align: center";

list[2].style.cssText = "color: red; text-decoration: underline";

link.textContent = "S13.ru - все о Гродно.";
link.setAttribute("href", "https://www.s13.ru");
link.style.cssText = "text-decoration: none; color: green";

button.innerHTML = "Please, don't do it!";
