import { display, horsepowerToWatts,BMI, analyzeNumbers } from "./utils.js"; // Importing functions from utils.js
display("chirring Sherpa", "Programmer");// Calling the display function with parameters

console.log(`960 horsepower into watt = ${horsepowerToWatts(20)}`); //calling second function

let bmiResult = BMI(70, 1.75); // calling the bmi function and storing the results in a variable
console.log(`\nBody Mass Index of a person with weight 70kg and height 1.75m is ${bmiResult.category} with a BMI value of ${bmiResult.bmi}`);

console.log(`\ncalculating Average and Standard Deviation of numbers 11, 24, 34, 45, 56`);
let result = analyzeNumbers(11, 24, 34, 45, 56);// calling the analyzeNumbers function with a set of numbers and storing the result in a variable
console.log(`Average of the numbers(11, 24, 34, 45, 56): ${result.average}, and Standard Deviation: ${result.standardDeviation}`);