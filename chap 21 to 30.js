// Take input from user
var num = prompt("Enter a number with decimal point:");

// Convert to greater number
var roundedNum = Math.ceil(num);

// Declare a variable with text
var text = "This is my dummy text";

// Slice the text
var slicedText = text.slice(0, roundedNum);

// Reverse the sliced string using for loop
var reversedText = "";
for (var i = slicedText.length - 1; i >= 0; i--) {
  reversedText += slicedText[i];
}

// Print the reversed string in alert
alert(reversedText);

// Take input from user
var inputValue = prompt("Enter a string:");

// Convert the first letter of each word to uppercase
var words = inputValue.split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
}
var capitalizedValue = words.join(" ");

// Print the capitalized string in console
console.log(capitalizedValue);
