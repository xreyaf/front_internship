/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      showMenu: false,
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  toggleClass() {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    const menuActive = this.state.showMenu ? 'show__menu' : '';
    const isTop = this.state.isTop ? '' : 'scroll__header';
    return (
      <header
        onScroll={this.handleScroll}
        className={`header ${isTop}`}
        id="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            ФРНТНД
          </a>

          <div className={`nav__menu ${menuActive}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="cards" className="nav__link">
                  Карточки
                </a>
              </li>
              <li className="nav__item">
                <a href="forms" className="nav__link">
                  Формы
                </a>
              </li>
              <li className="nav__item">
                <a href="scripts" className="nav__link">
                  Скрипты
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <box-icon name="home" />
                </a>
              </li>
            </ul>
          </div>

          <div
            role="none"
            className="nav__toggle"
            id="nav-toggle"
            onClick={this.toggleClass}>
            <box-icon name="menu" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
