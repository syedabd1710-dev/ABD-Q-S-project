// ======================================================

// Q:1 
// var studentNamesLiteral = [];

// ======================================================

// Q:2 
// var studentNamesObject = new Array();

// ======================================================

// Q:3 
// var stringsArray = ["Apple", "Banana", "Cherry"];

// ======================================================

// Q:4 
// var numbersArray = [10, 20, 30, 40];

// ======================================================

// Q:5 
// var booleanArray = [true, false, true, false];

// ======================================================

// Q:6
// var mixedArray = ["Ali", 25, true, null];

// ======================================================

// Q:7
// var networks = ["Jazz", "Zong", "Telenor", "Ufone"];

// ======================================================

// Q:8 
// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1>");
// for(var i=0; i < edu.length; i++) {
//     document.write((i+1) + ") " + edu[i] + "<br>");
// }

// ======================================================

// Q:9
// var topMovies = [];
// topMovies.push("Avengers: Age of Ultron");
// topMovies.push("Spectre");
// topMovies.push("Jurassic World");
// topMovies.push("Inside Out");
// document.write("<h1>Top Movies of 2015</h1>");
// document.write(topMovies.join("<br>") + "<br>");
// document.write("Length of array: " + topMovies.length);

// ======================================================

// Q:10
// var cars = ["Audi", "BMW", "Ford", "Lamborghini"];
// document.write("<h1>Favorite Cars</h1>" + cars + "<br>");
// document.write("First index: 0 <br>");
// document.write("Car at first index: " + cars[0] + "<br>");
// document.write("Last index: " + (cars.length - 1) + "<br>");
// document.write("Car at last index: " + cars[cars.length - 1]);

// ======================================================

// Q:11
// var names = ["Ali", "Basit", "Zayn"];
// var scores = [320, 230, 480];
// var total = 500;
// for(var i=0; i < names.length; i++){
//     var perc = (scores[i] / total) * 100;
//     document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + perc + "%<br>");
// }

// ======================================================

// Q:12
// var colors = ["Red", "Green", "Blue"];
// document.write("Original: " + colors + "<br>");

// a.
// var addStart = prompt("Enter color to add at start:");
// colors.unshift(addStart);

// b. 
// var addEnd = prompt("Enter color to add at end:");
// colors.push(addEnd);

// c. 
// colors.unshift("Purple", "Yellow");

// d. 
// colors.shift();

// e. 
// colors.pop();

// f. 
// var indexToAdd = +prompt("At which index to add?");
// var colorName = prompt("Color name?");
// colors.splice(indexToAdd, 0, colorName);

// g. 
// var indexToDel = +prompt("From which index to delete?");
// var countToDel = +prompt("How many colors to delete?");
// colors.splice(indexToDel, countToDel);

// document.write("Updated: " + colors);

// ======================================================

// Q:13 
// var studentScores = [320, 230, 480, 120];
// studentScores.sort(function(a, b){return a - b});
// document.write("Ordered Scores: " + studentScores);

// ======================================================

// Q:14
// var fruits = ["strawberry", "apple", "orange", "banana"];
// fruits.sort();
// document.write("Sorted Fruits: " + fruits);

// ======================================================

// Q:15 
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(1, 4); // index 1 se 3 tak copy karega
// document.write("Selected Cities: " + selectedCities);

// ======================================================

// Q:16 
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write("String: " + singleString);

// ======================================================

// Q:17
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// document.write("Out: " + devices.shift() + "<br>");
// document.write("Out: " + devices.shift() + "<br>");
// document.write("Out: " + devices.shift());

// ======================================================

// Q:18 
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// document.write("Out: " + devices.pop() + "<br>");
// document.write("Out: " + devices.pop() + "<br>");
// document.write("Out: " + devices.pop());

// ======================================================

// Q:19
// var brands = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i=0; i < brands.length; i++){
//     document.write("<option>" + brands[i] + "</option>");
// }
// document.write("</select>");

// ======================================================

// Q:20 
// var multiArr = [[], [], []];

// ======================================================

// Q:21 
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// for(var i=0; i<matrix.length; i++){
//     document.write(matrix[i].join(" ") + "<br>");
// }

// ======================================================