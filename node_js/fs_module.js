const fs=require('fs');
fs.writeFile('demo1.txt',"hi this is jahid hasan",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("succesfull")
    }
})