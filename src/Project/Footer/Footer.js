import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Udemy</h4>
        <ul>
          <li><NavLink to="/about">Udemy Business</NavLink></li>
          <li><NavLink to="/blog">Teach on Udemy</NavLink></li>
          <li><NavLink to="/careers">Get the app</NavLink></li>
          <li><NavLink to="/press">About us</NavLink></li>
          <li><NavLink to="/press">Contact us</NavLink></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Categories</h4>
        <ul>
          <li><NavLink to="/categories/business">Business</NavLink></li>
          <li><NavLink to="/categories/development">Development</NavLink></li>
          <li><NavLink to="/categories/finance">Finance</NavLink></li>
          <li><NavLink to="/categories/it-software">IT & Software</NavLink></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><NavLink to="/help">Help & Support</NavLink></li>
          <li><NavLink to="/affiliate">Affiliate</NavLink></li>
          <li><NavLink to="/terms">Terms</NavLink></li>
          <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
        </ul>
      </div>

      {/* <div className="footer-section">
        <h4>Social Media</h4>
        <ul>
          <li><a href="https://www.facebook.com/udemy" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/udemy" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/udemy/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/udemy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div> */}

      <div className="footer-section1">
        <p>&copy; 2023 Udemy. All rights reserved.</p>
      </div>
      <div>
        <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='' style={{width:'100px', position:'relative',top:'200px',right:'1340px'}}/>
      </div>
    </footer>
    
    </div>
  );
}

export default Footer;
