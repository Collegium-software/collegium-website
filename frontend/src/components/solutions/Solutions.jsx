import React from "react";
import "./solution.css";
import Button from "../button/Button";

import vendors from "../../images/home/vendors.png";
import ownersteam from "../../images/home/ownersteam.jpeg";
import owners from "../../images/home/owners.png";

const Card = ({ imageUrl, label, description, to }) => {
  console.log("Rendering Card:", label);
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="cardContent">
        <div className="solutionButton">
          <Button label={label} to={to} />
        </div>
      </div>
    </div>
  );
};

const Header = ({ title }) => {
  return (
    <header className="SolutionsHeader">
      <h2>{title}</h2>
    </header>
  );
};

const Solutions = () => {
  return (
    <div className="SolutionsPage">
      <Header title="Solutions" />
      <div className="solutionsContainer">
        <Card imageUrl={owners} description="" label="Owners" to="/owners" />
        <Card
          imageUrl={ownersteam}
          description=""
          label="Owners Team"
          to="/owners-team"
        />
        <Card imageUrl={vendors} description="" label="Vendors" to="/vendors" />
      </div>
    </div>
  );
};

export default Solutions;
