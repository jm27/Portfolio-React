import React from "react";
import Navbar from "./Core/Navbar";
import Intro from "./Sections/Intro";
import Profile from './Sections/Profile';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Profile></Profile>
    </div>
  );
}

export default App;
