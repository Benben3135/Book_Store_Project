import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

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


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
