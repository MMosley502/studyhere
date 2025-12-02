// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA_TDnNCam2DJ-AbEvtsSEgwD8dYHW3AI",
  authDomain: "studyhere-73236.firebaseapp.com",
  projectId: "studyhere-73236",
  storageBucket: "studyhere-73236.firebasestorage.app",
  messagingSenderId: "465678789848",
  appId: "1:465678789848:web:6ca2090841ce1a7579bbad"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);