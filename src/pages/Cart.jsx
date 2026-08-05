import React from 'react'
import { useOutletContext } from 'react-router'
import styles from './Cart.module.css'


const Cart = () => {
  const {cartItems, handleRemove, handleIncrement, handleDecrement} = useOutletContext()
  if(cartItems.length === 0) {
    return <h1>Your Cart is Empty</h1>
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
      <h1>Shopping Cart</h1>
      <ul className={styles['cart-products']}>
        
          {cartItems.map(item => {
            return (
              <li key={item.id} className={styles['product-container']}>
                
                <div className={styles['product-img']}>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>$ {item.price}</p>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <p>{item.productCount}</p>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Delete</button>
                </div>
                
              </li>
            )
          })}
       
      </ul>
      <h3>Total: {cartTotal}</h3>
    </div>
  )
}

export default Cart