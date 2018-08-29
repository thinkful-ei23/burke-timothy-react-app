import React from 'react';

export default class Button extends React.Component {
  // change to class, set count into the state
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }
  
  iterateState (newCount) {
    this.setState({count: newCount})
  }

  // only works if countdown has started 
  toggle () {
    if (this.state.count % 2 === 0) {
      this.props.pauseCountdown();
    } else {
      this.props.setCountdown();
    }
    this.iterateState(this.state.count + 1);
  }
  
  render() {
    return (
      <button onClick={() => this.toggle()}>Pause</button>
    );
  }
}
