/* Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

/* function sortArray(array) {
  let arrOdd = [];
  let arrIndex = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0 && array[i] !== 0) {
      arrOdd.push(array[i]);
      arrIndex.push(i);
      arrOdd.sort((a, b) => {
        return a - b;
      });
    }
  }

  console.log(arrOdd);

  for (let i = 0; i < arrIndex.length; i++) {
    array.splice(arrIndex[i], 1, arrOdd[i]);
  }
  return console.log(array);
} */

// The best solution:

function sortArray(array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;
  return array.map((num) => {
    if (num % 2 !== 0) {
      return oddNumbers[oddIndex++];
    }
    return num;
  });
}

sortArray([1, 11, 2, 8, 3, 4, 5]);
