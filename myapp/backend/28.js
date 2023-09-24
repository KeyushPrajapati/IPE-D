var express=require('express')
var app=express()
var mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/IPE")
.then(()=>{
    console.log('success')
})
.catch((e)=>{
    console.log(e)
})

var cors=require('cors')
app.use(cors())
var bp=require('body-parser')
app.use(bp.json())

const mySchema=new mg.Schema({
    city:{
        type:String,
        enum: ['Ahmedabad', 'Rajkot', 'Surat', 'Vadodara']
    },
    blood_group:{
        type:String,
        enum: ['O+','A+','B+','AB+']

    }
})
const data=new mg.model('User',mySchema)
app.post('/data',(req,res)=>{
    const d1=new data(req.body)
    const result=d1.save()
    res.send(result)
}).listen(5000)