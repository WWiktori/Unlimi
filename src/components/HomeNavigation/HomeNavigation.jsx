import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./HomeNavigation.module.scss";
import { fetchCategoryImagesHeight } from '../../utils/api';
import HomeIcon from '../../assets/Logo.svg';
import { FiChevronDown } from 'react-icons/fi';
import Filter from '../Filters/Filters'
import { FiSearch } from 'react-icons/fi';



const baseCategories = [
    {
        value: 'polbuty',
        label: 'Półbuty',
        subcategories: [
            { label: 'sztyblety' },
            { label: 'botki płaskie' },
            { label: 'botki na słupku' },
        ]
    },
    {
        value: 'botki',
        label: 'Botki',
        subcategories: [
            { label: 'sztyblety' },
            { label: 'botki płaskie' },
        ]
    },
];

const HomeNavigation = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(baseCategories[0]);
    const [hoveredSub, setHoveredSub] = useState(null);
    const [categories, setCategories] = useState(baseCategories);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const preloadImage = (src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = () => resolve(src);
            });
        };

        const load = async () => {
            const imgs = await fetchCategoryImagesHeight(20);
            const loadedImages = await Promise.all(imgs.map(preloadImage));

            let imgIdx = 0;
            const cats = baseCategories.map(cat => {
                const catImg = loadedImages[imgIdx++];
                const subcats = cat.subcategories.map(sub => ({
                    ...sub,
                    image: loadedImages[imgIdx++]
                }));
                return { ...cat, image: catImg, subcategories: subcats };
            });

            setCategories(cats);
            setActive(cats[0]);
        };

        load();
    }, []);



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
                setHoveredSub(null);
            }
        };
        if (open) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);


    useEffect(() => {
        setHoveredSub(null);
    }, [active]);

    const rightImage = hoveredSub
        ? active.subcategories.find(sub => sub.label === hoveredSub)?.image
        : active.image;

    return (
        <div className={styles.headerNav}>
            <div className={styles.topNav}>
                <div className={styles.topNav__image}>
                    <img src={HomeIcon} alt="Logo" />
                </div>
                <div className={styles.dropdownTrigger} onClick={() => setOpen((prev) => !prev)}>
                    <div className={styles.dropdown}>
                        <span>Damskie buty skórzane</span>
                        <span className={styles.dropdownArrow}>
                            <FiChevronDown className={styles.arrow} />
                        </span>
                    </div>
                </div>

                {open && (
                    <div className={styles.menuWrapper} ref={menuRef}>
                        <div className={styles.menuLeft}>
                            <ul className={styles.categoryList}>
                                {categories.map(cat => (
                                    <li
                                        key={cat.value}
                                        className={`${styles.categoryItem} ${active.value === cat.value ? styles.active : ''}`}
                                        onClick={() => setActive(cat)}
                                    >
                                        <span>{cat.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.menuCenter}>
                            <div className={styles.menuCenter__color}>
                                <div className={styles.subcategories}>
                                    {active.subcategories && (
                                        <div className={styles.subcategoryGrid}>
                                            {active.subcategories.map(sub => (
                                                <div
                                                    key={sub.label}
                                                    className={styles.subcategoryItem}
                                                    onMouseEnter={() => setHoveredSub(sub.label)}
                                                    onClick={() => navigate(`/${active.value}/${sub.label.replace(/\s+/g, '-').toLowerCase()}`)}
                                                >
                                                    {sub.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.menuRight}>
                                    {rightImage && (
                                        <img src={rightImage} alt="category" className={styles.categoryImage} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <a className={styles.buttonLink} href="/vouchers">Bony podarunkowe</a>
                <a className={styles.buttonLink} href="/news">Nowości</a>
                <a className={styles.buttonLink} href="/Bestsellery">Bestsellery</a>
                <a className={styles.buttonLink__red} href="/Bestsellery">Wyprzedaż</a>


            </div>
            <div>
                <div className={styles.filterWrapper}>
                    <div>
                        <img src={HomeIcon} alt="Logo" className={styles.filterWrapper__image} />
                    </div>
                    <Filter />
                </div>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Wyszukaj" />
                    <button className={styles.searchButton}>
                        <FiSearch size={18} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default HomeNavigation;
