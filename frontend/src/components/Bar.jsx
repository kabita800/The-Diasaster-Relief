import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BellDot } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Bar() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchNotifications = () => {
    if (!user) return;
    fetch(`http://localhost:5000/api/notifications?userId=${user.id}&role=${user.role}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setNotifications(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, [user]);

  const markAsRead = (id) => {
    fetch(`http://localhost:5000/api/notifications/${id}/read`, { method: "PUT" })
      .then(() => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
        setShowDropdown(false);
      })
      .catch(err => console.error(err));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

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
      <div className="flex items-center gap-4 relative">
        
        {user && (
          <div className="relative">
            <div className="relative cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
              <BellDot className="w-6 h-6 text-gray-600 hover:text-gray-800 mt-1" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {unreadCount}
                </span>
              )}
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-4 w-80 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-[100]">
                <div className="p-3 bg-gray-50 font-bold border-b border-gray-200 text-gray-700 text-sm flex justify-between items-center">
                  <span>Notifications</span>
                  {unreadCount > 0 && <span className="text-xs font-normal text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">{unreadCount} new</span>}
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map(n => (
                      <div 
                        key={n.id} 
                        className={`p-3 border-b border-gray-100 text-sm transition-colors ${!n.isRead ? 'bg-[#f0fdfa] hover:bg-[#ccfbf1]' : 'hover:bg-gray-50'}`}
                        onClick={() => !n.isRead && markAsRead(n.id)}
                      >
                        <p className={`text-gray-800 ${!n.isRead ? 'font-semibold' : ''}`}>{n.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-sm text-gray-500">
                      No notifications yet
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {user?.name && user?.email ? (
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-md text-teal-700 whitespace-nowrap ml-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-[10px]">{user.email}</p>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="px-5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold transition shadow-sm ml-2">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}