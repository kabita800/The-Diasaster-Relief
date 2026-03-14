import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);

        // Role-based redirect
        const role = data.user.role.toLowerCase();
        if (role === "victim") navigate("/");
        else if (role === "donor") navigate("/");
        else navigate("/"); // rescue team

      } else {
        setError(data.msg || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-white w-full max-w-md mx-auto pb-6 px-6 sm:px-8 rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="mt-10 text-3xl font-bold tracking-tight text-black">
            Welcome Back
          </h2>
          <h3 className="text-teal-600 italic text-sm">
            Please enter your details!
          </h3>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-black">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-black"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 accent-blue-600" />
              <span className="text-sm text-black">Remember me</span>
            </label>
            <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-600">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-teal-800 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-900 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

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
          <Link to="/register" className="font-semibold text-teal-800 hover:text-teal-900">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}