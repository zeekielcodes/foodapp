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
          <table>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Remove</td>
            </tr>
            {state.cart.map(item => <SingleCartItem name={item.name} price={item.price} image={item.image} quantity={item.quantity} />)}
          </table>
        </div>
    </div>
  )
}

export default Cart