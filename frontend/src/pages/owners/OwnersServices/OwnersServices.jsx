
import React from 'react';
import './ownersServices.css';
import Button from "../../../components/button/Button";
import OwnersGraph from '../../../images/owners/ownersGraph.png';

const ServicesHeader = ({ title, label }) => (
  <header className="servicesHeader">
    <h1>{title}</h1>
    <div className="ServicesButton"><Button label={label} /></div>
  </header>
);

const ServicesContainer = ({ imageUrl, label }) => (
  <section className="servicesContainer">
    <div className="services">
      {['Financial Management', 'Capital Project Governance', 'Portfolio Insights', 'Planning & Development', 'Workforce Efficiency', 'Easy Implementation'].map((service, index) => (
        <p key={index}>{service}</p>
      ))}
    </div>
    <div className="contentContainer">
      <h3>Track and manage every dollar.</h3>
      <p>Standardize the collection and reporting of financial data gathered in the field—giving you real-time visibility into your financial position across your entire portfolio.</p>
      <div className="serviceImageContainer"><img src={imageUrl} className="Graph" alt={label} /></div>
    </div>
  </section>
);

const OwnerServices = () => (
  <div className="ownerServicesPage">
    <ServicesHeader title="What We Can Do" label="Contact Us" />
    <ServicesContainer imageUrl={OwnersGraph} label="Contact" />
  </div>
);

export default OwnerServices;
