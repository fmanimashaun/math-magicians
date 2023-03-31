import React from 'react';
import Calculator from 'components/Calculator';

const CalculatorPage = () => (
  <main
    className="main"
    style={{
      marginBlock: '1.5rem auto',
    }}
  >
    <div className="main__wrapper">
      <h2 className="main__header">Let&lsquo;s do some math!</h2>
      <Calculator />
    </div>
  </main>
);

export default CalculatorPage;
