import React from 'react'
import group from "../assets/images/Group.svg"
import group1 from "../assets/images/Group1.svg"
import group2 from "../assets/images/Group2.svg"
import group3 from "../assets/images/Group3.svg"

function MidMenuBanner() {
  return (
    <div className='mid-menu'>
        <div className="overlay">
            <div>
                <img src={group2} alt="" />
                <h5>420</h5>
                <p>Professional Chefs</p>
            </div>
            <div>
                <img src={group3} alt="" />
                <h5>320</h5>
                <p>Items Of Food</p>
            </div>
            <div>
                <img src={group} alt="" />
                <h5>30+</h5>
                <p>Years Of Experience</p>
            </div>
            <div>
                <img src={group1} alt="" />
                <h5>220</h5>
                <p>Happy Customers</p>
            </div>
        </div>
    </div>
  )
}

export default MidMenuBanner