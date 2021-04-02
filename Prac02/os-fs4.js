console.log("Starting 3ndapp");
const os=require("os"); //core modules
const fs=require("fs"); //core modules
const a = require('./local'); //local module
var k=os.userInfo();
fs.appendFile("greeting4.txt","\nHello World4\n"+ k.username,(err) => {
	if (err) {
	    console.log('The "data to append" was appended to file!');
    }
});