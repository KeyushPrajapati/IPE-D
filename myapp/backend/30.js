var mg=require('mongoose')
var express=require('express')
var app=express()
var cors=require('cors')
app.use(cors())
mg.connect('mongodb://127.0.0.1/IPE')
.then(()=>console.log('success'))
.catch((e)=>{console.log(e)})
var bp=require('body-parser')
app.use(bp.json())

var mySchema=new mg.Schema(
    {
        subject:
        {
            type:String,
            enum:['FSD2', 'FCSP2', 'DS', 'TOC', 'COA']
        },
        mark:
        {
            type:Number,
        }
    }
)
var data=new mg.model('Information',mySchema)

app.post('/data',(req,res)=>{
    const d1=new data(req.body)
    const result=d1.save()
    console.log(result)
    res.send(result)
}).listen(5000)