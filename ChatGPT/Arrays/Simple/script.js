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

let string = "Шла Саша по шоссе и сосала сушку. А потом она упала и сосать вдруг перестала.";

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

let arrObj = [
  {
    a: 1,
    b: 23,
    c: 44,
  },
  {
    d: 48,
    f: 60,
  },
];

function updateObj(arr) {
  arr.forEach((item) => {
    for (let key in item) {
      item[key] += 1;
    }
  });
  return console.log(arr);
}

updateObj(arrObj);

/*
Задача 7: Объединение массивов
Создайте два массива. Используя forEach(), объедините их в новый массив, содержащий все элементы обоих массивов.
*/

let arrOne = [1, 3, 5, 7];
let arrTwo = [2, 4, 6, 8];

function mergeArr(arr1, arr2) {
  let newArr = [];
  arr1.forEach((item, index, arr1) => {
    newArr.push(arr1[index]);
    newArr.push(arr2[index]);
  });
  return console.log(newArr);
}

mergeArr(arrOne, arrTwo);

/*
Задача 8: Удаление элементов из массива
Создайте массив чисел. Используя forEach(), удалите из массива все элементы, которые меньше определенного значения.
*/

let numbersDelete = [8, 44, -25, 78, 16, -15, 344];
let arrDelete = [14, 44, 12, 78, 9, -15, 344];

function deleteMemberArr(arr) {
  let newArr = [];
  arr.forEach((item, index, arr) => {
    if (item > 10) {
      newArr.push(item);
    }
  });
  return console.log(newArr);
}

deleteMemberArr(arrDelete);
deleteMemberArr(numbersDelete);

/*
Задача 9: Генерация HTML списка
Создайте массив объектов, представляющих элементы списка (например, задачи). Используя forEach(), создайте HTML-строку, представляющую список этих элементов.
*/

let toDoArr = [
  "Купить доски для фасада и подшивки фронтонов",
  "Купить лестницу",
  "Отремонтировать балкон",
  "Отремонтировать фасад домика",
];

function createToDoList(arr) {
  let str = "";
  arr.forEach((item, index, arr) => {
    if (index === arr.length - 1) {
      str += `	<li>${item}</li>`;
    } else {
      str += `	<li>${item}</li>\n`;
    }
  });
  return console.log(`<ul>\n${str}\n</ul>`);
}

createToDoList(toDoArr);

/*
Задача 10: Обработка ошибок
Создайте массив чисел и строк. Используя forEach(), попробуйте преобразовать каждый элемент в число. Обработайте возможные ошибки и выведите результат.
*/

let differentArr = [10, 5, -1, "abc", "1c", "12"];

function stringToNumber(arr) {
  let newArr = [];
  let count = 0;
  arr.forEach((item, index, arr) => {
    if (typeof item === "string") {
      arr[index] = Number(item);
    }
  });
  arr.forEach((item) => {
    if (isNaN(item)) {
      count++;
    } else {
      newArr.push(item);
    }
  });
  return console.log(newArr, count);
}

stringToNumber(differentArr);
