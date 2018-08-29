'use strict';

import React from 'react';

export default function Input(){

  return (
    <form className="input">
      <label htmlFor="input">Set timer</label>
      <input id="input" type="text"></input>
      <input type="submit" value="Start timer"></input>
    </form>
  )

}