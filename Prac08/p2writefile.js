var fs = require('fs');

var readMe = fs.readFileSync('readFrom.txt','utf8');

fs.writeFileSync('writtenonfile.txt', readMe);
console.log("written to file.");