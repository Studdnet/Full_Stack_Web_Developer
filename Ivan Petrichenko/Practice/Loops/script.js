// *
// **
// ***
// ****
// *****

let str = "";
let length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 4; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 5; k++) {
      if (k === 3) break first;
      console.log(`Third level: ${k}`);
    }
  }
}
