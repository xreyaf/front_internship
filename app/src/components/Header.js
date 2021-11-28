/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            ФРНТНД
          </a>

          <div className="nav__menu" id="nav-menu">
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

          <div className="nav__toggle" id="nav-toggle">
            <box-icon name="menu" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
