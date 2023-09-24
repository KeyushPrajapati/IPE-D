import React, { useState } from 'react'

function My_20() {

    const data={
        'fruits': ['Tomato', 'Cucumber', 'Bell Pepper'],
        'leafyGreens': ['Spinach', 'Kale', 'Lettuce'],
        'rootVegetables': ['Carrot', 'Potato', 'Beetroot'],
        'Legumes': ['Lentils', 'Chickpeas','Black Beans']
    }
    const [d, setD] = useState(data['fruits'])
    const filterveg=(e)=>{
        setD(data[e.target.value])
        
    }
  return (
    <div>
        <select onChange={filterveg}>
              <option value="fruits" selected hidden>Please select a category</option>
              <option value="fruits">fruits</option>
              <option value="leafyGreens">leafyGreens</option>
              <option value="rootVegetables">rootVegetables</option>
              <option value="Legumes">Legumes</option>
        </select>
        {d.map((v)=>{
            return (<><h1>{v}</h1></>)
        })}
    </div>
  )
}

export default My_20