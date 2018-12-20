import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/review">Write review</NavLink>
  </div>
);

export default Navbar;