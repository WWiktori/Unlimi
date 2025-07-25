import React, { useState, useRef, useEffect } from 'react';
import styles from './ShoppingBag.module.scss';
import { FiShoppingBag, FiX, FiTrash2 } from 'react-icons/fi';

const ShoppingBag = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const cartItems = [
        {
            id: 1,
            name: 'Półbuty mokasyny na grubej podeszwie',
            price: 129.99,
            quantity: 1,
            img: 'https://picsum.photos/120/160?random=50',
        },
        {
            id: 2,
            name: 'Półbuty skóra naturalna – model 258',
            price: 129.99,
            quantity: 1,
            img: 'https://picsum.photos/120/160?random=20',
        },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const freeShippingThreshold = 169.98;
    const missing = Math.max(0, freeShippingThreshold - total);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <div className={styles.shoppingBag}>
            <button className={styles.shoppingBag__button} onClick={() => setOpen((prev) => !prev)}>
                <FiShoppingBag size={18} />
            </button>

            {open && (
                <div className={styles.shoppingBag__sidebar} ref={menuRef}>
                    <div className={styles.header}>
                        <h2>Koszyk <span>({cartItems.length} sztuki)</span></h2>
                        <button className={styles.header__fix} onClick={() => setOpen(false)}><FiX size={20} /></button>
                    </div>

                    <div className={styles.items}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <div className={styles.item__box}>
                                    <img src={item.img} alt={item.name} />
                                    <div className={styles.item__info}>
                                        <p>{item.name}</p>
                                        <small>{item.quantity} szt. x {item.price.toFixed(2)} zł</small>
                                    </div>
                                </div>

                                <button className={styles.remove}><FiTrash2 size={16} /></button>
                            </div>
                        ))}
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.shipping}>
                            <p>📦 Do darmowej dostawy brakuje: <strong>{missing.toFixed(2)} zł</strong></p>
                            <div className={styles.progress}>
                                <div
                                    className={styles.progress__bar}
                                    style={{ width: `${(total / freeShippingThreshold) * 100}%` }}
                                />
                            </div>
                        </div>
                        <div className={styles.total}>
                            <span>Razem do zapłaty:</span>
                            <strong>{total.toFixed(2)} zł</strong>
                        </div>
                        <button className={styles.checkout}>Przejdź do koszyka</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingBag;
