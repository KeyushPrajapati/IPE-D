import React, { useState } from 'react'

function My_26() {
    const [d, setD] = useState({})
    const [f, setF] = useState('')
    const [f1, setF1] = useState('')
    const [l, setL] = useState([])
    const [l1, setL1] = useState([])
    const change = (e) => {
        const name = e.target.name
        const value = e.target.value
        setD({ ...d, [name]: value })
    }
    const submitdata = (e) => {
        e.preventDefault()
        setL([...l, d])
    }
    const filterdata = () => {
        setL1(l.filter((v) => {
            console.log(v.category === f)
            if (v.category === f) {
                return true
            }
            else {
                return false
            }
        }))
    }
    const filterdata1 = () => {
        setL1(l.filter((v) => {
            console.log((f1)===(v.date))
            if (v.date === f1) {
                return true
            }
            else {
                return false
            }
        }))
    }

    return (
        <div>
            <p>name:<input type="text" name="name" onChange={change} /></p>
            <p>amount:<input type="number" name="amount" onChange={change} /></p>
            <p>category:
                <select onChange={change} name='category'>
                    <option value='' selected hidden>select</option>
                    <option value="Food">Food</option>
                    <option value="Electronic">Electronic</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p>date:<input type="date" name="date" onChange={change} /></p>
            <input type="button" value="add" onClick={submitdata} />
            <div>
                <div>
                    filter
                </div>
                <select onChange={(e) => { setF(e.target.value) }} name='category'>
                    <option value='' selected hidden>select</option>
                    <option value="Food">Food</option>
                    <option value="Electronic">Electronic</option>
                    <option value="other">Other</option>
                </select>
                <input type="button" value="filter" onClick={filterdata} />
                <p>date:<input type="date" name="date" onChange={(e) => { setF1(e.target.value) }} />   <input type="button" value="filter" onClick={filterdata1} /></p>

            </div>
            <div>
                <table>
                    <tr>
                        <td>name</td>
                        <td>amount</td>
                        <td>category</td>
                        <td>date</td>
                    </tr>
                    {l1.length != 0 ? l1.map((v) => {
                        return (<tr>
                            <td>{v.name}</td>
                            <td>{v.amount}</td>
                            <td>{v.category}</td>
                            <td>{v.date}</td>
                        </tr>)
                    }) : l.map((v) => {
                        return (<tr>
                            <td>{v.name}</td>
                            <td>{v.amount}</td>
                            <td>{v.category}</td>
                            <td>{v.date}</td>
                        </tr>)
                    })}
                </table>
            </div>
        </div>
    )
}

export default My_26