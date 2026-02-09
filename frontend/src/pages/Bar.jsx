import React from "react";
import { NavLink } from "react-router-dom";


export default function Bar() {
  return (
   <div className="w-full flex flex-row items-center justify-between px-10 py-4 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <h1 className="font-bold text-2xl text-green-800 tracking-wide">
        THEDisaster <span className="block -mt-1">RELIEF</span>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 pl-130">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold  border-b-4 border-green-700"
              : "text-lg text-black font-semibold  transition hover:border-b-4 border-green-700"
          }
        >
          DASHBOARD
        </NavLink>

        <NavLink
  to="/history"
  className={({ isActive }) =>
    isActive
      ? "text-lg font-bold border-b-4 border-green-700"
      : "text-lg text-black font-semibold hover:border-b-4 border-green-700 transition"
  }
>
  HISTORY
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-lg font-bold border-b-4 border-green-700"
      : "text-lg text-black font-semibold hover:border-b-4 border-green-700 transition"
  }
>
  CONTACT
</NavLink>

<NavLink
  to="/aboutus"
  className={({ isActive }) =>
    isActive
      ? "text-lg font-bold border-b-4 border-green-700"
      : "text-lg text-black font-semibold hover:border-b-4 border-green-700 transition"
  }
>
  ABOUT US
</NavLink>



      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <span className="text-3xl cursor-pointer text-green-600">🔔</span>
        <span className="text-3xl cursor-pointer">🌐</span>

        {/* Profile Circle */}
        <div className="h-12 w-12 rounded-full border border-gray-400 cursor-pointer">
          
        </div>
      </div>
      
    </div>
  );
}
