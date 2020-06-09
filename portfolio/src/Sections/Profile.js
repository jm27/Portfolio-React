import React from "react";

const Profile = () => (
  <section className="profile justify-content-center text-center">
    <div className="container container-profile">
      <h1 className="mt-4 profile-title">Hello World!</h1>
      <hr className="border-white" />
      <p className="description">
        Hi
        <span role="img" aria-label="hidden">
          &#128400;
        </span>
        , Nice to meet you
        <span role="img" aria-label="hidden">
          &#128513;
        </span>
        ! I am a Full Stack Web Developer
        <span role="img" aria-label="hidden">
          &#128187;
        </span>
        with a background BS in Business
        <span role="img" aria-label="hidden">
          &#128177;
        </span>
        .<br />
        Recently completed an intensive Bootcamp from the University of Arizona
        in Full Stack Development🎓.
        <br /> With newly developed skills🧰 in HTML, CSS, JavaScript, Node.js,
        Express.js, React.js, SQL, MongoDB, Responsive web design
        <span role="img" aria-label="hidden">
          &#128241;
        </span>
        and eager to learn more
        <span role="img" aria-label="hidden">
          &#128102;
        </span>
        !
      </p>
      <a
        className="btn btn-outline-light resume"
        href="https://docs.google.com/document/d/1Y97Ze7Exv66oG0NBz29WMQjAoVJg4kwjUPgZmY6Ggrg/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check my Resume <i className="fas fa-file-alt"></i>
      </a>
    </div>
  </section>
);

export default Profile;
