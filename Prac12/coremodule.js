console.log("Starting App to demo core module usage");

const os = require("os"); //import os module

var k = os.userInfo(); //access object created of module
console.log( k );
console.log("End of program");