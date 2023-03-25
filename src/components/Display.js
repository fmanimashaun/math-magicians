import React from 'react';

const Display = () => (
  <form className="calculator__display">
    <input className="calculator__display-input" type="text" value={0} readOnly />
  </form>
);

export default Display;
