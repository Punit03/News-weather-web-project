const express = require("express");
const app = express();
const port = 80;
const path=require("path");

app.listen(80);
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","news.html"));
});

app.get('/sport',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","sports.html"));
});

app.get('/weather',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","weather.html"));
});