import React, { useEffect, useState } from 'react';
import { fetchCategoryImages } from '../../utils/api';
import styles from './Category.module.scss';

const Category = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchCategoryImages(6).then(setImages);
  }, []);

  return (
    <div className={styles.category}>
      {images.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`Category ${idx + 1}`}
          className={styles.category__img}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Category;
