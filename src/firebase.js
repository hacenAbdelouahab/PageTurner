import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  apiKey: "AIzaSyBcS1v5LYDwngm9o1eVtRNrg1IKza--HH4" ,
  authDomain: "pageturner-1b2dc.firebaseapp.com",
  projectId: "pageturner-1b2dc",
  storageBucket: "pageturner-1b2dc.appspot.com",
  messagingSenderId: "698874179245",
  appId: "1:698874179245:web:d85da2dea343316abba024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()