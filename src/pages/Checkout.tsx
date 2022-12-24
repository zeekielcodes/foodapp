import { doc, setDoc } from 'firebase/firestore/lite'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import CheckoutSidebar from '../components/CheckoutSidebar'
import SignInFirst from '../components/SignInFirst'
import { useStateContext } from '../components/StoreContext'
import { db } from '../firebase'

function Checkout() {
  const { state, dispatch } = useStateContext()
  const [billing, setBilling] = useState({
    address1: "",
    address2: "",
    phone: 0,
    city: "",
    state: "",
    postal: 0
  })
  const nav = useNavigate()

  const submitShipping = (e:React.FormEvent) => {
    e.preventDefault()
    setDoc(doc(db, "shipping", state.user.uid), {
      address1: billing.address1,
      address2: billing.address2,
      phone: billing.phone,
      city: billing.city,
      state: billing.state,
      postal: billing.postal
  })
  .then(() => {
    const modalContent = {
      title: "Shipping Address saved",
      text: "Your shipping address has been saved"
    }
    dispatch({type:"OPEN_MODAL", payload:modalContent})
    setBilling({
      address1: "",
      address2: "",
      phone: 0,
      city: "",
      state: "",
      postal: 0
    })
  })
  .catch(() => {
    const modalContent = {
      title: "An error occured!",
      text: "Couldn't save your shipping address, try again."
    }
    dispatch({type:"OPEN_MODAL", payload:modalContent})
  })
    
  }

  return (
    <div>
        <Banner pageName="Checkout Page" page="Checkout"/>
        {state.isAuthenticated && state.user ?
        <div className="checkout">
          <section className="form">
            <h2>Personal Info</h2>
            <h3 className='text-[16px] mb-2 font-Inter'>Name : {state.user.displayName}</h3>
            <h3 className='text-[16px] mb-2 font-Inter'>Email : {state.user.email}</h3>
            <h2>Shipping Address</h2>
            <form onSubmit={submitShipping}>
              <div className="inputarea">
                <label htmlFor="address1">Address Line 1</label><br />
                <input type="text" autoComplete='off' value={billing.address1} onChange={(e) => setBilling({...billing, address1:e.target.value})} name="address1" id="address1" />
              </div>
              <div className="inputarea">
                <label htmlFor="address2">Address Line 2</label><br />
                <input type="text" autoComplete='off' value={billing.address2} onChange={(e) => setBilling({...billing, address2:e.target.value})} name="address2" id="address2" />
              </div>
              <div className="inputarea">
                <label htmlFor="phone">Phone Number</label><br />
                <input type="text" autoComplete='off' value={billing.phone} onChange={(e) => setBilling({...billing, phone:parseInt(e.target.value)})} name="phone" id="phone" />
              </div>
              <div className="inputarea">
                <label htmlFor="city">City</label><br />
                <input type="text" autoComplete='off' value={billing.city} onChange={(e) => setBilling({...billing, city:e.target.value})} name="city" id="city" />
              </div>
              <div className="inputarea">
                <label htmlFor="state">State</label><br />
                <input type="text" autoComplete='off' value={billing.state} onChange={(e) => setBilling({...billing, state:e.target.value})} name="state" id="state" />
              </div>
              <div className="inputarea">
                <label htmlFor="zip">Postal Code</label><br />
                <input type="text" autoComplete='off' value={billing.postal} onChange={(e) => setBilling({...billing, postal:parseInt(e.target.value)})} name="zip" id="zip" />
              </div>
              <button className='border' onClick={() => nav("/cart")}>Back to Cart</button>
              <button className='bg-[#FF9F0D] text-white'>Proceed to Shipping</button>
            </form>
          </section>
          <section className="products">
            <CheckoutSidebar />
          </section>
        </div>
        : <SignInFirst />
}
    </div>
  )
}

export default Checkout