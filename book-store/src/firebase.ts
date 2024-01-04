// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABMN2JlIUu0qNJFzrtS1bHWdmDYjb9BLM",
  authDomain: "books-store-ef188.firebaseapp.com",
  projectId: "books-store-ef188",
  storageBucket: "books-store-ef188.appspot.com",
  messagingSenderId: "463677660644",
  appId: "1:463677660644:web:b24b8a6c111214a1d0bbf1",
  measurementId: "G-CFSDT0Z7ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
