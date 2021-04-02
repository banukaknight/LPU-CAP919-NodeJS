const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const data = require('./data.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if(command === 'add') {
    data.addData(argv.d1, argv.d2);
} else {
    console.log('Comamnd not recognized');
}