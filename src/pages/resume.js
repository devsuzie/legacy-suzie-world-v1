import React from 'react'
import { Link } from 'gatsby'

import aboutStyles from './about.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="Resume" />
            <div className={aboutStyles.container}>

                <h1 className={aboutStyles.name}>안녕하세요 저는 <span>김수지</span>입니다.</h1>
                <p className={aboutStyles.big}>
                    모르는것이 무엇인지 아는 상태로 가기 위해 노력합니다.<br />
                    정확한 질문을 하는법과 주석 없이도 설명되는 코드를 작성하는법에 대해 고민합니다.<br />
                    스스로를 돌아보기 위해서 하는 문서 작성을 즐깁니다. <br />
                    새로운것을 배우고 받아들이는것을 늘 환영합니다.
                </p>

                <h2>Personal Project (2019.05~)</h2>
                <p>
                    바닐라 자바스크립로 개발하는것을 좋아합니다.
                    이유나 목적이 없는 코드를 작성하지 않기 위해 노력합니다.
                </p>

                <h3>Todo App</h3>
                <ul>
                    <li>완료한 항목 기반의 그래프가 있는 투두 리스트 앱 개발</li>
                    <li>반응형 웹 디자인</li>
                    <li>Vanilla JS, CSS, HTML</li>
                    <li>자세한 내용은 <a href="https://project.suzie.world/todo-app.html" target="_blank">이곳</a>에서 확인 할 수 있습니다.</li>
                </ul>

                <h3>Notes App</h3>
                <ul>
                    <li>달력, 정렬과 검색 기능이 있는 노트 앱 개발</li>
                    <li>반응형 웹 디자인</li>
                    <li>Vanilla JS, CSS, HTML</li>
                    <li>자세한 내용은 <a href="https://project.suzie.world/notes-app.html" target="_blank">이곳</a>에서 확인 할 수 있습니다.</li>
                </ul>

                <h3>Timer App</h3>
                <ul>
                    <li>시간을 기록하고 총 누적된 시간 값을 알 수 있는 타이머 앱</li>
                    <li>Vanilla JS, Sass, HTML</li>
                    <li>자세한 내용은 <a href="https://project.suzie.world/timer-app.html" target="_blank">이곳</a>에서 확인 할 수 있습니다.</li>
                </ul>

                <h3>Weather App</h3>
                <ul>
                    <li>검색어 기반으로 지역, 날씨, 시간 정보를 보여주는 날씨 앱</li>
                    <li>Node JS, Vanilla JS, CSS, HTML</li>
                    <li>자세한 내용은 <a href="https://project.suzie.world/weather-app.html" target="_blank">이곳</a>에서 확인 할 수 있습니다.</li>
                </ul>

                <h3>suzie.world</h3>
                <ul>
                    <li>포트폴리오와 블로그 용도의 개인 웹페이지 제작</li>
                    <li>Gatsby로 사이트 생성, Netlify로 배포, Contentful로 블로그 글 작성</li>
                    <li>React, GraphQL, Sass</li>
                </ul>

                <hr />

                <h2>Work Experience (2019.01 ~ 04)</h2>
                <p>
                    마크업 엔지니어로써 디자이너 한분, 개발자 두분과 함께 외주 작업을 했습니다.
                    이 기간동안 배운것은 HTML, CSS를 안다고 생각했지만 사실은 아니였다는 점입니다.
                    어떻게 시맨틱 마크업을 해야 개발자가 더 편하게 작업할 수 있을지에 대한 고민,
                    크로스 브라우징 문제 그리고 클래스는 어떻게 관리해야하는지에 대한 고민을 했습니다.
                </p>

                <h3>제주항공 X BOTDARI (보따리) 베트남 여행플래닝 서비스</h3>
                <ul>
                    <li>반응형 웹 페이지 마크업 개발 </li>
                    <li>현재는 해당 서비스가 종료되어 아래에 개발한 페이지들을 링크했습니다.</li>
                    <li><a href="http://study.baramilda.com/jeju/reservation_main.html" target="_blank">예약 상품 메인</a> | <a href="http://study.baramilda.com/jeju/reservation_tour_list.html" target="_blank">투어 예약 리스트</a> | <a href="http://study.baramilda.com/jeju/reservation_tour_view.html" target="_blank">투어 예약 상세</a> | <a href="http://study.baramilda.com/jeju/mypage.html" target="_blank">마이 페이지</a> | <a href="http://study.baramilda.com/jeju/mypage_reservation.html" target="_blank">예약 문의</a></li>
                </ul>

                <h3>유네스코 아태무형 유산센터 사업 성과물 웹 페이지</h3>
                <ul>
                    <li>웹 페이지 디자인 및 마크업 개발</li>
                    <li>개발한 웹 페이지: <a href="http://www.ichcap.org/kor/ek/sub_main_audiovisual.html" target="_blank">아태지역 무형유산 시청각자료</a> | <a href="http://www.ichcap.org/kor/ek/sub_main_videophoto.html" target="_blank">무형유산 온라인 전시</a> | <a href="http://www.ichcap.org/kor/ek/sub_main_prbook.html" target="_blank">국가별 무형유산 도서 시리즈</a></li>
                </ul>

                <h3>한국 경영원 웹 페이지</h3>
                <ul>
                    <li>반응형 웹 페이지 마크업 개발</li>
                    <li>해당 페이지: <a href="https://www.edupoll.net" target="_blank">한국 경영원</a></li>
                </ul>

                <hr />

                <h2>Other Experience </h2>
                <p className={aboutStyles.small}>
                    블로그를 운영중입니다.
                    기술 발전이 빠른 이유에는 무엇이든 공개하고, 공유하는 문화에 있다고 생각합니다.
                    컨퍼런스 참석 후기, 디자이너를 인터뷰 하는 글, 받아들인 지식을 기록하는 글들을 쓰고 있습니다.
                    개발자로써 성장하며 누군가에게 도움을 줄 수 있는 글을 쓰는것이 목표입니다.
                    그 외에도 장고걸스 2019 워크샵, JSConf Korea 2019에 참석한 경험이 있습니다.
                </p>

                <ul>
                    <li><a href="https://www.suzie.world/blog" target="_blank">suzie.world 블로그</a></li>
                    <li>Django Girls Daegu 2019 워크샵</li>
                    <li>JSConf Korea 2019 <a href="https://www.suzie.world/blog/jsconf-korea-2019" target="_blank">(후기글)</a></li>
                </ul>

                <hr />

                <h2>Contact</h2>

                <ul>
                    <li>e-mail: <a href="mailto:thanks.suzie@gmail.com">thanks.suzie@gmail.com</a></li>
                    <li><a href="https://github.com/iamsuzie" target="_blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/codesuzie/" target="_blank">Linked In</a></li>
                </ul>
            </div>
        </Layout>
    )
}

export default AboutPage