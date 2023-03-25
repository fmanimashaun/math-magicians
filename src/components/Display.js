import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <form className="calculator__display">
    <input className="calculator__display-input" type="text" value={value} readOnly />
  </form>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
