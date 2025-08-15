import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div style={{ textAlign: "center" }}>
        <img className='logo' src={assets.logo} alt="" style={{width:"90px",height:"auto"}}/>
        <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "4px", fontFamily: "'Outfit', sans-serif" }}>
          Admin Panel
        </div>
      </div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
