import React from "react";

const Card = ({
  className,
  cardImg,
  cardTitle,
  cardText,
  deployedLink,
  repoLink,
}) => (
  <div className={className}>
    <div className="card bg-dark text-white">
      <img className="card-img" src={cardImg} alt="Card" />
      <div className="card-img-overlay">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <a
          className="btn btn-outline-primary card-link"
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          data-toggle="tooltip"
          data-placement="bottom"
          title="View deployed"
        >
          <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
        </a>
        <a
          className="btn btn-outline-primary card-link"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          data-toggle="tooltip"
          data-placement="bottom"
          title="View repository"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Card;
