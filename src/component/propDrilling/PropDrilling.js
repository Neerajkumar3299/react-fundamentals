import React,{useState} from 'react'
import people from './data'
import data from './data'
export default function PropDrilling() {
    const [people,setPeople]=useState(data)
    const removePerson=(id)=>{
        const newPeople=people.filter((person)=>{
                if(person.id!==id){
                    return person
                }
            })
        setPeople(()=>newPeople)
    }
  return (
    <>
    <p>Jai Shri Ram</p>
    <List people={people} removePerson={removePerson}/>
    </>
  )
}

const List=(props)=>{
    const {people,removePerson}=props
    return(
        <>
        {people.map((person)=>{
            return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
        })}
        </>
    )
}
const SinglePerson=({id,name,removePerson})=>{
    // const {id,name}=props.person
    return(
        <>
        <p>This is Single Person{id} {name} </p>
        <span><button onClick={()=>removePerson(id)}>remove</button></span>
        </>
    )
}
