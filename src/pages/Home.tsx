import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import image from "../assets/images/Image.png"
import home from "../assets/images/home.png"
import home1 from "../assets/images/home1.png"
import home2 from "../assets/images/home2.png"
import cat from "../assets/images/cat.png"
import cat1 from "../assets/images/cat1.png"
import cat2 from "../assets/images/cat2.png"
import cat4 from "../assets/images/cat4.png"
import MidMenuBanner from '../components/MidMenuBanner'

function Home() {
  return (
    <div className="homepage">
      <div className="hero bg-[#0D0D0D] text-white">
        <div className="hero-text">
          <h2><span className='text-[#FF9F0D]'>Th</span>e Art of speed
            food Quality</h2>
          <p className='text-white mt-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
          <Link to="/menu" className='bg-[#FF9F0D] px-8 py-4 rounded-3xl'>See menu</Link>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="hero bg-[#0D0D0D] text-white">
        <div className="hero-text">
          <h2><span className='text-[#FF9F0D]'>We</span> Create the best
            food products
          </h2>
          <p className='text-white my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <ul>
            <li><BiCheck className='text-[24px]' /> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li><BiCheck className='text-[24px]' /> Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
            <li><BiCheck className='text-[24px]' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <Link to="/about" className='bg-[#FF9F0D] px-8 py-4 rounded-3xl'>Read more</Link>
        </div>
        <div className="images">
          <img src={home} alt="" className='w-full' />
          <div className="flex gap-4 mt-4 w-full">
            <img src={home1} alt="" />
            <img src={home2} alt="" />
          </div>
        </div>
      </div>
      <div className="category">
        <h3 className='text-[#FF9F0D]'>Food Category</h3>
        <h4 className='text-white mb-4 text-[34px] font-BoldHelvetica'>Choose Food Item</h4>
        <div>
          <img src={cat} alt="" />
          <img src={cat1} alt="" />
          <img src={cat2} alt="" />
          <img src={cat4} alt="" />
        </div>
      </div>
      <MidMenuBanner />
    </div>
  )
}

export default Home