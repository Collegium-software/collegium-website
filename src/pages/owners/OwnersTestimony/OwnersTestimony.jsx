import React from 'react';
import './ownersTestimony.css';

import Partner1 from '../../../images/owners/Cetana.png';
import Partner2 from '../../../images/owners/nextArch.png';
import Partner3 from '../../../images/owners/MCWLogo.png';
import Partner4 from '../../../images/owners/Smoky Lake .png';
import Line from '../../../components/Line';


const OwnersTestimonyHeader = () => {
return(
  <div className="ownersTestimonyHeader">
    <h1>"Andrew Bowerbank"</h1>
    <Line blackLine />
    <p>“We are thrilled with our partnership with Collegium." - CEO OF CETANA</p>
  </div>
)};


const OwnersPartners = ({ imageUrl, title }) => {
  return (
      <div className="ownersPartners">
        <div className="PartnersImage"><img src={imageUrl} alt={title} /></div> 
        <p>{title}</p>
      </div>
  );
};

const OwnersTestimony = () => {
  return (
    <div className="owners-Testimony-Page">
      <OwnersTestimonyHeader />
      <h2 class="ownersSubheader">Owners Trust Us</h2>
      <div className="owners-Partners-Container ">
        <OwnersPartners
          imageUrl={Partner1}
          title="CETANA GROUP"
        />
        <OwnersPartners
          imageUrl={Partner2}
          title="NEXT ARCHITECTURE"
        />
        <OwnersPartners
          imageUrl={Partner3}
          title="MCW ENGINEERING"
        />
        <OwnersPartners
          imageUrl={Partner4}
          title="SMOKY LAKE"
        />
      </div>
    </div>
  );
};

export default OwnersTestimony
