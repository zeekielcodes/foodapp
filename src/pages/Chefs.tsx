import React from 'react'
import Banner from '../components/Banner'
import chefs from "../chefs.json"

function Chefs() {
  return (
    <div>
        <Banner pageName="Our Chef" page="Chef"/>
        <div className="chefs">
          {chefs.chefs.map(chef => (
            <div className="chef-card" key={chef.id}>
              <img src={require(`../assets/images/${chef.image}`)} alt="" />
              <h3>{chef.name}</h3>
              <p>Chef</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Chefs