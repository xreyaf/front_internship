import React, { Component } from 'react';

class Cards extends Component {
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('Потверждено!');
  };

  render() {
    return (
      <section className="cards section container">
        <h1 className="cards__title">Это карточки</h1>
        <div className="cards__container grid">
          <div className="cards__data">
            <picture className="cards__img">
              <source
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_outdoor_adventure_re_j3b7.svg`}
              />
              <img
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_outdoor_adventure_re_j3b7.svg`}
                alt="Пара людей на природе"
              />
            </picture>
            <p className="cards__description">
              Саша и Маша решили выбраться на природу.
            </p>
            <button
              className="cards__button button"
              type="button"
              onClick={this.handleClick}>
              Потвердить
            </button>
          </div>
          <div className="cards__data">
            <picture className="cards__img">
              <source
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_designer_re_5v95.svg `}
              />
              <img
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_designer_re_5v95.svg `}
                alt="Дизайнер"
              />
            </picture>
            <p className="cards__description">
              Дизайнер сидит и боготворит Adobe.
            </p>
            <button
              className="cards__button button"
              type="button"
              onClick={this.handleClick}>
              Потвердить
            </button>
          </div>
          <div className="cards__data">
            <picture className="cards__img">
              <source
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_gaming_re_cma2.svg`}
              />
              <img
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_gaming_re_cma2.svg`}
                alt="Гейминг"
              />
            </picture>
            <p className="cards__description">
              Надо было купить второй геймпад.
            </p>
            <button
              className="cards__button button"
              type="button"
              onClick={this.handleClick}>
              Потвердить
            </button>
          </div>
          <div className="cards__data">
            <picture className="cards__img">
              <source
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_lightbulb_moment_re_ulyo.svg`}
              />
              <img
                srcSet={`${process.env.PUBLIC_URL}/img/undraw_lightbulb_moment_re_ulyo.svg`}
                alt="Внезапное вдохновение"
              />
            </picture>
            <p className="cards__description">Момент внезапного вдохновения.</p>
            <button
              className="cards__button button"
              type="button"
              onClick={this.handleClick}>
              Потвердить
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default Cards;
