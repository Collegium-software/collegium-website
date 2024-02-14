
import React from 'react';
import './ownersProducts.css';
import OwnersPic1 from '../../../images/owners/ownersPic1.png';
import OwnersPic2 from '../../../images/owners/ownersPic2.png';
import OwnersPic3 from '../../../images/owners/ownersPic3.png';

const Product = ({ imageUrl, title, description, containerClass }) => (
  <div className={containerClass}>
    <div className="productImage">
      <img src={imageUrl} alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const OwnersProducts = () => (
  <div className="owners-Products-Page">
    <h1>Our products purposefully built for you</h1>
    <div className="top-Products-Container">
      {[OwnersPic1, OwnersPic2, OwnersPic3].map((pic, index) => (
        <Product
          key={index}
          imageUrl={pic}
          title={["Tender Management", "Invoice Management", "Project Financials"][index]}
          description="Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt."
          containerClass="topProducts"
        />
      ))}
    </div>
    <div className="bottom-Products-Container">
      {[OwnersPic3, OwnersPic3, OwnersPic3].map((pic, index) => (
        <Product
          key={index}
          imageUrl={pic}
          title={["Project Management", "Quality & Safety", "Analytics"][index]}
          description="Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt."
          containerClass="bottomProducts"
        />
      ))}
    </div>
  </div>
);

export default OwnersProducts;
