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

const indexStr = "";

/*6.Замена символов:
Создайте переменную со строкой, содержащей несколько одинаковых символов.
Замените один из символов на другой и выведите результат.

7.Поиск подстроки:
Создайте переменную со строкой.
Найдите индекс (позицию) первого вхождения определенной подстроки и выведите его.

8.Разделение строки:
Создайте строку, содержащую несколько слов, разделенных пробелами.
Разделите строку на массив слов и выведите результат. */

/* 9. Создайте переменную со строкой. 
Переберите строку посимвольно*/
