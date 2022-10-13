import React,{useRef} from 'react'

// useRef hook is used to store previous value
// It does not re-render
// It is used to target any dom element
export default function UseRef() {
    const ref=useRef(null)
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(ref.current.value)
    }
  return (
    <>
    <h1>This is UseRef</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={ref}/>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}
