const path=require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,'../public'));

var app = express();
const pubpath=path.join(__dirname,'./public');
app.use(express.static(pubpath));

app.listen(3000)
{
	console.log("Server is running");
}
