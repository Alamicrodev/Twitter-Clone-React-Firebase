// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqRxaAeRKM6kPOPvQ5BBQVgLKBufSMVy0",
  authDomain: "twitter-clone-6dc4d.firebaseapp.com",
  projectId: "twitter-clone-6dc4d",
  storageBucket: "twitter-clone-6dc4d.appspot.com",
  messagingSenderId: "488461917512",
  appId: "1:488461917512:web:8c31abdca58a6df80a277d",
  measurementId: "G-JFP5J4GDG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


  export default db; 

  