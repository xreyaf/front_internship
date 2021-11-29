/* eslint-disable react/prefer-stateless-function  */
import React, { Component } from 'react';

export class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousOperand: null,
      currenOperand: null,
      operationValue: '+',
      resultValue: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCompute = this.handleCompute.bind(this);
  }

  handleCompute = () => {
    let computation;
    const { previousOperand, currenOperand, operationValue } = this.state;
    const prev = Number(previousOperand);
    const current = Number(currenOperand);
    const operation = operationValue;

    if (Number.isNaN(prev) || Number.isNaN(current)) return;
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      case '**':
        computation = prev ** current;
        break;
      case '%':
        computation = prev % current;
        break;
      default:
        alert('Некорректные значения');
        break;
    }
    this.setState({ resultValue: computation });
  };

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { previousOperand, currenOperand, operationValue, resultValue } =
      this.state;
    return (
      <>
        <label className="interaction__label">Первый операнд:</label>
        <br />
        <input
          className="interaction__text"
          type="text"
          id="firstOperand"
          value={previousOperand}
          onChange={(e) => this.handleChange(e, 'previousOperand')}
        />
        <br />
        <label className="interaction__label">Второй операнд:</label>
        <br />
        <input
          className="interaction__text"
          type="text"
          id="secondOperand"
          value={currenOperand}
          onChange={(e) => this.handleChange(e, 'currenOperand')}
        />
        <br />
        <select
          value={operationValue}
          onChange={(e) => this.handleChange(e, 'operationValue')}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">X</option>
          <option value="**">^</option>
          <option value="%">%</option>
        </select>
        <br />
        <button
          type="button"
          className="interaction__button button"
          onClick={this.handleCompute}>
          Вычислить
        </button>
        <br />
        <label className="interaction__label">Результат:</label>
        <br />
        <input
          readOnly="true"
          className="interaction__text"
          type="text"
          id="result"
          value={resultValue}
        />
        <br />
        <br />
      </>
    );
  }
}

export default Calculate;
