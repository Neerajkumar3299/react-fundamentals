import React from 'react'
import PropTypes from "prop-types"
export default function Information({name,age,address}) {
    const url=address && address.city 
  return (
    <>
    <p>{name}</p>
    <p>{age || 21}</p>
    <p>{url || 'Mumbai'}</p>
    </>
  )
}

// Below gievn code checks for prop types and apply required on each field
Information.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    address:PropTypes.object.isRequired
}