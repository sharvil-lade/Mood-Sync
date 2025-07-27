import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { login, reset } from "../features/authSlice";

// A simple SVG icon component for the loader
const Spinner = () => (
  <svg
    width="24"
    height="24"
    stroke="#fff"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin"
  >
    <style>{`.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_zKoa{animation-duration:1s}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}`}</style>
    <g className="spinner_V8m1">
      <circle
        cx="12"
        cy="12"
        r="9.5"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="60 15"
      />
    </g>
  </svg>
);

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Invalid Credentials");
    }

    if (isSuccess || user) {
      toast.success("User logged in successfully!");
      navigate("/features");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen w-full font-sans"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dmdlgpurh/image/upload/v1736879584/pexels-souvenirpixels-1542493_dke22u.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ToastContainer for displaying notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Glassmorphism form container */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl m-4">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-wider">
            Welcome Back
          </h1>
          <p className="text-gray-300 mt-2">Log in to continue your journey.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Email Input Field with Icon */}
          <div className="relative">
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              className="w-full py-3 pl-10 pr-4 bg-gray-900/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={onChange}
              required
            />
          </div>

          {/* Password Input Field with Icon */}
          <div className="relative">
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="password"
              className="w-full py-3 pl-10 pr-4 bg-gray-900/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
              required
            />
          </div>

          {/* Submit Button with Loading State */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-lg text-sm px-5 py-3 text-center transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Log In"}
            </button>
          </div>
        </form>

        {/* Link to Registration Page */}
        <div className="text-center">
          <p className="font-medium text-sm text-gray-300">
            New User?{" "}
            <Link
              to="/signUp"
              className="text-indigo-400 hover:text-indigo-300 font-bold transition"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
