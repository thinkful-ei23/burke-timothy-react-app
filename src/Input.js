import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleSubmit(e, time) {
    e.preventDefault();
    this.props.setTime(time);
    this.props.startCountdown();
  }

  handleInput(input) {
    this.setState({input});
  }

  render () {
  return (
    <form className="input" onSubmit={(e) => this.handleSubmit(e, this.state.input)}>
      <label htmlFor="input">Set timer</label>
      <input onChange={(e) => this.handleInput(e.target.value)} id="input" type="number" />
      <input type="submit" value="Start timer" />
    </form>
  );
}
}
