import React from 'react'
import Banner from '../components/Banner'
import about from "../assets/images/about.png"
import banner from "../assets/images/about2.png"
import { BiPlay } from 'react-icons/bi'
import student from "../assets/images/Student.png"
import coffee from "../assets/images/Coffee2.png"
import person from "../assets/images/Person.png"

function About() {
  return (
    <div>
      <Banner pageName="About Us" page="About" />
      <div className="about">
        <div className="hero">
          <img src={about} alt="" />
          <div className="hero-text">
            <h2>Food is an important part of a balanced diet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className="flex gap-2">
              <button className='bg-[#FF9F0D] text-white'>Show more</button>
              <button className='flex items-center gap-2'><BiPlay className='bg-[#FF9F0D] h-full text-white rounded-full text-[30px]' /> Watch Video</button>
            </div>
          </div>
        </div>
<div className="features">
  <h3>Why Choose us</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.</p>
  <img src={banner} alt="" />
  <div className="featurelist">
    <div>
      <img src={student} alt="" />
      <h4>Best Chef</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
    </div>
    <div>
      <img src={coffee} alt="" />
      <h4>120 Item food</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
    </div>
    <div>
      <img src={person} alt="" />
      <h4>Clean Environment</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default About