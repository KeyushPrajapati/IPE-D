import React, { useEffect, useState } from 'react'

function My_18() {
    const [time,setT]=useState(new Date().toLocaleTimeString())
    useEffect(()=>{setInterval(()=>{
      setT(new Date().toLocaleTimeString())
    },1000)})
  return (
    <div>{time}</div>
  )
}

export default My_18