import React from 'react'
import { useStateContext } from './StoreContext'
import { useFlutterwave } from 'flutterwave-react-v3'
import { PaystackButton } from 'react-paystack'
import closePaymentModal from 'flutterwave-react-v3/dist/closeModal';
import { useNavigate } from 'react-router-dom';

function CheckoutSidebar() {
    const {state, dispatch} = useStateContext()
    const nav = useNavigate()

      const config = {
            public_key: 'FLWPUBK-e2e24043de418c526a74dd9718917fe3-X',
            tx_ref: Date.now().toString(),
            amount: state.totalAmount - state.discount,
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
              logo: 'https://pbs.twimg.com/profile_images/1411109433132859397/m0Uq-zje_400x400.jpg',
            },
          };
        
       const pay =  useFlutterwave(config)

       const payWithFlutter = () => {
            pay({
                  callback: (response) => {
                    dispatch({type:"CLEAR_CART"})
                    nav("/")
                      // closePaymentModal() // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
       }

       const componentProps = {
        email: state.user?.email,
        amount: (state.totalAmount - state.discount) * 100,
        metadata: {
          name: state.user?.displayName,
          phone: "090********",
          custom_fields: [{
            display_name: state.user?.displayName,
            variable_name: "",
            value: ""
          }]
        },
        publicKey: "pk_test_cc3bbc2ac57f163bf4777d4d70b6120b9f4051a0",
        text: "Pay with PayStack",
        onSuccess: () => {
          // alert("Thanks for doing business with us! Come back soon!!"),
          dispatch({type:"CLEAR_CART"})
          nav("/")
        },
        onClose: () => alert("Wait! Don't leave :("),
      }

  return (
    <div>
        {state.cart.map(item => (
              <div className='check-item'>
                <img src={require(`../assets/images/${item.image}`)} alt="" />
                <div className="details">
                    <h4>{item.name}</h4>
                    <h5>${(item.price).toFixed(2)} &nbsp;x &nbsp;{item.quantity}</h5>
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
                  <h6>{state.coupon ? state.coupon?.type === "flat" ? `$${(state.coupon.discount).toFixed(2)}` : `${(state.coupon.discount)}%` : "N/A"}</h6>
            </div>
            <hr />
            <div className='flex justify-between py-2 border-none font-BoldHelvetica'>
                  <h6>Total</h6>
                  <h6>${state.discount ? (state.totalAmount - state.discount).toFixed(2) : state.totalAmount}</h6>
            </div>
          <button className='bg-[#FF9F0D] w-full text-white rounded mb-2 h-[40px]' onClick={payWithFlutter}>Pay with Flutterwave</button>
          <PaystackButton className='bg-blue-500 w-full text-white rounded h-[40px]'  {...componentProps} />

    </div>
  )
}

export default CheckoutSidebar