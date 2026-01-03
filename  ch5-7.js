// ======================================================

// Q:1
 var fNum =13 ;
 var sNum = 9;

 alert( (fNum + sNum)+"sum of " + fNum +" and " + sNum + " is " )

// ======================================================

// Q:2 (a)
 var fSub = 13;
 var sSub = 9;

 alert("subtracte of " + fSub +" and " + sSub + " = " + (fNum - sNum))

// ======================================================

//  Q:2 (b)
 var fDiv = 13;
 var sDiv = 9;

 alert("divied of " + fDiv +" and " + sDiv + " = " + (fNum / sNum))

// ======================================================

// Q:2 (c)
 var fMul =13;
 var sMul  = 9;

 alert("mulitiply of " + fMul +" and " + sMul + " = " + (fNum * sNum))

// ======================================================

// Q:2 (d)
 var fRm = 13;
 var sRm = 9;

 alert("reminder of " + fRm+" and " + sRm + " = " + (fNum % sNum))

// ======================================================

// Q:3
var myNum;
document.write("Value after variable declaration is: " + myNum + "<br>");
myNum = 3;
document.write("Initial value: " + myNum + "<br>");
myNum++;
document.write("Value after increment is: " + myNum + "<br>");
myNum = myNum + 7;
document.write("Value after addition is: " + myNum + "<br>");
myNum--;
document.write("Value after decrement is: " + myNum + "<br>");
var remainder = myNum % 3;
document.write("The remainder is: " + remainder);

// ======================================================

// Q:4

 var aTktRs = 600;

 document.write("Total cost buy ticket 5 to a movie is "+ aTktRs * 5 + " PKR")

// ======================================================

// Q:5
 var num = 2;
 document.write("Table of " + num + "<br>" + "<br>" + "<br>");

 document.write(num + " x " + " 1 " + " = " + num * 1 + "<br>");
 document.write(num + " x " + " 2 " + " = " + num * 2 + "<br>");
 document.write(num + " x " + " 3 " + " = " + num * 3 + "<br>");
 document.write(num + " x " + " 4 " + " = " + num * 4 + "<br>");
 document.write(num + " x " + " 5 " + " = " + num * 5 + "<br>");
 document.write(num + " x " + " 6 " + " = " + num * 6 + "<br>");
 document.write(num + " x " + " 7 " + " = " + num * 7 + "<br>");
 document.write(num + " x " + " 8 " + " = " + num * 8 + "<br>");
 document.write(num + " x " + " 9 " + " = " + num * 9 + "<br>");
 document.write(num + " x " + " 10 " + " = " + num * 10 + "<br>");

// ======================================================

// Q:6

var celsius = 30;
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");
var fahrenheit = 86;
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C");

// ======================================================

// Q:7

 var apple = 10;
 var banana = 12;

 document.write("Price of Apple item 1 is " + apple + "<br>");
 document.write("Quantity of  item 1 is" + 4 + "<br>" + "<br>");
 document.write("Price of banana item 2 is " + banana + "<br>");
 document.write("Quantity of item 2 is" + 4 + "<br>" + "<br>");
 document.write("Shiping Charges" + 200 + "<br>" + "<br>");
 document.write("Total Cost of shoping is " + (apple * 4 + banana * 4))

// ======================================================

// Q:8

 var totalMarks = 1200;
 var userMarks = 900;
 document.write("Total Marks " + totalMarks + "<br>" + "<br>");
 document.write("Obtain Marks " + userMarks + "<br>" + "<br>");
 document.write("Pacentage " + (userMarks / totalMarks * 100) + "%" + "<br>" + "<br>");

// ======================================================

// Q:9

 var aUSdollar = 104;
 var aSudiRiyal = 28;
 document.write("Total currency in PKR is " + (aUSdollar * 10 + aSudiRiyal * 25))

// ======================================================

// Q:10

 var num = 3 ;
 num = (num + 5) * 10 / 2;
 
 alert(num);

// ======================================================

// Q:11
 var ctntYear = 2026;
 var userDOB = prompt("Enter your birth year");
 document.write("current Year " + ctntYear + "<br>" + "<br>");
 document.write("Your Birth Year " + userDOB + "<br>" + "<br>");
 document.write("You are " + (ctntYear - userDOB) + " Year old");

 // ======================================================

// Q:12
//Help of AI
var radius = 10;
var pi = 3.142;

var circumference = 2 * pi * radius;

var area = pi * (radius * radius);

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);
// ======================================================

// Q:13
 var a = 10;
 document.write("The value of a is " + a + "<br>" + "<br>")
 document.write("The value of ++a is " + ++a + "<br>")
 document.write("New value of a is " + a + "<br>" + "<br>")
document.write("............................. "+"<br>"+"<br>")
 document.write("The value of a++ is " + a++ + "<br>")
 document.write("New value of a is " + a + "<br>" + "<br>")

 document.write("The value of --a is " + --a + "<br>")
 document.write("New value of a is " + a + "<br>" + "<br>")
 document.write("The value of a-- is " + a-- + "<br>")
 document.write("New value of a is " + a + "<br>" + "<br>")

// ======================================================

// Q:14
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;


document.write("a is " + a + "<br>");    
document.write("b is " + b + "<br>");      
document.write("result is " + result);
// ======================================================

// Q:15
 //Help of AI
var favoriteSnack = "Chocolate Chips";
var currentAge = 20;

var maxAge = 65;
var amountPerDay = 3;

var totalNeeded = (maxAge - currentAge) * (365 * amountPerDay);


document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");

document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
