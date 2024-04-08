import React, { useEffect } from "react";

import ProjectteamsHeader from "./ProjectteamHeader/ProjectteamHeader";
import ProjectteamBenefits from "./projectteamBenefits/ProjectteamBenefits";
// import ProjectteamsProducts from "./ProjectteamProducts/ProjectteamProducts";
// import ProjectteamsTestimony from "./ProjectteamTestimony/ProjectteamTestimony";
// import ProjectteamServices from "./ProjectteamServices/ProjectteamServices";

import SFooter from "../../components/footer/SFooter";
import ContactCard from "../../components/contactCard/SadiqContactCard";
import InterimNavbar from "../../components/navbar/InterimNavbar";

const OwnersTeam = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <InterimNavbar background="white" color="black" />
      <ProjectteamsHeader />
      <div className="contact-card-div">
        <ContactCard />
      </div>
      {/* <ProjectteamsBenefit /> */}
      <ProjectteamBenefits />
      {/* <ProjectteamsTestimony />
      <ProjectteamServices />
      <ProjectteamsProducts /> */}
      <SFooter />
    </>
  );
};

export default OwnersTeam;
