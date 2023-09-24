const fs = require('fs')
kaprekar=(start,end)=>{
    l=[]
    for (var i=start;i<=end;i++)
    {
        var square=i*i
        var n =square.toString()
        for (var j=1;j<n.length;j++)
        {
            var first_part=parseInt(n.slice(0,j))
            var second_part=parseInt(n.slice(j))
            console.log(first_part,second_part)
            if (first_part+second_part==i && second_part!=0 &&  first_part!=0)
            {
                l.push(i)
                break
            }
        }
              
    }
    return l
}

data= kaprekar(1,1000)
console.log(data)
// stringify data.
// here method is synchronous 
fs.writeFileSync('1.text',JSON.stringify(data))

console.log('file write')