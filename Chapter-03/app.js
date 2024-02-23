// *******CHAPTER 03 || VARIABLES FOR NUMBERS ********

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 28;

alert(age);

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var numofVisit = 21;

alert("You have visited the websites " + numofVisit + " times.");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 1994;

document.write(
  "My birth year is " +
    birthYear +
    "\n Data type of declared vairable is number"
);

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order.
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe";
var productTitle = "Shirts";
var productQuantity = 5;
var onlineStores = "XYZ Store";

document.write(
  `${visitorName} ordered ${productQuantity} ${productTitle} on ${onlineStores} `
);
