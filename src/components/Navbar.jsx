import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>
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