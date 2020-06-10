import React from "react";
import Card from "../Core/Card";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => (
  <section className="portfolio justify-content-center text-center">
    <div
      className="jumbotron jumbotron-portfolio
        mb-4"
    >
      {" "}
      <Fade duration={800} direction="top" delay={500}>
        <h2 id="title">
          My recent work
          <span role="img" aria-label="hidden">
            🛠️
          </span>
        </h2>

        <div className="projects">
          <Card
            className="e-com-card"
            cardImg={require("../media/e-commerce.jpg")}
            cardTitle="E-commerce"
            cardText="
            MERN Stack React Node MongoDB Express powered E-Commerce App with PayPal and Credit Card Payment along with Admin Dashboard!"
            deployedLink="https://ecomlearnshop.com/"
            repoLink="https://github.com/jm27/E-Commerce-MERN"
          ></Card>
          <Card
            className="crystal-card"
            cardImg={require("../media/crystal-React.jpg")}
            cardTitle="Crystal React Game"
            cardText="Crystal game where you have to guess the number that each crystal represent. Built with React.js and CSS"
            deployedLink="https://jm27.github.io/React-Crystals/"
            repoLink="https://github.com/jm27/React-Crystals"
          ></Card>
          <Card
            className="css-card"
            cardImg={require("../media/css-grid-2.jpg")}
            cardTitle="CSS Grid Playground"
            cardText="Playground for Css Grid, An application with 10 different CSS Grid examples. Built with HTML and CSS"
            deployedLink="https://jm27.github.io/Css-Grid-pg/"
            repoLink="https://github.com/jm27/Css-Grid-pg"
          ></Card>
          <Card
            className="etch-card"
            cardImg={require("../media/etch-a-sketch.jpg")}
            cardTitle="Etch-A-Sketch"
            cardText="This game is going to take you back to your childhood. Built with JavaScript, CSS and HTML.
          "
            deployedLink="https://jm27.github.io/Etch-A-Sketch/"
            repoLink="https://github.com/jm27/Etch-A-Sketch"
          ></Card>
          <Card
            className="clicky-card"
            cardImg={require("../media/clicky-game.png")}
            cardTitle="React Clicky-Game"
            cardText="A game of memory where you have to click different images of Programming languages, Built with React.js and CSS"
            deployedLink="https://jm27.github.io/react-clicky-game/"
            repoLink="https://github.com/jm27/react-clicky-game"
          ></Card>
          <Card
            className="burger-card"
            cardImg={require("../media/burger.png")}
            cardTitle="Eat-the-Burger"
            cardText="CRUD App where you can build a burger of your choice. Built with JavaScript, CSS, HTML and SQL DB"
            deployedLink="https://burger-app-jm27.herokuapp.com/"
            repoLink="https://github.com/jm27/burger"
          ></Card>
        </div>
      </Fade>
    </div>
  </section>
);

export default Portfolio;
