import React, { useState } from 'react'

function My_24() {
    const [ctext,setCh]=useState('hello')
    const [b,setB]=useState('show')
    const [c,setC]=useState('red')
    const [t,setT]=useState('')
    const changetext=()=>
    {
        if (ctext=='hello')
        {
            setCh('Welcome')
        }
        else
        {
            setCh('hello')
        }
    }
    const changeColor=()=>
    {
        if(c=='red')
        {
            setC('blue')
        }
        else
        {
            setC('red')
        }
    }
    const textshow=()=>
    {
        if (b=='show')
        {
            setB('hide')
            setT('goodmoring')
        }
        else
        {
            setB('show')
            setT('')
        }
    }
  return (
    <div>
        <h1 style={{color:c}}>{ctext}</h1>
        <h2>{t}</h2>
        <button onClick={textshow}>{b}</button>
        <button onClick={changetext}>change text</button>
        <button onClick={changeColor}>change color</button>
    </div>
  )
}

export default My_24