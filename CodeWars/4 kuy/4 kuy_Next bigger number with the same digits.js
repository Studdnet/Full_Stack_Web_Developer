/* Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
12 ==> 21
513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1

*/

function nextBigger(n) {
  let str = String(n);
  let arrNum = str.split("").map(Number);

  if (arrNum[arrNum.length - 1] > arrNum[arrNum.length - 2]) {
    let a = arrNum[arrNum.length - 1];
    let b = arrNum[arrNum.length - 2];
    arrNum[arrNum.length - 1] = b;
    arrNum[arrNum.length - 2] = a;
  }

  if (arrNum[0] < arrNum[1]) {
    let a = arrNum[0];
    let b = arrNum[1];
    arrNum[0] = b;
    arrNum[1] = a;
  }

  return Number(arrNum.join(""));
}

console.log(nextBigger(2017));
console.log(nextBigger(513));
console.log(nextBigger(12));
console.log(nextBigger(414));
console.log(nextBigger(144));
