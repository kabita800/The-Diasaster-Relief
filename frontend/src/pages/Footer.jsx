// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Disaster Relief Management</h3>
          <p className="text-gray-300">
            Together for Relief, Stronger After Every Disaster.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p>Email: info@disasterrelief.org</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="bg-teal-700 text-center py-4 text-sm">
        © 2026 Disaster Relief Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
