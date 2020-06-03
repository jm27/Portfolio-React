import React from "react";

const Section = ({ title = "Hello", subtitle = "world" }) => {
  return (
    <div className="jumbotron mt-4">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
    </div>
  );
};

export default Section;
