// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpnXt96CJh-bcEf5w3ncxfZcqelM9zT_g",
  authDomain: "druidic-website-backend.firebaseapp.com",
  projectId: "druidic-website-backend",
  storageBucket: "druidic-website-backend.appspot.com",
  messagingSenderId: "632632816477",
  appId: "1:632632816477:web:da43d20d2fc1fde6a1eeb4",
  measurementId: "G-5THRV9XJCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();