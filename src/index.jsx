// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdgrxBiCU9alVlf0OthJh2J_nSb1wJFkA",
  authDomain: "paraphrases.firebaseapp.com",
  projectId: "paraphrases",
  storageBucket: "paraphrases.appspot.com",
  messagingSenderId: "901540884726",
  appId: "1:901540884726:web:2dfd83ab09706f39a2fcd7",
  measurementId: "G-609GMV5X1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
