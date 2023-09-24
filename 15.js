const express = require('express')
const app = express()
const multer = require('multer')
const stroage = multer.diskStorage(
    {
        destination: '15',
        filename: function (req, file, cb) {
            cb(null, file.originalname)} 
})
const upload=multer(
    {storage:stroage,
    fileFilter:function(req,file,cb){
        if(file.mimetype=='text/plain')
        {
            cb(null,true)
        }
        else
        {
            cb('text file only')
        }
    }}
).array('mypic',3)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/15.html')
})
app.post('/data',upload,(req,res)=>{
    res.send('file upload success')
}).listen(5000)