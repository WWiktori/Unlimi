import React, { useState } from 'react';
import styles from './NewsLetter.module.scss'
import NewsLetterImage from '../../assets/NewsLetterImage.png'
import ArrowSend from '../../assets/ArrowSend.png'
import Warning from '../../assets/warning.png'


const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
        if (email.trim() === '' || !email.includes('@gmail.com')) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };
    return (
        <div className={styles.newsletter}>
            <div className={styles.newsletter__content}>
                <img
                    className={styles.newsletter__image}
                    src={NewsLetterImage}
                    alt="NewsLetterImage"
                />
                <div className={styles.newsletter__text}>
                    <h2 className={styles.newsletter__text__title}>
                        CHCESZ OTRZYMAĆ 5% ZNIŻKI NA SWOJE ZAKUPY?
                    </h2>
                    <h3 className={styles.newsletter__text__subtitle}>
                        Zapisz się do naszego newslettera i jako pierwsza dowiedz się o nowościach, promocjach i ofertach specjalnych!
                    </h3>
                </div>
            </div>
            <div className={styles.searchBoxContainer}>
                {showError && (
                    <div className={styles.errorMessage}>
                        <img src={Warning} alt="Warning"/>
                        <p className={styles.errorMessage__text}>Proszę podać prawidłowy adres e-mail.</p>
                    </div>
                )}
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Twój adres email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={showError ? styles.inputError : ''}
                    />
                    <button className={styles.searchButton} onClick={handleSubmit}>
                        <img src={ArrowSend} alt="" />
                    </button>
                </div>

                <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span className={styles.checkboxText}>
                        Akceptuję <p className={styles.checkboxText__brbottom}> Regulamin</p> i <p className={styles.checkboxText__brbottom}> Politykę Prywatności</p>.
                    </span>
                </label>
            </div>
        </div>
    );
}

export default NewsLetter;