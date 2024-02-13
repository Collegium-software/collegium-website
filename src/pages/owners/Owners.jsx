import React from "react";
import Navbar from "../../components/navbar/Navbar";
import OwnersBenefits from "./OwnersBenefits/OwnersBenefits";
import SFooter from "../../components/footer/SFooter";
import OwnersServices from "./OwnersServices/OwnersServices";
import OwnersTestimony from "./OwnersTestimony/OwnersTestimony";
import OwnersProducts from "./OwnersProducts/OwnersProducts";
import OwnerHeader from "./OwnersHeader/OwnersHeader";
import { useEffect } from "react";
import ContactCard from "../../components/contactCard/SadiqContactCard";

const Owners = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <Navbar background="transparent" color="black" h3Color="black" />
      <OwnerHeader />
      <div className="contact-card-div">
        <ContactCard />
      </div>
      <OwnersBenefits />
      <OwnersTestimony />
      <OwnersServices />
      <OwnersProducts />
      <SFooter />
    </>
  );
};

export default Owners;
