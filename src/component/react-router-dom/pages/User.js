import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data/data'
export default function User() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [isShow,setIsShow]=useState(false)
    const [showModel,setShowModel]=useState("")
    const {id}=useParams()

    useEffect(()=>{
        const newData=data.find((dt)=>{
            if(dt.id===parseInt(id)){
                return dt
            }
        })
        if(newData){
            setName(newData.name)
            setAge(newData.age)
            console.log(newData)
        }
        else{
            setIsShow(true)
            setShowModel("Data not found")
        }
    },[])

  return (
    <div>
        {isShow && <p>{showModel}</p>}
      <p>This is:</p>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  )
}
