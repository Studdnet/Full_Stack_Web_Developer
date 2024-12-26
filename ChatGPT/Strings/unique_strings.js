"use strict";
/* 
Задача 1: Найти уникальные символы в строке
Напишите функцию findUniqueCharacters(str), которая принимает строку и возвращает строку, состоящую 
только из уникальных символов (встречающихся ровно один раз).

Пример:
findUniqueCharacters("programming"); // "poai"
findUniqueCharacters("abracadabra"); // "cd"
findUniqueCharacters("aabbcc"); // ""
 */

function findUniqueCharacters(str) {
  let charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const uniqueChars = [...str].filter((char) => charCount[char] === 1);

  return uniqueChars.join("");
}

console.log(findUniqueCharacters("programming"));
console.log(findUniqueCharacters("abracadabra"));
console.log(findUniqueCharacters("aabbcc"));

/* 
Задача 2: Подсчитать количество каждого символа
Напишите функцию countCharacters(str), которая принимает строку и 
возвращает объект, где ключи — это символы строки, а значения — количество их вхождений.

Пример:
countCharacters("hello"); // { h: 1, e: 1, l: 2, o: 1 }
countCharacters("abracadabra"); // { a: 5, b: 2, r: 2, c: 1, d: 1 }
*/

function countCharacters(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

console.log(countCharacters("hello"));
console.log(countCharacters("abracadabra"));

/* 
Задача 3: Найти символы, встречающиеся более одного раза
Напишите функцию findDuplicateCharacters(str), которая возвращает строку, 
состоящую из символов, встречающихся в строке два или более раз.

Пример:
findDuplicateCharacters("programming"); // "rgm"
findDuplicateCharacters("abracadabra"); // "ab"
findDuplicateCharacters("abcdef"); // ""
 */

function findDuplicateCharacters(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const duplicateChars = Object.entries(charCount)
    .filter(([key, value]) => value > 1)
    .map(([key, value]) => key)
    .join("");
  return duplicateChars;
}

console.log(findDuplicateCharacters("programming"));

/* 
Задача 4: Проверить строку на изоморфность
Напишите функцию isIsomorphic(str1, str2), которая проверяет, являются ли две 
строки изоморфными. Две строки считаются изоморфными, если одинаковые символы 
одной строки соответствуют одинаковым символам другой строки, и наоборот.

Условие:
Используйте подсчёт символов для проверки.

Пример:
isIsomorphic("egg", "add"); // true
isIsomorphic("foo", "bar"); // false
isIsomorphic("paper", "title"); // true
 */

function isIsomorphic(str1, str2) {
  // Если строки разной длины, они не могут быть изоморфными
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {}; // Словарь для отображения символов из str1 в str2
  const map2 = {}; // Словарь для обратного отображения символов из str2 в str1

  // Проходим по всем символам строк
  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i]; // Текущий символ из str1
    const char2 = str2[i]; // Текущий символ из str2

    // Если char1 уже отображён, проверяем, соответствует ли он текущему char2

    if (map1[char1]) {
      if (map1[char1] !== char2) {
        // Если отображение не совпадает, строки не изоморфны
        return false;
      }
    } else {
      // Если char1 ещё не отображён, добавляем его в словарь map1
      map1[char1] = char2;
    }

    // Если char2 уже отображён, проверяем, соответствует ли он текущему char1
    if (map2[char2]) {
      if (map2[char2] !== char1) {
        // Если отображение не совпадает, строки не изоморфны
        return false;
      }
    } else {
      // Если char2 ещё не отображён, добавляем его в словарь map2
      map2[char2] = char1;
    }
  }

  // Если цикл завершился без конфликтов, строки изоморфны
  return true;
}

console.log(isIsomorphic("egg", "add"));

/* 
Задача 5: Найти самый частый символ
Напишите функцию findMostFrequentChar(str), которая возвращает символ, 
встречающийся в строке чаще всего. Если таких символов несколько, верните любой из них.

Пример:
findMostFrequentChar("hello"); // "l"
findMostFrequentChar("abracadabra"); // "a"
findMostFrequentChar("mississippi"); // "i" (или "s")
*/

function findMostFrequentChar(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  let maxKey = null; // Переменная для хранения ключа с максимальным значением
  let maxValue = -Infinity; // Изначально максимальное значение самое маленькое

  for (const [key, value] of Object.entries(charCount)) {
    if (value > maxValue) {
      maxValue = value; // Обновляем максимальное значение
      maxKey = key; // Обновляем соответствующий ключ
    }
  }

  return maxKey; // Возвращаем ключ с максимальным значением
}

console.log(findMostFrequentChar("hello"));
console.log(findMostFrequentChar("mississippi"));

/* 
Задача 6: Удалить повторяющиеся символы
Напишите функцию removeDuplicates(str), которая возвращает строку без 
повторяющихся символов (оставляя только первое вхождение каждого символа).

Пример:
removeDuplicates("programming"); // "progamin"
removeDuplicates("abracadabra"); // "abrcd"
removeDuplicates("aabbcc"); // "abc"
 */

function removeDuplicates(str) {
  const arr = str.split("");
  return [...new Set(arr)].join("");
}

console.log(removeDuplicates("programming"));
console.log(removeDuplicates("abracadabra"));

/* 
Задача 7: Найти самый редкий символ
Напишите функцию findLeastFrequentChar(str), которая возвращает символ, 
встречающийся в строке реже всего. Если таких символов несколько, верните любой из них.

Пример:
findLeastFrequentChar("hello"); // "h" (или "e" или "o")
findLeastFrequentChar("abracadabra"); // "c" (или "d")
*/

function findLeastFrequentChar(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const uniqueChar = [...str].filter((char) => charCount[char] === 1);
  return uniqueChar.join("");
}

console.log(findLeastFrequentChar("hello"));

/* 
Задача 8: Удалить уникальные символы
Напишите функцию removeUniqueCharacters(str), которая возвращает строку, 
из которой удалены все уникальные символы (те, которые встречаются ровно один раз).

Пример:
removeUniqueCharacters("hello"); // "ll"
removeUniqueCharacters("abracadabra"); // "aaabbaa"
removeUniqueCharacters("abcdef"); // ""
*/

/* 
Задача 9: Подсчитать общее количество уникальных символов
Напишите функцию countUniqueCharacters(str), которая возвращает число, 
равное количеству уникальных символов в строке.

Пример:
countUniqueCharacters("programming"); // 4
countUniqueCharacters("abracadabra"); // 1
countUniqueCharacters("aabbcc"); // 0
*/

/* 
Задача 10: Найти индексы уникальных символов
Напишите функцию findUniqueCharIndexes(str), которая возвращает массив индексов всех уникальных символов.

Пример:
findUniqueCharIndexes("programming"); // [0, 1, 8, 9]
findUniqueCharIndexes("abracadabra"); // [6]
findUniqueCharIndexes("aabbcc"); // []

*/
