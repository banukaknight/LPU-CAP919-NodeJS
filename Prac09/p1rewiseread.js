var fs = require('fs');

var fpointer = fs.readFileSync('readMe.txt','utf8');
console.log(fpointer);