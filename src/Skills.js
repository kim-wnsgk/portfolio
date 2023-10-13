import styles from './Skills.module.css'

import { FaReact } from 'react-icons/fa'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs } from 'react-icons/bi'
import { DiMysql } from 'react-icons/di'
import { TbBrandReactNative } from 'react-icons/tb'

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Skills
                </div>
                <div className={styles.skillContent}>
                    <div className={styles.skill}>
                        <div className={styles.skillTitle}>
                            HTML5 / CSS3
                        </div>
                        <div className={styles.skillIcon}>
                            <BiLogoHtml5 size="100%" style={{ marginRight: "-20px" }} />
                            <BiLogoCss3 size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>기본적인 웹 표준에 대해 높은 이해도를 가지고 있습니다.</li>
                            <li>시맥틱 html 및 효과적인 css 스타일림을 구현할 수 있습니다.</li>
                            <li>현재까지도 꾸준히 웹 페이지의 구조와 디자인을 개선하기 위해 최선을 다하고 있습니다.</li>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillTitle}>
                            React
                        </div>
                        <div className={styles.skillIcon}>
                            <FaReact size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>가장 많이 다뤄본 프레임위크 답게 리액트 컴포넌트를 활용하여 사용자 경험을 향상시키고, 상태 관리와 라우팅을 구현하기에 능숙합니다.</li>
                            <li>express와 함께 풀스택으로 개발하다 보니 보다 높은 REST API 이해도와 활용 능력을 가지고 있습니다.</li>
                            <li>Redux 라이브러리를 통하여 복잡한 애플리케이션 상태를 효율적으로 관리한 경험이 있습니다.</li>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillTitle}>
                            Java Script
                        </div>
                        <div className={styles.skillIcon}>
                            <BiLogoJavascript size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>ES6 및 현재에도 꾸준히 출시되고 있는 자바스크립트 기능을 학습하고 활용하여 성능 향상 및 유지 관리가 쉬운 코드를 작성하기 위해 노력중입니다.</li>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillTitle}>
                            React Native
                        </div>
                        <div className={styles.skillIcon}>
                            <TbBrandReactNative size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>리액트를 기반으로 하여 기본적인 모바일 애플리케이션 구현에 익숙합니다.</li>
                        </div>
                    </div>
                    <div className={styles.skill} style={{ marginTop: '100px' }}>
                        <div className={styles.skillTitle}>
                            Node.js
                        </div>
                        <div className={styles.skillIcon}>
                            <BiLogoNodejs size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>광범위한 이해도를 위해 프론트엔드 뿐만이 아닌 백엔드 서버도 함께 관리하며 운영해보기 위해 Node.js 기술을 학습해오고 있습니다.</li>
                            <li>백엔드 서버를 구축하여 RESTful API를 설계하고 구현할 수 있습니다.</li>
                            <li>Express 프레임워크를 활용하여 보다 쉽고 빠르고 안정적인 웹 서비스를 제공하기 위해 노력중입니다.</li>
                        </div>
                    </div>
                    <div className={styles.skill} style={{ marginTop: '100px' }}>
                        <div className={styles.skillTitle}>
                            Mysql
                        </div>
                        <div className={styles.skillIcon}>
                            <DiMysql size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>대부분의 프로젝트에서 mysql을 주된 데이터베이스로 사용해왔습니다.</li>
                            <li>node.js의 mysql2 라이브러리를 사용하여 express 서버에서 쿼리문을 통해 효과적으로 데이터베이스 관리를 수행했습니다.</li>
                        </div>
                        <div className={styles.skillTitle}>
                            FireBase
                        </div>
                        <div className={styles.skillIcon}>
                            <DiMysql size="100%" />
                        </div>
                        <div className={styles.skillValue}>
                            <li>사용하기 간단하여 몇몇 소규모 프로젝트에서 서버리스 애플리케이션을 구축하여 사용한 경험이 있습니다. </li>
                            <li>사용자 인증, 데이터베이스 등을 관리했습니다.</li>
                        </div>
                    </div>
                    <div className={styles.skill} style={{ marginTop: '100px' }}>
                        <div className={styles.skillTitle}>
                            Git/Github
                        </div>
                        <div className={styles.skillValue}>
                            <li>프로젝트의 버전 관리 및 협업을 원활하게 수행했습니다.</li>
                        </div>
                        <div className={styles.skillTitle}>
                            Slack/Notion
                        </div>
                        <div className={styles.skillValue}>
                            <li>팀과의 실시간 소통을 원활하게 유지하고 프로젝트 업무를 조율했습니다.</li>
                            <li>프로젝트 관리, 문서 공유, 일정 조정, 회의록 작성 등을 수행하여 효율적인 협업을 수행했습니다.</li>
                        </div>
                        <div className={styles.skillTitle}>
                            Docker/Kubernetes
                        </div>
                        <div className={styles.skillValue}>
                            <li>기본적인 간단한 컨테이너 생성을 해본 경험이 있습니다.</li>
                        </div>
                        <div className={styles.skillTitle}>
                            Unity
                        </div>
                        <div className={styles.skillValue}>
                            <li>간단한 3D 그래픽/애니메이션 제작을 했습니다.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;