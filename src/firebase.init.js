// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZXmTcs0I0ktw_w47QTFofRRxf6xygBdE",
  authDomain: "dentcare-c1257.firebaseapp.com",
  projectId: "dentcare-c1257",
  storageBucket: "dentcare-c1257.appspot.com",
  messagingSenderId: "932748561389",
  appId: "1:932748561389:web:964e3733b48864c10cb5e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
