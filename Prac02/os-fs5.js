console.log("Starting 5 app");
const os=require("os"); //core modules
const fs=require("fs"); //core modules
const a = require('./local'); //local module
const b = a.name;
var k=os.userInfo();
fs.appendFile("greeting5.txt","\nHello World5\n"+ k.username,(err) => {
	if (err) {
	    console.log('The "data to append" was appended to file!');
    }
});

console.log("a"+a);
console.log("b"+b);