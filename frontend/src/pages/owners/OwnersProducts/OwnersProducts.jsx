
import React from 'react';
import './ownersProducts.css';


import TenderManagement from '../../../images/owners/TenderManagement.png';
import InvoiceManagement from '../../../images/owners/InvoiceManagement.png';
import ProjectManagement from '../../../images/owners/ProjectManagement.png';
import ProjectFinancial from '../../../images/owners/ProjectFinancial.png';
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
      description: "Streamlining the tendering process from procurement to contract award to help secure the best contracts for your projects.",
    },
    
    {
      id: 2,
      imageUrl: InvoiceManagement,
      title: "Invoice Management",
      description: "Handling invoice processing and tracking to ensure accurate and timely payments, minimizing errors and delays.",
    },
    {
      id: 3,
      imageUrl: ProjectFinancial,
      title: "Project Financial",
      description: "Providing comprehensive financial oversight, from budgeting to expense tracking, to ensure project profitability and cost control.",
    },
    {
      id: 4,
      imageUrl:ProjectManagement,
      title: " Project Management",
      description: "Managing projects from start to finish with industry-leading methodologies and tools, ensuring on-time delivery and within budget.",
    },
    {
      id: 5,
      imageUrl: QualitySafety,
      title: "Quality & Safety",
      description: "Ensuring adherence to quality standards and safety protocols throughout the project lifecycle to minimize risks and deliver high-quality outcomes.",
    },
    {
      id: 6,
      imageUrl: Analytics,
      title: "Analytics",
      description: "Leveraging data analysis techniques to extract valuable insights from project data, empowering informed decision-making and continuous improvement.",
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

