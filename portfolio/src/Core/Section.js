import React from "react";

const Section = ({ title = "intro" }) => {
  return (
    <div>
      <section className={title}>
        <div className='container-fluid'></div>
      </section>
    </div>
  );
};

export default Section;
