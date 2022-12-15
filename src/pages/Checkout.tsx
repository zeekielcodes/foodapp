import React from 'react'
import Banner from '../components/Banner'
import CheckoutSidebar from '../components/CheckoutSidebar'

function Checkout() {

  return (
    <div>
        <Banner pageName="Checkout Page" page="Checkout"/>
        <div className="checkout">
          <section className="form">
            <h2>Shipping Address</h2>
            <form>
              <div className="inputarea">
                <label htmlFor="address1">Address Line 1</label><br />
                <input type="text" name="address1" id="address1" />
              </div>
              <div className="inputarea">
                <label htmlFor="address2">Address Line 2</label><br />
                <input type="text" name="address2" id="address2" />
              </div>
              <div className="inputarea">
                <label htmlFor="phone">Phone Number</label><br />
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="inputarea">
                <label htmlFor="city">City</label><br />
                <input type="text" name="city" id="city" />
              </div>
              <div className="inputarea">
                <label htmlFor="state">State</label><br />
                <input type="text" name="state" id="state" />
              </div>
              <div className="inputarea">
                <label htmlFor="zip">Postal Code</label><br />
                <input type="text" name="zip" id="zip" />
              </div>
              <button className='border'>Back to Cart</button>
              <button className='bg-[#FF9F0D] text-white'>Proceed to Shipping</button>
            </form>
          </section>
          <section className="products">
            <CheckoutSidebar />
          </section>
        </div>
    </div>
  )
}

export default Checkout