"use strict";

/* 
1. Объединение строк:
Создайте две переменные, содержащие строки (например, str1 и str2).
Объедините их в одну строку и сохраните результат в новой переменной.
Выведите результат в консоль.
*/

const firstName = "Stud.net";
const secondName = "Engineering";
const person = firstName + " " + secondName;

console.log(person);

/*2.Длина строки:
Создайте переменную со строкой.
Найдите и выведите в консоль ее длину, используя свойство строки.
*/

console.log(firstName.length);

/*3.Доступ к символам:
Создайте переменную со строкой.
Выведите в консоль первый и последний символы этой строки.*/

console.log(`Первый символ имени: "${firstName[0]}".`);
console.log(`Последний символ имени: "${firstName[firstName.length - 1]}".`);

/*4.Изменение регистра:
Создайте переменную со строкой в разных регистрах (например, "Пример Строки").
Преобразуйте ее к нижнему регистру и выведите результат.
Преобразуйте ее к верхнему регистру и также выведите результат.*/

console.log(firstName.toUpperCase());
console.log(firstName.toLocaleLowerCase());

/*5.Выделение подстроки:
Создайте переменную со строкой.
Выделите подстроку из этой строки (например, первые 5 символов) и выведите ее.*/

console.log(firstName.slice(0, 4));

/*6.Замена символов:
Создайте переменную со строкой, содержащей несколько одинаковых символов.
Замените один из символов на другой и выведите результат.
*/

const str = "Привет с большого бодуна";
const strError = "HiHiHi - NoNoNo";

console.log(str.replaceAll("Привет", "Утро"));
console.log(strError.replaceAll("Hi", "No"));

/*7.Поиск подстроки:
Создайте переменную со строкой.
Найдите индекс (позицию) первого вхождения определенной подстроки и выведите его.
*/

const student = "Igor Cheribulko";

console.log(student.indexOf("Ch"));

/*8.Разделение строки:
Создайте строку, содержащую несколько слов, разделенных пробелами.
Разделите строку на массив слов и выведите результат. */

const strToArr = "Вот и пришла зима";

console.log(strToArr.split(" "));

/* 9. Создайте переменную со строкой. 
Переберите строку посимвольно*/

const girl = "Девушка";
for (let i = 0; i <= girl.length - 1; i++) {
  console.log(girl[i]);
}

/* 10. Создайте переменную со строкой.
Напишите функцию, которая переворачивает данную строку 
задом наперед
 */

const someString = "Шла Маша по шоссе и сосала сушку";

function reverseString(str) {
  //   return str.split(" ").reverse().join(" ");
  let tempStr = [];
  let tempArr = str.split(" ");

  for (let i = 0; i <= tempArr.length - 1; i++) {
    tempStr[i] = tempArr[i].split("").reverse().join("");
  }

  return tempStr.reverse().join(" ");
}

console.log(reverseString(someString));

/* 11. Палиндром
Напишите функцию isPalindrome(str), которая принимает строку str и возвращает true, 
если строка является палиндромом (читается одинаково слева направо и справа налево), 
и false в противном случае.

isPalindrome("radar"); // true
isPalindrome("hello"); // false
 */

function isPalindrome(str) {
  if (str.split("").reverse().join("") === str) {
    return console.log("True");
  } else {
    return console.log("False");
  }
}

isPalindrome("radar");
isPalindrome("hello");

/* 12. Подсчет гласных
Задача:
Создайте функцию countVowels(str), которая принимает строку и 
возвращает количество гласных букв (a, e, i, o, u).

countVowels("javascript"); // 3
countVowels("hello world"); // 3
*/

function countVowels(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].match(/[aeiou]/g)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript"));
console.log(countVowels("hello world"));
console.log(countVowels("hello world again"));

/* 13. Реверс слов в строке
Напишите функцию reverseWords(sentence), которая принимает строку sentence, 
состоящую из слов, разделенных пробелами, и возвращает строку, где все слова 
идут в обратном порядке.
Пример:
reverseWords("Hello World"); // "World Hello"
reverseWords("JavaScript is fun"); // "fun is JavaScript"
*/

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world again"));

/* 14. Нахождение уникальных символов
Напишите функцию getUniqueChars(str), которая принимает строку и 
возвращает строку, состоящую только из уникальных символов 
(символов, которые встречаются в строке ровно один раз).

Пример:
getUniqueChars("javascript"); // "jvscrip"
getUniqueChars("hello"); // "heo"
 */

function getUniqueChars(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = i + 1; j <= str.length - 1; j++) {
      if (str[i] === str[j]) {
        let regex = new RegExp(str[i], "g");
        str = str.replace(regex, "");
        i = 0;
        j = i + 1;
      }
    }
  }
  return str;
}
console.log(getUniqueChars("JavaScript"));
console.log(getUniqueChars("Hello world"));
console.log(getUniqueChars("Hello Hello hello"));
console.log(getUniqueChars("Universe sister"));

// Решение через объекты

function getUniqueCharsObj(str) {
  // Создаём объект для подсчёта количества вхождений каждого символа
  const charCount = {};

  // Считаем количество каждого символа в строке
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Фильтруем только те символы, которые встречаются ровно один раз
  const uniqueChars = [...str].filter((char) => charCount[char] === 1);

  // Преобразуем массив уникальных символов обратно в строку
  return uniqueChars.join("");
}

// Пример использования:
const input = "hello world";
const result = getUniqueCharsObj(input);
console.log(getUniqueCharsObj("Universe sister"));
console.log(result); // "he wrd"
