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

//create file.
const fs=require("fs");

if(calc=='add'){
    console.log("Sum is: " + f.getSum(a,b));

    fs.appendFile("operation.txt",
    "\nThe numbers are: "+a+ " & "+ b+ "\nSum is: " + f.getSum(a,b)
    ,(err) => {
        if (err) { console.log('The "data to append" was appended to file!'); }
    });
}else if(calc=='sub'){
    console.log("Difference is: " + f.getDiff(a,b));

    fs.appendFile("operation.txt",
    "\nThe numbers are: "+a+ " & "+ b+ "\nDifference is: " + f.getDiff(a,b)
    ,(err) => {
        if (err) { console.log('The "data to append" was appended to file!'); }
    });
}else if(calc=='mult'){
    console.log("Multiplication is: " + f.getMult(a,b));

    fs.appendFile("operation.txt",
    "\nThe numbers are: "+a+ " & "+ b+ "\nMultiplication is: " + f.getMult(a,b)
    ,(err) => {
        if (err) { console.log('The "data to append" was appended to file!'); }
    });
}else if(calc=='div'){
    console.log("Division is: " + f.getDiv(a,b));

    fs.appendFile("operation.txt",
    "\nThe numbers are: "+a+ " & "+ b+ "\nDivision is: " + f.getDiv(a,b)
    ,(err) => {
        if (err) { console.log('The "data to append" was appended to file!'); }
    });
}else{
    console.log("Command not recognized");
}

console.log("\nEnd of program!");