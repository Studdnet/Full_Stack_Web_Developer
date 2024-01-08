"use strict";

/* 
Задача 1: Найти сумму квадратов чисел
Создайте массив чисел. Используя forEach(), найдите сумму квадратов каждого числа и выведите результат. 
*/

let numbers = [1, 2, 4, 10, 0, -1, 5, -15];

function sumSquares(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item * item;
  });
  return console.log(sum);
}

sumSquares(numbers);

/* 
Задача 2: Фильтрация положительных чисел
Создайте массив чисел. Используя forEach(), создайте новый массив, содержащий только положительные числа. 
*/

function posNum(arr) {
  let posNumArr = [];
  arr.forEach((item) => {
    if (item > 0) {
      posNumArr.push(item);
    }
  });
  return console.log(posNumArr);
}

posNum(numbers);

/* 
Задача 3: Подсчет гласных букв
Создайте массив строк. Используя forEach(), подсчитайте количество гласных букв в каждой строке и выведите результат.
 */

let string =
  "Шла Саша по шоссе и сосала сушку. А потом она упала и сосать вдруг перестала.";

function findVowelLetters(string) {
  const vowelLetters = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];
  let count = 0;
  let arrFromStr = string.split(" ");

  for (let item of arrFromStr) {
    Array.from(item).forEach((char) => {
      if (vowelLetters.includes(char.toLowerCase())) {
        count++;
      }
    });
  }

  return console.log(count);
}

findVowelLetters(string);

/* 
Эту же задачу можно решить с помощью регулярных выражений
*/

function countVowels(str) {
  // Используем регулярное выражение для поиска гласных букв (a, e, i, o, u)
  const vowelRegex = /[aeiou]/gi;

  // Используем метод match для поиска всех совпадений с регулярным выражением
  const vowels = str.match(vowelRegex);

  // Если vowels не равен null, возвращаем длину массива гласных, иначе возвращаем 0
  return vowels ? vowels.length : 0;
}

// Пример использования
const inputString = "Hello, World!";
const numberOfVowels = countVowels(inputString);

console.log(`Количество гласных букв: ${numberOfVowels}`);

/* 
Задача 4: Преобразование текста
Создайте массив строк с разными словами. Используя forEach(), создайте новый массив, содержащий каждое слово, преобразованное в верхний регистр.
*/

let arrString = ["Маша", "медведь", "слово", "ПаРадаЙС"];

function wordToLowerCase(arr) {
  let newArr = [];
  arr.forEach((word) => {
    newArr.push(word.toLowerCase());
  });
  return console.log(newArr);
}

wordToLowerCase(arrString);

/* 
Задача 5: Фильтрация слов по длине
Создайте массив строк. Используя forEach(), создайте новый массив, содержащий только те слова, длина которых больше определенного значения (например, 5).
*/

arrString = ["Маша", "медведь", "стул", "ПаРадаЙС"];

function filteredArrays(arr) {
  let newArr = [];
  arr.forEach((word) => {
    if (word.length > 5) {
      newArr.push(word);
    }
  });
  return console.log(newArr);
}

filteredArrays(arrString);

/*
Задача 6: Обновление свойств объектов
Создайте массив объектов с разными свойствами. Используя forEach(), обновите значение одного из свойств в каждом объекте.
*/

/*
Задача 7: Объединение массивов
Создайте два массива. Используя forEach(), объедините их в новый массив, содержащий все элементы обоих массивов.

Задача 8: Удаление элементов из массива
Создайте массив чисел. Используя forEach(), удалите из массива все элементы, которые меньше определенного значения.

Задача 9: Генерация HTML списка
Создайте массив объектов, представляющих элементы списка (например, задачи). Используя forEach(), создайте HTML-строку, представляющую список этих элементов.

Задача 10: Обработка ошибок
Создайте массив чисел и строк. Используя forEach(), попробуйте преобразовать каждый элемент в число. Обработайте возможные ошибки и выведите результат.
*/
