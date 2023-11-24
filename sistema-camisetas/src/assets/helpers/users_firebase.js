// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsxUR416ClEObnmrCveJhkQfrnEDokEGs",
  authDomain: "sistema-camisetas.firebaseapp.com",
  projectId: "sistema-camisetas",
  storageBucket: "sistema-camisetas.appspot.com",
  messagingSenderId: "590340202251",
  appId: "1:590340202251:web:eb1c0496844b13c5d44c0e",
  measurementId: "G-FDYTNC4NXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);