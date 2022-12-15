import React from 'react'
import { useStateContext } from './StoreContext'

function CheckoutSidebar() {
    const {state} = useStateContext()
  return (
    <div>
        {state.cart.map(item => (
              <div className='check-item'>
                <img src={require(`../assets/images/${item.image}`)} alt="" />
                <div className="details">
                    <h4>{item.name}</h4>
                    <h5>{(item.price).toFixed(2)}$ &nbsp;x &nbsp;{item.quantity}</h5>
                </div>
                
              </div>
            ))}
            <hr />
            <div className='flex justify-between py-2 border-none font-BoldHelvetica text-[#4F4F4F]'>
                  <h6>Subtotal</h6>
                  <h6>${(state.totalAmount).toFixed(2)}</h6>
            </div>
            <div className='flex justify-between py-2 border-none font-BoldHelvetica text-[#4F4F4F]'>
                  <h6>Shipping</h6>
                  <h6>Free</h6>
            </div>
            <div className='flex justify-between py-2 border-none font-BoldHelvetica text-[#4F4F4F]'>
                  <h6>Discount</h6>
                  <h6>N/A</h6>
            </div>
            <hr />
            <div className='flex justify-between py-2 border-none font-BoldHelvetica'>
                  <h6>Total</h6>
                  <h6>${(state.totalAmount).toFixed(2)}</h6>
            </div>
          <button className='bg-[#FF9F0D] w-full text-white rounded h-[40px]'>Place an order</button>
          
    </div>
  )
}

export default CheckoutSidebar