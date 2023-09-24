const express=require('express')
const app= express()
const bp=require('body-parser')
const url=bp.urlencoded({extended:true})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/16.html')
})
app.post('/data',url,(req,res)=>{
    if(req.body.pass1==req.body.pass2)
    {
        res.write(`<h1>name:${req.body.username}</h1><h2>password:${req.body.pass1}</h2><h2>password2:${req.body.pass2}</h2><h3>gender:${req.body.gender}</h3>`)
    }
    else{
        res.write('password miss match')
    }
    res.send()
}).listen(5000)