import React from "react";

const Navbar = () => (
  <div>
    <nav className="navbar fixed-top navbar-light bg-none">
      <a
        className="navbar-brand"
        href="https://fontawesome.com/icons/"
        target="_blank"
      >
        <i
          id="spin"
          className="fa fa-cog fa-spin fa-3x fa-fw"
          aria-hidden="true"
        ></i>
      </a>
      <div>
        <a
          href="mailto:jme2791@gmail.com?Subject=Hello"
          target="_blank"
          class="btn social mr-2 btn-outline-primary my-2 my-sm-0 rounded-circle"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/jm27"
          target="_blank"
          class="btn social mr-2 btn-outline-primary my-2 my-sm-0 rounded-circle"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/j-esquer/"
          target="_blank"
          class="btn social mr-2 btn-outline-primary my-2 my-sm-0 rounded-circle"
        >
          <i class="fab fa-linkedin fa-fw"></i>
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;
