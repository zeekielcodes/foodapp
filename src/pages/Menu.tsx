import React from 'react'
import { BiCoffee } from "react-icons/bi"
import Banner from '../components/Banner'
import SingleMenuItem from '../components/SingleMenuItem'
import menu from "../menu.json"
import starter from "../assets/images/starter.png"
import bakery from "../assets/images/bakery.png"
import bistro from "../assets/images/bistro.png"
import coffee from "../assets/images/coffee.png"
import fork from "../assets/images/fork.png"
import restaurant from "../assets/images/restaurant.png"
import bakery2 from "../assets/images/bakery2.png"
import main from "../assets/images/main.png"
import MidMenuBanner from '../components/MidMenuBanner'

function Menu() {
  return (
    <div>
         <Banner pageName="Our Menu" page="Menu"/>
         <div className="menu">
          <div className="each-menu">
            <img src={starter} alt="" />
          <div className="menu-list">
            <BiCoffee className="text-[#FF9F0D] text-[24px]"/>
            <h2>Starter Menu</h2>
            {menu.starter.map(item => <SingleMenuItem name={item.name} calories={item.calories} ingredient={item.ingredient} price={item.price} />)}
          </div>
          </div>
          <div className="each-menu mt-20 flex-row-reverse">
            <img src={main} alt="" />
          <div className="menu-list">
            <BiCoffee className="text-[#FF9F0D] text-[24px]"/>
            <h2>Main Course</h2>
            {menu.main.map(item => <SingleMenuItem name={item.name} calories={item.calories} ingredient={item.ingredient} price={item.price} />)}
          </div>
          </div>
         </div>
         <MidMenuBanner />
         <div className="menu">
          <div className="each-menu">
            <img src={starter} alt="" />
          <div className="menu-list">
            <BiCoffee className="text-[#FF9F0D] text-[24px]"/>
            <h2>Dessert</h2>
            {menu.dessert.map(item => <SingleMenuItem name={item.name} calories={item.calories} ingredient={item.ingredient} price={item.price} />)}
          </div>
          </div>
          <div className="each-menu mt-20 flex-row-reverse">
            <img src={main} alt="" />
          <div className="menu-list">
            <BiCoffee className="text-[#FF9F0D] text-[24px]"/>
            <h2>Drinks</h2>
            {menu.drinks.map(item => <SingleMenuItem name={item.name} calories={item.calories} ingredient={item.ingredient} price={item.price} />)}
          </div>
          </div>
         </div>
         <div className="partners">
          <p>Partners & Clients</p>
          <h6>We work with the best people</h6>
          <div className="brands">
            <img src={restaurant} alt="" />
            <img src={bakery2} alt="" />
            <img src={fork} alt="" />
            <img src={coffee} alt="" />
            <img src={bistro} alt="" />
            <img src={bakery} alt="" />
          </div>
         </div>
    </div>
  )
}

export default Menu