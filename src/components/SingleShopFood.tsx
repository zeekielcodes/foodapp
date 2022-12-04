import React from 'react'

interface Props {
    name: string,
    // image:string,
    price:number,
    mainPrice:number | undefined,
    category: string,
    ratings: number,
    // images: [],
}

function SingleShopFood({name, price, mainPrice, category, ratings}:Props) {
  return (
    <div className='each-food'>
        <img src={"../assets/images/burger.png"} alt="" />
        <h3>{name}</h3>
        <h4>${price.toFixed(2)} <span>{mainPrice ? "$"+mainPrice.toFixed(2) : null}</span></h4>
    </div>
  )
}

export default SingleShopFood