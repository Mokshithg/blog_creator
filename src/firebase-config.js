// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNsdG5QENIEESSCU8jl2vJD9qbwga88Ko",
  authDomain: "blog-creator-af093.firebaseapp.com",
  projectId: "blog-creator-af093",
  storageBucket: "blog-creator-af093.appspot.com",
  messagingSenderId: "59192083824",
  appId: "1:59192083824:web:f906d8d4f1929320427bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()