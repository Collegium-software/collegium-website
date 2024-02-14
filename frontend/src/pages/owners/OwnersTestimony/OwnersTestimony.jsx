import React from 'react';
import './ownersTestimony.css';
import OwnersPic1 from '../../../images/owners/ownersPic1.png';
import OwnersPic2 from '../../../images/owners/ownersPic2.png';
import OwnersPic3 from '../../../images/owners/ownersPic3.png';
import Line from '../../../components/Line';

const OwnersTestimonyHeader = () => {
return(
  <div className="ownersTestimonyHeader">
    <h1>"R. Buckminster Fuller"</h1>
    <Line blackLine />
    <p>“This is the placeholder for the testimonial. A great testimonial can boost your brand’s image.”</p>
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
      <h2>Owners Trust Us</h2>
      <div className="owners-Partners-Container ">
        <OwnersPartners
          imageUrl={OwnersPic1}
          title="Partner 1"
        />
        <OwnersPartners
          imageUrl={OwnersPic2}
          title="Partner 2"
        />
        <OwnersPartners
          imageUrl={OwnersPic3}
          title="Partner 3"
        />
        <OwnersPartners
          imageUrl={OwnersPic3}
          title="Partner 4"
        />
      </div>
    </div>
  );
};

export default OwnersTestimony
