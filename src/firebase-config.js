// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLJXSyESeyfTGksdUiLqSVgZ6L5lTcGw",
  authDomain: "laya-5f753.firebaseapp.com",
  projectId: "laya-5f753",
  storageBucket: "laya-5f753.appspot.com",
  messagingSenderId: "768132343455",
  appId: "1:768132343455:web:c60d2b7b33e3d5749ee4aa",
  measurementId: "G-Q99JFWHW3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
