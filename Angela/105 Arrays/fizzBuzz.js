"use strict";

let arrNumber = [420, 1, 15, 44, 3, 5, 21];

function fizzBuzz(arr) {
  let fizzBuzzArr = [];

  for (let num of arr) {
    if (num % 3 === 0 && num % 5 === 0) {
      fizzBuzzArr.push(`Число ${num} кратно 3 и 5`);
      continue;
    }
    if (num % 3 === 0) {
      fizzBuzzArr.push(`Число ${num} кратно 3`);
    }
    if (num % 5 === 0) {
      fizzBuzzArr.push(`Число ${num} кратно 5`);
    }
  }
  return fizzBuzzArr;
}

function printArr(arr) {
  for (const i of arr) {
    console.log(i);
  }
}

printArr(fizzBuzz(arrNumber));
