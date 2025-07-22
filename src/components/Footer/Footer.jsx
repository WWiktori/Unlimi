import React from 'react';
import './Footer.module.scss';

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">&copy; {new Date().getFullYear()} UnlimiTech</p>
  </footer>
);

export default Footer;
