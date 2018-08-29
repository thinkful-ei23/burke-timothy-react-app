import React from 'react';

export default function Button(props) {
  let count = 0;
  // only works if countdown has started 
  function toggle () {
    if (count % 2 === 0) {
      props.pauseCountdown();
    } else {
      props.setCountdown();
    }
    count++;
  }

    return (
      <button onClick={() => toggle()}>Pause</button>
    );
}
