import React from 'react'
import logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
            <img src={logo}/>
      </div>

      <div className='rightside'>
       <Link></Link>
      </div>
    </div>
  )
}
