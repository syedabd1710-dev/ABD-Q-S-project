// ======================================================

// Q:1 
// for (var i = 1; i <= 5; i++) {
//     document.write("Hello World <br>");
// }

// ======================================================

// Q:2 
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// ======================================================

// Q:3 
// var tableNum = +prompt("Enter a number to print its multiplication table:");
// var tableLen = +prompt("Enter length of the table:");
// document.write("<h3>Table of " + tableNum + " (Length: " + tableLen + ")</h3>");
// for (var i = 1; i <= tableLen; i++) {
//     document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
// }

// ======================================================

// Q:4
// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
// }

// ======================================================

// Q:5 
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element at index " + j + " is " + fruits[j] + "<br>");
// }

// ======================================================

// Q:6 
// var n = +prompt("Enter number of items:");
// var items = [];
// for (var i = 0; i < n; i++) {
//     items[i] = prompt("Enter item for index " + i);
// }
// document.write("Items: " + items);

// ======================================================

// Q:7 
// document.write("<b>Counting:</b> " + Array.from({length: 15}, (_, i) => i + 1).join(", ") + "<br>");
// document.write("<b>Reverse:</b> " + Array.from({length: 10}, (_, i) => 10 - i).join(", ") + "<br>");
// document.write("<b>Even:</b> " + Array.from({length: 11}, (_, i) => i * 2).join(", ") + "<br>");
// document.write("<b>Odd:</b> " + Array.from({length: 10}, (_, i) => (i * 2) + 1).join(", ") + "<br>");
// document.write("<b>Series:</b> " + Array.from({length: 10}, (_, i) => (i + 1) * 2 + "k").join(", ") + "<br>");

// ======================================================

// Q:8 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === search) {
//         found = true;
//         document.write(search + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) { document.write("We are sorry. " + search + " is not available in our bakery."); }

// ======================================================

// Q:9
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) { largest = A[i]; }
// }
// document.write("Array: " + A + "<br>Largest: " + largest);

// ======================================================

// Q:10 
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) { smallest = A[i]; }
// }
// document.write("Array: " + A + "<br>Smallest: " + smallest);

// ======================================================

// Q:11
// var A = [24, 53, 78, 91, 12];
// var max = Math.max(...A);
// var min = Math.min(...A);
// document.write("Largest: " + max + ", Smallest: " + min);

// ======================================================

// Q:12
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ", ");
// }

// ======================================================

// Q:13 
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// document.write("<table border='1'><tr><th>Student</th><th>Score</th></tr>");
// for (var i = 0; i < students.length; i++) {
//     document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>");
// }
// document.write("</table>");

// ======================================================

// Q:14 
// var scores = [12, 45, 3, 22, 34, 50];
// var stopVal = +prompt("Enter stop value:");
// for (var i = 0; i < scores.length; i++) {
//     document.write(scores[i] + " ");
//     if (scores[i] === stopVal) { break; }
// }

// ======================================================

// Q:15 
// var A = [ [1,2,3] , [4,5,6] , [7,8,9] ];
// for (var i = 0; i < A.length; i++) {
//     for (var j = 0; j < A[i].length; j++) {
//         document.write(A[i][j] + "<br>");
//     }
// }

// ======================================================

// Q:16 
// var num = +prompt("Enter a positive number:");
// for (var x = num; x >= 0; x -= 0.5) {
//     document.write(x + ", ");
// }

// ======================================================

// Q:17 
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) { document.write(i + " is even <br>"); }
//     else { document.write(i + " is odd <br>"); }
// }

// ======================================================

// Q:18 
// var product = 1;
// for (var i = 1; i <= 7; i += 2) {
//     product *= i;
// }
// document.write("Product of odd numbers (1-7) is: " + product);

// ======================================================

// Q:19 
// var stars = +prompt("Initial number of stars:");
// for (var i = stars; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// ======================================================

// Q:20 
// var lines = +prompt("Enter number of lines for patterns:");

// // a.
// for(var i=1; i<=lines; i++) { document.write("***** <br>"); }

// // b. Increasing Triangle
// for(var i=1; i<=lines; i++) {
//     for(var j=1; j<=i; j++) { document.write("*"); }
//     document.write("<br>");
// }

// // c.
// for(var i=lines; i>=1; i--) {
//     for(var j=1; j<=i; j++) { document.write("*"); }
//     document.write("<br>");
// }

// ======================================================