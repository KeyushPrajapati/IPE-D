import axios from 'axios'
import React, { useState } from 'react'

function My_28() {
    const [data,setData]=useState({})
    const change=(e)=>
    {
        var name = e.target.name
        var value = e.target.value
        setData({...data,[name]:value})
    }
    const submitdata=(e)=>
    {
        e.preventDefault()
        axios.post('http://localhost:5000/data',data)
        .then((res)=>{console.log(res)})
        .catch((e)=>{console.log(e)})

    }
  return (
    <div>
        <form onSubmit={submitdata}>
            <p><select onChange={change} name='city'>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
            </select></p>
            <p><select onChange={change} name='blood_group'>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
            </select></p>
            <input type="submit"  value="submit"/>
        </form>
    </div>
  )
}

export default My_28