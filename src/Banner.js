import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';


function Banner() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
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