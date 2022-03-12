import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAC1ifiufBOQ_8Jp3BKL6tSi2hZcgyahhc",
  authDomain: "marzo-e7738.firebaseapp.com",
  projectId: "marzo-e7738",
  storageBucket: "marzo-e7738.appspot.com",
  messagingSenderId: "21378492222",
  appId: "1:21378492222:web:b4eaa1a318ee16e5b82e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}