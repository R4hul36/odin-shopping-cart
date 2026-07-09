import React from 'react'
import { useOutletContext } from 'react-router'


const Cart = () => {
  const {cartItems} = useOutletContext()
  if(cartItems.length === 0) {
    console.log("cart is empty")
  }else {
    console.log(cartItems)
  }
  return (
    <div><h1>Cart</h1></div>
  )
}

export default Cart