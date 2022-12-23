import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiHeart, BiShoppingBag } from 'react-icons/bi'
import { useNavigate, useParams } from "react-router-dom"
import Banner from '../components/Banner'
import { useStateContext } from '../components/StoreContext'
import foods from "../shop.json"

interface Props {
  id:string
}

function ProductDetails() {
    // const [id, setId] = useState<number>()
    const {id} = useParams() as { id: string }
    const nav = useNavigate()
    let [quantity, setQuantity] = useState<number>(1)
    const {state, dispatch} = useStateContext()

    const addToWishlist = () => {
    
      // const item = {
      //   id,
      //   name,
      //   price,
      //   image,
      //   quantity: 1,
      //   ratings
      // }
      const there = state.wishlist.find(item => item.id === parseInt(id))
      if(!there) {
        const found = foods.products.find(item => item.id === parseInt(id))
        const modalContent = {
          title: "Added to Wishlist",
          text: `${found?.name} has been added to wishlist successfully`
        }
        dispatch({type:"AddToWishlist", payload: found})
        dispatch({type:"OPEN_MODAL", payload:modalContent})
      } else {
        const modalContent = {
          title: "Already on Wishlist",
          text: `${there.name} is already on wishlist`
        }
        dispatch({type:"OPEN_MODAL", payload:modalContent})
      }
      
    }

    const addToCart = () => {
      const there = state.cart.find(item => item.id === parseInt(id))
      if(!there) {
        const found = foods.products.find(item => item.id === parseInt(id))
        const modalContent = {
          title: "Added to Cart",
          text: `${quantity} x ${found?.name} has been added to cart successfully`
        }
        dispatch({type:"AddToCart", payload: {...found, quantity}})
        dispatch({type:"OPEN_MODAL", payload:modalContent})
      } else {
        const modalContent = {
          title: "Cart item updated",
          text: `Quantity of ${there.name} in cart has been increased by ${quantity}`
        }
        dispatch({type:"UpdateCart", payload: {...there, quantity}})
        dispatch({type:"OPEN_MODAL", payload:modalContent})
      }
      
    }
   
   
  return (
    <div>
      {foods.products.map(food => food.id === parseInt(id) ? <> <Banner pageName="Food Details" page={food.name}/> 
      <div className="food-details">
      <button className='back' onClick={(e) => nav(-1)}>Go Back</button>
        <div className="food">
          <img src={require(`../assets/images/${food.image}`)} alt="" />
          <div className="details">
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
           <button className='addcart' onClick={addToCart}><BiShoppingBag /> Add to Cart</button>
            </div>
           <hr className='mt-6 mb-4' />
           <button onClick={addToWishlist} className='flex items-center text-[16px] gap-2'><BiHeart /> Add to Wishlist</button>
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