import './App.css';

import React, { useState } from 'react';
import Studylist from "./components/Studylist.js";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
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




function App() {
  const [showSpaces, setShowSpaces] = useState(true);

  const spaces = [
    {id: 1, name: "Library", description: "Quiet", available: true},
    {id: 2, name: "Attic", description: "Dusty", available: false},
    {id: 3, name: "Classroom", description: "Warm", available: true},
    {id: 4, name: "Dining hall", description: "Busy", available: false},
    {id: 5, name: "Classroom 2", description: "Too hot", available: true},
    {id: 6, name: "Classroom3", description: "Haunted", available: true},
    {id: 7, name: "Basement", description: "Quiet", available: true},
    {id: 8, name: "Dining hall 2", description: "Messy", available: false},
    {id: 9, name: "Dorms", description: "Loud", available: true},
  ];



  return (
    <div className="App">
      <h1>StudyHere</h1>
      <button onClick={() => setShowSpaces(!showSpaces)}>
        {showSpaces ? "Hide Study Spaces" : "Show Study Spaces"}
         </button>

        {showSpaces && <Studylist spaces={spaces} />}
    </div>
  );
}

export default App;
