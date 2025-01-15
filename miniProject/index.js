const express=require('express');
const app=express();
const port=4569;
const bodyParser = require('body-parser');//
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json()); // Middleware to parse JSON body app.use(bodyParser.urlencoded({ extended: true })); Middleware to parse JSON body app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname +"/circle.html")
})
app.post('/circle',(req,res)=>{
    const radius=req.body.radius;
    
    res.send(`value:${radius}`);
})
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname +"/trianghle.html")
})
app.post('/triangle',(req,res)=>{
    const height=req.body.height;
    const base=req.body.base;
    const area = 0.5 * base * height;
     res.send(`result: ${area}`);
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});