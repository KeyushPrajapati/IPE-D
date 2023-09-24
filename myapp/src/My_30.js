import axios from 'axios'
import React, { useState } from 'react'

function My_30() {
    const [sub,SetS]=useState('FSD')
    const [mark,SetM]=useState('')
    const submitHandler=(e)=>
    {
        e.preventDefault()
        var data={
            'subject':sub,
            'mark':mark
        }
        axios.post('http://localhost:5000/data',data)
        .then((res)=>{console.log(res)})
        .catch(
            (e)=>{
                console.log(e)
            }
        )
    }

  return (
    <div>
    <form onSubmit={submitHandler} method='post'>
        <select onChange={(e)=>{SetS(e.target.value)}}>
            <option value="FSD2">FSD2</option>
            <option value="FCSP2">FCSP2</option>
            <option value="DS">DS2</option>
            <option value="TOC">TOC</option>
            <option value="COA">COA</option>
        </select>
              <p>mark: <input type="number" onChange={(e)=>{SetM(e.target.value);window.location.reload()}}/></p>
              <input type='submit' value='submit'/>
    </form>
    </div>
  )
}

export default My_30