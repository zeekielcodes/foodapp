import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/Foodtuck.png"

import { BiUser, BiShoppingBag, BiHeart } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { useStateContext } from './StoreContext'

const Nav = () => {
  const {state, dispatch} = useStateContext()
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
            <Link to="/login"><BiUser /></Link>
            <Link to="/wishlist" className='relative'><BiHeart /><span className='absolute bg-red-400 text-xs rounded-full -top-2 -right-3 w-[20px] h-[20px] flex justify-center items-center'>{state.wishlist.length}</span></Link>
            <Link to="/cart" className='relative'><BiShoppingBag/><span className='absolute bg-red-400 text-xs rounded-full -top-2 -right-3 w-[20px] h-[20px] flex justify-center items-center'>{state.cart.length}</span></Link>
        </div>
    </nav>
  )
}

export default Nav