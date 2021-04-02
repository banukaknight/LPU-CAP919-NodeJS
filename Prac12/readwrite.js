var fs = require('fs'); //import module fs

// read from file
var readMe = fs.readFileSync('originalFile.txt','utf8');
console.log("Text found in the original file: \n" + readMe);

// Write to file (delete old content if file exist)
fs.writeFileSync('NewFile.txt', readMe);
var answ = "\nA: Only one, but the bulb has got to really WANT to change.";

// Append to file (append to end ofcls file)
fs.appendFile("NewFile.txt", answ, (err) => {
    if (err) { console.log('The "data to append" was appended to file!'); }
});

console.log("\nWrite to file: NewTextFile COMPLETE.");