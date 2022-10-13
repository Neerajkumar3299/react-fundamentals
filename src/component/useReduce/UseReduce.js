import React ,{useState,useReducer}from 'react'
import "../../index.css"
import reducer from './Reducer'
export default function UseReduce() {
    const [name,setName]=useState("")
    const defaultState={
        people:[],
        showModal:false,
        content:""
    }
    const [state,dispatch]=useReducer(reducer,defaultState)
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(name){
            dispatch({type:"ADD_PEOPLE",payload:name})
            setName("")
        }
        else{
            dispatch({type:"INVALID_INPUT"}) 
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" value={name} onChange={(event)=>setName(event.target.value)}/>
        <button type="submit">Submit</button>
    </form>
    {state.people.map((person)=>{
        return <div style={{display:"flex",alignItems:"center",justifyContent:"left"}} key={person.id}> 
            <p style={{display:"inline-block"}}>{person.name}</p>
            <button  style={{width:"100px",backgroundColor:"blue",border:"None",color:"white"}} onClick={()=>dispatch({type:"REMOVE",payload:person.id})}>Remove</button>
        </div>
    })}
    <p>Jai Shri Ram</p>
    </>
  )
}
