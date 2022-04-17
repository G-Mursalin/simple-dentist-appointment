// React-ReactDOM
import React from "react";
// Components
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  return (
    <form className="container mx-auto px-8 py-24">
      <h1 className="text-5xl text-center font-bold">Please Register</h1>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2" for="username">
          User Name
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-900 appearance-none border p-4 font-semibold leading-tight focus:outline-none focus:shadow-outline "
          type="text"
          name="username"
          id=""
          placeholder="User Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2" for="email">
          Email
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-900 appearance-none border p-4 font-semibold leading-tight focus:outline-none focus:shadow-outline "
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-semibold mb-2" for="password">
          Password
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-900 appearance-none border p-4 font-semibold leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
      </div>

      <div className="flex items-center justify-between mb-5">
        <button
          className="bg-indigo-500 hover:bg-blue-600 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          REGISTER
        </button>
      </div>
      <SocialLogin />
    </form>
  );
};

export default Register;
