import React from 'react';
import './vendorsTestimony.css';

import Partner1 from '../../../images/owners/Cetana.png';
import Partner2 from '../../../images/owners/nextArch.png';
import Partner3 from '../../../images/owners/MCWLogo.png';
import Partner4 from '../../../images/owners/Smoky Lake .png';
import Line from '../../../components/Line';


const VendorsTestimonyHeader = () => {
  return(
    <div className="vendorsTestimonyHeader">
      <h1>"Andrew Bowerbank"</h1>
      <Line blackLine />
      <p>“We are thrilled with our partnership with Collegium." - CEO OF CETANA</p>
    </div>
  );
};


const VendorsPartners = ({ imageUrl, title }) => {
  return (
    <div className="vendorsPartners">
      <div className="vendorsPartnersImage"><img src={imageUrl} alt={title} /></div> 
      <p>{title}</p>
    </div>
  );
};

const VendorsTestimony = () => {
  return (
    <div className="vendors-Testimony-Page">
      <VendorsTestimonyHeader />
      <h2 className="vendorsSubheader">Vendors Trust Us</h2>
      <div className="vendors-Partners-Container ">
        <VendorsPartners
          imageUrl={Partner1}
          title="CETANA GROUP"
        />
        <VendorsPartners
          imageUrl={Partner2}
          title="NEXT ARCHITECTURE"
        />
        <VendorsPartners
          imageUrl={Partner3}
          title="MCW ENGINEERING"
        />
        <VendorsPartners
          imageUrl={Partner4}
          title="SMOKY LAKE"
        />
      </div>
    </div>
  );
};

export default VendorsTestimony;
