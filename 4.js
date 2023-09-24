var express=require('express')
var app=express()
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    res.render('student')
}).listen(5000)

app.post('/data',url,(req,res)=>{
    data=req.body
    console.log(data)
    res.render('student1',data)
})