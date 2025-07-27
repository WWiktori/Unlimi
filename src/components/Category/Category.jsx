import React, { useEffect, useState } from 'react';
import { fetchCategoryImages, fetchCategoryImagesSmale } from '../../utils/api';
import styles from './Category.module.scss';

const Category = () => {
  const [imagePairs, setImagePairs] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'Baleriny', image: null },
    { name: 'Jazzowki', image: null },
    { name: 'Mokasyny', image: null },
    { name: 'Czolenka', image: null },
    { name: 'Sandalty', image: null },
    { name: 'Kozaki', image: null },
    { name: 'Polidity', image: null },
    { name: 'Wyprzadaz', image: null }
  ]);

  useEffect(() => {
    const fetchImagesSmale = async () => {
      try {
        const images = await fetchCategoryImagesSmale(8);
        
        const updatedCategories = categories.map((category, index) => ({
          ...category,
          image: images[index] || null
        }));
        
        setCategories(updatedCategories);
      } catch (error) {
        console.error('Error fetching category images:', error);
      }
    };

    fetchImagesSmale();
  }, []);

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
    <div className={styles.categoryList}>
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
    <div className={styles.categoryGrid}>
      {categories.map((category, index) => (
        <div key={index} className={styles.categoryItem}>
          {category.image && (
            <img 
              src={category.image} 
              alt={category.name} 
              className={styles.categoryImage}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          )}
          <div className={styles.categoryName}>{category.name}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Category;
