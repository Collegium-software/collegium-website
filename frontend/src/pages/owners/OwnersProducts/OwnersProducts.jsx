
import React from 'react';
import './ownersProducts.css';
<<<<<<< HEAD
import OwnersPic1 from '../../../images/owners/ownersPic1.png';
import OwnersPic2 from '../../../images/owners/ownersPic2.png';
import OwnersPic3 from '../../../images/owners/ownersPic3.png';

const Product = ({ imageUrl, title, description, containerClass }) => (
  <div className={containerClass}>
    <div className="productImage">
      <img src={imageUrl} alt={title} />
    </div>
    <h3>{title}</h3>
=======


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
>>>>>>> main
    <p>{description}</p>
  </div>
);

<<<<<<< HEAD
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
=======
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
      imageUrl: ProjectFinancial,
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

>>>>>>> main
