// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS2zZ_AGHf_1ZAPSajObVwk2FTUEjKMt0",
  authDomain: "habit-tracker-c096b.firebaseapp.com",
  projectId: "habit-tracker-c096b",
  storageBucket: "habit-tracker-c096b.firebasestorage.app",
  messagingSenderId: "816171584903",
  appId: "1:816171584903:web:5015f54832db0f0425d722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);