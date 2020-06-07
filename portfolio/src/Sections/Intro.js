import React from "react";

const Intro = () => (
  <section className="intro justify-content-center text-center">
    <div
      className="container-fluid container-intro
        mb-4"
    >
      <img alt="anon" src={require("../media/anon.png")}></img>
      <h1 id="name">Jesus Esquer</h1>
      <hr className='hr-intro'></hr>
      <h3 id="title">Front-End Developer</h3>
    </div>
    <div id="accs">
      <img alt="accs" id='accesories' src={require("../media/hero.svg")}></img>
    </div>
  </section>
);

export default Intro;
