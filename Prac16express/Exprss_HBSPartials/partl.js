const path=require('path');
const express = require('express');
const hbs = require('hbs');

var app = express();
const path1=path.join(__dirname,'./template/views');
const path2=path.join(__dirname,'./template/partials');
app.set('view engine','hbs');

app.set('views',path1);

hbs.registerPartials(path2);

app.get('',(req,res)=>{
	res.render('index',
	{me:'Mandeep',you:'Classs'});
});

app.get('/about',(req,res)=>{
	res.render('abt',
	{me:'Host'});
});

app.get('/help',(req,res)=>{
	res.render('hlp',
	{me:'Assistant'});
});

app.get('*',(req,res)=>{
	res.send('No such page');
});

app.listen(3000)
{	console.log("Server is running"); }
