import { Button } from '@mui/material'
import React from 'react'
import BannerImage from "../assets/pizza.jpeg"
import { Link } from 'react-router-dom'
import "../styles/Home.css"

export default function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{backgroundImage:`url(${BannerImage}`}}>
       <h1>Thara's Pizza</h1>
       <p>PIZZA TO FIT ANY TASTES</p>
       <Link to="/menu">
       <Button  variant="contained">
             Order Now
       </Button>
       </Link>
      </div>
    </div>
  )
}
