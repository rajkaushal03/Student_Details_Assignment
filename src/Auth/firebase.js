// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdWJSLC52QsvwPBF4z4KYFyRzLtQxNVUQ",
  authDomain: "students-da1ef.firebaseapp.com",
  projectId: "students-da1ef",
  storageBucket: "students-da1ef.firebasestorage.app",
  messagingSenderId: "95149135159",
  appId: "1:95149135159:web:0d086a8418b35147a9f6b2",
  measurementId: "G-J8CFWH33K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth, analytics};