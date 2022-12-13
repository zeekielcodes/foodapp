import React from 'react'
import { Product } from './model'

function SingleCartItem({name, price, image, quantity}:Product) {
  return (
    <div className='cart-item'>
        <img src={require(`../assets/images/${image}`)} alt="" />
        <h3>{name}</h3>
        <h4>${price.toFixed(2)}</h4>
    </div>
  )
}

export default SingleCartItem