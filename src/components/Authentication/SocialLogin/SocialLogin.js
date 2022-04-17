// React-ReactDOM
import React from "react";
// Firebase Hook
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
// BrowserRouter
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  // Router
  const navigate = useNavigate();
  // Firebase
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  if (user) {
    navigate("/home");
  }
  return (
    <section>
      <div className="flex content-center my-8">
        <div className="bg-indigo-500 w-1/2 h-0.5"></div>
        <p className="font-bold px-2 -mt-4 text-xl">or</p>
        <div className="bg-indigo-500 w-1/2 h-0.5"></div>
      </div>
      <div className="mt-1">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-indigo-800 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded focus:outline-none focus:shadow-outline flex content-center  mx-auto mb-2"
        >
          <img
            src="https://i.ibb.co/gP3Cwxk/google.png"
            alt="google"
            className="w-6"
          />
          <span className="px-2">Sign In With Google</span>
        </button>
      </div>
    </section>
  );
};

export default SocialLogin;
