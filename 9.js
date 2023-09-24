var express = require('express')
var app = express()
var l = [{
    "name": 'newyork',
    'des': 'xyz',
    'tem': 45
}, {
    "name": 'ahmedabad',
    'des': 'qee',
    'tem': 47
}, {
    "name": 'london',
    'des': 'yuq',
    'tem': 15
}]

app.get('/', (req, res) => {
    res.set('content-type', 'text/html')
    res.send(`<h1>Welcome</h1>`)
})
app.get('/weather', (req, res) => {
    res.set('content-type', 'text/html')
    res.write(`<form method="get">
        <input type="search" name="location">
            <input type="submit"  value="submit">
    </form>`)
    // handle query
    location = req.query.location
    
    var data = l.find((f) => f.name == location.toLowerCase())
    console.log(data)

    if (!data) {
        res.status(404).write('page not found')
    } else {
        res.write(`<h1>location:${data.name}</h1><h2>des:${data.des}</h2><h2>temp:${data.tem}</h2>`)
    }
    res.send()
})
app.listen(5000)