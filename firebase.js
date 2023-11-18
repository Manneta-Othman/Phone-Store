// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "manneta-phone-store.firebaseapp.com",
  projectId: "manneta-phone-store",
  storageBucket: "manneta-phone-store.appspot.com",
  messagingSenderId: "155549848557",
  appId: "1:155549848557:web:bcfa793b96153cbce1cde4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);