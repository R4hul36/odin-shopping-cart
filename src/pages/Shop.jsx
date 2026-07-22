import React from 'react'
import { useOutletContext } from 'react-router'
import Product from '../components/Product'
import styles from './Shop.module.css'

const Shop = () => {
  const {shopData, loading, error} = useOutletContext()
  //console.log(shopData);
  
  if(loading) {
    return <div>
      <p>Loading...</p>
    </div>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <div className={styles['shop-container']} >
      <h1>Products</h1>
      <div className={styles['products-container']}>
      {shopData.map(productInfo => <Product key={productInfo.id}  productInfo={productInfo}/>)}
      </div>
    </div>
  )
}

export default Shop