var i1 = process.argv[2];
var i2 = process.argv[3];

// get sum
if(i1>0 && i2>0){
    var out = parseInt(i1)+parseInt(i2);
    console.log("Sum is: "+ out);
}else{
    console.log("Bad input");
}