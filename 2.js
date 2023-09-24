const fs = require('fs')
// here method is asynchronous 
// sequence is compalsary (hierarchy)
fs.writeFile('source.text', 'Hello world',(err) => {
    if (err) { console.log(err) }
    
    fs.appendFile('source.text', 'How are you', 'utf-8', (err) => {
        if (err) { console.log(err) }
         
        fs.readFile('source.text', 'utf-8', (err,data) => {
            if (err) { console.log(err) } 
            
            fs.writeFile('destination.text', data, (err) => { if (err) { console.log(err) } 
            
            })
        })
    })
})

console.log('sucess')