import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 sticky-top shadow-sm">
      <Link className="navbar-brand fw-bold" to="/">Green Vally</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
          </li>
        </ul>

        {/* Login Button */}
        <div className="d-flex ms-lg-3">
          <button className="btn btn-outline-light">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
