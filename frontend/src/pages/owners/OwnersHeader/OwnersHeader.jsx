import React from "react";
import "./ownersHeader.css";
import Button from "../../../components/button/Button";

const OwnerHeader = ({ title1, title2, description, label }) => (
  <header className="ownersHeader">
    <h1 className="title">{title1}</h1>
    <h3 className="subtitle">{title2}</h3>
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
          description="EExecute the Blueprint for Operational Excellence. Our mission is to optimize operations, streamline processes, and protect assets. With a focus on operational excellence, we aim to enhance efficiency and ensure sustainable growth."
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default OwnersHeader;
