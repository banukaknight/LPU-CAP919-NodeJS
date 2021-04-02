const yargs=require('yargs');
const argv=yargs.argv;

const notes= require('./notes2'); //function stored in local file

var command=process.argv[2];
console.log("Command ", command);

console.log(process.argv);
console.log(yargs.argv);

if(command=='add')
{
    notes.addNote(argv.title, argv.body);
}
else if(command=='remove')
{
    notes.removeNote(argv.title);
}
else if(command=='read')
{
    notes.readNote(argv.title);
}
else if(command=='list')
{
    notes.listNote();
}
else
{
    console.log("command not recognized");
}