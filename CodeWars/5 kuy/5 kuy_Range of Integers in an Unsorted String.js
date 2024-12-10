// https://www.codewars.com/kata/5b6b67a5ecd0979e5b00000e/train/javascript

/* 
Examples: 
[['6291211413114538107',14],[1,14]],
[['13161820142119101112917232215',15],[9,23]],
[['2318134142120517221910151678611129',20],[4,23]],
[['10610211511099104113100116105103101111114107108112109',18],[99,116]]
*/

function mysteryRange(s, n) {
  let avr = s[0] / n;
  console.log(avr);
}

function splitStringIntoNParts(str, n) {
  let length = str.length;
  let partSize = Math.ceil(length / n);
  // Размер каждой части
  let parts = [];
  for (let i = 0; i < length; i += partSize) {
    parts.push(str.substring(i, i + partSize));
  }
  return parts;
}
let inputString = "1568141291110137";
let result = splitStringIntoNParts(inputString, 10).map(Number);
console.log(result); // [15, 6, 8, 14, 12, 9, 11, 10, 13, 7]
