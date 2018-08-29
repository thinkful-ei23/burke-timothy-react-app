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

  render() {
    return (
      <div>
        <Timer currentTime={this.state.currentTime} />
        <Input setTime={currentTime => this.setTime(currentTime)} />
      </div>
    );
  }
}
