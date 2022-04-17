// React-ReactDOM
import React from "react";
import { useState } from "react";
// Routing
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Components
import SocialLogin from "../SocialLogin/SocialLogin";
// Firebase Hooks
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // Routing
  const navigate = useNavigate();
  // Firebase Hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  // React Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Form Handler
  const loginFormHandler = (e) => {
    e.preventDefault();
    // Creating Account
    signInWithEmailAndPassword(email, password);
    // Clean Input Fields
    setEmail("");
    setPassword("");
  };
  // Protected Route
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <form onSubmit={loginFormHandler} className="container mx-auto px-8 py-24">
      <h1 className="text-5xl text-center font-bold">Please Login</h1>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-900 appearance-none border p-4 font-semibold leading-tight focus:outline-none focus:shadow-outline "
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-semibold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-900 appearance-none border p-4 font-semibold leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {loading ? "Please Wait..." : ""}
      {error?.message}
      <div className="flex items-center justify-between mt-3 mb-5">
        <button
          className="bg-indigo-500 hover:bg-blue-600 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          LOGIN
        </button>
        <p
          onClick={async () => {
            await sendPasswordResetEmail(email);
            toast("Email Send");
          }}
          className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
        >
          Reset Password?
        </p>
      </div>
      <p className="text-center text-md font-medium">
        Don't have an account?
        <Link to="/register" className="font-bold text-md text-indigo-600">
          Create
        </Link>
      </p>
      <SocialLogin />
      <ToastContainer />
    </form>
  );
};

export default Login;
