// ======================================================

// Q:1
// var num = +prompt("Enter number to check divisibility by 3:");
// if (num % 3 === 0) {
//     alert("Number is divisible by 3");
// } else {
//     alert("Number is not divisible by 3");
// }

// ======================================================

// Q:2
// var num = +prompt("Enter number to check Even or Odd:");
// if (num % 2 === 0) {
//     alert("Even number");
// } else {
//     alert("Odd number");
// }

// ======================================================

// Q:3
// var age = +prompt("Enter your age:");
// if (age > 18) {
//     alert("Old enough");
// } else {
//     alert("Too young");
// }

// ======================================================

// Q:4 (Note: Replace 'YourName' with your actual name)
// var myName = "Gemini";
// var userName = prompt("Enter your name:");
// if (userName === myName) {
//     alert("Hello " + userName + "! We share the same name.");
// }

// ======================================================

// Q:5
// var num = +prompt("Enter number to check divisibility by 3 (Switch Case):");
// switch (num % 3) {
//     case 0:
//         alert("Number is divisible by 3");
//         break;
//     default:
//         alert("Number is not divisible by 3");
// }

// ======================================================

// Q:6
// var input = prompt("Enter any character (number or string):");
// var charCode = input.charCodeAt(0);
// if (charCode >= 48 && charCode <= 57) {
//     alert("Input is a number");
// } else if (charCode >= 65 && charCode <= 90) {
//     alert("Input is an Uppercase letter");
// } else if (charCode >= 97 && charCode <= 122) {
//     alert("Input is a Lowercase letter");
// }

// ======================================================

// Q:7
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operator (+, -, *, /, %):");
// switch (operator) {
//     case "+": alert(num1 + num2); break;
//     case "-": alert(num1 - num2); break;
//     case "*": alert(num1 * num2); break;
//     case "/": alert(num1 / num2); break;
//     case "%": alert(num1 % num2); break;
//     default: alert("Invalid operator");
// }

// ======================================================

// Q:8
// var time = +prompt("Enter time in 24hr format (e.g., 1900):");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }

// ======================================================

// Q:9
// var year = +prompt("Enter year (YYYY):");
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(year + " is a leap year");
// } else {
//     alert(year + " is not a leap year");
// }

// ======================================================

// Q:10
// var correctPass = "admin123";
// var userPass = prompt("Enter your password:");
// if (!userPass) {
//     alert("Please enter your password");
// } else if (userPass === correctPass) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// ======================================================

// Q:11
// var firstName = "Ali";
// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }

// ======================================================

// Q:12 (Fixed Version)
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// ======================================================

// Q:13
// var int1 = +prompt("Enter first integer:");
// var int2 = +prompt("Enter second integer:");
// if (int1 > int2) {
//     alert(int1 + " is larger.");
// } else if (int2 > int1) {
//     alert(int2 + " is larger.");
// } else {
//     alert("Both integers are equal.");
// }

// ======================================================

// Q:14
// var num = +prompt("Enter a number:");
// if (num > 0) {
//     alert("Positive");
// } else if (num < 0) {
//     alert("Negative");
// } else {
//     alert("Zero");
// }

// ======================================================

// Q:15
// var hr = +prompt("What is the current hour? (0-23)");
// if (hr >= 6 && hr <= 9) {
//     alert("Breakfast is served.");
// } else if (hr >= 11 && hr <= 13) {
//     alert("Time for lunch.");
// } else if (hr >= 17 && hr <= 20) {
//     alert("It's dinner time.");
// } else {
//     alert("Sorry, you'll have to wait, or go get a snack.");
// }

// ======================================================

// Q:16
// var value = true; // Example variable
// alert("The type of the variable is: " + typeof(value));

// ======================================================

// Q:17
// var char = prompt("Enter a single character:").toLowerCase();
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     alert(true);
// } else {
//     alert(false);
// }

// ======================================================

// Q:18
// if (10 !== 8) {
//     alert("true");
// }

// ======================================================

// Q:19
// var month = +prompt("Enter month number (1-12):");
// switch (month) {
//     case 1: alert("January"); break;
//     case 2: alert("February"); break;
//     case 12: alert("December"); break;
//     default: alert("Check console for other months or invalid input.");
// }

// ======================================================

// Q:20
// var age = +prompt("Enter age for voting check:");
// var voteable = (age < 18) ? "Too young" : "Old enough";
// alert(voteable);

// ======================================================