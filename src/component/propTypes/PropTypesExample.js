import React from 'react'
import data from "./data"
import Information from './Information'
export default function PropTypesExample() {
    var count=0
  return (
    <>
    {data.map((dt)=>{
        count+=1
        return <Information key={count} {...dt}/>
    })}
    </>
  )
}