const yargs=require('yargs');
const argv=yargs.argv;

var command=process.argv[2];
console.log("Command ", command);

console.log(process.argv);
console.log(yargs.argv);

if(command=='add')
{
    console.log("Adding new data");
}
else if(command=='substract')
{
    console.log("Substracting data");
}
else
{
    console.log("command not recognized");
}