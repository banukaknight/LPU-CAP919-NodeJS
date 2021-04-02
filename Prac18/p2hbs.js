//import the required libraries
const express = require('express')
const app = express()
const port = 3000

const Handlebars = require("handlebars");
const template = Handlebars.compile("<h1>I am {{name}} of age {{age}}.</h1>");
const data = { name: "Banuka", age: "27" };

console.log(template(data));

app.get('/', (req, res) => {
    res.send(template(data))
  })
 
app.listen(port, () => {
    //console.log(template({ name: "Nils" }));
})


