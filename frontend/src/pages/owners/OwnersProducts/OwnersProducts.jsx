
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
      description: "Our Tender Management service streamlines the entire tendering process, from initial procurement to contract award. We ensure efficient bid preparation, submission, and evaluation, helping you secure the best contracts for your projects.",
    },
    
    {
      id: 2,
      imageUrl: InvoiceManagement,
      title: "Invoice Management",
      description: "With our Invoice Management service, we handle all aspects of invoice processing and tracking, ensuring accurate and timely payments to vendors and contractors. Our automated systems minimize errors and delays, allowing for smooth financial operations.",
    },
    {
      id: 3,
      imageUrl: ProjectFinancial,
      title: "Project Financial",
      description: "We offer comprehensive financial oversight for your projects. From budgeting and forecasting to expense tracking and financial reporting, we help you manage project finances effectively, ensuring profitability and cost control.",
    },
    {
      id: 4,
      imageUrl:ProjectManagement,
      title: " Project Management",
      description: "Our Project Management service encompasses the planning, execution, and monitoring of projects from start to finish. We employ industry-leading methodologies and tools to ensure project success, delivering on time and within budget.",
    },
    {
      id: 5,
      imageUrl: QualitySafety,
      title: "Quality & Safety",
      description: "Quality and safety are paramount in every project.Ensure adherence to rigorous quality standards and safety protocols throughout the project lifecycle. We prioritize safety measures and quality assurance to minimize risks and deliver high-quality outcomes.",
    },
    {
      id: 6,
      imageUrl: Analytics,
      title: "Analytics",
      description: "Leverage advanced data analysis techniques to extract valuable insights from project data. By analyzing key performance indicators, trends, and patterns, we empower informed decision-making and drive continuous improvement across projects and operations.",
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

