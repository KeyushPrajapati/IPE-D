var express = require('express')
var app = express()
var v = require('validator')
var bp = require('body-parser')
var url = bp.urlencoded({ extended: true })
var mg = require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/IPE')
    .then(() => console.log('sucess'))
    .catch((e) => { console.log(e) })


var mySchema = new mg.Schema(
    {
        name: {
            type: String,
            trim: true,
            minlength: [3, 'minlenght is 3'],
            maxlength: [12, 'maxlenght is 12'],
            uppercase: true,
        },
        email: {
            type: String,
            validate(vel) {
                if (!v.isEmail(vel)) {
                    throw new Error('email is not validate')
                }
            }
        },
        date: {
            type: Date,
            validate(vel) {
                if (new Date("2023-10-01") > new Date(vel) || new Date("2023-10-12") < new Date(vel)) {
                    throw new Error('date is not validate')
                }
            }
        },
        city:{
            type:String,
            enum: ['ahmedabad','gandhinagar', 'vadodara'],
            lowercase:true
        }
    }
)

var data = new mg.model('Exam', mySchema)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/31.html')
})
app.post("/data", url, (req, res) => {
    const d1 = req.body
    console.log(new Date(d1.date))
    const form_d = new data(d1)
    const result = form_d.save()
    console.log(result)
    res.redirect('/')
}).listen(5000)