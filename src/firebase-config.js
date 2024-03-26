// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDmeU9nNlFzGRk0HziNNpWYwhl3kEzi1E",
  authDomain: "laya-app-4ef7c.firebaseapp.com",
  projectId: "laya-app-4ef7c",
  storageBucket: "laya-app-4ef7c.appspot.com",
  messagingSenderId: "409888583397",
  appId: "1:409888583397:web:dbfc82eff04f0138636e0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
