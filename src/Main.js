import React from 'react';

import { useEffect, useState } from 'react';

import styles from './Main.module.css'
import Starfield from './component/Starfield';
import Banner from './Banner';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsCalendarDate, BsBook } from 'react-icons/bs' 
import { MdOutlinePlace } from 'react-icons/md' 
import { FaReact } from 'react-icons/fa' 
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs } from 'react-icons/bi' 
import { DiMysql } from 'react-icons/di' 
import { TbBrandReactNative } from 'react-icons/tb' 
import { BsUnity } from 'react-icons/bs' 


function Main() {
    const [text, setText] = useState(''); // 타이핑할 텍스트
    const [index, setIndex] = useState(0); // 현재 텍스트 인덱스
    const typingSpeed = 70; // 타이핑 속도 (밀리초)

    useEffect(() => {
        const fullText = '안녕하세요!\n프론트엔드 신입 개발자\n김준하입니다.';
        
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
                        <div className={`${styles.mainTitle} ${styles.typingText}`}>
                            {text}
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
                                        <div className={styles.infoIcon}>
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
                                        <div className={styles.infoIcon}>
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
                                        <div className={styles.infoIcon}>
                                            <AiOutlineMail  size="80%"/>
                                        </div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoTitle}>
                                                E-Mail:
                                            </div>
                                            <div className={styles.infoValue}>
                                                <a href="mailto:kim_jh6859@naver.com">kim_jh6859@naver.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        <div className={styles.infoIcon}>
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
                                        <div className={styles.infoIcon}>
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
                                        <div className={styles.infoIcon}>
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
                        <div className={styles.skillContent}>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    HTML5 / CSS3
                                </div>
                                <div className={styles.skillIcon}>
                                    <BiLogoHtml5 size="80%" style={{marginRight:"-20px"}}/>
                                    <BiLogoCss3 size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>기술설명</li>
                                </div>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    Java Script
                                </div>
                                <div className={styles.skillIcon}>
                                    <BiLogoJavascript size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>기술설명</li>
                                </div>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    React
                                </div>
                                <div className={styles.skillIcon}>
                                    <FaReact size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>거의 모든 프로젝트에서 사용해왔음으로써 모든 기술 중 가장 자신있는 기술입니다.</li>
                                    <li>Redux 상태관리 라이브러리 사용 경험이 있습니다.</li>
                                </div>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    React Native
                                </div>
                                <div className={styles.skillIcon}>
                                    <TbBrandReactNative size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>기술설명</li>
                                </div>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    Node.js
                                </div>
                                <div className={styles.skillIcon}>
                                    <BiLogoNodejs size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>React를 사용한 프로젝트에서 거의 모든 back-end 기술을 express 라이브러리를 사용해왔습니다.</li>
                                    <li>기본적인 REST API를 구성하고 다룰 수 있으며, </li>
                                </div>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    Mysql
                                </div>
                                <div className={styles.skillIcon}>
                                    <DiMysql size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>기술설명</li>
                                </div>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skillTitle}>
                                    Unity
                                </div>
                                <div className={styles.skillIcon}>
                                    <BsUnity size="80%"/>
                                </div>
                                <div className={styles.skillValue}>
                                    <li>기술설명</li>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
        </div>
    );
}

export default Main;