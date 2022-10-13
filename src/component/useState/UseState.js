import React,{useState} from 'react'
import "../../index.css"
import Modal from './Modal'

// useState hook is used to track status of each element and events
export default function UseState() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [isSubmit,setIsSubmit]=useState(false)
    const [isSumbitContent,setIsSubmitContent]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name && email){
            setIsSubmit(true)
            setIsSubmitContent("Data succesfully Achieved..")
        }
        else{
            setIsSubmit(false)
            setIsSubmitContent("Please Enter valid data")
        }
        
    }
    const closeModal=()=>{
        setTimeout(()=>setIsSubmitContent(""),2000)
    }
  return (
    <>
    <Modal content={isSumbitContent}/>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} id="name" onChange={(event)=>setName(event.target.value)}/><br/>
        <input type="email" name="email" value={email} id="email" onChange={(event)=>setEmail(event.target.value)}/><br/>
        <button type="submit" onClick={closeModal}>Submit</button>
      </form>
      {isSubmit && <p>Name:{name} <br/>Email:{email}</p>}
      </>
  )
}
