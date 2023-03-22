import React from 'react';

const Keypad = () => (
  <div className="calculator__keypad">
    <button className="calculator__keypad-btn" type="button">AC</button>
    <button className="calculator__keypad-btn" type="button">+/-</button>
    <button className="calculator__keypad-btn" type="button">%</button>
    <button className="calculator__keypad-btn operation" type="button">÷</button>
    <button className="calculator__keypad-btn" type="button">7</button>
    <button className="calculator__keypad-btn" type="button">8</button>
    <button className="calculator__keypad-btn" type="button">9</button>
    <button className="calculator__keypad-btn operation" type="button">x</button>
    <button className="calculator__keypad-btn" type="button">4</button>
    <button className="calculator__keypad-btn" type="button">5</button>
    <button className="calculator__keypad-btn" type="button">6</button>
    <button className="calculator__keypad-btn operation" type="button">-</button>
    <button className="calculator__keypad-btn" type="button">1</button>
    <button className="calculator__keypad-btn" type="button">2</button>
    <button className="calculator__keypad-btn" type="button">3</button>
    <button className="calculator__keypad-btn operation" type="button">+</button>
    <button className="calculator__keypad-btn zero-btn" type="button">0</button>
    <button className="calculator__keypad-btn" type="button">.</button>
    <button className="calculator__keypad-btn operation" type="button">=</button>
  </div>
);

export default Keypad;
