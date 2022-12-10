import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Banner from '../components/Banner'
import foods from "../shop.json"

interface Props {
  id:string
}

function ProductDetails() {
    // const [id, setId] = useState<number>()
    const {id} = useParams() as { id: string }
   
   
  return (
    <div>
        <Banner pageName="Food Details" page="Food"/>
        <div className="food-details">
          {foods.products.map(food => food.id === parseInt(id) ? <h1>{food.name}</h1>: null)}
        </div>
    </div>
  )
}

export default ProductDetails