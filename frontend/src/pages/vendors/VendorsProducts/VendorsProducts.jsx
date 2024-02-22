

import React from 'react';
import './vendorsProducts.css';

import VendorsPic1 from '../../../images/vendors/ownersPic1.png';
import VendorsPic2 from '../../../images/vendors/ownersPic2.png';
import VendorsPic3 from '../../../images/vendors/ownersPic3.png';

const Product = ({ id, imageUrl, title, description }) => (
  <div id={id} className="product">
    <div className="productImage"><img src={imageUrl} alt={title} /></div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const VendorsProducts = () => {
  const productsData = [
    {
      id: 1,
      imageUrl: VendorsPic1,
      title: "Tender Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 2,
      imageUrl: VendorsPic2,
      title: "Invoice Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 3,
      imageUrl: VendorsPic3,
      title: "Project Financials",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 4,
      imageUrl: VendorsPic1,
      title: " Project Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 5,
      imageUrl: VendorsPic2,
      title: "Quality & Safety",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 6,
      imageUrl: VendorsPic3,
      title: "Analytics",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    }
  ];

  return (
    <div className="vendors-Products-Page">
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

export default VendorsProducts;