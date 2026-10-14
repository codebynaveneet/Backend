const maths = require("./math")

console.log("Hello world i am node-js");
// console.log(window);  --> works in browsers only
// console.log(alert);  --> works in browsers only

console.log("The value of my module is", maths.AddFunc(12,34) + " and " + maths.SubFunc(40,5));
