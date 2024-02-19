"use strict";

/* 
Завершите функцию, которая принимает два аргумента и возвращает все числа, 
которые делятся на данный делитель. Первый аргумент - это массив чисел, 
а второй - делитель.
Example:
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/

function divisibleBy(arr, div) {
  let arrByDiv = [];
  if (arr.length === 0 && Array.isArray(arr) && isNaN(div)) {
    return console.log("Error!");
  } else {
    for (let i of arr) {
      if (i % div === 0) {
        arrByDiv.push(i);
      }
    }
  }
  return console.log(arrByDiv);
}

//Более простое решение

const divisibleBySimple = (numbers, divisor) => numbers.filter((num) => num % divisor === 0);

divisibleBy([1, 2, 3, 4, 5, 6], 2);
divisibleBy([1, 2, 3, 4, 5, 9], 3);
divisibleBySimple([1, 2, 3, 4, 5, 9], 3);

console.log(divisibleBySimple([1, 2, 3, 4, 5, 9], 3));
