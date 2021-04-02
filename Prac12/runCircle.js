console.log("App runCircle is starting");

//import local module
const circle = require('./circleModule'); 

let r = process.argv[2]; //accept argument from commandline
console.log("Circle radious recorded as: "+ r);

let area = circle.getArea(r);
console.log("Circle Area is: "+ area);
let circumference = circle.getCircumference(r);
console.log("Circle Circumference is: "+ circumference);
let diameter = circle.getDiameter(r);
console.log("Circle Diameter is: "+ diameter);

console.log("\n  End of runCircle app.");