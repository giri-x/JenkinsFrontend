import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import NewsLetter from './NewsLetter'
import Hero from './Hero'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NewsLetter/>
    </div>
  )
}

export default Home
