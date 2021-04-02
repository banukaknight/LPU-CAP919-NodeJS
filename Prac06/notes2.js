var addNote=(title,body)=>{
    console.log("Adding Note:", title, body);
}

var listNote = ()=>{
    console.log("List of Notes:");
    
}

var removeNote = (title)=>{
    console.log("Removing Note:", title);
}

var readNote = (title)=>{
    console.log("Reading Note:", title);
}

module.exports={
    addNote, listNote, removeNote, readNote
};