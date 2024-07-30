import React, { useState } from 'react'
import './Navbar.css'
import logo from './Assests/logo.png'
import cart_icon from './Assests/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu,setMenu] = useState("shop");




  return (
    <div className='navbar' >
        <div className="nav-logo">
            
            <p>JOB PORTAL</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("")}}><Link style={{textDecoration: 'none'}} to='/View'>View Jobs</Link> {menu==="view"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("")}}><Link style={{textDecoration: 'none'}} to='/View1'>View Applicants</Link> {menu==="view1"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("")}}><Link style={{textDecoration: 'none'}} to='/About'>About</Link> {menu==="About"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("")}}><Link style={{textDecoration: 'none'}} to='/Updates'>Updates</Link> {menu==="kids"?<hr/>:<></>}</li>

        </ul>
        <div className="nav-login-cart">
            <Link to='/Login'><button>Logout</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
