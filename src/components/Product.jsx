import React, { useState } from 'react'
import styles from './Product.module.css'
import { useOutletContext } from 'react-router'

const Product = ({productInfo}) => {  

  const {handleCart} = useOutletContext()
  const [productCount, setProductCount] = useState(1)
  // console.log(productCount);
  const {category, title, description, id, image, price, rating} = productInfo 
  const product = {title, id, image, price, productCount}


  const handleCountFieldChange = (e) => {
    if(productCount < 1) {
      return
    }
    setProductCount(e.target.value)
  }

  const handleCountIncrement = () => {
    setProductCount(prevCount => prevCount + 1)
  }

  const handleCountDecrement = (e) => {
    if(productCount === 1){
      return
    } 
    setProductCount(prevCount => prevCount - 1)
  }


  return (
    <div className={styles['product-card']}>
      <div className={styles["product-info"]}>
        <div className={styles["img-container"]}>
          <img src={image} alt={category} />
        </div>
        <h3 title={title}>{title}</h3>
        <p>${price}</p>
        <div className="quantity-section">
          <button onClick={(e) =>  handleCountDecrement(e)}>-</button>
          <input type="number" min="1" value={productCount} onChange={handleCountFieldChange}/>
          <button onClick={(e) =>  handleCountIncrement(e)}>+</button>
        </div>

      </div>
      <button className={styles['cart-btn']} onClick={() => handleCart(product)}>Add To Cart</button>
    </div>
  )
}

export default Product