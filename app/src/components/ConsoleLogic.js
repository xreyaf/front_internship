/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

export class ConsoleLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cURL: '',
      historyValue: '',
      cookieValue: '',
      sessionValue: '',
      location: '',
      locationLINK: '',
      appInfo: ''
    };
  }

  handleClick = () => {
    try {
      const a = 100;
      const b = 10;
      const isBool = false;
      console.log(`Вводные: a=${a}, b=${b}, isBool=${isBool}`);

      const result = a > 50 && b < 12;
      const result1 = a > 50 || isBool === true;
      const result2 = !(a < 50);
      const result3 = undefined || a || null;
      const result4 = a && null && b;

      console.group('Логические обсчеты');
      console.log(result, `${a} > 50 && ${b} < 12`);
      console.log(result1, `${a} > 50 || ${isBool} == true`);
      console.log(result2, `!(${a} > 50)`);
      console.log(result3, `null || ${a} || undefined`, 'Первая истина');
      console.log(result4, `${a} && null && ${b}`, 'Первое ложное');
      console.groupEnd();

      if (a !== b) {
        alert(`false: ${a} != ${b} `);
      }

      throw new Error('Ошибочка вышла!');
    } catch (e) {
      console.log(e.name);
      console.log(e.message);
    } finally {
      alert('finally выполнится всегда');
    }

    const user = {
      firstName: 'Peter',
      age: 30,
      adress: {
        country: 'Russia',
        region: `Kaluga oblast'`,
        city: 'Kaluga'
      },
      getFirstName() {
        console.log(this.firstName);
      },
      getAgeArrow: null,
      getAge() {
        this.getAgeArrow = () => console.log(this.age);
        // setTimeout(() => console.log(this.age), 100);
      }
    };

    console.group('Стрелочные функции');
    user.getFirstName();
    user.getAge();
    user.getAgeArrow();

    const notArrow = function (a, b) {
      return `${a} ${b}`;
    };

    const Arrow = (...args) => {
      console.log(args);
      return `${args[0]} ${args[1]}`;
    };

    console.log(notArrow('firstArg', 'secondArg'));
    console.log(Arrow('firstArg', 'secondArg'));

    console.groupEnd();

    function getUser(firstName = 'unknown', age = 0) {
      console.log(`Hello ${firstName} with the age of ${age}`);
    }
    getUser();

    console.group('Деструктуризация, spread, rest');
    const odds = [1, 3, 5, 7];
    const evens = [2, 4, 6, 8];
    console.log([...odds, 1337, ...evens]);
    const numbers = [5, 123, 52, 4, 10];
    console.log(Math.max(...numbers));
    const sumOdds = (a, ...rest) => a + rest.reduce((ab, i) => ab + i, 0);
    const sumEvens = (a = 0, b = 0, ...rest) => {
      let result = a + b;
      for (const r of rest) {
        result += r;
      }
      return result;
    };
    console.log(sumOdds(...odds));
    console.log(sumEvens(...evens));

    const sections = document.querySelectorAll('section');
    const arrayOfSections = [...sections];
    console.log(sections, Array.isArray());
    console.log(arrayOfSections, Array.isArray());

    const [a, , ...other] = numbers;
    console.log(a, other);
    console.groupEnd();

    const {
      firstName: fName = 'без имени',
      age,
      pet = 'нет питомца',
      adress: { city, region, country }
    } = user;
    console.group(`${fName} info:`);
    console.log(`${age} лет, ${pet}, адрес: ${city}, ${region}, ${country}`);
    console.groupEnd();
    console.groupEnd();

    function* genFunction(n = 10) {
      for (let index = 0; index < n; index++) {
        yield index;
      }
    }
    console.group('Генератор');
    for (const i of genFunction(5)) {
      console.log(i);
    }
    console.groupEnd();
  };

  handleURL = () => {
    const currentURL = window.location.href;
    this.setState({ cURL: currentURL });
  };

  handleGetH = () => {
    const len = window.history.length;
    if (len < 50) {
      this.setState({
        historyValue: `Количество переходов: ${len}`
      });
    } else {
      this.setState({
        historyValue: 'Количество переходов больше 50'
      });
    }
  };

  handleNavH = () => {
    try {
      window.history.go(-1);
    } catch {
      alert('Не было переходов');
    }
  };

  handleChangeH = () => {
    try {
      window.history.pushState(null, '', 'http://localhost:3000');
      window.history.go(0);
    } catch {
      alert('Не получилось :с');
    }
  };

  handleGetCk = () => {
    this.setState({ cookieValue: document.cookie });
  };

  handleSetCk = () => {
    document.cookie = `name=Roman; expires=${new Date(
      2022,
      0,
      1
    ).toUTCString()}`;
    document.cookie = `lastName=Polyakov;  expires=${new Date(
      2022,
      0,
      1
    ).toUTCString()}`;
  };

  handleChangeCk = () => {
    document.cookie = 'name=Romul; max-age=5';
  };

  handleSetLs = () => {
    const user = {
      firstName: 'Peter',
      age: 30,
      adress: {
        country: 'Russia',
        region: `Kaluga oblast'`,
        city: 'Kaluga'
      },
      getFirstName() {
        console.log(this.firstName);
      },
      getAgeArrow: null,
      getAge() {
        this.getAgeArrow = () => console.log(this.age);
      }
    };
    localStorage.setItem('user', JSON.stringify(user));
  };

  handleGetLs = () => {
    try {
      const userLS = JSON.parse(localStorage.getItem('user'));
      // debugger;
      this.setState({
        sessionValue: `Его зовут ${userLS.firstName}, ему ${userLS.age} лет`
      });
    } catch {
      alert('LocalStorage is empty!');
    }
  };

  handleSetSs = () => {
    const value = sessionStorage.setItem(
      'SessionInfo',
      'Some session information'
    );
    this.setState({ sessionValue: value });
  };

  handleGetSs = () => {
    try {
      const value = sessionStorage.getItem('SessionInfo');
      if (!value) {
        alert('SessionStorage is empty!');
      } else {
        this.setState({ sessionValue: value });
      }
    } catch {
      alert('SessionStorage is empty!');
    }
  };

  handleClear = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.setState({ sessionValue: '' });
  };

  handleGetLct = () => {
    window.navigator.geolocation.getCurrentPosition(
      (res) => {
        const LINK = `https://yandex.ru/maps/?ll=${res.coords.longitude},${res.coords.latitude}&z=12`;
        this.setState({
          location: `Текущее местоположение: ${res.coords.latitude}, ${res.coords.longitude}`,
          locationLINK: LINK
        });
      },
      () => {
        alert('Произошла ошибка при определении местоположения!');
      }
    );
  };

  handleGetAppInf = () => {
    const value = window.navigator.userAgent;
    this.setState({ appInfo: value });
  };

  render() {
    const {
      cURL,
      historyValue,
      cookieValue,
      sessionValue,
      location,
      appInfo,
      locationLINK
    } = this.state;
    return (
      <>
        <label className="interaction__label">
          Обработка логических операций
        </label>
        <br />
        <button
          type="button"
          className="interaction__button button"
          onClick={this.handleClick}>
          гогого
        </button>
        <br />
        <br />
        <label className="interaction__label">Получение текущего URL</label>
        <br />
        <button
          type="button"
          className="urlBtn interaction__button button"
          onClick={this.handleURL}>
          Получить URL
        </button>
        <p>{cURL}</p>
        <br />
        <label className="interaction__label">Объект history</label>
        <br />
        <button
          type="button"
          className="getHistory interaction__button button"
          onClick={this.handleGetH}>
          Получить
        </button>
        <button
          type="button"
          className="navHistory interaction__button button"
          onClick={this.handleNavH}>
          Перейти
        </button>
        <button
          type="button"
          className="changeHistory interaction__button button"
          onClick={this.handleChangeH}>
          Изменить
        </button>
        <p>{historyValue}</p>
        <br />

        <label className="interaction__label">Cookie</label>
        <br />
        <button
          type="button"
          className="setCookie interaction__button button"
          onClick={this.handleSetCk}>
          Запись
        </button>
        <button
          type="button"
          className="getCookie interaction__button button"
          onClick={this.handleGetCk}>
          Чтение
        </button>
        <button
          type="button"
          className="changeCookie interaction__button button"
          onClick={this.handleChangeCk}>
          Изменить
        </button>
        <p>{cookieValue}</p>
        <br />
        <br />

        <label className="interaction__label">
          LocalStorage & SessionStorage
        </label>
        <br />
        <button
          type="button"
          className="setLocal interaction__button button"
          onClick={this.handleSetLs}>
          Запись LocalStorage
        </button>
        <button
          type="button"
          className="getLocal interaction__button button"
          onClick={this.handleGetLs}>
          Чтение LocalStorage
        </button>
        <br />
        <button
          type="button"
          className="setSession interaction__button button"
          onClick={this.handleSetSs}>
          Запись SessionStorage
        </button>
        <button
          type="button"
          className="getSession interaction__button button"
          onClick={this.handleGetSs}>
          Чтение SessionStorage
        </button>
        <button
          type="button"
          className="clear interaction__button button warning"
          onClick={this.handleClear}>
          Очистить всё
        </button>
        <p>{sessionValue}</p>
        <br />

        <label type="button" className="interaction__label">
          Navigator
        </label>
        <br />
        <button
          type="button"
          className="getLocation interaction__button button"
          onClick={this.handleGetLct}>
          Определить местоположение
        </button>
        <button
          type="button"
          className="getAppInfo interaction__button button"
          onClick={this.handleGetAppInf}>
          Device info
        </button>
        <br />
        <a href={locationLINK} target="_blank" rel="noreferrer">
          {location}
        </a>
        <p>{appInfo}</p>
        <br />
      </>
    );
  }
}

export default ConsoleLogic;