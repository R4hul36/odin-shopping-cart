import React from 'react'
import { NavLink } from 'react-router'
import styles from "./Navbar.module.css"

const Navbar = () => {
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
          <NavLink to="cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar