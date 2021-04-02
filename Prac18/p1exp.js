const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Express server is running!</h1>')
})

app.get('/data', (req, res) => {
  res.send({
    name: 'Banuka',
    likes: [
      'BSC IT',
      '3rd Year St',
	  'Sri Lanka'
    ]
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})