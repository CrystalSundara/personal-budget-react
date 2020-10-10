import React from 'react';

import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav role="navigation" aria-label="Main navigation" className="l1">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;