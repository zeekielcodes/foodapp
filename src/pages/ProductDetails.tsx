import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Banner from '../components/Banner'
import foods from "../shop.json"

function ProductDetails() {
    const [id, setId] = useState<number>()
    const history = useParams()
    console.log(history);
    

    // useEffect(() => {
    //     history ? setId(history.id) : null
    //     console.log(history)
    // }, [])

    // useEffect(() => {
    //     const these = foods.products.find(food => food.id === id)
    //     console.log(these);
    // }, [id])
    
   
   
  return (
    <div>
        <Banner pageName="Food Details" page="Food"/>
    </div>
  )
}

export default ProductDetails