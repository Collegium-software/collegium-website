import React from "react";
import "./projectteamHeader.css";
import Button from "../../../components/button/Button";

const ProjectteamHeader = ({ title1, title2, description, label }) => (
  <header className="projectteamHeader">
    <h1 className="title">{title1}</h1>
    {/* <h3 className="subtitle">{title2}</h3> */}
    <p>{description}</p>
    <div className="projectteamHeaderButton">
      <Button to="/contactus" label={label} />
    </div>
  </header>
);

const ProjectteamsHeader = () => {
  return (
    <div className="projectteam-Header-Page">
      <div className="projectteam-mask">
        <ProjectteamHeader
          title1="Owners Team"
          // title2="Enhance, Empower, and Excel"
          description="Emphasizing design innovation and collaborative interdependence drives transformative change for sustainability."
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default ProjectteamsHeader;
