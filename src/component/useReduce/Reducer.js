const reducer=(state,action)=>{
    if(action.type==="ADD_PEOPLE"){
        const newPerson=[...state.people,{name:action.payload,id:new Date().getTime().toString()}]
        return {
            ...state,
            people:newPerson,
            showModal:true,
            content:"New person added..."
        }
    }
    if(action.type==="REMOVE"){
        const newPeople=state.people.filter((person)=>{
            if(person.id!=action.payload){
                return person
            }
        })
        return{
            ...state,
            people:newPeople,
            showModal:true,
            content:"Item removed.."
        }
    }
    return {
        ...state,
        showModal:true,
        content:"Enter valid data..."
    }
}
export default reducer