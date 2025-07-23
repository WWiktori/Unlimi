import React, { useEffect, useState } from 'react';
import { fetchCategoryImages } from '../../utils/api';
import styles from './Category.module.scss';

const Category = () => {
  const [imagePairs, setImagePairs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchCategoryImages(8);
      const pairs = [];

      for (let i = 0; i < images.length; i += 2) {
        pairs.push([images[i], images[i + 1]]);
      }

      setImagePairs(pairs);
    };

    fetchImages();
  }, []);

  return (
    <div className={styles.category}>
      {imagePairs.map((pair, columnIndex) => (
        <div key={columnIndex} className={styles.column}>
          {pair.map((img, imgIndex) => {
            const isFirstTall = columnIndex % 2 === 0;
            const isTall = (imgIndex === 0 && isFirstTall) || (imgIndex === 1 && !isFirstTall);
            const imageClass = isTall ? styles['category__imgTall'] : styles['category__imgShort'];

            return (
              <div key={img} className={imageClass}>
                <img src={img} alt={`category-${columnIndex}-${imgIndex}`} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Category;
