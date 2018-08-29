import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

  }

  // countDown() {
  //   setInterval(() => {
  //     console.log('setting new time');
  //     let newCurrentTime = this.state.currentTime - 1;
  //     this.setState({
  //       currentTime: newCurrentTime >= 0 ? newCurrentTime : 0
  //     });
  //   }, 1000)
  // }

  render() {
    return <h1>{this.props.currentTime}</h1>;
  }
}
