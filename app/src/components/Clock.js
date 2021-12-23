/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.time) {
      document.title = `${this.state.time.toLocaleTimeString()}`;
    } else document.title = 'FRNTND';
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;

    return React.createElement(
      'h1',
      'null',
      `Московское время: ${time.toLocaleTimeString()}`
    );
  }
}

export default Clock;
