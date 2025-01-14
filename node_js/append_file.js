const fs=require('fs');
fs.appendFile('demo1.txt',"i am a student",(err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("successfull");
    }
})