const express = require('express');
const app = express();
const port =  process.env.PORT || 5000;
const  cors = require('cors');

app.use(cors())
const category = require('./category.json');
const news = require('./news.json');

app.get('/',(req, res)=>{
    res.send("hello World")
})
// Categories 
 app.get('/category',(req, res)=>{
    res.send(category)
 })

//  News 
app.get('/news',(req, res)=>{
    res.send(news);
    console.log(news)
})
// News Id capture 
app.get(('/news/:id'),(req, res)=>{
    const id =parseInt(req.params.id);
    const clickNes = news.find(n=>parseInt(n._id) === id);
    res.send(clickNes);
    console.log(clickNes);
})
// category Id capture 
 app.get(('/category/:id'),(req,res)=>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(news)
    }
    if(id === undefined){
        res.send('This is not our news');
    }
    else{
        const findSameCategory = news.filter(n=>parseInt(n.category_id)=== id);
        res.send(findSameCategory)
    }
    
 })


app.listen(port,()=>{
    console.log("apps running ")
})