/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Times } from './Times';

class Interaction extends Component {
  render() {
    return (
      <section className="interaction section">
        <div className="interaction__container container">
          <h1 className="interaction__title">Секция взаимодействия</h1>
          <Times /> <br />
          <label className="interaction__label">Первый операнд:</label>
          <br />
          <input className="interaction__text" type="text" id="firstOperand" />
          <br />
          <label className="interaction__label">Второй операнд:</label>
          <br />
          <input className="interaction__text" type="text" id="secondOperand" />
          <br />
          <select data-operation>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">X</option>
            <option value="**">^</option>
            <option value="%">%</option>
          </select>
          <br />
          <button className="interaction__button button" data-calculate>
            calculate
          </button>
          <br />
          <button className="interaction__button button" data-calculate-child>
            calculate childClass
          </button>
          <br />
          <label className="interaction__label">Результат:</label>
          <br />
          <input className="interaction__text" type="text" id="result" />
          <br />
          <br />
          <label className="interaction__label">
            Обработка логических операций
          </label>
          <br />
          <button className="interaction__button button" onClick="logic()">
            гогого
          </button>
          <br />
          <br />
          <label className="interaction__label">Получение текущего URL</label>
          <br />
          <button className="urlBtn interaction__button button">
            Получить URL
          </button>
          <p className="urlP" />
          <label className="interaction__label">Объект history</label>
          <br />
          <button className="getHistory interaction__button button">
            Получить
          </button>
          <button className="navHistory interaction__button button">
            Перейти
          </button>
          <button className="changeHistory interaction__button button">
            Изменить
          </button>
          <br />
          <br />
          <label className="interaction__label">Cookie</label>
          <br />
          <button className="setCookie interaction__button button">
            Запись
          </button>
          <button className="getCookie interaction__button button">
            Чтение
          </button>
          <button className="changeCookie interaction__button button">
            Изменить
          </button>
          <br />
          <br />
          <label className="interaction__label">
            LocalStorage & SessionStorage
          </label>
          <br />
          <button className="setLocal interaction__button button">
            Запись LocalStorage
          </button>
          <button className="getLocal interaction__button button">
            Чтение LocalStorage
          </button>
          <br />
          <button className="setSession interaction__button button">
            Запись SessionStorage
          </button>
          <button className="getSession interaction__button button">
            Чтение SessionStorage
          </button>
          <button className="clear interaction__button button warning">
            Очистить всё
          </button>
          <br />
          <br />
          <label className="interaction__label">Navigator</label>
          <br />
          <button className="getLocation interaction__button button" href="#">
            Определить местоположение
          </button>
          <button className="getAppInfo interaction__button button">
            Получить информацию
          </button>
          <br />
          <p className="info" />
          <label className="interaction__label">Работа с запросами JS</label>
          <br />
          <label className="interaction__label">
            Введите никнейм пользователя:
          </label>
          <br />
          <input
            className="interaction__text"
            type="text"
            id="gitHubUsername"
          />
          <br />
          <button
            className="getReposPromise interaction__button button"
            href="#">
            Promise
          </button>
          <button className="getReposAsAw interaction__button button">
            Async/Await
          </button>
          <button className="clearData interaction__button button warning">
            Очистить
          </button>
          <br />
          <p className="fetchedRepos" />
        </div>
      </section>
    );
  }
}

export default Interaction;
