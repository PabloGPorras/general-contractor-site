import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schedule-quote">Schedule Quote</Link>
        </li>
        <li>
          <Link to="/manage-account">Manage Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
