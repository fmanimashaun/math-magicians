import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    const newValue = calcData.next === null ? value : calcData.next + value;
    setCalcData({ ...calcData, next: newValue });
  };

  const handleCalculate = (operation) => {
    const result = calculate(calcData, operation);
    setCalcData(result);
  };

  return (
    <section className="calculator">
      <Display value={calcData.next || calcData.total || '0'} />
      <Keypad onButtonClick={handleButtonClick} onCalculate={handleCalculate} />
    </section>
  );
};

export default Calculator;
