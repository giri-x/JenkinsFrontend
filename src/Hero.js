import React from 'react'
import './Hero.css'
import handIcon from './Assests/hand_icon.png'
import arrow from './Assests/arrow.png'
import heroImage from './Assests/hero_image.png'


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>GET YOUR DREAM CARRER</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Technology</p>
                <img src={handIcon} alt="" />
            </div>
            <p>made </p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Apply for Job Now</div>
            <img src={arrow} alt="" />
        </div>

      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />

      </div>
    </div>
  )
}

export default Hero
