import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/Foodtuck.png"

import { BiUser, BiShoppingBag } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"

const Nav = () => {
  return (
    <nav>
        <Link to="/"><img src={logo} alt="" /></Link>
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
            <button><FiSearch /></button>
            <button><BiUser /></button>
            <button><BiShoppingBag /></button>
        </div>
    </nav>
  )
}

export default Nav