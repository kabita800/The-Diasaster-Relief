import React from "react";
import { NavLink } from "react-router-dom";
import { BellDot, Settings } from "lucide-react";


export default function Bar() {
  const userEmail = localStorage.getItem("email");
  return (
   <div className="w-full flex flex-row items-center justify-between px-7 py-3 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-50 ">
      {/* Logo */}
      <h1 className="font-bold text-2xl text-green-800 tracking-wide">
        THEDisaster <span className="block -mt-1">RELIEF</span>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 pl-1">  
   <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    isActive
      ? "font-bold text-gray-600 border-b-3 border-green-700"
      : "text-gray-600 font-semibold transition hover:text-gray-800 border-green-700"
  }
>
  DASHBOARD
</NavLink>

        <NavLink
  to="/history"
  className={({ isActive }) =>
    isActive
      ? "font-bold border-b-3 border-green-700"
      : "text-black font-semibold hover:border-b-3 border-green-700 transition"
  }
>
  HISTORY
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "font-bold border-b-3 border-green-700"
      : "text-black font-semibold hover:border-b-3 border-green-700 transition"
  }
>
  CONTACT
</NavLink>

<NavLink
  to="/aboutus"
  className={({ isActive }) =>
    isActive
      ? "font-bold border-b-3 border-green-700"
      : "text-black font-semibold hover:border-b-3 border-green-700 transition"
  }
>
  ABOUT US
</NavLink>



      </div>

      {/* Icons Section */}
     <div className="flex items-center gap-4">
  <BellDot className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
  <Settings className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
</div>

  {userEmail && (
  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700">
    {userEmail}
  </span>
)}


      </div>
  );
}

