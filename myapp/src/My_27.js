import React, { useState } from 'react'

function My_27() {
    var [c,setC]=useState('')
    var [d,setD]=useState('')
    var l = [{
        "name": 'newyork',
        'wea': 'clear',
        'tem': 45
    }, {
        "name": 'ahmedabad',
        'wea': 'clear',
        'tem': 47
    }, {
        "name": 'london',
        'wea': 'cloudy',
        'tem': 15
    }]
    const filtercity=()=>
    {
        var data=l.filter((v)=>{
            if(v.name===c)
            {
                return true
            }
            else
            {
                return false
            }
        })
        setD(data)
        
    }
  return (
    <div>
        search:<input type="text" onChange={(e)=>{setC(e.target.value)}}/>
       <input type="button" onClick={filtercity} value='search'/>
        <div>
            {d.length==0?'data not Found':d.map((v)=>{
                return(<><h1>{v.name}</h1><h2>{v.wea}</h2><h2>{v.tem}</h2></>)
            })}
        </div>
    </div>
  )
}

export default My_27