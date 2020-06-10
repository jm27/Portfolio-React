import React from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-light bg-none">
      <Fade triggerOnce duration={800} direction="left">
        <a
          className="navbar-brand"
          href="https://fontawesome.com/icons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            id="spin"
            className="fa fa-cog fa-spin fa-3x fa-fw"
            aria-hidden="true"
          ></i>
        </a>
      </Fade>
      <div>
      <Fade triggerOnce duration={800} direction="right">
        <a
          href="mailto:jme2791@gmail.com?Subject=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="btn social mr-2 btn-outline-primary my-2 my-sm-0 rounded-circle"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Send me an E-mail"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/jm27"
          target="_blank"
          rel="noopener noreferrer"
          className="btn social mr-2 btn-outline-primary my-2 my-sm-0 rounded-circle"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Check my Github"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/j-esquer/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn social mr-2 btn-outline-primary my-2 my-sm-0 rounded-circle"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Let's connect with Linkedin"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        </Fade>
      </div>
    </nav>
  </div>
);

export default Navbar;
