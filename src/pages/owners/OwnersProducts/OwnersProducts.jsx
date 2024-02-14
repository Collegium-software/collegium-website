
import React from 'react';
import './ownersProducts.css';
import OwnersPic1 from '../../../images/owners/ownersPic1.png';
import OwnersPic2 from '../../../images/owners/ownersPic2.png';
import OwnersPic3 from '../../../images/owners/ownersPic3.png';

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
      imageUrl: OwnersPic1,
      title: "Tender Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 2,
      imageUrl: OwnersPic2,
      title: "Invoice Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 3,
      imageUrl: OwnersPic3,
      title: "Project Financials",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 4,
      imageUrl: OwnersPic1,
      title: " Project Management",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 5,
      imageUrl: OwnersPic2,
      title: "Quality & Safety",
      description: "Vitae elit lacus lobortis aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean diam. Quisque tincidunt.",
    },
    {
      id: 6,
      imageUrl: OwnersPic3,
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

