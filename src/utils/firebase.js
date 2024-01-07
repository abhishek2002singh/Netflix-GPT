// Import the functions you need from the SDKs you need
import { getAuth, } from "firebase/auth";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2yVe2amPjhLkK093-OCjFvLTsRyW7BOI",
  authDomain: "netflix-gpt-a00ce.firebaseapp.com",
  projectId: "netflix-gpt-a00ce",
  storageBucket: "netflix-gpt-a00ce.appspot.com",
  messagingSenderId: "306659024061",
  appId: "1:306659024061:web:875075e212e6b7c5376bd4",
  measurementId: "G-31149222VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();
