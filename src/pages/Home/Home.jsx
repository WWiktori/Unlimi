import React from 'react';
import Header from '../../components/Header/Header';
// import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import styles from './Home.module.scss';

const Home = () => (
  <>
    <Header />
    <main className={styles.home}>
      <section>
        <HomeNavigation/>
      </section>
      <section className="home__categories">
        <Category />
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
