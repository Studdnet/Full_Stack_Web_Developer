/* Это одна из классических задач в программировании на самых разных языках. 
Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, 
а каждое последующее число равно сумме двух предыдущих чисел. 
И на собеседованиях часто дают задачи, связанные с этими числами. 
Есть разные вариации и тут мы попробуем решить одну из них. Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"
*/

function fib(num) {
  if (typeof num !== "number" || !Number.isInteger(num) || num <= 0) {
    return console.log("Ошибка");
  }
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    }
    for (let j = i; j <= i + 1; j++) {
      let sum = arr[j - 1] + arr[j];
      arr.push(sum);
    }
  }
  return console.log(arr);
}

fib(5);

// Просуммировать все члены массива

let arr = [1, 3, 6, 10];

function sumMemberArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return console.log(sum);
}

sumMemberArr(arr);

/* Написать функцию, которая сравнивает два массива и находит максимальный член 
из двух массивов. Сортировку массивов делать нельзя.*/

let price = [100, 34, 15, 4008, 215];
let money = [12, 44, 1055, 99, 314];

function maxBetweenArrays(arr1, arr2) {
  let max = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
    }
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }
  return console.log(max);
}

maxBetweenArrays(price, money);

/* Написать функцию, которая складывает попарно два массива, т.е.
данная функция складывает члены массивов с одинаковыми индексами */

function sumArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] + arr2[i];
  }
  return console.log(arr1);
}

price = [100, 34, 15, 4008, 215];
money = [12, 44, 1055, 99, 314];

sumArrays(price, money);

/* Написать функцию, которая к членам первого массива добавляет 
значение всех членов второго массива поочередно*/

function firstMemberSum(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let sum = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      sum += arr2[j];
    }
    arr1[i] = sum;
  }
  return console.log(arr1);
}

firstMemberSum([1, 5, 10], [2, 15, 20]);

/* Написать функцию, которая создает новый массив и заполняет его 
значениями из старого массива - складывает значение текущего члена массива
 с предыдущим и добавляет это значение в новый массив.*/

function addArrayMember(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      newArr.push(arr[i]);
      continue;
    }
    let sum = arr[i] + arr[i - 1];
    newArr.push(sum);
  }
  return console.log(newArr);
}

let num = [0, 1, 2, 3, 4, 5];

addArrayMember(num);
