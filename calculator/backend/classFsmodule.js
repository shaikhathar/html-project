const fs=require("fs");
// asyn
fs.readFile("demofile.txt",(err,data)=>{
    if(err)
{
    console.log("error");
}
else{
console.log(data.toString());}
});
console.log("after file read");
// let data=fs.readFileSync("demofile.txt","utf8");
// console.log(data);
// console.log("after file read");