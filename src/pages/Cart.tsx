import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import Empty from '../components/Empty'
import SingleCartItem from '../components/SingleCartItem'
import { useStateContext } from '../components/StoreContext'
import coupons from "../coupons.json"

function Cart() {
  const { state, dispatch } = useStateContext()
  const [coupon, setCoupon] = useState<string>("")
  const nav = useNavigate()

  const addCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (coupon) {
      const valid = coupons.coupons.find(each => each.code === coupon)
      if (valid) {
        dispatch({ type: "ADD_COUPON", payload: valid })
      } else {
        const modalContent = {
          title: "Invalid Coupon",
          text: `Coupon code "${coupon}" is invalid`
        }
        dispatch({ type: "OPEN_MODAL", payload: modalContent })
      }
    } else {
      const modalContent = {
        title: "No Coupon",
        text: "Enter your coupon"
      }
      dispatch({ type: "OPEN_MODAL", payload: modalContent })
    }
    setCoupon("")

  }

  // useEffect(() => {
  
  // },[state])

  return (
    <div>
      <Banner pageName="Shopping Cart" page="Shopping Cart" />
      {state.cart.length > 0 ?
        <div className="cart" >
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
                  <td>Remove</td>
                </tr>
                {state.cart.map(item => <SingleCartItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} ratings={item.ratings} />)}
              </tbody>
            </table>
          </div>

          <div className="couponNtotal">
            <section className="coupon">
              <h5>Coupon Code</h5>
              <div className="addCoupon">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                <form onSubmit={addCoupon}>
                  <input type="text" autoComplete='off' name="coupon" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder='Enter Coupon here...' id="coupon" />
                  <button type="submit">Apply</button>
                </form>
              </div>
            </section>
            <section className="total">
              <h5>Total Bill</h5>
              <div className="border rounded py-2 text-[16px]">
                <div className='flex justify-between px-4 py-2 border-none font-BoldHelvetica'>
                  <h6>Cart Subtotal</h6>
                  <h6>${(state.totalAmount).toFixed(2)}</h6>
                </div>
                <div className='flex justify-between font-Inter text-[#4F4F4F] px-4 py-2 border-none'>
                  <h6>Shipping Charge</h6>
                  <h6>Free</h6>
                </div>
                <div className='flex justify-between font-Inter text-[#4F4F4F] px-4 py-2 border-none'>
                  <h6>Discount</h6>
                  <h6>{state.coupon ? state.coupon?.type === "flat" ? `$${(state.coupon.discount).toFixed(2)}` : `${(state.coupon.discount)}%` : "N/A"}</h6>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between px-4 py-2 border-none font-BoldHelvetica'>
                  <h6>Total Amount</h6>
                  <h6>${state.discount ? (state.totalAmount - state.discount).toFixed(2) : state.totalAmount}</h6>
                </div>
              </div>
              <button onClick={() => nav("/checkout")} className='w-full mt-2 bg-[#FF9F0D] text-[18px] py-2 text-white rounded font-Inter'>Proceed to Checkout</button>
            </section>
          </div>
        </div>
        :
        <Empty image="cart.jpg" text="Your cart is empty" paragraph="Proceed to store and start shopping" />}
    </div>
  )
}

export default Cart