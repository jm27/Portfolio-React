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
      <h3>Jesus Esquer</h3>
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
        Search
      </button>
    </nav>
  </div>
);

export default Navbar;
