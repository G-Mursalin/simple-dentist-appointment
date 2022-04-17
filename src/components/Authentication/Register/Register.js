// React-ReactDOM
import React from "react";
import { useState } from "react";
// Components
import SocialLogin from "../SocialLogin/SocialLogin";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase hook
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Register = () => {
  const navigate = useNavigate();
  // Firebase Hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // React Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  // Form Handler
  const registerFormHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    // Clean Input Fields
    setEmail("");
    setPassword("");
    setUserName("");
  };

  if (user) {
    navigate("/home");
  }
  return (
    <form
      onSubmit={registerFormHandler}
      className="container mx-auto px-8 py-24"
    >
      <h1 className="text-5xl text-center font-bold">Please Register</h1>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2" htmlFor="username">
          User Name
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-900 appearance-none border p-4 font-semibold leading-tight focus:outline-none focus:shadow-outline "
          type="text"
          name="username"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
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
      {loading ? "Pease Wait..." : ""}
      {error?.message}
      <div className="flex items-center justify-between mt-2 mb-5">
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
