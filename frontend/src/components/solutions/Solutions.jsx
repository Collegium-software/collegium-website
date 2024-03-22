import React from "react";
import "./solution.css";
import Button from "../button/Button";

import Vendors from "../../images/home/vendors.jpeg";
import ProjectTeamImage from "../../images/home/projectTeam.jpeg";
import Owners from "../../images/home/owners.jpeg";

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
          <Button width="250px" label={label} to={to} />
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
        <Card imageUrl={Owners} description="" label="Owners" to="/owners" />
        <Card
          imageUrl={Vendors}
          description=""
          label="Owners Team"
          to="/owners-team"
        />
        <Card
          imageUrl={ProjectTeamImage}
          description=""
          label="Vendors"
          to="/vendors"
        />
      </div>
    </div>
  );
};

export default Solutions;
