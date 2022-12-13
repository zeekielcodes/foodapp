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
 const {dispatch} = useStateContext()
  const addToCart = () => {
    const item = {
      name,
      price,
      image,
      quantity: 1
    }
   dispatch({type:"AddToCart", payload: item})
  }

  const addToWishlist = () => {
    const item = {
      name,
      price,
      image,
      quantity: 1
    }
    dispatch({type:"AddToWishlist", payload: item})
  }


  return (
    <div className='each-food'>
        <img src={require(`../assets/images/${image}`)} alt="" />
        <h3>{name}</h3>
        <h4>${price.toFixed(2)} <span>{mainPrice ? "$"+mainPrice.toFixed(2) : null}</span></h4>
        <Link to={`/shop/${id}`}>
          <div className="buttons">
            <button><TbRepeat /></button>
            <button onClick={addToCart}><BiShoppingBag /></button>
            <button onClick={addToWishlist}><BiHeart /></button>
        </div>
        </Link>
    </div>
  )
}

export default SingleShopFood