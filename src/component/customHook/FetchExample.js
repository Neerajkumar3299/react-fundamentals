import React,{useState,useEffect} from 'react'
import useFetch from './useFetch';
export default function FetchExample() {
    var count = 0;
    const url = "https://api.publicapis.org/entries";
    const {loading,product}=useFetch(url)
    return (
    <>
    {loading && <h2>Loading....</h2>}
    {
    product.map((singleProduct)=>{
        count+=1
        return <div key={count}>
            
            <h4>{count}.{singleProduct.API}</h4>
            <p>{singleProduct.Description}</p>
        </div>
    })}
    </>
  )
}
