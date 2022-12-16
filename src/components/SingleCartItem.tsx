import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiHeart, BiTrash } from 'react-icons/bi'
import { Product } from './model'
import { useStateContext } from './StoreContext'

function SingleCartItem({ id, name, price, image, quantity, ratings }: Product) {
    const { state, dispatch } = useStateContext()

    const item = {
        id,
        name,
        price,
        image,
        quantity: 1,
        ratings
    }

    const reduceQuantity = () => {
        dispatch({ type: "reduceQuantity", payload: item })
    }

    const increaseQuantity = () => {
        dispatch({ type: "UpdateCart", payload: item })
    }

    const removeFromCart = () => {
        dispatch({ type: "removeFromCart", payload: item })
    }

    const addToWishlist = () => {
        dispatch({ type: "AddToWishlist", payload: item })
    }

    return (
        <tr>
            <td>
                <img src={require(`../assets/images/${image}`)} alt="" />
                <h3>{name}</h3>
                <div className='flex items-center justify-center'>
                    <p className='flex items-center text-[#FF9F0D]'>{Array.from({ length: ratings }).map(() => <span><AiFillStar /></span>)}</p>
                    <p className='flex items-center text-[#E0E0E0]'>{Array.from({ length: 5 - ratings }).map(() => <span><AiFillStar /></span>)}</p>
                </div>
            </td>
            <td><h4>${price.toFixed(2)}</h4></td>
            <td>
                <button className='rounded-l-full' disabled={quantity <= 1} onClick={reduceQuantity}>-</button>
                <button>{quantity}</button>
                <button className='rounded-r-full' onClick={increaseQuantity}>+</button>
            </td>
            <td>${(price * quantity).toFixed(2)}</td>
            <td>
                <button className='text-[#FF9F0D]' onClick={addToWishlist}><BiHeart /></button><br /><br />
                <button className='text-red-600' onClick={removeFromCart}><BiTrash /></button>
            </td>
        </tr>
    )
}

export default SingleCartItem