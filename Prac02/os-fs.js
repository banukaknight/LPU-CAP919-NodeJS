console.log("Starting app");

const fs=require("fs");
fs.appendFile("greeting.txt","Hello World",(err) => {
	if (err) {
	console.log('The "data to append" was appended to file!');
}
});