import React, { useState } from 'react'
import Banner from '../components/Banner'
import SingleShopFood from '../components/SingleShopFood'
import foods from "../shop.json"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { BsArrowRightCircle } from "react-icons/bs"
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"


function Shop() {
  const [filter, setFilter] = useState<number>(0)


  const filterSlider = (e:React.ChangeEvent<HTMLInputElement>) => {
    // setFilter(e.target.value)
    const hold = parseInt(e.currentTarget.value)
    setFilter(hold)
  }

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
            {foods.products.map(food => <SingleShopFood name={food.name} id={food.id} image={food.image} price={food.price} description={food.description} mainPrice={food.mainPrice} category={food.category} ratings={food.ratings}/>)}
           </div>
           <div className="pagination">
            <button><RxDoubleArrowLeft /></button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><RxDoubleArrowRight /></button>
           </div>
          </div>
          <div className="filter">
            <form className="searchbox">
              <input type="search" placeholder='Search Product' name="search" id="search" />
              <button><FiSearch /></button>
            </form>
            <h3>Category</h3>
            <input type="checkbox" name="category" id="sandwich" /> &nbsp; Sandwiches <br />
            <input type="checkbox" name="category" id="burger" /> &nbsp; Burger <br />
            <input type="checkbox" name="category" id="chup" /> &nbsp; Chicken Chup <br />
            <input type="checkbox" name="category" id="drinks" /> &nbsp; Drinks<br />
            <input type="checkbox" name="category" id="pizza" /> &nbsp; Pizza <br />
            <input type="checkbox" name="category" id="thi" /> &nbsp; Thi <br />
            <input type="checkbox" name="category" id="non-veg" /> &nbsp; Non-Veg <br />
            <input type="checkbox" name="category" id="others" /> &nbsp; Uncategorized <br />
            <div className="store-cta">
              <h4>Perfect Taste</h4>
              <h5>Classic Restaurant</h5>
              <h6>45.00$</h6>
              <Link to="/">Shop Now <BsArrowRightCircle /></Link>
            </div>
            <h3>Filter By Price</h3>
            <input type="range" name="filter" value={filter} id="price" onChange={filterSlider} className='range' />
          </div>
        </div>
    </div>
  )
}

export default Shop