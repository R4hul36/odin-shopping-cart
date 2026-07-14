import React from 'react'
import { useOutletContext } from 'react-router'


const Cart = () => {
  const {cartItems} = useOutletContext()
  if(cartItems.length === 0) {
    return <h2>Your Cart is Empty</h2>
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li>
          {cartItems.map(item => {
            return (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <button>-</button>
                  <p>{item.productCount}</p>
                </div>
              </div>
            )
          })}
        </li>
      </ul>
      
    </div>
  )
}

export default Cart