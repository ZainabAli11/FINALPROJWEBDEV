import React from 'react';
import './Footer.css';
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img 
            src={assets.logo} 
            alt="" 
            className="logo" 
            style={{ width: '100px', height: 'auto' }}
          />
<p>
  At Zesty Foods, we believe every meal should be a burst of flavor and freshness. 
  With just a few taps, you can explore our diverse menu, place your order, and enjoy 
  restaurant-quality dishes delivered hot and fast to your doorstep. Whether you’re 
  craving comfort food, healthy bites, or gourmet delights, our team ensures every 
  order is packed with care and delivered on time. Experience the joy of hassle-free 
  dining — wherever you are.
</p>

          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 3123456789</li>
            <li>zestyfoods@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
        © 2025 Zesty Foods. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
