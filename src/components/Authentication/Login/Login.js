// React-ReactDOM
import React from "react";
// Routing
import { Link } from "react-router-dom";
// Components
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  return (
    <form className="container mx-auto px-8 py-24">
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
        />
      </div>

      <div className="flex items-center justify-between mb-5">
        <button
          className="bg-indigo-500 hover:bg-blue-600 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          LOGIN
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-500"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <p className="text-center text-md font-medium">
        Don't have an account?
        <Link to="/register" className="font-bold text-md text-indigo-600">
          Create
        </Link>
      </p>
      <SocialLogin />
    </form>
  );
};

export default Login;
