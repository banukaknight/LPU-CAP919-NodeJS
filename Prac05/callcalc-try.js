console.log("Starting app CallCalc");
var f = require('./calc.js'); //local module

try{
    var calc = process.argv[2];
    var a = parseInt( process.argv[3] );
    var b = parseInt( process.argv[4] );
}
catch(err) {
    console.log("Input not accepted");
    process.exit()
}

console.log("The numbers are: "+a+ " & "+ b);
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