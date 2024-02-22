// import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import InnovSustain from "./InnovSustain";
import MeetOurTeam from "./MeetOurTeam";
import MissionVision from "./MissionVision";
import ContactCard from "../../components/contactCard/SadiqContactCard";
import "./whoweare.css";
import SFooter from "../../components/footer/SFooter";

const WhoWeAre = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "White";
  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  return (
    <div>
      <Navbar background="white" color="black" />
      <Hero />
      <div className="contact-card-div">
        <ContactCard />
      </div>
      <MissionVision />
      <InnovSustain />
      <MeetOurTeam />
      <SFooter />
    </div>
  );
};

export default WhoWeAre;
