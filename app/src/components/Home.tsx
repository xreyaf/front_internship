/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section className="home section">
        <div className="home__container container ">
          <h1 className="home__title">Это таблица</h1>

          <table className="home__table">
            <thead>
              <tr>
                <th>Первый столбец</th>
                <th>Второй столбец</th>
                <th>Третий столбец</th>
                <th>Четвертый столбец</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ячейка [1,1]</td>
                <td>Ячейка [1,2]</td>
                <td>Ячейка [1,3]</td>
                <td>Ячейка [1,4]</td>
              </tr>
              <tr>
                <td>Ячейка [2,1]</td>
                <td>Ячейка [2,2]</td>
                <td>Ячейка [2,3]</td>
                <td>Ячейка [2,4]</td>
              </tr>
              <tr>
                <td>Ячейка [3,1]</td>
                <td>Ячейка [3,2]</td>
                <td>Ячейка [3,3]</td>
                <td>Ячейка [3,4]</td>
              </tr>
              <tr>
                <td>Ячейка [4,1]</td>
                <td>Ячейка [4,2]</td>
                <td>Ячейка [4,3]</td>
                <td>Ячейка [4,4]</td>
              </tr>
              <tr>
                <td>Ячейка [5,1]</td>
                <td>Ячейка [5,2]</td>
                <td>Ячейка [5,3]</td>
                <td>Ячейка [5,4]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Home;
