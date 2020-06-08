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
