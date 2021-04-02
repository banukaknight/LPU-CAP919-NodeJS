const fs = require('fs');

var addData = (d1, d2) => {
    var data = [];
    var data_item = {d1,d2};

    try {
        var dataString = fs.readFileSync('data-data.json');
        data = JSON.parse(dataString);
    } catch (e) { }

    var duplicatedata = data.filter((data_item) => data_item.d1 === d1 );

    if (duplicatedata.length === 0) {
        data.push(data_item);
        fs.writeFileSync('data-data.json', JSON.stringify(data));
    }
};

module.exports = {
    addData
};