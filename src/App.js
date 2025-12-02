import './App.css';

import React from 'react';
import {Routes, Route } from "react-router-dom"
import Home from './components/Home.js';
import SignIn from "./components/SignIn"
import SignOut from "./components/SignOut"
import SignUp from "./components/SignUp"






function App() {

  return (
    

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signout" element={<SignOut />} />
      </Routes>

      
    </div>
  );
}

export default App;
