import React from 'react';
import Navbar from './Navbar';

const PageHeader = () => (
  <header className="header">
    <h1 className="header__logo">Math Magicians</h1>
    <nav className="header__navbar">
      <Navbar />
    </nav>
  </header>
);

export default PageHeader;
