import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import styles from './Filters.module.scss';
import ShoppingBag from '../ShoppingBag/ShoppingBag'


const Filter = () => {
    return (
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
                    <ShoppingBag/>
                </div>
            </div>
        </div>
    );
}
export default Filter