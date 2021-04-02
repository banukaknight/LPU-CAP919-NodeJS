const path=require('path');
const express = require('express');

var app = express();
const pubpath=path.join(__dirname,'./public');
const path1=path.join(__dirname,'./views1');

//app.set method is used to configure or change the settings.
app.set('view engine','hbs');

app.set('views',path1);

app.use(express.static(pubpath));

app.get('',(req,res)=>{
	res.render('index',
	{me:'Mandeep',you:'Classs'});
});

app.listen(3000)
{
	console.log("Server is running");
}
