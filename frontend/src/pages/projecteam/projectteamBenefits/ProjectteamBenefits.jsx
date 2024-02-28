import React from 'react';
import './projectteamBenefits.css';

import ProjectteamPic1 from '../../../images/owners/ownersProjectPic1.png';
import ProjectteamPic2 from '../../../images/owners/ownersProjectPic2.png';
import ProjectteamPic3 from '../../../images/owners/ownersProjectPic3.png';


const BenefitsContainer = ({ imageUrl, label, description }) => (
  <div className="benefitsContainer">
    <div className="imageContainer" alt={label} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="image-label">{label}</div>
    </div>
    <p>{description}</p>
  </div>
);



const Projectteams = () => {
  return (
    <div className="projectteams-benefits-Page">
      <div className="projectteams-benefits-Container">
        <BenefitsContainer
          imageUrl={ProjectteamPic1}
          label="Effortless Onboarding"
          description="Implementing strategic measures to optimize costs, unlocking new avenues for financial efficiency and resource utilization."
        />
        <BenefitsContainer
          imageUrl={ProjectteamPic2}
          label="Reliable Financial Assurance"
          description="Secure a steady and predictable income stream with assured payment within 30 days."
        />
        <BenefitsContainer
          imageUrl={ProjectteamPic3}
          label="Simplified Bidding Process"
          description="Seamlessly and efficient bid submission.  "
        />
      </div>
    </div>
  );
};

export default Projectteams;