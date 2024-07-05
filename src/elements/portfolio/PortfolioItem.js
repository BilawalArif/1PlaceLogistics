import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
  return (
    <div className="rwt-card">
      <div className="inner">
        <div className="thumbnail">
          <figure
            className="card-image"
            style={{ maxHeight: "315px", minHeight: "315px" }}
          >
            <Link
              to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}
            >
              <img
                className="img-fluid"
                src={portfolio.portfolioImage}
                alt="Portfolio-01"
                style={{ height: "auto", width: "100%", objectFit: "cover" }}
              />
            </Link>
          </figure>
          <Link
            to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}
            className="rwt-overlay"
          ></Link>
        </div>
        <div className="content">
          <h5 className="title mb--10">
            <Link
              to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}
            >
              {portfolio.title}
            </Link>
          </h5>
          <span className="subtitle b2 text-capitalize">
            {portfolio.category}
          </span>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
