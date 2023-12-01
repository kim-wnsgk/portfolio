import { Link } from 'react-router-dom';
import styles from './Projects.module.css'
import { AiFillGithub } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.title}>
                Projects
            </div>
            <div className={styles.content}>
                <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        여행 정보 사이트 - 여기저기
                    </div>
                    <div className={styles.date}>
                        2023.04~
                    </div>
                    <div className={styles.explain}>
                        <li>코로나 감소세로 인한 여행 증가에 따라 여행객들이 필요한 정보를 제공, 계획을 세우는데 도움이 되는 기능을 제공하는 주제이다.</li>
                    </div>
                    <div className={styles.value}>
                        <div>주요 기능 : </div>
                        <li>지역별 여행 정보 제공하여 여행 정보 추천, 여행지 추천</li>
                        <li>모임 기능을 통해 여행원 모집, 함께 여행 코스 설계</li>
                        <li>게시판 기능을 통해 다른 사용자들과 소통</li>
                    </div>
                    <div className={styles.skill}>
                        사용기술 : React, Node.js(express), Mysql, 한국관광공사 Open API
                    </div>
                    <div className={styles.my}>
                        <div>내 역할 : </div>
                        <li>Open api를 통해 전국의 여행지 정보를 데이터베이스에 저장, 각 여행지 정보 출력 및 여행지 추천</li>
                        <li>모임원 추가 및 모임원 관리 기능</li>
                        <li>Node.js - mysql과 세션을 이용한 로그인 기능</li>
                        <li>전체적인 디자인</li>
                    </div>
                    <div className={styles.link}>
                        Code: <Link to="https://github.com/kim-wnsgk/travel" target='blank'><AiFillGithub size="5%" /></Link>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        Silvable
                    </div>
                    <div className={styles.date}>
                        2022.07 ~ 2022.08
                    </div>
                    <div className={styles.explain}>
                        <li>교내에서 실시한 ‘2022 경소톤’ 대회에서 노인 복지를 위한 모바일 애플리케이션 개발 프로젝트</li>
                        <li>UI는 노인 맞춤으로 직관적으로 구성, 스마트폰 사용이 어려운 노인분들이 편리하게 이용할 수 있도록 하였다.</li>
                    </div>
                    <div className={styles.value}>
                        <div>주요 기능 : </div>
                        <li>회원가입, 로그인 시 노인 본인, 보호자 두 계정을 연동하여 보호자가 노인의 관리를 할 수 있도록 구현함</li>
                        <li>집으로, 병원, 경찰서 안내 기능을 통해 현재 위치로부터 집까지의 경로, 가까운 위치의 병원 경찰서로의 경로를 안내해준다.</li>
                        <li>그 외의 Bottom tab 메뉴중 돋보기, 긴급신고 기능을 통해 보다 노인분들의 사용에 적합한 구성을 하였다.</li>
                        <li>각 버튼을 길게 클릭시 음성으로 안내해주고, 입력 부분에서는 음성인식 기능을 통해 입력할 수 있게 하였다.</li>
                    </div>
                    <div className={styles.skill}>
                        사용기술 : React Native, Firebase
                    </div>
                    <div className={styles.my}>
                        <div>내 역할 : </div>
                        <li>css를 통한 전체적인 애플리케이션 디자인</li>
                        <li>지도 기능 구현을 통한 길찾기 기능</li>
                    </div>
                    <div className={styles.link}>
                        Code: <Link to="https://github.com/kim-wnsgk/Silvable" target='blank'><AiFillGithub size="5%" /></Link>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        단국대-다우기술 프로그래밍 경진대회
                    </div>
                    <div className={styles.date}>
                        2022.11
                    </div>
                    <div className={styles.explain}>
                        <li>팀프로젝트 경험을 바탕으로 다양한 기업 협업 요소들을 통합한 솔루션을 제공, 기업용 협업을 위한 웹 어플리케이션을 제작 대회</li>
                        <li>실제 기업에서 주관하는 대회에 참가함으로서 상용 할만한 제품 아이디어를 직접 구현하는 것을 주제로 하여 추후 기업에서 행하게 될 업무에 대해 깨닫게 되었다.</li>
                    </div>
                    <div className={styles.value}>
                        <div>주요 기능 : </div>
                        <li>프로필 - 개인 프로필을 통해 사용자의 인적사항과 중요 일정을 한눈에 볼 수 있습니다.</li>
                        <li>미팅룸 - 미팅 예약을 지원하여 효율적인 업무 협업을 돕습니다.</li>
                        <li>일정 관리 - 간단한 일정 관리 기능을 통해 업무 일정을 쉽게 관리할 수 있습니다.</li>
                        <li>근태 관리 - 출퇴근 시간을 기록하여 근태를 관리하고 추가 수당 및 휴가를 계산합니다.</li>
                        <li>게시판 - 공지사항, 자유게시판, 부서별 게시판을 통해 업무 커뮤니케이션을 지원합니다.</li>
                        <li>마피아 게임 - 업무 휴식을 위해 마피아 게임을 제공합니다.</li>
                        <li>점심 메뉴 추천 - 주변 식당의 메뉴를 추천하고 리뷰를 공유합니다.</li>
                    </div>
                    <div className={styles.skill}>
                        사용기술 : React, Firebase
                    </div>
                    <div className={styles.my}>
                        <div>내 역할 : </div>
                        <li>각 컴포넌트 및 전체적인 스타일링</li>
                        <li>Firebase 로그인 기능 구현</li>
                    </div>
                    <div className={styles.link}>
                        Code: <Link to="https://github.com/kim-wnsgk/daou" target='blank'><AiFillGithub size="5%" /></Link>
                        Address: <Link to="https://kim-wnsgk.github.io/daou/" target='blank'><BsLink45Deg size="5%" /></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Projects;