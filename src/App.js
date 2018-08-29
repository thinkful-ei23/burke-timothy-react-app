
import React from 'react';
import Input from './Input';
import Timer from './Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: '' };
  }
  setTime(currentTime) {
    this.setState({ currentTime });
  }

  render() {
    return (
      <div>
        <Timer />
        <Input setTime={currentTime => this.setTime(currentTime)} />
      </div>
    );
  }
}
