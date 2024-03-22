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
import InterimNavbar from "../../components/navbar/InterimNavbar";

const Owners = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <InterimNavbar background="white" color="black" />
      <OwnerHeader />
      <div className="contact-card-div">
        <ContactCard />
      </div>
      <OwnersBenefits />

      <SFooter />
    </>
  );
};

export default Owners;
