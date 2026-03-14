// src/pages/authentication/Register.jsx

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "VICTIM"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        alert(data.msg);
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="bg-gray-100 flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 ">

      <div className="bg-white w-full max-w-md mx-auto pb-6 px-6 sm:px-8 rounded-lg shadow-md">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="mt-10 text-3xl font-bold tracking-tight text-black">
            Create an Account
          </h2>
          <p className="text-teal-900 italic text-sm">Join us today</p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-2" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-black">
                Select Role
              </label>
              <select
                name="role"
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
              >
                <option value="VICTIM">Victim</option>
                <option value="DONOR">Donor</option>
                <option value="RESCUE_TEAM">Rescue Team</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-800 px-3 py-2 mt-4 text-sm font-semibold text-white hover:bg-teal-900"
            >
              Create Account
            </button>

          </form>

          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-teal-800 hover:text-teal-900"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}