import React from 'react';
import './ownersHeader.css';
import Button from "../../../components/button/Button";
// import Navbar from '../../components/navbar/Navbar';




const OwnerHeader = ({ title1,title2, description, label }) => (
  <header className="ownersHeader">
    <h4 className="route">Home/Who We Are</h4>
    <h1 className="title">{title1}</h1>
    <h3 className="subtitle-">{title2}</h3>
    <p>{description}</p>
    <div className="ownersHeaderButton"><Button label={label} /></div>
  </header>
);


const OwnersHeader  = () => {
  return (
    <div className="owners-Header-Page" >
      {/* <Navbar /> */}
      <OwnerHeader
      title1= "Owners"
      title2= "Optimize, Streamline, and Protect."
      description="Execute the Blueprint for Operational Excellence. Lorem ipsum dolor sit amet consectetur. Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt."
      label="Contact us"
     />
    </div>
  );
};

export default OwnersHeader 
