import React from "react";
import Card from "../Core/Card";

const Portfolio = () => (
  <section className="portfolio justify-content-center text-center">
    <div
      className="jumbotron jumbotron-portfolio
        mb-4"
    >
      <h2 id="title">My recent work</h2>
      <div className="projects">
        <Card
          cardImg={require("../media/e-commerce.jpg")}
          cardTitle="E-commerce"
          cardText="
            MERN Stack React Node MongoDB Express powered E-Commerce App with PayPal and Credit Card Payment along with Admin Dashboard!"
          deployedLink="https://ecomlearnshop.com/"
          repoLink="https://github.com/jm27/E-Commerce-MERN"
        ></Card>
        <Card
          cardImg={require("../media/crystal-React.jpg")}
          cardTitle="Crystal React Game"
          cardText="Crystal game where you have to guess the number that each crystal represent. Built with React and CSS"
          deployedLink="https://jm27.github.io/React-Crystals/"
          repoLink="https://github.com/jm27/React-Crystals"
        ></Card>
        <Card
          cardImg={require("../media/css-grid-2.jpg")}
          cardTitle="E-commerce"
          cardText="Playground for Css Grid, An application with 10 different CSS Grid examples."
          deployedLink="https://jm27.github.io/Css-Grid-pg/"
          repoLink="https://github.com/jm27/Css-Grid-pg"
        ></Card>
        <Card
          cardImg={require("../media/e-commerce.jpg")}
          cardTitle="E-commerce"
          cardText="
            MERN Stack React Node MongoDB Express powered E-Commerce App with PayPal and Credit Card Payment along with Admin Dashboard!"
          deployedLink="https://ecomlearnshop.com/"
          repoLink="https://github.com/jm27/E-Commerce-MERN"
        ></Card>
        <Card
          cardImg={require("../media/e-commerce.jpg")}
          cardTitle="E-commerce"
          cardText="
            MERN Stack React Node MongoDB Express powered E-Commerce App with PayPal and Credit Card Payment along with Admin Dashboard!"
          deployedLink="https://ecomlearnshop.com/"
          repoLink="https://github.com/jm27/E-Commerce-MERN"
        ></Card>
        <Card
          cardImg={require("../media/e-commerce.jpg")}
          cardTitle="E-commerce"
          cardText="
            MERN Stack React Node MongoDB Express powered E-Commerce App with PayPal and Credit Card Payment along with Admin Dashboard!"
          deployedLink="https://ecomlearnshop.com/"
          repoLink="https://github.com/jm27/E-Commerce-MERN"
        ></Card>
      </div>
    </div>
  </section>
);

export default Portfolio;
