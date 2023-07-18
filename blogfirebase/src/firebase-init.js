// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF56_Hr_xCeIixKX_Th-uWPLGFh_duho4",
  authDomain: "blogging-app-491bc.firebaseapp.com",
  projectId: "blogging-app-491bc",
  storageBucket: "blogging-app-491bc.appspot.com",
  messagingSenderId: "435788678119",
  appId: "1:435788678119:web:e1ff8d4d8bf6d43d7df342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */