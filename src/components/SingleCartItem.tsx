import React from 'react'
import { Product } from './model'

function SingleCartItem({ name, price, image, quantity }: Product) {
    return (
        <tr>
            <td>
                <img src={require(`../assets/images/${image}`)} alt="" />
                <h3>{name}</h3>
            </td>
            <td><h4>${price.toFixed(2)}</h4></td>
            <td><h4>{quantity}</h4></td>
            <td>${(price * quantity).toFixed(2)}</td>
            <td>Remove</td>
        </tr>
    )
}

export default SingleCartItem