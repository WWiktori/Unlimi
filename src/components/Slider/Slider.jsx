import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import './Slider.module.scss';

const Slider = () => {
  useEffect(() => {
    $('.slider').slick();
  }, []);

  return (
    <div className="slider">
      <div className="slider__item">1</div>
      <div className="slider__item">2</div>
      <div className="slider__item">3</div>
    </div>
  );
};

export default Slider;
