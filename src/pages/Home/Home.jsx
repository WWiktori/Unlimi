import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import styles from './Home.module.scss';
import ItemSlider from '../../components/itemSlider/ItemSlider'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => (
  <>
    <Header />
    <main className={styles.home}>
      <section>
        <HomeNavigation/>
        <Slider/>
      </section>
      <section className={styles.home__categories}>
        <Category />
        <ItemSlider/>
        <NewsLetter/>
      </section>
      <Footer />
    </main>
  </>
);

export default Home;
