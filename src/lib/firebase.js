import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1aBQkvRxCIelbeSXO_a46WXUq9dIaOZc",
  authDomain: "nanotel-app.firebaseapp.com",
  projectId: "nanotel-app",
  storageBucket: "nanotel-app.firebasestorage.app",
  messagingSenderId: "589208670038",
  appId: "1:589208670038:web:04dbda32cbe9a761c850f7",
  measurementId: "G-1V969H4R41",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };