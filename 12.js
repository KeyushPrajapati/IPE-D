var expr=require('express')
var app=expr()
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render('students')
})
app.post('/student',url,(req,res)=>{
    res.render('students1',{'data':req.body})
}).listen(5000)