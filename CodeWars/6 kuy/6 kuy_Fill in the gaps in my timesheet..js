/* Background:
At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

Task:
Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values. 

Examples:

fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too

*/

let arr = [1, null, null, 1, 1];

function fillGaps(timesheet) {
  let indexNull = [];
  for (let i = 0; i <= timesheet.length - 1; i++) {
    let replaceNull = timesheet[i - 1];
    if (timesheet[i] === null) {
      let n = i;
      while (timesheet[n] === null && n <= timesheet.length - 1) {
        console.log(n);

        indexNull.push(n);
        n++;
      }
      i = n;
    }
  }
  for (let j = indexNull[0]; j <= indexNull.length - 1; j++) {
    timesheet.splice(timesheet[j], 1, 2);
    console.log(`Позиция null: ${j}`);
  }
  console.log(`Поймали null. Его позиции ${indexNull}`);
  return timesheet;
}

console.log(fillGaps(arr));
