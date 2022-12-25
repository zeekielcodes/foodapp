import React, { useState, useEffect } from 'react'
import { BiHeart, BiShoppingBag, BiUser } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from "../assets/Foodtuck.png"
import { useStateContext } from './StoreContext'

function MobileNav() {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const {state, dispatch} = useStateContext()

    useEffect(() => {
        setShow(false)
    },[location])
    return (
        <>
            <nav className='mobile'>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="icons text-[18px]">
                    <Link to="/login"><BiUser /></Link>
                    <Link to="/wishlist" className='relative'><BiHeart /><span className='absolute bg-[#FF9F0D] text-xs rounded-full -top-4 -right-4 w-[25px] h-[25px] flex justify-center items-center'>{state.wishlist.length}</span></Link>
            <Link to="/cart" className='relative'><BiShoppingBag/><span className='absolute bg-[#FF9F0D] text-xs rounded-full -top-4 -right-4 w-[25px] h-[25px] flex justify-center items-center'>{state.cart.length}</span></Link>
                </div>
                <button className='h-[40px] w-[40px]' onClick={() => setShow(!show)}><RxHamburgerMenu /></button>
            </nav>
            {show &&
                <div className="h-screen p-4 bg-black fixed z-50 top-0 left-0 right-0 bottom-0">
                    <button className='bg-[#FF9F0D] text-white shadow h-[40px] w-[40px]' onClick={() => setShow(!show)}>X</button>
                    <ul className='text-white flex justify-center items-center flex-col gap-4 h-4/5'>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/" end>Home</NavLink></li>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/menu">Menu</NavLink></li>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/blog">Blog</NavLink></li>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/chefs">Chefs</NavLink></li>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/about">About</NavLink></li>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/shop">Shop</NavLink></li>
                        <li className='py-4 w-full text-center hover:bg-white hover:text-black'><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>}
        </>
    )
}


export default MobileNav