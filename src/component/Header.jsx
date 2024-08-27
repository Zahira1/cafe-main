import React, { useState } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Header = () => {
  const [message, setMessage] = useState('');

  const handleClick = (section) => {
    setMessage(`You clicked on ${section}`);
  };

  return (
    <header className="header">
      <div className="container text-center py-3">
        <div className="title h1">CAFE AROMA</div>
        <div className="subtitle bg-warning text-white d-inline-block px-3 py-1 mt-2 rounded">
          AUTHENTIC FLAVORS OF INDIA & NEPAL
        </div>
        <nav className="nav justify-content-center mt-3">
          <ButtonGroup>
          <Button className="nav-link btn btn-custom mx-1" onClick={() => handleClick('Home')}>Home</Button>
          <Button className="nav-link btn btn-custom mx-1" onClick={() => handleClick('Menu')}>Menu</Button>
          <Button className="nav-link btn btn-custom mx-1" onClick={() => handleClick('Order Online')}>Order Online</Button>
          <Button className="nav-link btn btn-custom mx-1" onClick={() => handleClick('Delivery')}>Delivery</Button>
          </ButtonGroup>
        </nav>
      </div>
      {message && <div className="message">{message}</div>}
    </header>
  );
};

export default Header;
