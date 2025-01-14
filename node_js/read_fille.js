const fs=require('fs');
fs.appendFile('demo1.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error")
    }else{
        console.log("successfull");
    }
})