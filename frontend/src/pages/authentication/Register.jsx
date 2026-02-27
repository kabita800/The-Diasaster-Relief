
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';

export default function Register() {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setUser({ role: 'user', email });
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <img src="" alt="Logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-3xl font-bold tracking-tight text-black">Create an Account</h2>
        <p className="text-gray-600">Join us today</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-black shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-black shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-black shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-black shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="h-4 w-4 accent-green-700"
            />
            <span className="text-sm text-black">I agree to the Terms & Conditions</span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-green-700"
          >
            Create Account
          </button>

          {/* Google Signup */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-md hover:bg-gray-100"
          >
            <img
              className="h-5 w-5"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
            />
            Sign up with Google
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="font-semibold text-green-800 hover:text-green-900">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}