// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7UVoVBYLfcNV5N40lWhdSrVL-csCDxP4",
  authDomain: "photopholio-be048.firebaseapp.com",
  projectId: "photopholio-be048",
  storageBucket: "photopholio-be048.appspot.com",
  messagingSenderId: "769451497209",
  appId: "1:769451497209:web:5534c0267a72f484743428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);