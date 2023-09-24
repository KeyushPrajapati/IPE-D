var express= require('express')
var app= express()
var cp= require('cookie-parser')
app.use (cp())
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/3.html')
})
app.get('/details',(req,res)=>{
    res.set("content-type", "text/html")
    data=req.cookies.request
    console.log(data)
    for (var i in  data)
    {
        res.write(`<h3>${i}:${data[i]}</h3>`)
    }
    res.write('<a href="/logout">logout</a>')
    res.send()
})
app.post('/setcookies',url,(req,res)=>{
    res.set("content-type", "text/html")
    data=req.body
    res.cookie('request', data, { expires: new Date(Date.now() + 15000)})
    res.write("<a href='/details'>details</a>")
    res.end()
})
app.get('/logout',(req,res)=>{
    res.clearCookie('request')
    res.redirect('/')
})
app.listen(5000)