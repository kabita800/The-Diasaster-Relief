// src/pages/Login.js
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const role = email.includes('admin') ? 'admin' : 'user';
    setUser({ role, email });
    navigate('/dashboard');
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Disaster Relief"
            src={null}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-black">Welcome Back</h2>
          <h3 className="text-center">Please enter your details</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-black-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-grey/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label htmlFor="password" className="block text-sm/6 font-medium text-black-100">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-grey/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="block text-sm/6 font-medium text-black-100">Remember me</span>
                </label>

                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-black hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-10 rounded-mg shadow-md"
              >
                <div className="flex items-center justify-center space-x-2">
                  <img className="h-6 w-7" src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/191:100/w_1280,c_limit/google-logo.jpg" alt="google" /> Sign in with Google
                </div>
              </button>
            </div>

          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-green-800 hover:text-green-900">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}