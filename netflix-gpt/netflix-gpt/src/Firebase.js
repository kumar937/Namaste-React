// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi0DIaS2bqpc7agEgvUb33QcohgM5w9fY",
  authDomain: "netflix-gpt-fa22b.firebaseapp.com",
  projectId: "netflix-gpt-fa22b",
  storageBucket: "netflix-gpt-fa22b.firebasestorage.app",
  messagingSenderId: "1048739829114",
  appId: "1:1048739829114:web:0198d252c3a0dc14e572c3"
};

// Initialize Firebasecls

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);