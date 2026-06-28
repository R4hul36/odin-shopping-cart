import React from 'react'
import { useOutletContext } from 'react-router'

const Shop = () => {
  const {shopData, loading, error} = useOutletContext()
  console.log(shopData);
  
  return (
    <div>Shop</div>
  )
}

export default Shop