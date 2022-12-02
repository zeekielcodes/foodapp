import React from 'react'
import { BannerProps } from './model'
import { Link } from "react-router-dom"
import { FaGreaterThan } from "react-icons/fa"

function Banner({pageName, page}:BannerProps) {
  return (
    <div className='header'>
        <h1>{pageName}</h1>
        <p><Link to="/">Home &nbsp;&#062;</Link> {page}</p>
    </div>
  )
}

export default Banner