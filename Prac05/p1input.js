var command=process.argv[2];
console.log("Command ", command);
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