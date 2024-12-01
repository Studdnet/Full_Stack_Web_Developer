"use strict";

function calculator(num1, num2, operator) {
  return console.log(operator(num1, num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

calculator(500, 5, divide);
