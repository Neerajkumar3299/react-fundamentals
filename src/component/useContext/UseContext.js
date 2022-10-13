import React,{useState,useContext} from 'react'
import data from '../propDrilling/data'

// context API can be used in a place where same props are passed in multiple childs in subtree
// There are two parts- Provider,Consumer
const ContextAPI=React.createContext()
export default function UseContext() {
  const [people,setPeople]=useState(data)
  
  const removePerson=(id)=>{
    setPeople((people)=>{
      return people.filter((person)=>{
        if(person.id!==id){
          return person
        }
      })
    })
  }
  return (
    <>
    <ContextAPI.Provider value={{removePerson,people}}>
    <h1>Use Context/Context API</h1>
    <List/>
    </ContextAPI.Provider>
    </>
  )
}
const List=()=>{
  const {people}=useContext(ContextAPI)
  return(
    <>
    <h2>List</h2>
    {
      people.map((person)=>{
        return <div key={person.id}>
          <SingleList person={person}/>
        </div>
      })
    }

    </>
  )
}
const SingleList=(props)=>{
  const person=props.person
  const removePerson=useContext(ContextAPI).removePerson
  return (
    <>
    <p>{person.name}</p>
    <button onClick={()=>removePerson(person.id)}>remove</button>    
    </>
  )
}
