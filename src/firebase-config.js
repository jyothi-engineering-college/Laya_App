// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-GSHgnm4VYMa7NopDmVC3g6uoP1iKwWk",
  authDomain: "laya-3.firebaseapp.com",
  projectId: "laya-3",
  storageBucket: "laya-3.appspot.com",
  messagingSenderId: "38190967812",
  appId: "1:38190967812:web:e17e3cd5aaad6f83bbd951",
  measurementId: "G-QW77DB2NEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
