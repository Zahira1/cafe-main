import React, { useState } from 'react';
import Home from './component/Home';
import Menu from './component/Menu';
import OrderOnline from './component/OrderOnline';
import Delivery from './component/Delivery';
import Footer from './component/footer';
import './App.css';
import './component/Header.css';

function App() {
  const [currentSection, setCurrentSection] = useState('Home');

  const renderSection = () => {
    switch (currentSection) {
      case 'Home':
        return <Home />;
      case 'Menu':
        return <Menu />;
      case 'Order Online':
        return <OrderOnline />;
      case 'Delivery':
        return <Delivery />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container header text-center py-3">
          <div className="title h1">Aroma Indian & Nepalese Cuisine</div>
          <div className="subtitle bg-warning text-black d-inline-block px-3 py-1 mt-2 rounded">
            Flavors from India and Nepal
          </div>
          <nav className="nav justify-content-center mt-3">
            <div className='btn-group' role="group" aria-label="Menu-btn">
              <button className="btn btn-primary nav-btn home" onClick={() => setCurrentSection('Home')}>Home</button>
              <button className="btn btn-primary  nav-btn menu" onClick={() => setCurrentSection('Menu')}>Menu</button>
              <button className="btn btn-primary  nav-btn order" onClick={() => setCurrentSection('Order Online')}>Order Online</button>
              <button className="btn btn-primary  nav-btn delivery" onClick={() => setCurrentSection('Delivery')}>Delivery</button>
            </div>
          </nav>
        </div>
      </header>
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
