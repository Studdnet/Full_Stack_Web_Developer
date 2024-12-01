"use strict";
/* 
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input
["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output
Michael is going to buy lunch today!

Hint
1. You might need to think about Array.length.
2. Remember that Arrays start at position 0!
*/

const names = ["Mark", "Angela", "Ivan", "Marina", "Andrey", "Vladimir"];

function whosPaying(names) {
  let randomName = Math.floor(Math.random() * names.length);
  return console.log(`${names[randomName]} is going to buy lunch today!`);
}

whosPaying(names);
