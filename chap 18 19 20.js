// Create an empty array to store courses
var courses = [];

// Prompt user for input and save to courses array
for (var i = 1; i <= 5; i++) {
  var course = prompt("Enter course " + i + " name:");
  courses.push(course);
}

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
