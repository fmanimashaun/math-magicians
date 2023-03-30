import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ onButtonClick, onCalculate }) => (
  <div className="calculator__keypad">
    <button className="calculator__keypad-btn" type="button" onClick={() => onCalculate('AC')}>AC</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onCalculate('+/-')}>+/-</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onCalculate('%')}>%</button>
    <button className="calculator__keypad-btn operation" type="button" onClick={() => onCalculate('÷')}>÷</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('7')}>7</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('8')}>8</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('9')}>9</button>
    <button className="calculator__keypad-btn operation" type="button" onClick={() => onCalculate('x')}>x</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('4')}>4</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('5')}>5</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('6')}>6</button>
    <button className="calculator__keypad-btn operation" type="button" onClick={() => onCalculate('-')}>-</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('1')}>1</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('2')}>2</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('3')}>3</button>
    <button className="calculator__keypad-btn operation" type="button" onClick={() => onCalculate('+')}>+</button>
    <button className="calculator__keypad-btn zero-btn" type="button" onClick={() => onButtonClick('0')}>0</button>
    <button className="calculator__keypad-btn" type="button" onClick={() => onButtonClick('.')}>.</button>
    <button className="calculator__keypad-btn operation" type="button" onClick={() => onCalculate('=')}>=</button>
  </div>
);

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onCalculate: PropTypes.func.isRequired,
};

export default Keypad;
