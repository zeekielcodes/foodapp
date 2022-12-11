import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useNavigate, useParams } from "react-router-dom"
import Banner from '../components/Banner'
import foods from "../shop.json"

interface Props {
  id:string
}

function ProductDetails() {
    // const [id, setId] = useState<number>()
    const {id} = useParams() as { id: string }
    const nav = useNavigate()
   
   
  return (
    <div>
      {foods.products.map(food => food.id === parseInt(id) ? <> <Banner pageName="Food Details" page={food.name}/> 
      <div className="food-details">
        <div className="food">
          <img src={require(`../assets/images/${food.image}`)} alt="" />
          <div className="details">
            <button onClick={(e) => nav(-1)}>Go Back</button>
            <h2>{food.name}</h2>
            {/* <p>{food.description}</p> */}
            <h3>{food.price.toFixed(2)}$</h3>
            <div className="ratings">
             <p>{Array.from({length:food.ratings}).map(()=> <span className='text-[#FF9F0D]'><AiFillStar /></span>)}</p>
             <p>{Array.from({length:5 - food.ratings}).map(()=> <span className='text-[#FF9F0D]'><AiOutlineStar /></span>)}</p>  
            </div>
           
          </div>
        </div>
        
      </div>
      </>
      : null)}
    </div>
  )
}

export default ProductDetails