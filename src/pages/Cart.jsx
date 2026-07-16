import React from 'react'
import { useOutletContext } from 'react-router'


const Cart = () => {
  const {cartItems, handleRemove, handleIncrement, handleDecrement} = useOutletContext()
  if(cartItems.length === 0) {
    return <h2>Your Cart is Empty</h2>
  }

  const cartTotal = cartItems.reduce((total, item) => {
    const productValue = item.price * item.productCount
    total+=productValue
    return total
  }, 0 ).toFixed(2)
  
  console.log(cartTotal)
  console.log(cartItems)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li>
          {cartItems.map(item => {
            return (
              <div key={item.id}>
                {/* <img src={item.image} alt="" /> */}
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <p>{item.productCount}</p>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Delete</button>
                </div>
                
              </div>
            )
          })}
        </li>
      </ul>
      <h3>Total: {cartTotal}</h3>
    </div>
  )
}

export default Cart