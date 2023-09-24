import axios from 'axios'
import React, { useEffect, useState } from 'react'

function My_25() {
    const [t, setT] = useState('')
    const [v, setV] = useState([])
    const [f,setF]=useState('getdata')
    const submitdata = () => {
        var data = { 'task': t, 'status': 'false' }
        axios.post(`http://localhost:5000/data`, data).then((res) => { console.log(res) }).catch((e) => { console.log(e) })
        window.location.reload()
    }
    const changedata=(e)=>
    {
    
        var data = { 'status': e.target.checked, '_id': e.target.id }
        console.log(data)
        axios.post('http://localhost:5000/update', data).then((res) => {}).catch((e)=>{console.log(data)})
        window.location.reload(); 
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/getdata`).then((res) => { setV(res.data) })
    }, [])
    const filterdata=(e)=>{
        axios.get(`http://localhost:5000/${e.target.value}`).then((res) => { setV(res.data) }).catch((e)=>{console.log(e)})
    }
    console.log(v)
    return (
        <div>

            <p>task: <input type="text" name="task" onChange={(e) => { setT(e.target.value) }} /></p>
            {/* <p>status: <input type="checkbox" name="status" onChange={(e)=>{setS(e.target.checked)}}/></p> */}
            <p><input type="button" value="add" onClick={submitdata} /></p>
            <div>
                <div>
                    <input type="button" value="getdata" onClick={filterdata}/>
                    <input type="button" value="true" onClick={filterdata}/>
                    <input type="button" value="false" onClick={filterdata}/>
                </div>
                {v.map((val) => {
                    return (<><h1>task:{val.task}</h1><h2>status:<input type="checkbox" name="status" id={val._id} checked={val.status} onChange={changedata} /></h2></>)
                })}
            </div>
        </div>
    )
}

export default My_25