var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt','utf8');
console.log("Text found in the original file: \n" + readMe);

fs.writeFileSync('NewTextFile.txt', readMe);
console.log("\nwritten to file: NewTextFile");