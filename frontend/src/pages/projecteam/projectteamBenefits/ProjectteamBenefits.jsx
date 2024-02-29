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
        label="Diverse Projects"
        description="Engage in a wide range of projects spanning various industries, from commercial buildings to infrastructure and beyond."
      />
      <BenefitsContainer
        imageUrl={ProjectteamPic2}
        label="Creative Freedom"
        description="Exercise your creativity and bring innovative ideas to life, shaping the future of construction and design."
      />
      <BenefitsContainer
        imageUrl={ProjectteamPic3}
        label="Professional Growth"
        description="Opportunities for professional development and career advancement through mentorship, training, and challenging projects."
      />
      </div>
    </div>
  );
};

export default Projectteams;