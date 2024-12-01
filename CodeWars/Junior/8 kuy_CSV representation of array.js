/* Create a function that returns the CSV representation of a two-dimensional numeric array.
Example:
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

	Array's length > 2.
More details here: https://en.wikipedia.org/wiki/Comma-separated_values
Note: you shouldn't escape the \n, it should work as a new line.
 */

let arr = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

/* function toCsvText(array) {
  // good luck
  let str = "";
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === array[array.length - 1]) {
      str += array[i].join(",");
    } else {
      str += array[i].join(",") + "\n";
    }
  }
  return console.log(str);
} */

// The best practice

// function toCsvText(array) {
//   return console.log(array.join("\n"));
// }

// const toCsvText = array => array.join('\n');

toCsvText(arr);
