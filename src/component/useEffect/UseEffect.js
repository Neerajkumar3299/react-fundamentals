import React,{useState,useEffect} from 'react'

export default function UseEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>
        console.log("Jai Shri Ram")
    ,[count])
  return (
    <>
    <p>count is :{count}</p>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    </>
  )
}
