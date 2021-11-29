/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Clock, Calculate, ConsoleLogic, Requests } from '.';

class Interaction extends Component {
  render() {
    return (
      <section className="interaction section">
        <div className="interaction__container container">
          <h1 className="interaction__title">Секция взаимодействия</h1>
          <Clock /> <br />
          <Calculate />
          <ConsoleLogic />
          <Requests />
        </div>
      </section>
    );
  }
}

export default Interaction;
