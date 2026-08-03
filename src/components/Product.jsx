import React, { useState } from 'react'
import styles from './Product.module.css'
import { useOutletContext } from 'react-router'

const Product = ({productInfo}) => {  

  const {handleCart} = useOutletContext()
  const [productCount, setProductCount] = useState(1)
  // console.log(productCount);
  const {category, title, description, id, image, price, rating} = productInfo 
  const product = {title, id, image, price, productCount}
  console.log(productInfo);
  

  const handleCountFieldChange = (e) => {
    const value = e.target.value
    if(value === "") {
      setProductCount(value)
      return
    }

    if(!/^\d+$/.test(value)){
      return 
    }

    const num = Number(value)

    if(num<1){
      return
    } 
    setProductCount(value)
  }

  const handleCountIncrement = () => {
    setProductCount(prevCount => Number(prevCount) + 1)
  }

  const handleCountDecrement = (e) => {
    if(productCount <= 1){
      return
    } 
    setProductCount(prevCount => Number(prevCount) - 1)
  }


  return (
    <div className={styles['product-card']}>
      <div className={styles["product-info"]}>
        <div className={styles["img-container"]}>
          <img src={image} alt={category} />
        </div>
        <h3 title={title}>{title}</h3>
        <div className={styles["row-container"]}>
          <p className={styles["product-price"]}><span>$</span>{price}</p>
          <div className={styles["rating-container"]}>
            <p>⭐ {rating.rate} ({rating.count})</p>
            
          </div>
        </div>
        
        <div className={styles["quantity-section"]}>
          <button onClick={(e) =>  handleCountDecrement(e)}>-</button>
          <input type="text" value={productCount} onChange={handleCountFieldChange}/>
          <button onClick={(e) =>  handleCountIncrement(e)}>+</button>
        </div>

      </div>
      <button className={styles['cart-btn']} onClick={() => handleCart(product)}>Add To Cart</button>
    </div>
  )
}

export default Product