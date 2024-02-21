import React from 'react';
import './vendorsBenefits.css';

import VendorsPic1 from '../../../images/vendors/ownersPic1.png';
import VendorsPic2 from '../../../images/vendors/ownersPic2.png';
import VendorsPic3 from '../../../images/vendors/ownersPic3.png';



const BenefitsContainer = ({ imageUrl, label, description }) => (
  <div className="benefitsContainer">
    <div className="imageContainer">
      <img src={imageUrl} className="benefitsImage" alt={label} />
      <div className="image-label">{label}</div>
    </div>
    <p>{description}</p>
  </div>
);


const vendors = () => {
  return (
    <div className="vendors-benefits-Page">
      <div className="vendors-benefits-Container">
        <BenefitsContainer
          imageUrl={VendorsPic1}
          label="Cost Optimization"
          description="Implementing strategic measures to optimize costs, unlocking new avenues for financial efficiency and resource utilization."
        />
        <BenefitsContainer
          imageUrl={VendorsPic2}
          label="Streamlined Scheduling"
          description="Efficiency Boost: Accelerating project timelines, streamlining scheduling processes, and ensuring resource optimization."
        />
        <BenefitsContainer
          imageUrl={VendorsPic3}
          label="Proactive Risk Mitigation"
          description="Mitigating potential risks safeguarding your projects and
        ensuring a smoother development process"
        />
      </div>
    </div>
  );
};

export default vendors;