// https://www.codewars.com/kata/5b6b67a5ecd0979e5b00000e/train/javascript

/* 
Examples: 
[['6291211413114538107',14],[1,14]],
[['13161820142119101112917232215',15],[9,23]],
[['2318134142120517221910151678611129',20],[4,23]],
[['10610211511099104113100116105103101111114107108112109',18],[99,116]]
*/

function mysteryRange(inputString, n) {
  // Функция для построения последовательности чисел из строки
  function buildSequence(start, count, str) {
    let numbers = [];
    let current = start;

    while (numbers.length < count && str.length > 0) {
      let numStr = current.toString();

      if (str.startsWith(numStr)) {
        numbers.push(current);
        str = str.slice(numStr.length);
        current++;
      } else {
        return null; // Не удалось построить последовательность
      }
    }

    return numbers.length === count && str.length === 0 ? numbers : null;
  }

  // Перебираем все возможные начальные числа
  for (let start = 1; start <= 100; start++) {
    const sequence = buildSequence(start, n, inputString);

    if (sequence) {
      return [Math.min(...sequence), Math.max(...sequence)];
    }
  }

  // Если подходящая последовательность не найдена
  throw new Error("Не удалось разделить строку на последовательные числа");
}

// Пример использования функции
let inputString = "1568141291110137";
let result = mysteryRange(inputString, 10);
console.log(result); // Ожидаемый результат: [6, 15]
