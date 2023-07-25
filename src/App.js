//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import React from 'react';
import AboutUs from './components/aboutus/AboutUs';
import Footer from './components/footer/Footer';

import ProductControl from './components/productcontrol/ProductControl';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header />
        <ProductControl />
        <AboutUs />
        <Footer />

      </div>
   
    </React.Fragment>
    );
    
}

export default App;
