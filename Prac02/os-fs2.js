console.log("Starting 2ndapp");
const os=require("os");
const fs=require("fs");
var k=os.userInfo();
fs.appendFile("greeting2.txt","\nHello World2"+JSON.stringify(k),(err) => {
	if (err) {
	    console.log('The "data to append" was appended to file!');
    }
});