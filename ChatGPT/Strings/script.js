/* 
1. Объединение строк:
Создайте две переменные, содержащие строки (например, str1 и str2).
Объедините их в одну строку и сохраните результат в новой переменной.
Выведите результат в консоль.
*/

const name = "Иван";
const mood = "хорошее";
let target = "";

mood === "плохое"
  ? (target = `У ${name}а сегодня ${mood} настроение`)
  : (target = `У ${name}а сегодня хорошее настроение`);

console.log(target);

/*2.Длина строки:
Создайте переменную со строкой.
Найдите и выведите в консоль ее длину, используя свойство строки.
*/

const str = "Сегодня четверг!";
console.log(str.length);

/*3.Доступ к символам:
Создайте переменную со строкой.
Выведите в консоль первый и последний символы этой строки.*/

const phrase = "Доброе уто!";
console.log(phrase[0]);
console.log(phrase[phrase.length - 1]);

/*4.Изменение регистра:
Создайте переменную со строкой в разных регистрах (например, "Пример Строки").
Преобразуйте ее к нижнему регистру и выведите результат.
Преобразуйте ее к верхнему регистру и также выведите результат.*/

const newStr = "Что такое IT?";
console.log(newStr.toUpperCase());
console.log(newStr.toLocaleLowerCase());

/*5.Выделение подстроки:
Создайте переменную со строкой.
Выделите подстроку из этой строки (например, первые 5 символов) и выведите ее.*/

const indexStr = "Привет, я Иван!";
const hello = indexStr.slice(0, 6);
console.log(hello);

/*6.Замена символов:
Создайте переменную со строкой, содержащей несколько одинаковых символов.
Замените один из символов на другой и выведите результат.
*/

let firstString = "У попа была собака";
let secondString = firstString.replace("попа", "Ивана");
let thirdString = /попа/i;

console.log(firstString.replace(thirdString, "Ивана"));
console.log(secondString);

/*7.Поиск подстроки:
Создайте переменную со строкой.
Найдите индекс (позицию) первого вхождения определенной подстроки и выведите его.
*/

let sentence = "Мне нравится, что вы больны не мной";
let requiredStr = /больны/i;

console.log(sentence.indexOf("больны"));

/*8.Разделение строки:
Создайте строку, содержащую несколько слов, разделенных пробелами.
Разделите строку на массив слов и выведите результат. */

let newString = "This is my super car";
console.log(newString.split(" "));

/* 9. Создайте переменную со строкой. 
Переберите строку посимвольно*/

let bigApple = "Антоновка";
for (let letter of bigApple) {
  console.log(letter);
}

/* 10. Создайте переменную со строкой.
Напишите функцию, которая переворачивает данную строку 
задом наперед
 */
// первый способ решения задачи с помощью циклов
function firstMethodReverseStr(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  str = newArr.join("");
  return console.log(str);
}

firstMethodReverseStr("Привет, я ваша Тетя");

// Второй способ решения задачи с помощью встроенных методов

function secondMethodReverse(str) {
  // Шаг 1. Используем метод split(), чтобы получить массив из строки
  let splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Шаг 2. Используем метод reverse(), чтобы перевернуть элементы в полученном массиве
  let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Шаг 3. Используем метод join(), чтобы соединить элементы массива
  let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  // Шаг 4. Возвращаем перевернутую строку
  return console.log(joinArray); // "olleh"
}

secondMethodReverse("hello");

/* Сокращенная запись второго метода 
function secondMethodReverse(str) {
	return str.split("").reverse().join("");
}]
*/

// Третий метод с помощью рекурсии

/* 
Для этого решения будет использоваться два встроенных метода: 
String.prototype.substr() и String.prototype.charAt().
1. Метод substr() возвращает указанное количество символов 
из строки, начиная с указанной позиции. Если не указывать 
количество символов — вернет все символы, начиная с указанной позиции:
'hello'.substr(1); // 'ello';
2. Метод charAt() возвращает указанный символ из строки:
'hello'.charAt(0); // 'h'
*/

function reverseString(str) {
  if (str === "")
    // Условие выхода из рекурсии
    return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
  /* 
  Первая часть рекурсивного метода
  Вам нужно помнить, что будет не один вызов функции, а несколько вложенных вызовов
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Вторая часть рекурсивного метода
  Метод попадает в условие if и самый последний вложенный вызов возвращает результат
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
}

reverseString("hello");

console.log(reverseString("hello"));
