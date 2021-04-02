const path=require('path');
const express = require('express');

var app = express();
const pubpath=path.join(__dirname,'./public');

app.set('view engine','hbs');

app.use(express.static(pubpath));

app.get('',(req,res)=>{
	res.render('index',
	{me:'Mandeep',you:'Classs'});
});

app.listen(3000)
{
	console.log("Server is running");
}
