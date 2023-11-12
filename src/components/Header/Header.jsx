import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src='/abone-logo1.PNG' alt='Logo' width={300} />
        <div className='flexCenter h-menu'>
          <a href=''>Products</a>
          <a href=''>Our Values</a>
          <a href=''>Contact Us</a>
          <a href=''>Get Started</a>
          <button className='button'>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
