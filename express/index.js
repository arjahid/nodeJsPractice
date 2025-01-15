const express=require("express");
const app=express();
const port=3456;
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("hi this is home route")
})
app.get('/about',(req,res)=>{
    res.send("hi this is about route")
})
app.get('/login',(req,res)=>{
    
    res.sendFile(__dirname +"/form.html")
})
app.post('/login',(req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
    res.send(`name: ${name}, password: ${password}`);
    
})
app.get('/blog',(req,res)=>{
    res.sendFile(__dirname +"/form2.html")
})
app.post('/blog',(req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;
    const age=req.body.age;
    res.send(`name: ${name}, password: ${password},email:${email},age:${age}`);

})
app.use((req,res,next)=>{
    res.status(404).json({
        message:"404! Eroor here"
    })
})
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});