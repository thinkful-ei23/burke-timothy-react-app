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

  countDown() {
    const currentTime = (() => this.state.currentTime);
    while (currentTime > 0) {
        setInterval(() => {
          console.log('setting new time');
          let newCurrentTime = this.state.currentTime - 1;
          this.setState({
            currentTime: newCurrentTime >= 0 ? newCurrentTime : 0
          });
        }, 1000)
      }
  }

  render() {

    return (
      <div>
        <Timer currentTime={this.state.currentTime} />
        <Input startCountdown={() => this.countDown()} setTime={currentTime => this.setTime(currentTime)} />
      </div>
    );
  }
}
