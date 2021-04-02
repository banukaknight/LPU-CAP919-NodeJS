console.log("Starting coppy app");
const os=require("os"); //core modules
const fs=require("fs"); //core modules

fs.copyFile("greeting.txt", "prac6content.txt", (err) => { 
    if (err) { 
      console.log("Error Found:", err); 
    } 
});
