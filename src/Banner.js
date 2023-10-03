import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';


function Banner() {
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 정리
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`} >
            <div className={`${styles.goToTop} ${scrolled ? styles.scrolled : ''}`}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}>
                ^
            </div>
            <div className={styles.title} onClick={() => navigate('/')}>
                Portfolio
            </div>
            <div className={styles.content}>
                <div className={styles.button}>
                    <Link to='/result'>About Me</Link>
                </div>
                <div className={styles.button}>
                    <Link to='/result'>Skills</Link>
                </div>
                <div className={styles.button}>
                    <Link to='/send'>Projects</Link>
                </div>
                <div className={styles.button}>
                    <Link to='/send'>More Info</Link>
                </div>
            </div>
        </div>

    );
}

export default Banner;