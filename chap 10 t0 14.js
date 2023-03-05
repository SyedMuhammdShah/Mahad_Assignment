// Prompt user for input
var num1 = parseInt(prompt("Please enter the first number:"));
var num2 = parseInt(prompt("Please enter the second number:"));
var sign = prompt("Please enter the operation (+, -, *, /, or %):");

// Perform calculation based on selected operation
var result;
switch (sign) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  default:
    alert("Invalid operation selected.");
}

// Display result using alert
if (result !== undefined) {
  alert(num1 + " " + sign + " " + num2 + " = " + result);
}

// Prompt user for input
var course1 = parseInt(prompt("Please enter the marks obtained in course 1:"));
var course2 = parseInt(prompt("Please enter the marks obtained in course 2:"));
var course3 = parseInt(prompt("Please enter the marks obtained in course 3:"));
var course4 = parseInt(prompt("Please enter the marks obtained in course 4:"));
var course5 = parseInt(prompt("Please enter the marks obtained in course 5:"));
var totalMarks = 500;

// Calculate total percentage
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var percentage = obtainedMarks * 100 / totalMarks;

// Display result using alert
alert("Total Percentage: " + percentage + "%");
