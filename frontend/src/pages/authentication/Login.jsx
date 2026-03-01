// src/pages/Login.jsx

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gray-100 flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      
    <div className="bg-white mx-110 pb-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-black">
          Welcome Back
        </h2>
        <h3 className="text-center text-teal-600 italic text-sm">
          Please enter your details
        </h3>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                required
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                required
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
              />
              <span className="text-sm text-black">
                Remember me
              </span>
            </label>

            <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-600">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-teal-800 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-900"
            >
              Sign in
            </button>
          </div>

          {/* Google Button */}
          <div>
            <button
              type="button"
              className="flex w-full justify-center items-center space-x-2 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-md hover:bg-gray-50"
            >
              <img
                className="h-5 w-5"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
              />
              <span>Sign in with Google</span>
            </button>
          </div>

        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-teal-800 hover:text-teal-900"
          >
            Sign up for free
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}