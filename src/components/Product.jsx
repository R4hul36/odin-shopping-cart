import React, { useState } from 'react'
import styles from './Product.module.css'

const Product = ({productInfo}) => { 

  const [productCount, setProductCount] = useState(0)
  console.log(productCount);
  
  const {category, title, description, id, image, price, rating} = productInfo 

  const handleCountChange = (e, btnType) => {
    if(btnType === 'dec' && productCount === 0) {
      return
    }
     setProductCount((prevCount) => {
      if(btnType === "inc"){
        return Number(prevCount) + 1
      }else if(btnType === "dec"){
        return Number(prevCount) - 1
      }
      return e.target.value
    })
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
          <button onClick={(e) =>  handleCountChange(e, "dec")}>-</button>
          <input type="text" value={productCount} onChange={handleCountChange}/>
          <button onClick={(e) =>  handleCountChange(e, "inc")}>+</button>
        </div>

      </div>
      <button className={styles['cart-btn']}>Add To Cart</button>
    </div>
  )
}

export default Product