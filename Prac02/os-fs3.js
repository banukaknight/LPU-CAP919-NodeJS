console.log("Starting 3ndapp");
const os=require("os");
const fs=require("fs");
var k=os.userInfo();
fs.appendFile("greeting3.txt","\nHello World3\n"+k.username,(err) => {
	if (err) {
	    console.log('The "data to append" was appended to file!');
    }
});