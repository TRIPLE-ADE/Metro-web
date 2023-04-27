// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-P9_u5PX8sG9KWGAx7c4snRY6TZnV6po",
  authDomain: "mentorform-42b6b.firebaseapp.com",
  projectId: "mentorform-42b6b",
  storageBucket: "mentorform-42b6b.appspot.com",
  messagingSenderId: "643408189652",
  appId: "1:643408189652:web:5fdf45c3b05a1e856b8341",
  measurementId: "G-7K2H9XKSWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;