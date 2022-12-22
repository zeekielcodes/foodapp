import React from 'react'
import { useStateContext } from './StoreContext'
import { useFlutterwave } from 'flutterwave-react-v3'
import closePaymentModal from 'flutterwave-react-v3/dist/closeModal';

function CheckoutSidebar() {
    const {state, dispatch} = useStateContext()

      const config = {
            public_key: 'FLWPUBK_TEST-c90fdc1ac72df9d3783f81917093134c-X',
            tx_ref: Date.now().toString(),
            amount: state.totalAmount,
            currency: 'USD',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
              email: state.user?.email,
              phone_number: '070********',
              name: state.user?.displayName,
            },
            customizations: {
              title: 'FoodTuck Food App',
              description: 'Payment for items in cart',
              logo: 'data:image/png;base64,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',
            },
          };
        
       const pay =  useFlutterwave(config)

       const payNow = () => {
            pay({
                  callback: (response) => {
                        const modalContent = {
                              title: `Payment`,
                              text: `${response}`
                            }
                            dispatch({type:"OPEN_MODAL", payload:modalContent})
                     console.log(response);
                  //     closePaymentModal() // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
       }

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
          <button className='bg-[#FF9F0D] w-full text-white rounded h-[40px]' onClick={payNow}>Place an order</button>
          
    </div>
  )
}

export default CheckoutSidebar