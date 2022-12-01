import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Foodtuck.png"

const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/pages">Pages</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="icons">
            <button>Cart</button>
        </div>
    </nav>
  )
}

export default Nav