"use strict";
/* 
1. Выберите заголовок h1 и измените его текст.
2. Получите доступ к элементу ul и добавьте новый пункт списка.
3. Используйте класс .highlight, чтобы изменить стиль абзаца.
4. Изменяет цвет фона контейнера на случайный цвет при каждом клике на заголовке h1.
5. При наведении на элементы списка li изменяет их текст на "Hovered!".
*/

const headingFirst = document.querySelector("h1"),
  body = document.querySelector("body"),
  wrapper = document.querySelector("#container"),
  paragraph = document.querySelector(".highlight"),
  listItems = document.querySelectorAll("li");

//============BODY=================================

body.classList.add("grayBG");

//============WRAPPER==============================

wrapper.classList.add("wrapper");
wrapper.style.cssText = "padding: 50px; font-size: 20px; border-radius: 30px; background-color: lightgreen;";

//============H1===================================

headingFirst.classList.add("center");
headingFirst.style.cssText = "color: black; text-decoration: underline; cursor: pointer;";
headingFirst.addEventListener("click", () => {
  let randomColor = getRandomColor();
  wrapper.style.backgroundColor = randomColor;
});

//============UL==================================

const list = document.querySelector("ul");
const item = document.createElement("li");

item.textContent = "Дополнительный элемент списка";
item.classList.add("red");

list.insertAdjacentElement("beforeend", item);
list.insertAdjacentHTML("afterend", "<hr>");

//============Li==================================

listItems.forEach((item, index) => {
  const arr = [];
  item.addEventListener("mouseover", () => {
    arr[index] = item.textContent;
    item.textContent = "Hovered";
  });
  item.addEventListener("mouseout", () => {
    item.textContent = arr[index];
  });
});

//============Paragraph============================

paragraph.style.cssText = "font-size: 25px; margin-left: 25px; margin-top: 50px;";

//===========Генерация случайного цвета ===========

function getRandomColor() {
  let letters = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 14)];
  }
  return color;
}
