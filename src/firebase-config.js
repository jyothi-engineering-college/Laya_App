import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDDmeU9nNlFzGRk0HziNNpWYwhl3kEzi1E",
  authDomain: "laya-app-4ef7c.firebaseapp.com",
  projectId: "laya-app-4ef7c",
  storageBucket: "laya-app-4ef7c.appspot.com",
  messagingSenderId: "409888583397",
  appId: "1:409888583397:web:dbfc82eff04f0138636e0c"
};

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);