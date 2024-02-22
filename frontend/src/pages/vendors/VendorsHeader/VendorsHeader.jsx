import React from 'react';
import './vendorsHeader.css';
import Button from "../../../components/button/Button";





const VendorHeader = ({ title1,title2, description, label }) => (
  <header className="vendorsHeader">
    <h4 className="route">Home/Vendors</h4>
    <h1 className="title">{title1}</h1>
    <h3 className="subtitle-">{title2}</h3>
    <p>{description}</p>
    <div className="vendorsHeaderButton"><Button label={label} /></div>
  </header>
);


const VendorsHeader  = () => {
  return (
    <div className="vendors-Header-Page" >
      <VendorHeader
      title1= "vendors"
      title2= "Optimize, Streamline, and Protect."
      description="Execute the Blueprint for Operational Excellence. Lorem ipsum dolor sit amet consectetur. Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt."
      label="Contact us"
     />
    </div>
  );
};

export default VendorsHeader 
