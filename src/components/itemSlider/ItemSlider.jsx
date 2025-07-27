import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ItemSlider.css';

const categories = [
    {
        value: 'Promocje',
        label: 'Promocje',
        images: Array.from({ length: 8 }, (_, i) => ({
            src: `https://picsum.photos/403/520?random=${i + 1}&t=promocje`,
            tag: i % 2 === 0 ? 'SALE' : 'NEW',
            name: `Product ${i + 1}`,
            price: `${(50 + i * 10).toFixed(2)} $`,
            subtitle: i % 2 === 0 ? 'Limited offer' : 'Best choice',
        }))
    },
    {
        value: 'Nowości',
        label: 'Nowości',
        images: Array.from({ length: 8 }, (_, i) => ({
            src: `https://picsum.photos/403/520?random=${i + 20}&t=nowosci`,
            tag: 'NEW',
            name: `New Product ${i + 1}`,
            price: `${(60 + i * 5).toFixed(2)} $`,
            subtitle: 'Just arrived',
        }))
    },
    {
        value: 'Bestsellery',
        label: 'Bestsellery',
        images: Array.from({ length: 8 }, (_, i) => ({
            src: `https://picsum.photos/403/520?random=${i + 40}&t=bestsellery`,
            tag: 'HOT',
            name: `Best Seller ${i + 1}`,
            price: `${(70 + i * 15).toFixed(2)} $`,
            subtitle: 'Top rated',
        }))
    }
];

const ItemSlider = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [images, setImages] = useState(activeCategory.images);

    useEffect(() => {
        setImages(activeCategory.images);
    }, [activeCategory]);

    useEffect(() => {
        const $slider = $('.multiple-items');
      
        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('unslick');
        }
      
        const timeout = setTimeout(() => {
          const $newSlider = $('.multiple-items');
          if ($newSlider.length > 0 && images.length > 0) {
            $newSlider.slick({
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: true,
              arrows: true,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                  },
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1.5,
                      slidesToScroll: 1,
                      arrows: false,
                      infinite: false,
                    },
                },
              ],
            });
          }
        }, 100);
      
        return () => {
          clearTimeout(timeout);
          if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
          }
        };
      }, [images]);
      



    return (
        <div>
            <div className='option-content'>
                <div className="optionText">
                    <div className="optionText__tabs">
                        {categories.map((category, index) => (
                            <React.Fragment key={category.value}>
                                <h2
                                    className={`optionText__tab ${activeCategory.value === category.value ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category.label}
                                </h2>
                                {index < categories.length - 1 && <span className="optionText__divider">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <a className='optionText-button' href="/all">Zobacz wszystkie</a>
            </div>

            <div className="contentSlider">
                <div className="multiple-items" key={activeCategory.value}>
                    {images.map(({ src, tag, name, price, subtitle }, index) => (
                        <div key={index} className="itemSlider__item">
                            <div className="slick__tags">{tag}</div>

                            <img src={src} alt={`Slide ${index + 1}`} loading="lazy" />

                            <div className="itemSlider__info">
                                <div className="itemSlider__name">{name}</div>
                                <div className="itemSlider__price">{price}</div>
                                <div className="itemSlider__subtitle">{subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default ItemSlider;
