// ======================================================

// Q:1
// var name = prompt("Apna naam likhen:");
// alert("Hi, " + name + "! Kese hain aap?");

// ======================================================

// Q:2
// var num = prompt("Table ke liye number likhen:", 5);
// num = Number(num);
// document.write("<h3>Table of " + num + "</h3>");
// for(var i = 1; i <= 10; i++){
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

// ======================================================

// Q:3
// var city = prompt("Apna sheher likhen:");
// if(city === "Karachi"){
//     alert("Welcome to city of lights");
// }

// ======================================================

// Q:4
// var gender = prompt("Gender likhen (male/female):");
// if(gender === "male"){
//     alert("Good Morning Sir.");
// } else if(gender === "female"){
//     alert("Good Morning Ma’am.");
// }

// ======================================================

// Q:5
// var color = prompt("Signal color batayen (red/yellow/green):");
// if(color === "red"){ alert("vehicles must stop"); }
// else if(color === "yellow"){ alert("vehicles should get ready to move"); }
// else if(color === "green"){ alert("vehicles can move now"); }

// ======================================================

// Q:6
// var maxAge = prompt("Max age likhen:");
// var currentAge = prompt("Apni age likhen:");
// if(currentAge <= maxAge){
//     alert("You are welcome");
// }

// ======================================================

// Q:7
// var fuel = prompt("Fuel kitna bacha hai (litres)?");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }

// ======================================================

// Q:9

// var obtained = +prompt("Obtained marks likhen:");
// var total = +prompt("Total marks likhen:");
// var perc = (obtained / total) * 100;

// document.write("Total Marks: " + total + "<br>");
// document.write("Marks Obtained: " + obtained + "<br>");
// document.write("Percentage: " + perc + "%<br>");

// if(perc >= 80){ document.write("Grade: A-one <br> Remarks: Excellent"); }
// else if(perc >= 70){ document.write("Grade: A <br> Remarks: Good"); }
// else if(perc >= 60){ document.write("Grade: B <br> Remarks: You need to improve"); }
// else { document.write("Grade: Fail <br> Remarks: Sorry"); }

// ======================================================

// Q:10
// var p1 = +prompt("Item 1 ki price:");
// var q1 = +prompt("Item 1 ki quantity:");
// var p2 = +prompt("Item 2 ki price:");
// var q2 = +prompt("Item 2 ki quantity:");
// var shipping = +prompt("Shipping charges:");

// var total = (p1 * q1) + (p2 * q2) + shipping;

// if(total > 2000){
//     var discount = total * 0.1;
//     total = total - discount;
//     document.write("10% Discount applied! <br>");
// }
// document.write("Total Cost: " + total + " PKR");
// ======================================================

// Q:11
// var secretNum = 7;
// var guess = +prompt("1 se 10 tak koi number guess karen:");
// if (guess === secretNum) { alert("Bingo! Correct answer"); }
// else if (guess + 1 === secretNum) {
//     alert("Close enough to the correct answer");
// }
// ======================================================

// Q:12
// var num = +prompt("Number check karne ke liye likhen:");
// if (num % 3 === 0) {
//     alert("Ye number 3 se divide hota hai.");
// }
// ======================================================

// Q:15
// var num = +prompt("Even ya Odd check karen:");
// if (num % 2 === 0) { alert("Even number"); }
// else { alert("Odd number"); }
// ======================================================

// Q:16
// var temp = +prompt("Temperature likhen:");
// if (temp > 40) { alert("It is too hot outside."); }
// else if (temp > 30) { alert("The Weather today is Normal."); }
// else if (temp > 20) { alert("Today’s Weather is cool."); }
// else if (temp > 10) { alert("OMG! Today’s weather is so Cool."); }
// ======================================================

// Q:17
// var n1 = +prompt("Pehla number:");
// var n2 = +prompt("Dosra number:");
// var op = prompt("Operation (+, -, *, /, %):");

// if (op === "+") { alert(n1 + n2); }
// else if (op === "-") { alert(n1 - n2); }
// else if (op === "*") { alert(n1 * n2); }
// else if (op === "/") { alert(n1 / n2); }
// else if (op === "%") { alert(n1 % n2); }

// ======================================================

//  Q:18
// var day = prompt("Aaj konsa din hai?").toLowerCase();
// if (day === "saturday") { alert("It's weekend"); }
// else if (day === "sunday") { alert("Yay! It's a holiday"); }
// else { alert("It's a week day"); }

// ======================================================

//  Q:20
// var num1 = +prompt("Pehla number:");
// var num2 = +prompt("Dosra number:");
// if(num1 > num2){ alert(num1 + " bara hai."); }
// else if(num2 > num1){ alert(num2 + " bara hai."); }
// else { alert("Dono barabar hain."); }

// ======================================================

//  Q:21
// var lang = prompt("Language code (en, es, fr):");
// if(lang === "es"){ alert("Hola Mundo"); }
// else if(lang === "fr"){ alert("Bonjour le monde"); }
// else { alert("Hello World"); }

// ======================================================

//  Q:23
// var noun = prompt("Cheez ka naam (e.g. cat):");
// var count = +prompt("Kitni hain?");
// if(count > 1){
//     alert(count + " " + noun + "s");
// } else {
//     alert(count + " " + noun);
// }