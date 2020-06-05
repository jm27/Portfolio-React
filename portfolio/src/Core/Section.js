import React from "react";

const Section = ({ title = "intro" }) => {
  return (
    <div>
      <section className={title}>
      </section>
    </div>
  );
};

export default Section;
