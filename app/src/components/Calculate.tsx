import React, { Component } from 'react';

type CalculateProps = {};

type CalculateState = {
  previousOperand: number;
  currentOperand: number;
  operationValue: string;
  resultValue: number | undefined;
};

export class Calculate extends Component<CalculateProps, CalculateState> {
  constructor(props: CalculateProps) {
    super(props);
    this.state = {
      previousOperand: 0,
      currentOperand: 0,
      operationValue: '+',
      resultValue: 0
    };
    this.handleCompute = this.handleCompute.bind(this);
  }

  handleCompute = () => {
    let computation: number | undefined;
    const { previousOperand, currentOperand, operationValue } = this.state;
    const prev = Number(previousOperand);
    const current = Number(currentOperand);
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

  handlePrevOpChange = (e: React.ChangeEvent<any>) => {
    this.setState({ previousOperand: e.target.value });
  };

  handleCurrOpChange = (e: React.ChangeEvent<any>) => {
    this.setState({ currentOperand: e.target.value });
  };

  handleOpValueChange = (e: React.ChangeEvent<any>) => {
    this.setState({ operationValue: e.target.value });
  };

  render() {
    const { previousOperand, currentOperand, operationValue, resultValue } =
      this.state;
    return (
      <>
        <label className="interaction__label">Первый операнд:</label>
        <br />
        <input
          className="interaction__text"
          type="text"
          id="previousOperand"
          value={previousOperand}
          onChange={this.handlePrevOpChange}
        />
        <br />
        <label className="interaction__label">Второй операнд:</label>
        <br />
        <input
          className="interaction__text"
          type="text"
          id="currentOperand"
          value={currentOperand}
          onChange={this.handleCurrOpChange}
        />
        <br />
        <select
          id="operationValue"
          value={operationValue}
          onChange={this.handleOpValueChange}>
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
          // readOnly={'true'}
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
