import React from 'react'

import Header from './header'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.wrap}>
            <Header />
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout