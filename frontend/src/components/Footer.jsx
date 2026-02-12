// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-teal-700 text-white pt-3">
      <div className="max-w-7xl mx-auto px-2 py-5 grid md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3 pl-10">THEDisaster RELIEF</h3>
          <p className="text-white pl-10">

Disaster relief websites provide quick access to emergency updates, 
resources, and support, helping communities respond faster and recover effectively after disasters.

          </p>
        </div>


        {/*Our services*/}
            <div>
                <h4 className="text-lg font-semibold mb-3 pl-15">Our Services</h4>
                <ul className="space-y-2 pl-15">
            <li>Medical Kit</li>
            <li>Ambulance Services</li>
            <li>Rescue Teams</li>
            <li>Clothes</li>
            <li>Food</li>
          </ul>
            </div>


         {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 pl-10">Quick Links</h4>
          <ul className="space-y-2 pl-10">
            <li>Home</li>
            <li>Dashboard</li>
            <li>History</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

         {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p>Email: info@disasterrelief.org</p>
          <p>Phone: +123 456 7890</p>
        <div>
          <h4 className="text-lg font-semibold mb-3 mt-5">Connect With Us</h4>
          <div className="flex gap-4 text-white text-2xl">

            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedinIn />
            </a>

          </div>
        </div>
         </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-700 text-center py-4 text-sm">
        © 2026 Disaster Relief Management. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
