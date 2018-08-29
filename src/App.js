'use strict';

import React from 'react';
import Input from './Input';
import Timer from './Timer';

export default class App extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <Timer />
        <Input />
      </div>
    );

  }

}