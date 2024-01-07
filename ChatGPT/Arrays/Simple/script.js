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
