// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_-IYUMJ96tnjM_5rlTLa9W0c_PVh76cY",
  authDomain: "laya-1.firebaseapp.com",
  projectId: "laya-1",
  storageBucket: "laya-1.appspot.com",
  messagingSenderId: "1035616272362",
  appId: "1:1035616272362:web:527134a6514e139981bc93",
  measurementId: "G-G7S6E1HZDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
