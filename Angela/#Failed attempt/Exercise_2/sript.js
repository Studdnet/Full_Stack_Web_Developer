"use strict";

/* 
It will take your current age as the input and console.logs
 a message with our time left in this format:
You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.
For this challenge, assume there are 365 days in a year, 
52 weeks in a year and 12 months in a year.
IMPORTANT your console.log output should match the 
Example Output format exactly, even the positions of the commas and full stops.
Example Input
e.g. If you are 56 years old:
lifeInWeeks(56)
Example Output
You have 12410 days, 1768 weeks, and 408 months left.
*/

function lifeInWeeks(age) {
  let limitYears = 90;
  let lefYears = limitYears - age;
  let days = lefYears * 365;
  let weeks = lefYears * 52;
  let months = lefYears * 12;
  let str = `You have ${days} days, ${weeks} weeks, and ${months} months left.`;
  return console.log(str);
}

lifeInWeeks(56);
