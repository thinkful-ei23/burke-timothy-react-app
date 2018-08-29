import React from 'react';
import Input from './Input';
import Timer from './Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: 0 };
  }

  setTime(currentTime) {
    this.setState({ currentTime });
  }

  setCountdown() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  clearCountDown() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: this.state.currentTime - 1
    });
  }

  render() {
    if (this.state.currentTime === 0) {
      this.clearCountDown();
    }
     
    return (
      <div>
        <Timer currentTime={this.state.currentTime} />
        <Input setCountdown={() => this.setCountdown()} setTime={currentTime => this.setTime(currentTime)} />
      </div>
    );
  }
}
