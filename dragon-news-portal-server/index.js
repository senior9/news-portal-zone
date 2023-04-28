const express = require('express');
const app = express();
const port =  process.env.PORT || 5000;
const  cors = require('cors');

app.use(cors())
const category = require('./category.json');; 

app.get('/',(req, res)=>{
    res.send("hello World")
})
 app.get('/category',(req, res)=>{
    res.send(category)
 })



app.listen(port,()=>{
    console.log("apps running ")
})