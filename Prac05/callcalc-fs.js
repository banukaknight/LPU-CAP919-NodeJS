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

const fs=require("fs"); // dealing with file system
var myline = ""; //string to hold line for printing

if(calc=='add'){
    console.log("Sum is: " + f.getSum(a,b));
    myline = "\nThe numbers are: "+a+ " & "+ b+ "\nSum is: " + f.getSum(a,b) ;
}else if(calc=='sub'){
    console.log("Difference is: " + f.getDiff(a,b));
    myline = "\nThe numbers are: "+a+ " & "+ b+ "\nDifference is: " + f.getDiff(a,b) ;
    
}else if(calc=='mult'){
    console.log("Multiplication is: " + f.getMult(a,b));
    myline =  "\nThe numbers are: "+a+ " & "+ b+ "\nMultiplication is: " + f.getMult(a,b) ;

}else if(calc=='div'){
    console.log("Division is: " + f.getDiv(a,b));
    myline = "\nThe numbers are: "+a+ " & "+ b+ "\nDivision is: " + f.getDiv(a,b) ;
   
}else{
    console.log("Command not recognized");
}

fs.appendFile("operation.txt", myline,(err) => {
        if (err) { console.log('The "data to append" was appended to file!'); }
});

console.log("\nEnd of program!");