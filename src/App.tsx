import React, {useEffect} from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Pages from './pages/Pages'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Error from './pages/Error'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Chefs from './pages/Chefs'
import FAQs from './pages/FAQs'
import ProductDetails from './pages/ProductDetails'
import { useStateContext } from "./components/StoreContext"
import Wishlist from './pages/Wishlist'
import { Product } from './components/model'
import Modal from './components/Modal'
import MobileNav from './components/MobileNav'
import Profile from './pages/auth/Profile'
import { auth } from './firebase'
import ScrollToTop from './components/ScrollToTop'

function App() {
 const {state, dispatch} = useStateContext()

  
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if(savedCart) {
      const parsed:Product[] = JSON.parse(savedCart)
      parsed.forEach(item => 
        state.cart.find(food => food.id === item.id) ? dispatch({type:"UpdateCart", payload:item}) :
        dispatch({type:"AddToCart", payload: item}))
      console.log(parsed);
      
      // dispatch({type:"localStorageCart", payload:parsed})
    }    

    const savedWishlist = localStorage.getItem("wishlist")
    if(savedWishlist) {
      const wishlist:Product[] = JSON.parse(savedWishlist)
      wishlist.forEach(item => 
        state.wishlist.find(food => food.id === item.id) ? "" :
        dispatch({type:"AddToWishlist", payload: item}))
    }    
  },[])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))  
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist)) 
    
  }, [state])

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch({type:"LOGGED_IN", payload:user})
      } else {
        dispatch({type:"LOGGED_OUT"})
      }
    })
  },[])


  return (
    <main>
      {state.showModal && <Modal /> }
      <Router>
        {window.innerWidth <= 768 ? <MobileNav /> : <Nav />}
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      <Footer />
      </Router>
    </main>
  )
}

export default App