// https://www.codewars.com/kata/5b6b67a5ecd0979e5b00000e/train/javascript

/* 
Examples: 
[['6291211413114538107',14],[1,14]],
[['13161820142119101112917232215',15],[9,23]],
[['2318134142120517221910151678611129',20],[4,23]],
[['10610211511099104113100116105103101111114107108112109',18],[99,116]]
*/

function mysteryRange(s, n) {
  let numbers = [];

  // Пробуем все возможные способы разделения строки
  for (let step = 1; step <= s.length; step++) {
    numbers = [];
    let i = 0;
    while (i < s.length) {
      let part = s.slice(i, i + step);
      numbers.push(parseInt(part, 10));
      i += step;
    }
    console.log(numbers);

    if (numbers.length === n) break;
  }

  if (numbers.length !== n) {
    throw new Error("Невозможно разделить строку на заданное количество частей.");
  }

  const smallest = Math.min(...numbers);
  const largest = Math.max(...numbers);

  if (largest - smallest + 1 !== n) {
    throw new Error("Найденный диапазон не соответствует заданному числу n.");
  }

  return [smallest, largest];
}

// Пример использования:
let inputString = "1568141291110137";
const rangeSize = 10;
try {
  const result = mysteryRange(inputString, rangeSize);
  console.log(result); // [6, 15]
} catch (error) {
  console.error(error.message);
}
