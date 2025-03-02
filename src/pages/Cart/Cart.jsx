import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

const {cardItems,food_list,removeFromCart,getTotalCartAmount } = useContext(StoreContext)
const subtotal = getTotalCartAmount(); 
const deliveryFee = subtotal > 0 ? 2 : 0; 
const total = subtotal + deliveryFee;

const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cardItems[item._id]>0){
            return(
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price*cardItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
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
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If You have a promocode, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>Sunbmit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
