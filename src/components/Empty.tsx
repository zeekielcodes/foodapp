import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    image:string,
    text:string,
    paragraph:string
}

function Empty({image, text, paragraph}:Props) {
  return (
    <div className="empty">
        <img src={require(`../assets/images/${image}`)} alt="" />
        <h3>{text}</h3>
        <p>{paragraph}</p>
        <Link to="/shop">Go to Shop</Link>
    </div>
  )
}

export default Empty