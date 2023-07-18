import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_ID,
  authDomain: "portfolio-45332.firebaseapp.com",
  projectId: "portfolio-45332",
  storageBucket: "portfolio-45332.appspot.com",
  messagingSenderId: "1028248769308",
  appId: "1:1028248769308:web:10b41f326491df4809a0d9",
  measurementId: "G-2LZT8X1F7P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
