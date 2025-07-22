import React from 'react';
import Header from '../../components/Header/Header';
// import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import './Home.module.scss';

const Home = () => (
  <>
    <Header />
    <main className="home">
      {/* <Slider /> */}
      <section className="home__categories">
        <h2>Категорії</h2>
        <Category />
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
