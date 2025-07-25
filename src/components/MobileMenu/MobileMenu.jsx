import React from 'react';
import styles from './MobileMenu.module.scss';
import { FiX, FiPhone, FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from "react-icons/ai";
import EditBlue from '../../assets/editblue.png';
import SocialImage from '../../assets/SocialImage.png'

const MobileMenu = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.mobileMenu}>
            <div className={styles.mobileMenu__header}>
                <h2>Menu</h2>
                <button className={styles.mobileMenu__header__fix} onClick={onClose}><FiX size={24} /></button>
            </div>

            <ul className={styles.mobileMenu__list}>
                <li>Damskie buty skórzane</li>
                <li>Bony podarunkowe</li>
                <li>Nowości</li>
                <li>Bestsellery</li>
                <li className={styles.mobileMenu__sale}>% Wyprzedaż %</li>
                <li><strong>Zaloguj / Zarejestruj</strong></li>
                <li>Schowek</li>
                <li>Koszyk</li>
            </ul>

            <div className={styles.mobileMenu__footer}>
                <div className={styles.contact}>
                    <div className={styles.contact__box}>
                        <AiOutlinePhone size={20} color='#0068FF' />
                        <p>(+48) 000 000 000</p>
                    </div>
                    <div className={styles.contact__box__mail}>
                        <img src={EditBlue} alt="" />
                        <p>sklep@kontakt.com.pl</p>
                    </div>
                </div>
                <div className={styles.socials}>
                    <img src={SocialImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
