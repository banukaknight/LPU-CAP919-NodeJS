const path=require('path');
const express = require('express');

console.log(path.join(__dirname,'../Hospital2'));

var app = express();
const pubpath=path.join(__dirname,'./Hospital2');
app.use(express.static(pubpath));

app.listen(3000)
{
	console.log("Server is running");
}
