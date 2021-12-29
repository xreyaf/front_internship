import React, { Component } from 'react';

type ClockProps = {};

type ClockState = {
  time: any;
};

export class Clock extends Component<ClockProps, ClockState> {
  interval: number | undefined;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentDidUpdate() {
    const { time } = this.state;
    if (time) {
      document.title = `${time.toLocaleTimeString()}`;
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
