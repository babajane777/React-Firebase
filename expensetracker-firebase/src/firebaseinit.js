// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQGucA7NlVmfMnm7MSLXmDUMI5_MQdwsg",
  authDomain: "expensetracker-a30c6.firebaseapp.com",
  projectId: "expensetracker-a30c6",
  storageBucket: "expensetracker-a30c6.appspot.com",
  messagingSenderId: "745426965376",
  appId: "1:745426965376:web:78e9d6a2063752a6aa2765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

