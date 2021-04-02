var fs = require('fs');

fs.readFile('readMe.txt','utf8', function(err,data){
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

console.log('check order in which this appear');