import React from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Intro = () => (
  <section className="intro justify-content-center text-center">
    <div
      className="container-fluid container-intro
        "
    >
      <Fade triggerOnce duration={800} delay={500} direction="top">
          <img alt="anon" id='picture' src={require("../media/pp-2.png")}></img>
        <h1 id="name">Jesus Esquer</h1>
        <hr className="hr-intro"></hr>
        <h3 id='typewriter'>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Teamworker",
                "Great communication skills",
                "Lifelong learner",
                "Strong attention to detail",
                "Multitasker",
                "I like solving problems",
                "I love music, movies and tacos!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </Fade>
    </div>
    <div id="accs">
      <img alt="accs" id="accesories" src={require("../media/hero.svg")}></img>
    </div>
  </section>
);

export default Intro;
