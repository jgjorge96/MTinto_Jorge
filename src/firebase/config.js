// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxLIVJegrEarwT1SPvd8_OlkiTbGfKEU",
  authDomain: "mtinto-jorge.firebaseapp.com",
  projectId: "mtinto-jorge",
  storageBucket: "mtinto-jorge.appspot.com",
  messagingSenderId: "558017510207",
  appId: "1:558017510207:web:8412d04b2ca369626f718a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)