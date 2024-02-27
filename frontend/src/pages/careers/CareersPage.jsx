

import Navbar from "../../components/navbar/Navbar";
import CareerHero from "./CareerHero";
import Careers from "./Careers";
import SFooter from "../../components/footer/SFooter";

const CareersPage = () => {
 
  return (
    <div>
      <Navbar background="white" color="black" />
      <CareerHero />
      <Careers />
      <SFooter />
    </div>
  );
};

export default CareersPage;
