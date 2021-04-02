
var expr=require('express');
var app = expr();
app.get('/', (req, res) => {
    res.send('<h1>The message to be printed by the server. </h1>'); });

app.get('/examination',(req,res)=>{
	res.send({
		Block:38,
		Dept:"SCA",
		Floor:6
	});
});

app.get('/academics',(req,res)=>{
	res.send("<h1> Academic Details are shown on this page.</h1>");
});

app.get('/assignment',(req,res)=>{
	res.send("<h1> Assignment Details are shown on this page.</h1>");
});

app.listen(3000)
{
	console.log("Server is ready"); }
