"use strict";

/* 
Your job is to implement a function which returns the last D digits of an integer N as a list.
Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.

N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

function lastDigit(n, d) {
  if (d <= 0) {
    return [];
  }
  let arr = Array.from(String(n), Number);
  let newArr = [];
  if (d > 0 && d <= arr.length) {
    let i = arr.length - 1;
    let j = 0;
    while (j <= d - 1) {
      newArr.push(arr[i]);
      i--;
      j++;
    }
    return newArr.reverse();
  }
  return arr;
}

console.log(lastDigit(1, 1));
console.log(lastDigit(123769, 4));
console.log(lastDigit(1237678989, 5));

function sliceLastDigit(n, d) {
  if (d <= 0) {
    return [];
  }

  let arr = Array.from(String(n), Number);

  if (d > 0) {
    return arr.slice(-d);
  }
  return arr;
}

console.log(sliceLastDigit(1, 1));
console.log(sliceLastDigit(145485, 0));
console.log(sliceLastDigit(123769, 4));
console.log(sliceLastDigit(1237678989, 5));
console.log(sliceLastDigit(1237678989, 15));

/* 
THE BEST SOLUTION

function lastDigit(n, d) {
  return (n + '').split('').splice(-d, d).map(Number);
}

*/
