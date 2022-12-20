import React, { useState } from 'react'
import { BiHeart, BiShoppingBag, BiUser } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/Foodtuck.png"

function MobileNav() {
    const [show, setShow] = useState(false)

if(!show) {
  return (
    <nav className='mobile'>
        <Link to="/">
            <img src={logo} alt="" />
        </Link>
        <div className="icons text-2xl">
            <Link to="/login"><BiUser /></Link>
            <Link to="/wishlist"><BiHeart /></Link>
            <Link to="/cart"><BiShoppingBag /></Link>
        </div>
        <button onClick={() => setShow(!show)}><RxHamburgerMenu /></button>
    </nav>
  )
} else {
    return (
        <div className="h-screen bg-black fixed top-0 left-0 right-0 bottom-0">
            <button className='bg-white shadow px-4 py-2' onClick={() => setShow(!show)}>X</button>
            <ul className='text-white flex justify-center items-center flex-col gap-4 h-4/5'>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/" end>Home</NavLink></li>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/menu">Menu</NavLink></li>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/blog">Blog</NavLink></li>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/pages">Pages</NavLink></li>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/about">About</NavLink></li>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/shop">Shop</NavLink></li>
            <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </div>
    )
}
}

export default MobileNav