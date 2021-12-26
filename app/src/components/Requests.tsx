/* eslint-disable react/prefer-exact-props */
import React, { useState } from 'react';

const Requests = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState('');

  const handlePromiseFetch = () => {
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
          setRepos(data);
        } else {
          const err = new Error('У пользователя нет публичных репозиториев');
          throw err;
        }
      })
      .catch((err) => alert(`Error: ${err.message}`));
  };

  const handleAsyncFetch = async () => {
    const URL = `https://api.github.com/users/${user}/repos`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setRepos(data);
        } else {
          const error = new Error('У пользователя нет публичных репозиториев');
          throw error;
        }
      } else {
        const error = new Error(`${response.status} ${response.statusText}`);
        throw error;
      }
    } catch (err) {
      // @ts-ignore
      alert(`Error: ${err.message}`);
    }
  };

  const handleClear = () => {
    setRepos([]);
    setUser('');
  };

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
          setUser(e.target.value);
        }}
      />
      <br />
      <button
        type="button"
        className="getReposPromise interaction__button button"
        onClick={handlePromiseFetch}>
        Promise
      </button>
      <button
        type="button"
        className="getReposAsAw interaction__button button"
        onClick={handleAsyncFetch}>
        Async/Await
      </button>
      <button
        type="button"
        className="clearData interaction__button button warning"
        onClick={handleClear}>
        Очистить
      </button>
      <br />
      <p style={{ whiteSpace: 'pre-line' }}>
        {repos
          .map(
            (rep: {
              name: any;
              created_at: string | number | Date;
              updated_at: string | number | Date;
              description: any;
            }) =>
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
};

export default Requests;
