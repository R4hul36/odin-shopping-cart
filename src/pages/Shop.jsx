import React from 'react'
import { useOutletContext } from 'react-router'
import Product from '../components/Product'

const Shop = () => {
  const {shopData, loading, error} = useOutletContext()
  console.log(shopData);
  
  return (
    <div className='shop-container'>
      {shopData.map(productInfo => <Product key={productInfo.id}  productInfo={productInfo}/>)}
    </div>
  )
}

export default Shop