import React from "react";
import "./ownersHeader.css";
import Button from "../../../components/button/Button";

const OwnerHeader = ({ title1, title2, description, label }) => (
  <header className="ownersHeader">
    <h1 className="title">{title1}</h1>
    {/* <h3 className="subtitle">{title2}</h3> */}
    <p>{description}</p>
    <div className="ownersHeaderButton">
      <Button to="/contactus" label={label} />
    </div>
  </header>
);

const OwnersHeader = () => {
  return (
    <div className="owners-Header-Page">
      <div className="owners-mask">
        <OwnerHeader
          title1="Owners"
          title2="Optimize, Streamline, and Protect."
          description="Collegium facilitates integrated, transparent digital models to mitigate costs, delays, and risk while ensuring exceptional value for owners."
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default OwnersHeader;
