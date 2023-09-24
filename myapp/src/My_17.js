import React, { useState } from 'react'
function My_17() {
    const [t, SetT] = useState('')
    const [data, SetD] = useState([])
    const addtask = () => {
        SetD([...data, t])
    }
    const deletetask = (task) => {
        SetD(data.filter((v) => {
            if (v !== task) {
                return true
            }
            else {
                return false
            }
        }))
    }
    return (
        <div>
            <input type="text" onChange={(e) => { SetT(e.target.value) }} />
            <input type="button" value="add" onClick={addtask} />

            <div>
                {data.map((v) => {
                    return (<><h3>{v}<button onClick={()=>deletetask(v)}>delete</button></h3></>)
                })}
            </div>
        </div>
    )
}

export default My_17