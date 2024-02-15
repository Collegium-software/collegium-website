
import React from 'react';
import './ownersProducts.css';


import TenderManagement from '../../../images/owners/TenderManagement.png';
import InvoiceManagement from '../../../images/owners/InvoiceManagement.png';
import ProjectManagement from '../../../images/owners/ProjectManagement.png';
import ProjectFinancials from '../../../images/owners/ProjectFinancial.png';
import QualitySafety from '../../../images/owners/QualitySafety.png';
import Analytics from '../../../images/owners/Analytics.png';


const Product = ({ id, imageUrl, title, description }) => (
  <div id={id} className="product">
    <div className="productImage"><img src={imageUrl} alt={title} /></div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const OwnersProducts = () => {
  const productsData = [
    {
      id: 1,
      imageUrl: TenderManagement,
      title: "Tender Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 2,
      imageUrl: InvoiceManagement,
      title: "Invoice Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 3,
      imageUrl: ProjectFinancials,
      title: "Project Financial",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 4,
      imageUrl:ProjectManagement,
      title: " Project Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 5,
      imageUrl: QualitySafety,
      title: "Quality & Safety",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 6,
      imageUrl: Analytics,
      title: "Analytics",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    }
  ];

  return (
    <div className="owners-Products-Page">
      <h1>Our products purposefully built for you</h1>
      <div className="products-Container">
        {productsData.map((product) => (
          <Product
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OwnersProducts;

