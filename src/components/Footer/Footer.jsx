import React from 'react';
import styles from './Footer.module.scss';
import { AiOutlinePhone } from "react-icons/ai";
import EditBlue from '../../assets/editblue.png';
import SocialImage from '../../assets/SocialImage.png'
import InPostPl from '../../assets/InPostPl.png'
import InPoestKurier from '../../assets/InPostKurier.png'
import Blik from '../../assets/Blik.png'
import PayPal from '../../assets/PayPal.png'
import PayPo from '../../assets/PayPo.png'
import Przelewy from '../../assets/Przelewy.png'



const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.footer__nav}>
      <ul className={styles.footer__nav__list}>
        <li className={`${styles.footer__nav__list__item} ${styles.footer__nav__list__bold}`}>O nas</li>
        <li className={styles.footer__nav__list__item}>Poznajmy się</li>
        <li className={styles.footer__nav__list__item}>Skontaktuj się z nami</li>
        <li className={styles.footer__nav__list__item}>Dołącz do nas</li>
      </ul>
      <ul className={styles.footer__nav__list}>
        <li className={`${styles.footer__nav__list__item} ${styles.footer__nav__list__bold}`}>Informacje</li>
        <li className={styles.footer__nav__list__item}>Regulamin</li>
        <li className={styles.footer__nav__list__item}>Polityka prywatności</li>
        <li className={styles.footer__nav__list__item}>Zasady gwarancji</li>
      </ul>
      <ul className={styles.footer__nav__list}>
        <li className={`${styles.footer__nav__list__item} ${styles.footer__nav__list__bold}`}>Twoje konto</li>
        <li className={styles.footer__nav__list__item}>Twoje konto</li>
        <li className={styles.footer__nav__list__item}>Twoje zamówienia</li>
        <li className={styles.footer__nav__list__item}>Logowanie</li>
        <li className={styles.footer__nav__list__item}>Rejestracja</li>
      </ul>
      <ul className={styles.footer__nav__list}>
        <li className={`${styles.footer__nav__list__item} ${styles.footer__nav__list__bold}`}>Obsługa klienta</li>
        <li className={styles.footer__nav__list__item}>Dostawa i płatność</li>
        <li className={styles.footer__nav__list__item}>Wymiana</li>
        <li className={styles.footer__nav__list__item}>Zwrot</li>
        <li className={styles.footer__nav__list__item}>Reklamacje</li>
        <li className={styles.footer__nav__list__item}>FAQ</li>
      </ul>
      <ul className={`${styles.footer__nav__list} ${styles.footer__nav__rsideList}`}>
        <li className={`${styles.footer__nav__list__item} ${styles.footer__nav__list__bold}`}>Skontaktuj się z nami</li>
        <div className={styles.footer__nav__list__box}>
          <AiOutlinePhone className={styles.footer__nav__list__item__image} size={20} />
          <li className={styles.footer__nav__list__item}>(+48) 000 000 000</li>
        </div>
        <div className={styles.footer__nav__list__box}>
          <img className={styles.footer__nav__list__item__image} src={EditBlue} alt="" />
          <li className={styles.footer__nav__list__item}>sklep@kontakt.com.pl</li>
        </div>
        <p className={styles.footer__nav__list__item__text}>Jesteśmy do Twojej dyspozycjiod poniedziałku do piątkuw godzinach 8:00 - 16:00</p>
      </ul>
    </nav>
          <div className={styles.footer__contact}>
            <div className={styles.footer__contact__box}>
              <p className={styles.footer__contact__box__text}>Dostawa i płatność</p>
              <ul className={styles.footer__contact__box__images}>
                <li className={styles.footer__contact__box__image}>               
                   <img src={InPoestKurier} alt="" />
                </li>
                <li className={styles.footer__contact__box__image}>               
                   <img src={InPostPl} alt="" />
                </li>
                <li className={styles.footer__contact__box__image}>               
                   <img src={Blik} alt="" />
                </li>
                <li className={styles.footer__contact__box__image}>               
                   <img src={Przelewy} alt="" />
                </li>
                <li className={styles.footer__contact__box__image}>               
                   <img src={PayPo} alt="" />
                </li>
                <li className={styles.footer__contact__box__image}>               
                   <img src={PayPal} alt="" />
                </li>
              </ul>
            </div>
            <div className={`${styles.footer__contact__box} ${styles.footer__contact__box__rside}`}>
              <p className={styles.footer__contact__box__text}>Social media</p>
              <div className={styles.footer__contact__box__images}>
                <img src={SocialImage} alt="" />
              </div>
            </div>
          </div>
  </footer>
);

export default Footer;
