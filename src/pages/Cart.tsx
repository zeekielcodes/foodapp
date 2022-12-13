import React from 'react'
import Banner from '../components/Banner'
import SingleCartItem from '../components/SingleCartItem'
import { useStateContext } from '../components/StoreContext'

function Cart() {
  const {state} = useStateContext()
  return (
    <div>
        <Banner pageName="Shopping Cart" page="Shopping Cart"/>
        <div className="cart">
          {state.cart.map(item => <SingleCartItem name={item.name} price={item.price} image={item.image} quantity={item.quantity} />)}
        </div>
    </div>
  )
}

export default Cart