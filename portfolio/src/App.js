import React from "react";
import Navbar from "./Core/Navbar";
import Intro from "./Sections/Intro";
import Profile from "./Sections/Profile";
import Portfolio from "./Sections/Portfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Profile></Profile>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
