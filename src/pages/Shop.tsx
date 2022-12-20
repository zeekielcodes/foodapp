import React, { useState } from 'react'
import Banner from '../components/Banner'
import SingleShopFood from '../components/SingleShopFood'
import foods from "../shop.json"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { BsArrowRightCircle } from "react-icons/bs"
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"
import { Product } from '../components/model'


interface Props {
  id:number,
  name: string,
  image:string,
  price:number,
  mainPrice?:number,
  description: string,
  category: string,
  ratings: number,
  // images: [],
}


function Shop() {
  const [filter, setFilter] = useState<number>(0)
  const [query, setQuery] = useState<string>("")
  const [store, setStore] = useState<Props[]>(foods.products)
  const [oStore, setOStore] = useState<Props[]>(foods.products)
  const [sort, setSort] = useState<string>("all")
  

  const searchFood = () => {
    const Food:Props[] = foods.products   
    const searchFoods = Food.filter(food => food.name.toUpperCase().match(query.toUpperCase()))
    setStore(searchFoods)
    
  }

  const filterSlider = (e:React.ChangeEvent<HTMLInputElement>) => {
   
    const hold = parseInt(e.currentTarget.value)
    setFilter(hold)
    const copy = foods.products
    setStore(copy)
    const fullStorePrices = copy.map(food => food.price)
    const maxPrice = Math.max(...fullStorePrices)
    const percent = (hold / 100) * maxPrice
    const filtered = copy.filter(item => item.price >= percent)
    setStore(filtered)
    
    
  }

  const sortFoods = (e:React.FormEvent<HTMLSelectElement>) => {
    const selectedValue = e.currentTarget.value
    setSort(selectedValue)
    switch(selectedValue) {
      case "lowPrices" :
        const low = store.sort((a, b) => a.price - b.price)
        setStore(low)
        return

      case "highPrices" :
          const high = store.sort((a, b) => b.price - a.price)
          setStore(high)
          break

      case "ratings" :
            const ratings = store.sort((a, b) => a.ratings - b.ratings)
            setStore(ratings)
            break

      case "all" :
            setStore(foods.products)
            break

      default :
        setStore(foods.products)
    }
    
  }

  return (
    <div>
        <Banner pageName="Our Shop" page="Shop"/>
        <div className="shop">
          <div className="store">
           Sort by : <select name="sort" id="sort" value={sort} onChange={sortFoods}>
            <option value="all">Default</option>
           <option value="ratings">Ratings</option>
            <option value="lowPrices">Low to High</option>
            <option value="highPrices">High to Low</option>
           </select>
           <div className="foods">
            {store.map(food => <SingleShopFood key={food.id} name={food.name} id={food.id} image={food.image} price={food.price} description={food.description} mainPrice={food.mainPrice} category={food.category} ratings={food.ratings}/>)}
           </div>
           {store.length > 6 &&
           <div className="pagination">
            <button><RxDoubleArrowLeft /></button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><RxDoubleArrowRight /></button>
           </div>
}
          </div>
          <div className="filter">
            <form className="searchbox" onSubmit={(e) => e.preventDefault()}>
              <input type="search" placeholder='Search Product' autoComplete='off' value={query} onKeyUp={searchFood} onChange={(e) => setQuery(e.target.value)} name="search" id="search" />
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