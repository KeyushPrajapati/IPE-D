// Node JS do nat reach simple.html automatically. You have to write /simple.html in searchbar after localhost:3001/
var http=require('http')
var fs=require('fs')
const path = require('path');
http.createServer((req,res)=>{
    if(req.url==='/simple.html')
    {   
        const filePath = path.join(__dirname, 'simple.html');

        res.writeHead(200,{'content-type':'text/html'})

        const data = fs.readFileSync(filePath,'utf-8')

        res.write(data)
        res.end()
       
    }
    else
    {
        res.writeHead(400,{'content-type':'text/html'})
        res.end('page not found')
    }
}).listen(3001)
