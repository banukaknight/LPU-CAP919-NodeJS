//write to file
const fs=require("fs"); //core modules

var addNote=(title,body)=>{
    var time = Date().toLocaleString(); //get time

    console.log("Adding Note to file", title, body);
    fs.appendFile("notesFile.txt",time+"\nTitle: "+title
    +"\nBody: "+body+"\n\n",(err) => {
        if (err) {
            console.log('The "data to append" was appended to file!');
        }
    });
}

module.exports={
    addNote
};