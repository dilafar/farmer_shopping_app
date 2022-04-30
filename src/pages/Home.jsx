import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    
  <div>
  <div  className="shadow p-3 mb-3 bg-white rounded" >
          <Navbar/>
          </div>   
          <Slider />




  </div>
  )
}

export default Home