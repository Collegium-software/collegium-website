import React from 'react';
import './vendorsTestimony.css';
import Line from '../../../components/Line';

import VendorsPic1 from '../../../images/vendors/ownersPic1.png';
import VendorsPic2 from '../../../images/vendors/ownersPic2.png';
import VendorsPic3 from '../../../images/vendors/ownersPic3.png';

const VendorsTestimonyHeader = () => {
return(
  <div className="vendorsTestimonyHeader">
    <h1>"R. Buckminster Fuller"</h1>
    <Line blackLine />
    <p>“This is the placeholder for the testimonial. A great testimonial can boost your brand’s image.”</p>
  </div>
)};


const VendorsPartners = ({ imageUrl, title }) => {
  return (
      <div className="vendorsPartners">
        <div className="PartnersImage"><img src={imageUrl} alt={title} /></div> 
        <p>{title}</p>
      </div>
  );
};

const VendorsTestimony = () => {
  return (
    <div className="vendors-Testimony-Page">
      <VendorsTestimonyHeader />
      <h2>Vendors Trust Us</h2>
      <div className="vendors-Partners-Container ">
        <VendorsPartners
          imageUrl={VendorsPic1}
          title="Partner 1"
        />
        <VendorsPartners
          imageUrl={VendorsPic2}
          title="Partner 2"
        />
        <VendorsPartners
          imageUrl={VendorsPic3}
          title="Partner 3"
        />
        <VendorsPartners
          imageUrl={VendorsPic3}
          title="Partner 4"
        />
      </div>
    </div>
  );
};

export default VendorsTestimony
