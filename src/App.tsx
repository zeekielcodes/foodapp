import React from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
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

function App() {
  return (
    <main>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      <Footer />
      </Router>
    </main>
  )
}

export default App