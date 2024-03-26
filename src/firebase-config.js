// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp5S3PdJGWyBrN6tISh-cpoQtsOyOz8yw",
  authDomain: "laya-2.firebaseapp.com",
  projectId: "laya-2",
  storageBucket: "laya-2.appspot.com",
  messagingSenderId: "363270620914",
  appId: "1:363270620914:web:47e38f665e66159487326b",
  measurementId: "G-9WFKCPJMW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
