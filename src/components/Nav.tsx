import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Foodtuck.png"

const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Menu</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Pages</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Shop</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
        </ul>
        <div className="icons">
            <button>Cart</button>
        </div>
    </nav>
  )
}

export default Nav