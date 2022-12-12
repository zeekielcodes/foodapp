import React from 'react'
import { Link } from "react-router-dom"
import { BiShoppingBag, BiHeart } from "react-icons/bi"
import { TbRepeat } from "react-icons/tb"

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
  return (
    <div className='each-food'>
        <img src={require(`../assets/images/${image}`)} alt="" />
        <h3>{name}</h3>
        <h4>${price.toFixed(2)} <span>{mainPrice ? "$"+mainPrice.toFixed(2) : null}</span></h4>
        <Link to={`/shop/${id}`}>
          <div className="buttons">
            <button><TbRepeat /></button>
            <button><BiShoppingBag /></button>
            <button><BiHeart /></button>
        </div>
        </Link>
    </div>
  )
}

export default SingleShopFood