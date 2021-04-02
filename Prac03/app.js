console.log("Starting app");
var f = require('./sum.js'); //local module

var total = f.getSum(3,6);
console.log("Sum is: ");
console.log(total);