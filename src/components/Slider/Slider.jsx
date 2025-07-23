import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import { fetchCategoryImagesLong } from '../../utils/api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';

const Slider = () => {
  const [images, setImages] = useState([]);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const result = await fetchCategoryImagesLong();
        setImages(result);
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    getImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setTimeout(() => {
        $('.slider').not('.slick-initialized').slick({
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // ❌ Вимикаємо стандартні крапки
          prevArrow: `<button type="button" class="slick-prev ${styles.arrow}" style="left: 50px">←</button>`,
          nextArrow: `<button type="button" class="slick-next ${styles.arrow}" style="right: 50px">→</button>`,
        });

        // Слідкуємо за активним слайдом
        $('.slider').on('afterChange', function (event, slick, currentSlide) {
          setActiveDot(currentSlide % 3);
        });
      }, 0);
    }
  }, [images]);

  const handleDotClick = (index) => {
    $('.slider').slick('slickGoTo', index);
    setActiveDot(index);
  };

  return (
    <div className={styles.contentSlider}>
      <div className={`slider ${styles.slider}`}>
        {images.map((src, index) => (
          <div key={index} className={styles.slider__item}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.slider__content}>
        <div>
          <h1 className={styles.slider__title}>Nowa kolekcja</h1>
          <h3 className={styles.slider__subtitle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.
          </h3>
        </div>
        <a className={styles.slider__button} href="/info">Zobacz więcej</a>
      </div>

      {/* Кастомні 3 крапки */}
      <div className={styles.customDots}>
        {[0, 1, 2].map((dotIndex) => (
          <button
            key={dotIndex}
            className={`${styles.dot} ${activeDot === dotIndex ? styles.active : ''}`}
            onClick={() => handleDotClick(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
