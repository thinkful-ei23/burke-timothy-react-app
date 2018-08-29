import React from 'react';

export default function Input() {
  return (
    <form className="input" onSubmit>
      <label htmlFor="input">Set timer</label>
      <input id="input" type="number" />
      <input type="submit" value="Start timer" />
    </form>
  );
}
