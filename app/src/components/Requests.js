/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      repos: []
    };
  }

  handlePromise = () => {
    const { user } = this.state;
    const URL = `https://api.github.com/users/${user}/repos`;
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        const err = new Error(`${response.status} ${response.statusText}`);
        throw err;
      })
      .then((data) => {
        if (data.length > 0) {
          this.setState({ repos: data });
        } else {
          const err = new Error('У пользователя нет публичных репозиториев');
          throw err;
        }
      })
      .catch((err) => alert(`Error: ${err.message}`));
  };

  handleAsAw = async () => {
    const { user } = this.state;
    const URL = `https://api.github.com/users/${user}/repos`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          this.setState({ repos: data });
        } else {
          const error = new Error('У пользователя нет публичных репозиториев');
          throw error;
        }
      } else {
        const error = new Error(`${response.status} ${response.statusText}`);
        throw error;
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  handleClear = () => {
    this.setState({ repos: [] });
  };

  render() {
    const { user, repos } = this.state;
    return (
      <>
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
          value={user}
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <br />
        <button
          type="button"
          className="getReposPromise interaction__button button"
          onClick={this.handlePromise}>
          Promise
        </button>
        <button
          type="button"
          className="getReposAsAw interaction__button button"
          onClick={this.handleAsAw}>
          Async/Await
        </button>
        <button
          type="button"
          className="clearData interaction__button button warning"
          onClick={this.handleClear}>
          Очистить
        </button>
        <br />
        <p style={{ whiteSpace: 'pre-line' }}>
          {repos
            .map(
              (rep) =>
                `Имя репозитория: ${rep.name}, создан: ${new Date(
                  rep.created_at
                ).toLocaleDateString()}, последнее обновление: ${new Date(
                  rep.updated_at
                ).toLocaleDateString()}. Описание: ${rep.description} `
            )
            .join('\n')}
        </p>
      </>
    );
  }
}

export default Requests;
