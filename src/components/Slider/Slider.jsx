import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import { fetchCategoryImagesLong } from '../../utils/api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // замість module.scss

const Slider = () => {
  const [images, setImages] = useState([]);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const result = await fetchCategoryImagesLong();
        setImages(result.slice(0, 3));
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    getImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const $slider = $('.slider');
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: `<button type="button" class="slick-prev custom-arrow" style="left: 50px">←</button>`,
          nextArrow: `<button type="button" class="slick-next custom-arrow" style="right: 50px">→</button>`,
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
          setActiveDot(currentSlide);
        });
      }
    }
  }, [images]);

  const handleDotClick = (index) => {
    $('.slider').slick('slickGoTo', index);
    setActiveDot(index);
  };

  return (
    <div className="content-slider">
      <div className="slider">
        {images.map((src, index) => (
          <div key={index} className="slider__item">
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="slider__content">
        <div>
          <h1 className="slider__title">Nowa kolekcja</h1>
          <h3 className="slider__subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.
          </h3>
        </div>
        <a className="slider__button" href="/info">Zobacz więcej</a>
      </div>
    </div>
  );
};

export default Slider;
