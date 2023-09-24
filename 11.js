var a=1
var b=10
var z = 0
const add=()=>{
    z = a+b
    console.log('('+ a,b +') a+b=',z)
    a+=1
    b+=1
}

setInterval(add,1000)