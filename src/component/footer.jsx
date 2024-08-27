import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: aromapoint2024@gmail.com</p>
          <p>Phone: (979)-485-2253</p>
          <p>Address: 4337 Wellborn Road, Bryan, TX, 77801</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
