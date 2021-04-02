console.log("Starting app CallCalc");
var f = require('./calc.js'); //local module

var a = 5;
var b = 2;
console.log("The numbers are: "+a+ " & "+ b);
console.log("Sum is: " + f.getSum(a,b));
console.log("Difference is: " + f.getDiff(a,b));
console.log("Multiplication is: " + f.getMult(a,b));
console.log("Division is: " + f.getDiv(a,b));

console.log("\nEnd of program!");