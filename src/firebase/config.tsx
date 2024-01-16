// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHn_1X2VBPbQ7S0EC9L6VlDke_muVDZag",
  authDomain: "proyecto-final-ramirez-rjs.firebaseapp.com",
  projectId: "proyecto-final-ramirez-rjs",
  storageBucket: "proyecto-final-ramirez-rjs.appspot.com",
  messagingSenderId: "617970028014",
  appId: "1:617970028014:web:40c6025a9de7e8575fd2ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
