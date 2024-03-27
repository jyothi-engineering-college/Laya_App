// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8q8lrTGwxg9CrEjaE7T7P_q9rlNolLcE",
  authDomain: "laya-5.firebaseapp.com",
  projectId: "laya-5",
  storageBucket: "laya-5.appspot.com",
  messagingSenderId: "286108118417",
  appId: "1:286108118417:web:1845f539c53a6002497e30",
  measurementId: "G-0HXL9DRCD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
