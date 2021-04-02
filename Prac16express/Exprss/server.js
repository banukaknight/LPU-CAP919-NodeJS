const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities',
	  'Travel'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000)
{
	console.log("Server is running");
}
