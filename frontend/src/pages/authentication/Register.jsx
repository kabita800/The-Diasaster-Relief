// src/pages/authentication/Register.jsx

import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-gray-100 flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-white mx-110 pb-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <h2 className="mt-10 text-3xl font-bold tracking-tight text-black">
          Create an Account
        </h2>
        <p className="text-teal-900 italic text-sm">Join us today</p>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black">
              Email address
            </label>
            <input
              type="email"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 mb-2 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 accent-green-700"
            />
            <span className="text-sm text-black mt-2">
              I agree to the Terms & Conditions
            </span>
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white hover:bg-green-900"
          >
            Create Account
          </button>

          {/* Google Signup */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-md hover:bg-gray-50"
          >
            <img
              className="h-5 w-5"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            <span>Sign up with Google</span>
          </button>

        </form>

        <p className="mt-10 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-800 hover:text-green-900"
          >
            Sign in
          </Link>
        </p>

      </div>
      </div>
    </div>
  );
}