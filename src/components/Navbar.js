import React from 'react'
import logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
            <img className='logo' src={logo}/>
      </div>

      <div className='rightside'>
        <div className='list'>
        <Link to='/'>Home</Link>
       <Link to='/menu'>Menu</Link> 
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
        </div>
      
      </div>
    </div>
  )
}

