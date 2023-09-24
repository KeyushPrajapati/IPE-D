var expr=require('express')
var app=expr()
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
var session=require('express-session')
app.use(session({resave:true,saveUninitialized:true,secret:'hello'}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/savesession',url,(req,res)=>{
    console.log(req.body.username)
    req.session.uname=req.body.username
    res.redirect('/fetchsession')
})
app.get("/fetchsession",(req,res)=>{
    res.set('content-type','text/html')
    res.write(`<h1>username:${req.session.uname}</h1>`)
    res.write("<a href='/deletesession'>logout</a>")
    res.end()
})
app.get('/deletesession',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
}).listen(5000)