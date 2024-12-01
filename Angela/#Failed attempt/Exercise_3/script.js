//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

function bmiCalculator(weight, height) {
  let bmi = Number((weight / (height * height)).toFixed(1));
  if (bmi < 18.5) {
    return console.log(`Your BMI is ${bmi}, so you are underweight`);
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return console.log(`Your BMI is ${bmi}, so you have a normal weight.`);
  } else if (bmi >= 24.9) {
    return console.log(`Your BMI is ${bmi}, so you are overweight.`);
  }
}

bmiCalculator(65, 1.8);
bmiCalculator(85, 1.85);
