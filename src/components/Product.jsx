import React from 'react'
import styles from './Product.module.css'

const Product = ({productInfo}) => { 
  const {category, title, description, id, image, price, rating} = productInfo 
  return (
    <div className={styles['product-card']}>
      <div className={styles["product-info"]}>
        <div className={styles["img-container"]}>
          <img src={image} alt={category} />
        </div>
        <h3 title={title}>{title}</h3>
        <p>${price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  )
}

export default Product