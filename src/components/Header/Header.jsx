import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src='/abone-logo.png' alt='Logo' />
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
