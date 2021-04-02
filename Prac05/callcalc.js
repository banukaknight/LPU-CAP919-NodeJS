console.log("Starting app CallCalc");
var f = require('./calc.js'); //local module

var calc = process.argv[2];
var a = parseFloat( process.argv[3] );
var b = parseFloat( process.argv[4] );

console.log("The numbers are: "+a+ " & "+ b);

if (isNaN(a) || isNaN(b)) {
    console.log("User Input not accepted");
    process.exit()
}

if(calc=='add'){
    console.log("Sum is: " + f.getSum(a,b));
}else if(calc=='sub'){
    console.log("Difference is: " + f.getDiff(a,b));
}else if(calc=='mult'){
    console.log("Multiplication is: " + f.getMult(a,b));
}else if(calc=='div'){
    console.log("Division is: " + f.getDiv(a,b));
}else{
    console.log("Command not recognized");
}

console.log("\nEnd of program!");