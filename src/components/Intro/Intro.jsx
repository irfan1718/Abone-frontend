import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import './Intro.css';

const Intro = () => {
  return (
    <section className='intro-wrapper'>
      <div className='flexCenter paddings innerWidth intro-container'>
        {/* Left side */}
        <div className='flexColStart intro-left'>
          <div className='intro-title'>
            <div className='circle' />
            <h1>
              OrthoImplant <br /> Innovations: <br />
              Crafting Better Lives
            </h1>
          </div>

          <div className='flexColStart intro-desc'>
            <span>
              Discover a diverse range of orthopaedic implants with ease.{' '}
            </span>
            <span>
              Effortlessly find residency in orthopaedic excellence, simplifying
              mobility solutions for all.
            </span>
          </div>

          <div className='flexCenter  search-bar'>
            <HiLocationMarker color='var(--blue)' size={25} />
            <input type='text' name='' id='' />
            <button className='button'>Search</button>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={5000} end={6000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp start={666} end={1000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={7} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Dealers</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='flexCenter intro-right'>
          <div className='image-container'>
            <img src='intro.png' alt='Intro image' />
          </div> 
          +
        </div>
      </div>
    </section>
  );
};

export default Intro;
