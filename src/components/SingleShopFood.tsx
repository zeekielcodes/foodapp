import React from 'react'
import { Link } from "react-router-dom"
import { BiShoppingBag, BiHeart } from "react-icons/bi"
import { TbRepeat } from "react-icons/tb"
import { useStateContext } from '../components/StoreContext'

interface Props {
    id:number,
    name: string,
    image:string,
    price:number,
    mainPrice:number | undefined,
    description: string,
    category: string,
    ratings: number,
    // images: [],
}

function SingleShopFood({id, name, image, price, mainPrice, description, category, ratings}:Props) {
 const {state, dispatch} = useStateContext()
  const addToCart = () => {
    window.navigator.vibrate(1000)
    const item = {
      id,
      name,
      price,
      image,
      quantity: 1,
      ratings
    }
    const isInCart = state.cart.find(item => item.id === id)
    console.log(isInCart);
    if(isInCart) {
      const modalContent = {
        title: "Cart item increased",
        text: `Quantity of ${name} in cart has been increased`
      }
      dispatch({type:"UpdateCart", payload:item})
      dispatch({type:"OPEN_MODAL", payload:modalContent})
    } else {
      const modalContent = {
        title: "Added to Cart",
        text: `${name} has been added to cart successfully`
      }
   dispatch({type:"AddToCart", payload: item})
   dispatch({type:"OPEN_MODAL", payload:modalContent})
    }
  }

  const addToWishlist = () => {
    window.navigator.vibrate(500)
    const item = {
      id,
      name,
      price,
      image,
      quantity: 1,
      ratings
    }
    const there = state.wishlist.find(item => item.id === id)
    if(!there) {
      const modalContent = {
        title: "Added to Wishlist",
        text: `${name} has been added to wishlist successfully`
      }
      dispatch({type:"AddToWishlist", payload: item})
      dispatch({type:"OPEN_MODAL", payload:modalContent})
    } else {
      const modalContent = {
        title: "Already on Wishlist",
        text: `${name} is already on wishlist`
      }
      dispatch({type:"OPEN_MODAL", payload:modalContent})
    }
    
  }


  return (
    <div className='each-food'>
      <div className="thumbnail">
        <img src={require(`../assets/images/${image}`)} alt="" />
          <div className="buttons">
            <button><TbRepeat /></button>
            <button onClick={addToCart}><BiShoppingBag /></button>
            <button onClick={addToWishlist}><BiHeart /></button>
        </div>
      </div>
        <Link to={`/shop/${id}`}><h3>{name}</h3></Link>
        <h4>${price.toFixed(2)} <span>{mainPrice ? "$"+mainPrice.toFixed(2) : null}</span></h4> 
    </div>
  )
}

export default SingleShopFood