import React from "react";
import { Zoom } from "react-awesome-reveal";


const Footer = () => (
  <footer className="footer">
      <Zoom delay={500} duration={800}>
    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      
      <a
        href="https://github.com/jm27"
        target="_blank"
        rel="noopener noreferrer"
        className="btn social ml-2 btn-outline-primary rounded-circle"
        data-toggle="tooltip"
        data-placement="right"
        title="Jesus Esquer Github"
      >
        <i className="fab fa-github-alt"></i>
      </a>
    </div>
    </Zoom>
  </footer>
);

export default Footer;
