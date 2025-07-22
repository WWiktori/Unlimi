import React from 'react';
import styles from './Header.module.scss';
import { AiOutlinePhone } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import EditPng from '../../assets/Edit.png';
import Restock from '../../assets/Restock.png'

const navItems = [
    {
        icon: <AiOutlinePhone size={18} />,
        text: '(+48) 000 000 000',
        href: '/phone'
    },
    {
        icon: <img src={EditPng}/>,
        text: 'Napisz do nas', href: '/contact'
    },
    {
        icon : <LiaShippingFastSolid size={18} />,
        text: 'Darmowa dostawa', href: '/delivery' },
    {
        icon : <img src={Restock}/>,
        text: '30 Dni na darmowy zwrot', href: '/returns' }
];

const Header = () => (
    <header className={styles.header}>
        <nav className={styles.header__nav}>
            <ul className={styles.header__navList}>
                {navItems.map((item, idx) => (
                    <React.Fragment key={item.text}>
                        <li className={styles.header__navItem}>
                            {item.icon}
                            <a className={styles.header__navItemLink} href={item.href}>{item.text}</a>
                        </li>
                        {idx < navItems.length - 1 && (
                            <li className={styles.header__navSeparator}>|</li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
