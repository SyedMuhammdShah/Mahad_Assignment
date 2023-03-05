// Create an empty array to store courses
var courses = [];

// Prompt user for input and save to courses array
var course1 = prompt("Enter course 1 name:");
courses.push(course1);
var course2 = prompt("Enter course 2 name:");
courses.push(course2);
var course3 = prompt("Enter course 3 name:");
courses.push(course3);
var course4 = prompt("Enter course 4 name:");
courses.push(course4);
var course5 = prompt("Enter course 5 name:");
courses.push(course5);

// Display the courses array using alert
alert("Courses: " + courses);

// Loop through the courses array and prompt the user to edit each course
for (var i = 0; i < courses.length; i++) {
  var editCourse = prompt("Edit " + courses[i] + ":");
  
  // If user enters a new value, replace the old value in the courses array
  if (editCourse !== null && editCourse !== "") {
    courses.splice(i, 1, editCourse);
  }
}

// Display the updated courses array using alert
alert("Updated Courses: " + courses);
