import React from 'react'
import Banner from '../components/Banner'
import SingleShopFood from '../components/SingleShopFood'
import foods from "../shop.json"

function Shop() {
  return (
    <div>
        <Banner pageName="Our Shop" page="Shop"/>
        <div className="shop">
          <div className="store">
           Sort by:  <select name="sort" id="sort">
            <option value="newest">Newest</option>
           </select>
           Show:  <select name="show" id="show">
            <option value="default">Default</option>
           </select>
           <div className="foods">
            {foods.products.map(food => <SingleShopFood name={food.name} price={food.price} mainPrice={food.mainPrice} category={food.category} ratings={food.ratings}/>)}
           </div>
          </div>
          <div className="filter">
            Filter
          </div>
        </div>
    </div>
  )
}

export default Shop