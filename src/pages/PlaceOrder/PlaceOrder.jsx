import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  const subtotal = getTotalCartAmount(); 
  const deliveryFee = subtotal > 0 ? 2 : 0; 
  const total = subtotal + deliveryFee;
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-feilds">
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />
        <div className="multi-feilds">
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className="multi-feilds">
          <input type='text' placeholder='Zip' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="cart-total-details">
            <p>Free Delivery</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>
    </form>
  )
}

export default PlaceOrder
