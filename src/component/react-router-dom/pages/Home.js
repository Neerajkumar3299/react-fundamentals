import React from 'react'
import data from "../../../data/data"
import "./Home.css"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    {
      data.map((dt)=>{
        return <div key={dt.id} className="data-section">
          <p>{dt.name}</p>
          <p style={{color:"grey"}}>{dt.age}</p>
          <Link to={`/user/${dt.id}`}>get more</Link>
        </div>
      })
    }
    </>
  )
}
