const fs=require("fs");

// 

fs.appendFile("test3.txt","we love node js",(err)=>{
if(err){
    throw err
}
console.log("successfully")
});
// async
// fs.unlink("demofile3.txt",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("deleted succefully");
// })
// Sync
