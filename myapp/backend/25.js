var mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/IPE')
.then(()=>{console.log('success')})
.catch((e)=>{console.log(e)})
var mySchema=new mg.Schema({
    task:String,
    status:Boolean,
})

var data=new mg.model('tasks',mySchema)

var expr=require("express")
var app=expr()
var bp=require('body-parser')
var cors=require('cors')

app.use(bp.json())
app.use(cors())
app.get('/getdata',async(req,res)=>{
    const r=await data.find()
    res.json(r)
})
app.get('/false', async (req, res) => {
    const r = await data.find({'status':'false'})
    res.json(r)
})
app.get('/true', async (req, res) => {
    const r = await data.find({'status': 'true'})
    res.json(r)
})
app.post('/update',async(req,res)=>{
    console.log(req.body)
    const r = await data.findByIdAndUpdate(req.body._id,{"status":req.body.status})
    console.log(r)
})
app.post('/data',async(req,res)=>{
    const d1=await new data(req.body)
    const result=await d1.save()
    res.send(result)
}).listen(5000)
