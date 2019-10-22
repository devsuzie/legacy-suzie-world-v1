import React from 'react'
import { Link } from 'gatsby'

import aboutStyles from './about.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className={aboutStyles.container}>

                <h2>Suzie Kim</h2>
                <ul>
                    <li>밑도 끝도 없이 잘될거라고 생각하는 무한 긍정 주의자</li>
                    <li>새로운것을 배우고 받아들이는것에 흥분하는 90년대생</li>
                    <li>퍼블리싱으로 디자인과 코딩 어디쯤에서인가 시작한 프론트엔드 개발자</li>
                    <li>작은것에도 이유가 있는 디자인과 코드를 만드는것이 목표</li>
                </ul>

                <h2>Hex Color Code <span>#FBDF8C</span></h2>
                <ul>
                    <li>2월 18일 탄생화 Butter Cup</li>
                    <li>Butter Cup의 Hex Color Code는 #FBDF8C</li>
                    <li>이 색상코드의 태그는 Orange Yellow</li>
                    <li>우연하게도 제일 좋아하는 색은 주황색과 노랑색</li>
                </ul>

                <h2>MBTI - ENFP</h2>
                <ul>
                    <li>성격유형 검사 결과 ENFP</li>
                    <li>
                        <i>당신이 생계를 위해 무슨 일을 하는지, 저는 관심 없습니다. 다만 제가 알고 싶은 건 당신이 가슴 저리게 동경하는 것이 있는지, 당신 마음속 깊은 바람을 감히 충족시키고자 하는 열망이 있는지입니다. 당신의 나이가 얼마인지는 중요하지 않습니다. 당신이 사랑을 위해, 당신의 꿈을 위해, 그리고 삶이라는 모험을 위해 기꺼이 바보가 될 준비가 되어 있는지, 그것이 궁금할 뿐입니다.</i>
                        <br />
                        <Link to="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp">출처 : 16Personalities-ENFP</Link>
                    </li>
                </ul>

                <h2>Etc.</h2>
                <ul>
                    <li>
                        Contact : <a href="mailto:thanks.suzie@gmail.com">thanks.suzie@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://github.com/iamsuzie">Github</a> / <a href="https://www.youtube.com/channel/UCbt4LmY0tR3Z-XkokBRQsqw?view_as=subscriber">Youtube</a> / <a href="https://www.instagram.com/__02___18/">Instagram</a>
                    </li>
                </ul>

            </div>
        </Layout>
    )
}

export default AboutPage