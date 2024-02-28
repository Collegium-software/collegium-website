import React from 'react';
import './projectteamProducts.css'; // Updated CSS file name

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

const ProjectteamsProducts = () => { // Updated component name
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
      imageUrl: ProjectFinancial,
      title: "Project Financial",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 4,
      imageUrl: ProjectManagement,
      title: " Project Management", // Removed space before "Project Management"
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
    <div className="projectteams-Products-Page"> {/* Updated class name */}
      <h1>Our products purposefully built for you</h1>
      <div className="products-Container"> {/* Updated class name */}
        {productsData.map((product) => (
          <Product
            key={product.id} // Added key prop
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

export default ProjectteamsProducts; // Updated component name
