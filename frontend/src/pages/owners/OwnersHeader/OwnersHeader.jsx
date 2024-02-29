import React from 'react';
import './ownersHeader.css';
import Button from "../../../components/button/Button";





const OwnerHeader = ({ title1,title2, description, label }) => (
  <header className="ownersHeader">
    <h4 className="route">Home/Who We Are</h4>
    <h1 className="title">{title1}</h1>
    <h3 className="subtitle-">{title2}</h3>
    <p>{description}</p>
    <div className="ownersHeaderButton"><Button label={label} to="/contactus"  /></div>
  </header>
);


const OwnersHeader  = () => {
  return (
    <div className="owners-Header-Page" >
      <OwnerHeader
      title1= "Owners"
      title2= "Optimize, Streamline, and Protect."
      description="Execute the Blueprint for Operational Excellence. Our mission is to optimize operations, streamline processes, and protect assets. With a focus on operational excellence, we aim to enhance efficiency and ensure sustainable growth."
      label="Contact us"
     />
    </div>
  );
};

export default OwnersHeader 
