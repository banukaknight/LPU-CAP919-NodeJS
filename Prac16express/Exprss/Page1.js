var expr=require('express');

var app = expr();

app.get('/', (req, res) => {
    var obj={
		'name':'ME',
		'Section':'Mine'
	}
	res.send(obj);
});