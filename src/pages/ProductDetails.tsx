import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiHeart, BiShoppingBag } from 'react-icons/bi'
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
    let [quantity, setQuantity] = useState<number>(1)
   
   
  return (
    <div>
      {foods.products.map(food => food.id === parseInt(id) ? <> <Banner pageName="Food Details" page={food.name}/> 
      <div className="food-details">
        <div className="food">
          <img src={require(`../assets/images/${food.image}`)} alt="" />
          <div className="details">
            <button className='back' onClick={(e) => nav(-1)}>Go Back</button>
            <h2>{food.name}</h2>
            <p className='description'>{food.description}</p>
            <hr />
            <h3>{food.price.toFixed(2)}$</h3>
            <div className="ratings">
             <p>{Array.from({length:food.ratings}).map(()=> <span><AiFillStar /></span>)}</p>
             <p>{Array.from({length:5 - food.ratings}).map(()=> <span><AiOutlineStar /></span>)}</p>  
            | {food.ratings.toFixed(1)} Ratings
            </div>
            <div className="cartAddition">
              <div className="plusNminus">
            <button onClick={()=> setQuantity(quantity-1)} disabled={quantity<=1}>-</button><button>{quantity}</button><button onClick={()=> setQuantity(quantity+1)}>+</button>
           </div>
           <button className='cart'><BiShoppingBag /> Add to Cart</button>
            </div>
           <hr className='mt-6 mb-4' />
           <button className='flex items-center text-[16px] gap-2'><BiHeart /> Add to Wishlist</button>
           <p className='my-2'>Category : {food.category}</p>
          </div>
        </div>
        
      </div>
      </>
      : null)}
    </div>
  )
}

export default ProductDetails