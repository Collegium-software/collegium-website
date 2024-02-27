import React from 'react';
import './vendorsBenefits.css';

import VendorsPic1 from '../../../images/owners/ownersProjectPic1.png';
import VendorsPic2 from '../../../images/owners/ownersProjectPic2.png';
import VendorsPic3 from '../../../images/owners/ownersProjectPic3.png';


const BenefitsContainer = ({ imageUrl, label, description }) => (
  <div className="benefitsContainer">
    <div className="imageContainer" alt={label} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="image-label">{label}</div>
    </div>
    <p>{description}</p>
  </div>
);



const Vendors = () => {
  return (
    <div className="vendors-benefits-Page">
      <div className="vendors-benefits-Container">
        <BenefitsContainer
          imageUrl={VendorsPic1}
          label="Effortless Onboarding"
          description="Implementing strategic measures to optimize costs, unlocking new avenues for financial efficiency and resource utilization."
        />
        <BenefitsContainer
          imageUrl={VendorsPic2}
          label="Reliable Financial Assurance"
          description="Secure a steady and predictable income stream with assured payment within 30 days."
        />
        <BenefitsContainer
          imageUrl={VendorsPic3}
          label="Simplified Bidding Process"
          description="Seamlessly and efficient bid submission.  "
        />
      </div>
    </div>
  );
};

export default Vendors;
