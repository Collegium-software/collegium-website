import React from "react";
import "./vendorsHeader.css";
import Button from "../../../components/button/Button";

const VendorHeader = ({ title1, title2, description, label }) => (
  <header className="vendorsHeader">
    <h1 className="title">{title1}</h1>
    <h3 className="subtitle">{title2}</h3>
    <p>{description}</p>
    <div className="vendorsHeaderButton">
      <Button to="/contactus" label={label} />
    </div>
  </header>
);

const VendorsHeader = () => {
  return (
    <div className="vendors-Header-Page">
      <div className="vendors-mask">
        <VendorHeader
          title1="Vendors"
          title2="Simplify, Secure, and Soar"
          description="Enhance your participation and competitiveness in the marketplace, fostering increased business opportunities."
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default VendorsHeader;
