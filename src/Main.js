import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Main.module.css'
import Starfield from './component/Starfield';
import Banner from './component/Banner';


import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';


function Main() {
    const navigate = useNavigate();
    const [text, setText] = useState(''); // 타이핑할 텍스트
    const [index, setIndex] = useState(0); // 현재 텍스트 인덱스
    const typingSpeed = 70; // 타이핑 속도 (밀리초)

    useEffect(() => {
        const fullText = '신입 개발자\n김준하입니다.';

        // 타이핑 효과를 시뮬레이션하기 위한 타이머
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setText((prevText) => prevText + fullText.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(timer); // 텍스트 타이핑 완료 후 타이머 종료
            }
        }, typingSpeed);

        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, [index]);



    return (
        <div className={styles.container} >
            <Starfield />
            <Banner />
            <div className={styles.content} >
                <div className={styles.first}>
                    <div className={styles.firstImage}></div>

                    <div className={`${styles.mainTitle} ${styles.typingText}`}>
                        {text}
                    </div>
                    <div className={styles.subTitle}>
                        새로운 기술에 대한 적응력이 높아 탐구하고 저의 것으로 만들어 내는 것이 취미입니다.<br />
                        실수가 없도록 꼼꼼하게 검토하는 습관을 지니고 있습니다.
                    </div>
                </div>
                <Profile />
                <Skills />
                <Projects />
            </div>
        </div>
    );
}

export default Main;