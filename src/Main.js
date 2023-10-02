import React from 'react';

import styles from './Main.module.css'
import Starfield from './component/Starfield';
import Banner from './Banner';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsCalendarDate, BsBook } from 'react-icons/bs' 
import { MdOutlinePlace } from 'react-icons/md' 

function Main() {
    return (
        <div className={styles.container} >
            <Starfield />
            <Banner />
            <div className={styles.content} >
                    <div className={styles.first}>
                        <div className={styles.mainTitle}>
                            안녕하세요 프론트엔드 신입 개발자 김준하입니다. (여기에 글자 타이핑 하는 효과)
                        </div>
                        <div className={styles.subTitle}>
                            ㄴㅇㄹㅇㄴㅁㄹㅇㅁㄴㄹㅇㅁㄴ
                        </div>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.title}>
                            About Me
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.image}>
                                (사진)
                            </div>
                            <div className={styles.infoBox}>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        <div className={styles.icon}>
                                            <AiOutlineUser  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                이름:
                                            </div>
                                            <div className={styles.infoValue}>
                                                김준하
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.icon}>
                                            <BsTelephone  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                연락처:
                                            </div>
                                            <div className={styles.infoValue}>
                                                010-2578-6859
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.icon}>
                                            <AiOutlineMail  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                E-Mail:
                                            </div>
                                            <div className={styles.infoValue}>
                                                kim_jh6859@naver.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        <div className={styles.icon}>
                                            <MdOutlinePlace  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                거주지:
                                            </div>
                                            <div className={styles.infoValue}>
                                                경기도 수원시 권선구
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.icon}>
                                            <BsCalendarDate  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                생년월일:
                                            </div>
                                            <div className={styles.infoValue}>
                                                1999.09.30
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.icon}>
                                            <BsBook  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                학력:
                                            </div>
                                            <div className={styles.infoValue}>
                                                단국대학교 컴퓨터공학과 <br />(2024.02 졸업예정)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.title}>
                            Skills
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default Main;