var expr=require('express')
var app=expr()
var multer=require('multer')
var stroage=multer.diskStorage(
    {
        destination:'upload',
        filename:function (req,file,cb)
        {
            cb(null,file.originalname)
        }
    }
)

var upload=multer(
    {storage:stroage,
        limits:{
            fileSize:1000000
        },
    fileFilter:function(req,file,cb){
        if (file.mimetype=='text/plain')
        {
            cb(null,true)
        }
        else
        {
            cb('only text file')
        }
    }
    }
).single('mypic')

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/5.html')
})
app.post('/data',upload,(req,res)=>{
    res.send('file uploaded')
}).listen(5000)