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
