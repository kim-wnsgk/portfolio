import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { BsTelephone, BsCalendarDate, BsBook } from 'react-icons/bs'
import { MdOutlinePlace } from 'react-icons/md'

import styles from './Profile.module.css'

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Profile
                </div>
                <div className={styles.github}>
                    <Link to="https://github.com/kim-wnsgk" target="_blank">
                        <AiFillGithub size="80%" />
                    </Link>
                </div>
                <div className={styles.infos}>
                    <div className={styles.profile}></div>
                    <div className={styles.infoBox}>
                        <div className={styles.infoRow}>
                            <div className={styles.info}>
                                <div className={styles.infoIcon}>
                                    <AiOutlineUser size="80%" />
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
                                    <BsTelephone size="80%" />
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
                                    <AiOutlineMail size="80%" />
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
                                    <MdOutlinePlace size="80%" />
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
                                    <BsCalendarDate size="80%" />
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
                                    <BsBook size="80%" />
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

        </div>
    );
}

export default About;