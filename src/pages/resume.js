import React from "react"
import { Link } from "gatsby"

import aboutStyles from "./about.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Resume" />
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.name}>
          안녕하세요 저는 <span>김수지</span>입니다.
        </h1>
        <p className={aboutStyles.big}>
          모르는것이 무엇인지 아는 상태로 가기 위해 노력합니다.
          <br />
          정확한 질문을 하는법과 주석 없이도 설명되는 코드를 작성하는법에 대해
          고민합니다.
          <br />
          스스로를 돌아보기 위해서 하는 문서 작성을 즐깁니다. <br />
          새로운것을 배우고 받아들이는것을 늘 환영합니다.
        </p>

        <h2>Personal Project (2019.05~)</h2>
        <p className={aboutStyles.small}>
          프로그래밍을 시작하게 된 이유도 만들고 싶은 것을 만들고
          싶어서였습니다. 만들고자 하는 것의 완성된 모습은 계속해서 그리되,
          처음부터 모든 기능을 구현하고자 하지 않았습니다. 아래 목록에서
          확인하실 수 있는 개인 프로젝트들은 모두 버전1의 모습이라고 할 수
          있습니다. 각 프로젝트의 자세한 내용은 홈 화면에서도 확인하실 수
          있습니다.
        </p>

        <ul>
          <li>
            좋아하는 음악을 일기처럼 기록할 수 있는{" "}
            <a
              href="https://suzie-project.netlify.app/this-music.html"
              target="_blank"
            >
              this.music
            </a>
          </li>
          <li>
            완료한 항목 기반의 그래프가 있는{" "}
            <a
              href="https://suzie-project.netlify.app/todo-app.html"
              target="_blank"
            >
              {" "}
              투두 리스트 앱
            </a>
            개발
          </li>
          <li>
            검색과 정렬 기능과 캘린더가 있는{" "}
            <a
              href="https://suzie-project.netlify.app/notes-app.html"
              target="_blank"
            >
              노트테이킹 앱
            </a>
          </li>
          <li>
            오늘 총 집중한 시간이 얼마인지 확인할 수 있는{" "}
            <a
              href="https://suzie-project.netlify.app/timer-app.html"
              target="_blank"
            >
              타이머 앱
            </a>
          </li>
          <li>
            검색어 기반으로 지역, 날씨, 시간 정보를 보여주는{" "}
            <a
              href="https://suzie-project.netlify.app/weather-app.html"
              target="_blank"
            >
              날씨 앱
            </a>
          </li>
        </ul>

        <hr />

        <div className={aboutStyles.work}>
          <h2>Work Experience (2020. 03 ~ 현재)</h2>

          <p className={aboutStyles.link}>
            기업전용 배송 기업인{" "}
            <a href="http://chainlogis.com/" target="_blank">
              체인로지스
            </a>
            에서 2020년 3월부터 일하고 있습니다.
            <br />
            진행했던 프로젝트는 아래에서 확인하실 수 있습니다.
          </p>

          <h3>두발히어로 웹 페이지 (택배 서비스)</h3>
          <span>2020.03 - 2020.04</span>

          <h4>설명</h4>
          <ul>
            <li>
              택배 서비스를 신청한 사용자가{" "}
              <a href="https://check.doobalhero.kr/" target="_blank">
                배송 조회
              </a>
              와{" "}
              <a href="https://return.doobalhero.kr/" target="_blank">
                반품 신청
              </a>
              을 할 수 있는 페이지의 클라이언트 작업을 했습니다. 데스크탑
              버전으로 구현되어있던 라이더 모집 페이지는 CSS 반응형 작업을
              진행했습니다.
            </li>
          </ul>
          <h4>역할</h4>
          <ul>
            <li>
              브랜치와 이슈 관리를 통해 Git으로 협업하는 방법을 배웠습니다.
            </li>
            <li>Hooks를 이용한 함수형 프로그래밍을 경험했습니다.</li>
            <li>반복되는 컴포넌트를 추출하여 재사용하였습니다.</li>
            <li>비즈니스 로직과 뷰를 분리하여 역할을 나누었습니다.</li>
            <li>flex를 이용해 반응형 페이지 구현했습니다.</li>
          </ul>
          <h4>기술</h4>
          <ul>
            <li>React Context & Hooks, emotion, styled component</li>
            <li>사용한 라이브러리: axios</li>
          </ul>

          <h3>두발히어로 어드민 사이트</h3>
          <span>2020.04 - 현재</span>
          <h4>설명</h4>
          <ul>
            <li>
              체인로지스의 택배서비스인 두발히어로 어드민 사이트 작업을
              진행했습니다.
            </li>
          </ul>
          <h4>역할</h4>
          <ul>
            <li>포스트맨을 이용해 API를 테스트하는 방법을 배웠습니다.</li>
            <li>HTTP API 클라이언트 작업을 진행하였습니다.</li>
            <li>적절한 폴더링에 대한 고민을 했습니다.</li>
            <li>
              컨텍스트와 훅스로 스토어를 디자인해 global state와 action을
              사용하였습니다.
            </li>
            <li>
              firebase에서 받아온 실시간 데이터를 지도에 나타내는 작업을
              했습니다.
            </li>
            <li>에러 처리를 작업했습니다.</li>
            <li>
              라이브러리를 깊게 사용하기 위해 문서를 더 잘 읽는 방법에 대해
              고민했습니다.
            </li>
          </ul>
          <h4>기술</h4>
          <ul>
            <li>React Context & Hooks, React-Router, emotion</li>
            <li>
              사용한 라이브러리: react-hook-form, react-table, react-dropzone
            </li>
          </ul>

          <h3>바로택배앱 어드민 사이트</h3>
          <span>2020.07 - 현재</span>
          <h4>설명</h4>
          <ul>
            <li>
              배송신청 서비스인 바로택배앱 어드민 사이트 작업을 진행했습니다.
              프론트엔드 부분을 혼자 맡아 작업하고 있습니다.
            </li>
          </ul>
          <h4>역할</h4>
          <ul>
            <li>로그인을 위한 쿠키 설정에 대해 공부할 수 있었습니다.</li>
            <li>CORS 에러를 해결한 경험이 있습니다.</li>
            <li>
              성능 최적화를 위해 React.memo와 useCallback훅을 적절하게
              사용했습니다.
            </li>
            <li>받아오는 데이터양에 따라 로딩 스토어를 적용하였습니다.</li>
            <li>
              라디오, 체크박스, 날짜, 파일 등 다양한 input type을 이용한 조회
              폼을 구현했습니다.
            </li>
            <li>
              서버에서 받아온 데이터를 클라이언트에서 원하는 모양대로 변형하여
              작업하였습니다.
            </li>
            <li>
              타입스크립트를 도입하여 프로젝트를 진행하며 높아진 생산성을
              경험했습니다.
            </li>
          </ul>
          <h4>기술</h4>
          <ul>
            <li>Typescript, React Context & Hooks, emotion</li>
            <li>
              사용한 라이브러리: React-hook-form, react-table, react-dropzone,
              ky
            </li>
          </ul>
        </div>

        <hr />

        <h2>Other Experience </h2>
        <p className={aboutStyles.small}>
          좋은 기회를 통해 4개월 정도 마크업 엔지니어로서 아르바이트한 경험이
          있습니다. 이 기간 동안 배운 것은 HTML, CSS를 안다고 생각했지만, 사실은
          아니었다는 점입니다. 어떻게 시맨틱 마크업을 해야 개발자가 더 편하게
          작업할 수 있을지에 대한 고민, 크로스 브라우징 문제 그리고 클래스는
          어떻게 관리해야 하는지에 대한 고민을 할 수 있었습니다. 진행한
          프로젝트는 아래 목록에서 확인하실 수 있습니다.
        </p>

        <ul>
          <li>제주항공 X BOTDARI 여행플래닝 서비스</li>
          <li>유네스코 아태무형 유산센터 사업 성과물 웹 페이지</li>
          <li>한국 경영원 웹 페이지</li>
        </ul>

        <p className={aboutStyles.small}>
          Gatsby로 생성한 개인 블로그를 운영중입니다. 기술 발전이 빠른 이유에는
          무엇이든 공개하고, 공유하는 문화에 있다고 생각합니다. 컨퍼런스 참석
          후기, 디자이너를 인터뷰 하는 글, 받아들인 지식을 기록하는 글들을 쓰고
          있습니다. 개발자로써 성장하며 누군가에게 도움을 줄 수 있는 글을
          쓰는것이 목표입니다. 그 외에도 장고걸스 2019 워크샵, JSConf Korea
          2019에 참석한 경험이 있습니다.
        </p>

        <ul>
          <li>
            <a href="https://suzie.netlify.app/blog" target="_blank">
              suzie.world 블로그
            </a>
          </li>
          <li>Django Girls Daegu 2019 워크샵</li>
          <li>
            JSConf Korea 2019{" "}
            <a
              href="https://suzie.netlify.app/blog/jsconf-korea-2019"
              target="_blank"
            >
              (후기글)
            </a>
          </li>
        </ul>

        <hr />

        <h2>Contact</h2>

        <ul>
          <li>
            <a href="mailto:thanks.suzie@gmail.com">thanks.suzie@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/iamsuzie" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage
