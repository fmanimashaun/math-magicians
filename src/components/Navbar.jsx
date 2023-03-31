import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="calculator">Calculator</NavLink>
    </li>
    <li>
      <NavLink to="quote">Quote</NavLink>
    </li>
  </ul>
);

export default Navbar;
