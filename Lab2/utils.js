export function display(Fullname, DreamJob){ // a fucntion that takes two text parameters and displays a message;
    console.log(`Hello ${Fullname} i hope your dream of becoming ${DreamJob} comes true\n`);
}

export function horsepowerToWatts(horsepower){ // a function to convert horsepower to watts 
    if(horsepower < 0){ // if horsepower is less than 0, return -1 
        console.log("Invalid horsepower value. It should be a non-negative number.");
        return 0; //invalid input
    }
    return horsepower * 745.7; // 1 horsepower = 745.7 watts
}

export function BMI(weight, height) {   // third function that calculates the Body Mass Index (BMI) given weight in kg and height in meters
    if (height <= 0 || weight <= 0) { // Check if height or weight is less than or equal to 0
        console.log("Invalid input. Both height and weight should be positive numbers.");
        return -1;
    }

    const bmi = weight / (height * height); 
    let category; // Initialize category variable
    if (bmi < 18.5) { // categorize the BMI value according to the standard BMI categories
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    return { // Return an object with the BMI value and its category
        bmi: bmi.toFixed(2),
        category: category
    };
}

export function analyzeNumbers(...nums) {// fourth function that takes a variable number of numeric arguments and 
// returns an object with the average and standard deviation of the numbers
    if (nums.length === 0) return "No numbers provided."; // Check if no numbers are provided
    const sum = nums.reduce((a, b) => a + b, 0);  // Calculate the sum of the numbers
    const avg = sum / nums.length; // Calculate the average of the numbers
  // Standard deviation calculation
    const squaredDiffs = nums.map(n => (n - avg) ** 2); // Calculate the squared differences from the average
    // map function to create an array of squared differences
    const variance = squaredDiffs.reduce((a, b) => a + b, 0) / nums.length;
    // using reduce to calculate the variance
    // by summing the squared differences and dividing by the number of elements
    const stdDev = Math.sqrt(variance); // Calculate the standard deviation by taking the square root of the variance
    return { // Return an object with the average and standard deviation
        average: avg.toFixed(2),
        standardDeviation: stdDev.toFixed(2)
    };
}
