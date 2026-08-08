import React from 'react'
import { NavLink } from 'react-router'
import styles from "./Navbar.module.css"

const Navbar = ({cartCount}) => {


  console.log(cartCount);
  
 
  return (
    <nav className={styles['main-nav']}>
      <ul className={styles['link-container']}>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart {cartCount}</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar