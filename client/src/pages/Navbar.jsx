import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <h1> <a href="/"> SNEAK IN </a> </h1>
        {/* Add navigation links here */}
        <div className="nav-links">
          <a href="#colleges">Colleges</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
