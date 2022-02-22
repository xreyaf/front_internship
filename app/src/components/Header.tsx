/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/Theme.context';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { themeType, setCurrentTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setIsTop(window.pageYOffset < 100)
      );
    }
  }, []);

  const darkTheme = 'dark-theme';
  if (themeType) {
    document.body.classList[themeType === 'dark' ? 'add' : 'remove'](darkTheme);
  }

  return (
    <header className={`header ${isTop ? '' : 'scroll__header'}`} id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          ФРНТНД
        </Link>

        <div
          className={`nav__menu ${showMenu ? 'show__menu' : ''}`}
          id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="cards" className="nav__link">
                Карточки
              </Link>
            </li>
            <li className="nav__item">
              <Link to="forms" className="nav__link">
                Формы
              </Link>
            </li>
            <li className="nav__item">
              <Link to="scripts" className="nav__link">
                Скрипты
              </Link>
            </li>
            <li className="nav__item">
              {/*
                  // @ts-ignore */}
              <box-icon
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrentTheme(themeType === 'light' ? 'dark' : 'light');
                  document.body.classList.toggle(darkTheme);
                }}
                color={themeType === 'light' ? '' : 'hsl(88deg 50% 53%)'}
                name={themeType === 'light' ? 'moon' : 'sun'}
                type="solid"
                flip="horizontal"
              />
            </li>
          </ul>
        </div>

        <div
          role="none"
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setShowMenu(!showMenu)}>
          {/*
            // @ts-ignore */}
          <box-icon name="menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
