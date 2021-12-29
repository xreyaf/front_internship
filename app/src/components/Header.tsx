import { Component } from 'react';

type Props = {};
type State = {
  showMenu: boolean;
  isTop: boolean;
};

class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showMenu: false,
      isTop: true
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.toggleShadowVisibility = this.toggleShadowVisibility.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleShadowVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleShadowVisibility);
  }

  toggleShadowVisibility() {
    const isTop = window.pageYOffset < 100;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  }

  toggleClass() {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    const menuActive = this.state.showMenu ? 'show__menu' : '';
    const isTop = this.state.isTop ? '' : 'scroll__header';
    return (
      <header className={`header ${isTop}`} id="header">
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
                  {/* 
                  // @ts-ignore */}
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
            {/* 
            // @ts-ignore */}
            <box-icon name="menu" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
