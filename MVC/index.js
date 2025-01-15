const express=require("express");
const app=express();
const port=3480;



app.get("/users",(req,res)=>{
    res.send("wellcome to users")
})
app.get("/admin",(req,res)=>{
    res.send("hello admin")
})
app.get("/profile",(req,res)=>{
    res.send("hello users profile")
})
app.use((req,res,next)=>{
    res.status(404).json({
        message:"resources not found"
    })
})

app.listen(port,()=>{
    console.log(`server is runnig at http://localhost:${port}`);
})