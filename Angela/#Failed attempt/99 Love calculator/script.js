"use strict";
function loveScore() {
  let names = prompt("Введите свои имена через запятую", "");
  let score = Math.floor(Math.random() * 100) + 1;
  let scoreLove = `Процент вашей совместимости равен ${score}%.`;
  return alert(scoreLove);
}

loveScore();
