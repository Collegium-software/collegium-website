import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import VendorsBenefits from './VendorsBenefits/VendorsBenefits';
import SFooter from'../../components/footer/SFooter';
import VendorsServices from './VendorsServices/VendorsServices';
import VendorsTestimony from './VendorsTestimony/VendorsTestimony';
import VendorsProducts from './VendorsProducts/VendorsProducts';
import VendorsHeader from './VendorsHeader/VendorsHeader';
import { useEffect } from "react";
import ContactCard from '../../components/contactCard/SadiqContactCard';

const Vendors = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
    <Navbar background="transparent" color="black" h3Color="black"/>
    <VendorsHeader />
    <div className="contact-card-div">
    <ContactCard />
    </div>
    <VendorsBenefits />
    <VendorsTestimony />
    <VendorsServices />
    <VendorsProducts />
    <SFooter />
</>
  );
}

export default Vendors

