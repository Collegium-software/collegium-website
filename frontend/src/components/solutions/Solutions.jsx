import React from "react";
import "./solution.css";
import Button from "../button/Button";

import Vendors from "../../images/home/vendors.jpeg";
import ProjectTeamImage from "../../images/home/projectTeam.jpeg";
import Owners from "../../images/home/owners.jpeg";

const Card = ({ imageUrl, label, description, to }) => {
  console.log('Rendering Card:', label);
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="cardContent">
        <div className="labelText"><p>{description}</p></div>
        <div className="solutionButton">
          <Button width="250px"  label={label} to={to} />
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
      <Header title="Solutions for you" />
      <div className="solutionsContainer">
        <Card
          imageUrl={Owners}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label=" Owners "
          to="/owners" 
        />
        <Card
          imageUrl={Vendors}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label=" Vendors "
          to="/vendors" 
        />
        <Card
          imageUrl={ProjectTeamImage}
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          label="Project Team"
          to="/project-team" 
        />
      </div>
    </div>
  );
};

export default Solutions;
