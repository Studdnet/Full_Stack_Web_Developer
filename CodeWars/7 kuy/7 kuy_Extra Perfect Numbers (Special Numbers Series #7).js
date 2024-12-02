/* Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N . */

function extraPerfect(n) {
  let extraPerfect = [];
  for (let i = 1; i <= n; i++) {
    if (isExtraPerfect(i)) {
      extraPerfect.push(i);
    }
  }
  return extraPerfect;
}

function isExtraPerfect(num) {
  let binaryStr = num.toString(2);
  return binaryStr[0] === "1" && binaryStr[binaryStr.length - 1] === "1";
}
