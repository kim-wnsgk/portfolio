import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

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
            <div className={styles.title} 
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}>
                Portfolio
            </div>
            <div className={styles.content}>
                <div className={styles.button}>
                    <ScrollLink to='profile' smooth={true} duration={500} offset={-100}>Profile</ScrollLink>
                </div>
                <div className={styles.button}>
                    <ScrollLink to='skills' smooth={true} duration={500} offset={-100}>Skills</ScrollLink>
                </div>
                <div className={styles.button}>
                    <ScrollLink to='projects' smooth={true} duration={500} offset={-100}>Projects</ScrollLink>
                </div>
                {/* <div className={styles.button}>
                    <ScrollLink to='info' smooth={true} duration={500}>More Info</ScrollLink>
                </div> */}
            </div>
        </div>

    );
}

export default Banner;