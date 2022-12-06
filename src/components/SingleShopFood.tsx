import React from 'react'
import { BiShoppingBag, BiHeart } from "react-icons/bi"
import { TbRepeat } from "react-icons/tb"

interface Props {
    name: string,
    image:string,
    price:number,
    mainPrice:number | undefined,
    category: string,
    ratings: number,
    // images: [],
}

function SingleShopFood({name, image, price, mainPrice, category, ratings}:Props) {
  return (
    <div className='each-food'>
        <img src={require(`../assets/images/${image}`)} alt="" />
        <h3>{name}</h3>
        <h4>${price.toFixed(2)} <span>{mainPrice ? "$"+mainPrice.toFixed(2) : null}</span></h4>
        <div className="buttons">
            <button><TbRepeat /></button>
            <button><BiShoppingBag /></button>
            <button><BiHeart /></button>
        </div>
    </div>
  )
}

export default SingleShopFood