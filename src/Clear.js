import React from 'react';

export default function Clear(props) {

  function clearCountdown () {
    props.pauseCountdown();
    props.setTime(0, 'stopped');

  }
    return (
      <button onClick={() => clearCountdown()}>Clear</button>
    );
}
