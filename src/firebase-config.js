// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhyojtfpE8ibzn-i-PVedgkPMo28SSmVw",
  authDomain: "laya-4.firebaseapp.com",
  projectId: "laya-4",
  storageBucket: "laya-4.appspot.com",
  messagingSenderId: "933689873372",
  appId: "1:933689873372:web:e68b08f229f54690be3519",
  measurementId: "G-029WQEG6XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
