const yargs=require('yargs');
const argv=yargs.argv;

const notes= require('./notes3'); //function stored in local file

var command=process.argv[2];
console.log("Command ", command);

console.log(process.argv);
console.log(yargs.argv);

if(command=='add')
{
    notes.addNote(argv.title, argv.body);
}
else
{
    console.log("command not recognized");
}