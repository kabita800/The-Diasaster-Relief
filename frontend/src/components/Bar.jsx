import React from "react";
import { NavLink } from "react-router-dom";
import { BellDot } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Bar() {
  const { user } = useAuth();

  const navStyle = ({ isActive }) =>
    isActive
      ? "font-bold text-gray-700 border-b-3 border-teal-700 pb-1"
      : "text-gray-600 font-semibold hover:text-gray-800 transition";

  return (
    <div className="w-full flex items-center justify-between px-6 lg:px-12 py-3 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="font-bold text-xl lg:text-2xl text-teal-800 leading-tight">
        THEDisaster
        <span className="block text-sm lg:text-base -mt-1">RELIEF</span>
      </h1>

      {/* NAVIGATION */}
      <div className="flex items-center gap-6 flex-wrap justify-center flex-1 mx-6">
        <NavLink to="/" className={navStyle}></NavLink>
        <NavLink to="/dashboard" className={navStyle}>Dashboard</NavLink>

        {user?.role === "donor" && (
          <NavLink to="/donationform" className={navStyle}>DonationForm</NavLink>
        )}

        {user?.role === "victim" && (
          <NavLink to="/helpform" className={navStyle}>HelpForm</NavLink>
        )}

        <NavLink to="/services" className={navStyle}>Services</NavLink>
        <NavLink to="/contact" className={navStyle}>Contact</NavLink>
        <NavLink to="/aboutus" className={navStyle}>About Us</NavLink>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <BellDot className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />

        {user?.name && user?.email ? (
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-md text-teal-700 whitespace-nowrap">
            <p className="font-semibold">{user.name}</p>
            <p className="text-xs">{user.email}</p>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="px-4 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold transition">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}