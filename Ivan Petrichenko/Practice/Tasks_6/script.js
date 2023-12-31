"use strict";

/* 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, 
дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать 
код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */

function getTimeFromMinutes(time) {
  if (time >= 600) {
    return "Ошибка, проверьте данные";
  }
  if (time < 0 || typeof time !== "number" || !Number.isInteger(time)) {
    return console.log("Ошибка, проверьте данные");
  }

  let hours = Math.floor(time / 60);
  let minutes = Math.round((time / 60 - hours) * 60);

  if (hours >= 0 && hours < 1) {
    return console.log(`Это ${hours} часов и ${minutes} минут`);
  }

  if (hours >= 1 && hours < 2) {
    return console.log(`Это ${hours} час и ${minutes} минут`);
  }

  if (hours >= 2 && hours < 5) {
    return console.log(`Это ${hours} часа и ${minutes} минут`);
  }

  if (hours >= 5 && hours < 20) {
    return console.log(`Это ${hours} часов и ${minutes} минут`);
  }
}
getTimeFromMinutes(51);

/* 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0 */

function findMaxNumber(a, b, c, d) {
  let arr = [a, b, c, d];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == undefined || typeof arr[i] !== "number") {
      return console.log("0");
    }
  }
  arr.sort((x, y) => {
    return x - y;
  });
  return console.log(arr[3]);
}

findMaxNumber(5, 15, 1, 11);
