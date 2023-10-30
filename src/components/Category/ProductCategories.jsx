import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './ProductCategories.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const ProductCategories = () => {
  return (
    <section className='p-wrapper'>
      <div className='paddings innerWidth p-container'>
        <div className='flexColStart p-head'>
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Products</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className='flexColStart p-card'>
                <img src={card.image} alt={card.name} />

                <span className='secondaryText r-price'>
                  <span style={{ color: 'orange' }}>BRAND </span>
                  <span>{card.brand}</span>
                </span>

                <span className='primaryText'>{card.name}</span>
                <span className='secondaryText'>{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCategories;

const SliderButtons = () => {
  const swiper=useSwiper()
  return (
    <div className='flexCenter p-buttons'>
      <button onClick={()=>{swiper.slidePrev()}}>&lt;</button>
      <button onClick={()=>{swiper.slideNext()}}>&gt;</button>
    </div>
  );
};
