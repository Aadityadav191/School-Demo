import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-success text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* School Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">AKSHARAA  School</h5>
            <p>Empowering young minds for a brighter tomorrow.</p>
            <p><strong>Address:</strong><br />
              123 Education Lane,<br />
              Knowledge City, UP 209304
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/academics" className="text-white text-decoration-none">Academics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@greenvalleyschool.com</p>
            <p><i className="bi bi-clock-fill me-2"></i>Mon - Sat: 8:00 AM - 3:00 PM</p>

            {/* Social Media Icons */}
            <div className="mt-3">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-4"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube fs-4"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <small>&copy; {new Date().getFullYear()} AKSHARAA  School. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
