import React from 'react'

interface Props {
    name:string,
    ingredient:string,
    price:number,
    calories:string
}

function SingleMenuItem({name, ingredient, price, calories}:Props) {
  return (
    <div className='singlemenu'>
        <div className="nameNprice">
            <h3>{name}</h3>
            <h3>{price}$</h3>
        </div>
        <p>{ingredient}</p>
        <p>{calories}</p>
    </div>
  )
}

export default SingleMenuItem