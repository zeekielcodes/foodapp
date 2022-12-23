import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const {pathname} = useLocation()
    
  useEffect(() => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    
  },[pathname])
  return null
}

export default ScrollToTop