// var firstName = "Amin";
// var lastName = "Hussain";
// var dob = "06-06-1990";

// var newArray = ["Amin hussain", "06-06-1990", 28, "033333333"];

// console.log(newArray);

// console.log(newArray[3]);

// console.log(newArray[newArray.length - 1]);

// Length => To find a length of an Array
// PUSH => For adding an element at the end of an array
// POP => For eliminating an element at the end of an array
// UNSHIFT  => Adding an element at the start of an array
// SHIFT  => Removing an element from the start of an array

// var tempInCelsius = 12;

// var convertInFahrenheit = (tempInCelsius * 9) / 5 + 32;
// console.log("12 degree Celcius into Fahrenheit is: ", convertInFahrenheit, "F");

// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NNoF is NNoC”.

// var tempInFahrenheit = 68;

// var convertInCelsius = ((tempInFahrenheit - 32) * 5) / 9;
// console.log("68 degree Fahrenheit into Celsius is: ", convertInCelsius, "C");

// 8. Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser.

// var totalMarks = 1200;
// var obtainedMarks = 900;
// var percentage = (obtainedMarks / totalMarks) * 100;

// console.log("Total percentage is: ", percentage, "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

// var amountInUSD = 10;
// var amountInRiyal = 25;
// var conversionRateofRiyal = 28;
// var conversionRateofUSD = 104;

// var conversionInRiyal = conversionRateofRiyal * amountInRiyal;
// var conversionInUSD = conversionRateofUSD * amountInUSD;

// console.log("Total conversion in Riyal: ", conversionInRiyal);
// console.log("Total conversion in USD: ", conversionInUSD);
// console.log("Total conversion in PKR: ", conversionInRiyal + conversionInUSD);

// var ch = "c";
// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
//   document.write("<b>" + ch + "</b>" + " is a Vowel");
// else if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U")
//   document.write("<b>" + ch + "</b>" + " is a Vowel");
// else document.write("<b>" + ch + "</b>" + " is a Consonant");

// Write a program that extracts a substring from a given string using a start and end index provided by the user.

// var firstIndex = Number(prompt("Enter the first index"));
// var secondIndex = Number(prompt("Enter the second index"));

// var newString = "My name is Amin Hussain";

// var anotherString = newString.slice(firstIndex, secondIndex);
// console.log(anotherString);

// ****************** Word and Letter Count *************

var userText = document.getElementById("userText");

function count() {
  console.log(userText.value);
}
