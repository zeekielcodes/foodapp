import React from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <main>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
      </Router>
    </main>
  )
}

export default App