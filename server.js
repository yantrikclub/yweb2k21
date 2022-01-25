const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());


app.get('/',(req,res)=>{
    res.sendFile(path.join(initial_path,"index.html"));
})
app.post('/upload',(req,res)=>{
    let file = req.file.image;
    let date = new Date();
    let imgname = date.getDate();
})
app.get('/admin',(req,res)=>{
    res.sendFile(path.join(initial_path,"pages/dashboard.html"));
})
app.get('/blogs/:blog',(req,res)=>{
    res.sendFile(path.join(initial_path,"pages/iblog.html"));
})


app.use((req,res)=>{
    res.json("404");
})

app.listen(process.env.PORT||"3000",()=>{
    console.log('listening....');
})