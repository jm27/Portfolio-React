import React from "react";

const Profile = () => (
  <section className="profile justify-content-center text-center">
    <div
      className="container container-profile
        "
    >
      <h1 className="mt-4 profile-title">Hello World!</h1>
      <hr className="border-white" />
      <p className="description">
        Hi, Nice to meet you! I am a Full Stack Web Developer with a background
        BS in Business, recently completed an intensive Bootcamp from the
        University of Arizona in Full Stack Development.
        <br /> With newly developed skills in HTML, CSS, JavaScript, Node.js,
        Express.js, React.js, SQL, MongoDB, Responsive web design and eager to
        learn more!
      </p>
      <a
        className="btn btn-outline-light resume"
        href="https://docs.google.com/document/d/1Y97Ze7Exv66oG0NBz29WMQjAoVJg4kwjUPgZmY6Ggrg/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check my Resume
      </a>
    </div>
  </section>
);

export default Profile;
