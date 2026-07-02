import React from 'react'
import styles from './Product.module.css'

const Product = ({productInfo}) => { 
  const {category, title, description, id, image, price, rating} = productInfo 
  return (
    <div className={styles['product-card']}>
      <img src={image} alt={category} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Add To Cart</button>
    </div>
  )
}

export default Product