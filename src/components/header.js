import React from 'react'
import logo from './logo.svg'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick} className={`${headerStyles.hamburger} ${this.state.isToggleOn ? `${headerStyles.close}` : ''}`}>
        <span className={headerStyles.top}></span>
        <span className={headerStyles.middle}></span>
        <span className={headerStyles.bottom}></span>
        <ul className={headerStyles.mobileList}>
            <li>
                <Link className={headerStyles.mobileItem} activeClassName={headerStyles.activeMobileItem} to="/">HOME</Link>
            </li>
            <li>
                <Link className={headerStyles.mobileItem} activeClassName={headerStyles.activeMobileItem} to="/blog">BLOG</Link>
            </li>
            <li>
                <Link className={headerStyles.mobileItem} activeClassName={headerStyles.activeMobileItem} to="/about">ABOUT</Link>
            </li>
        </ul>
      </div>
    );
  }
}
  
const Header = () => {

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>
                    <img src={logo} alt="SUZ!E logo"/>
                </Link>
            </h1>
            <Toggle />
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header