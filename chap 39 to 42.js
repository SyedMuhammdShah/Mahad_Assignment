// Get marks for 5 courses from user
var course1 = parseInt(prompt("Enter marks for course 1"));
var course2 = parseInt(prompt("Enter marks for course 2"));
var course3 = parseInt(prompt("Enter marks for course 3"));
var course4 = parseInt(prompt("Enter marks for course 4"));
var course5 = parseInt(prompt("Enter marks for course 5"));

// Calculate total marks and percentage
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var totalMarks = 500;
var percentage = obtainedMarks * 100 / totalMarks;

// Calculate grade using switch case
var grade;
switch(true) {
  case percentage >= 90 && percentage <= 100:
    grade = "A+";
    break;
  case percentage >= 75 && percentage < 90:
    grade = "A";
    break;
  case percentage >= 60 && percentage < 75:
    grade = "B";
    break;
  case percentage >= 45 && percentage < 60:
    grade = "C";
    break;
  case percentage >= 30 && percentage < 45:
    grade = "D";
    break;
  case percentage >= 0 && percentage < 30:
    grade = "F";
    break;
  default:
    grade = "Invalid percentage";
}

// Print output in alert
alert("Your obtained percentage is " + percentage.toFixed(2) + "%. Your grade is " + grade + ".");
