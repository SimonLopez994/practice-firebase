
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJEZbY7OjamQJOOY76LvPky_t_yyJX9-8",
  authDomain: "practice-firebase-6f975.firebaseapp.com",
  projectId: "practice-firebase-6f975",
  storageBucket: "practice-firebase-6f975.appspot.com",
  messagingSenderId: "742928152416",
  appId: "1:742928152416:web:6c8cd9bf269fe56d2a1005"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider;

export const auth = getAuth();
export const GoogleSignWithPopup = () => signInWithPopup(auth, provider)