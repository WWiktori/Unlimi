import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiSearch, FiUser, FiHeart } from 'react-icons/fi';
import styles from './Filters.module.scss';
import Hamburger from 'hamburger-react'
import ShoppingBag from '../ShoppingBag/ShoppingBag'
import MobileMenu from '../MobileMenu/MobileMenu';

const Filter = () => {
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 450 });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Wyszukaj" />
                    <button className={styles.searchButton}>
                        <FiSearch size={18} />
                    </button>
                </div>
                <div className={styles.icons}>
                    <div className={styles.icons__border}>
                        <button><FiUser size={18} /></button>
                    </div>
                    <div className={styles.icons__border}>
                        <button><FiHeart size={18} /></button>
                    </div>
                    <div className={styles.icons__border}>
                        <ShoppingBag />
                    </div>
                    <div className={`${styles.icons__border__burgerMenu} ${styles.icons__border}`}
                     style={{
                        transform: isMobile ? 'scale(0.65)' : 'scale(0.75)',
                        transformOrigin: isMobile ? 'left' : 'left',
                    }}>
                        <Hamburger size={18} toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </div>
            <MobileMenu isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
};

export default Filter;
