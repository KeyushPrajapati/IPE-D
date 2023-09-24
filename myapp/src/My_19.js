import React, { useState } from 'react'

function My_19() {
    const [data, setD] = useState({})
    const [t, setT] = useState([])
    const datahandel = (e) => {
        var name1 = e.target.name
        var value = e.target.value
        setD({ ...data, [name1]: value })

    }
    const add_data = () => {
        console.log(data)
        if (parseInt(data.S_quntity) > parseInt(data.P_quntity)) {
            alert("Selling quantity cannot be more than purchase quantity")
        }
        else {
            if (parseInt(data.S_quntity) < parseInt(data.P_quntity)) {
                setD({ ['P/F']: 'invested', ['color']: 'black', ...data })
                console.log(data)
            }
            else {
                if (parseInt(data.S_price) * parseInt(data.S_quntity) >= parseInt(data.P_price) * parseInt(data.P_quntity)) {

                    setD({ ['P/F']: 'profit', ['color']: "green", ...data })
                    console.log(data)
                }
                else {
                    setD({ ['P/F']: 'loss', ['color']: 'red', ...data })
                    console.log(data)
                }
            }
            setT([...t, data])


        }
    }
    return (
        <div>
            <p>name:<input type="text" name="name" onChange={datahandel} /></p>
            <p>Purchase price:<input type="number" name="P_price" onChange={datahandel} /></p>
            <p>Purchase Quntity:<input type="number" name="P_quntity" onChange={datahandel} /></p>
            <p>Selling price:<input type="number" name="S_price" onChange={datahandel} /></p>
            <p>Selling Quntity:<input type="number" name="S_quntity" onChange={datahandel} /></p>
            <p><input type="button" value="add" onClick={add_data} /></p>
            <div>
                <table>
                    <tbody>


                        <tr>
                            <td>name</td>
                            <td>Purchase price</td>
                            <td>Purchase quntity</td>
                            <td>Selling price</td>
                            <td>Selling Quntity</td>
                            <td>Profit/Loss</td>
                        </tr>
                        {t.map((v) => {
                            return (<tr>
                                <td>{v.name}</td>
                                <td>{v.P_price}</td>
                                <td>{v.P_quntity}</td>
                                <td>{v.S_price}</td>
                                <td>{v.S_quntity}</td>
                                <td style={{ color: v.color }}>
                                    {v['P/F']}
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default My_19