const fs=require("fs");


fs.writeFile("./copy/f1.txt","file1 data",(err)=>{
    if(err){
        throw err
    }
    console.log("successfully")
    });
    