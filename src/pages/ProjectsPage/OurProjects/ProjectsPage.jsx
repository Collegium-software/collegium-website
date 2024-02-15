import Navbar from "../../../components/navbar/Navbar";
import OurProjectsHero from "./OurProjectsHero";
import ContactCard from "../../../components/contactCard/SadiqContactCard";

import Footer from "../../../components/footer/Footer";
import "./projectsPage.css"




import AllProjects from "./AllProjects";



const ProjectsPage = () => {

  return (
    <div className="project-page-container">
      <Navbar />
      <OurProjectsHero />
      <div className="contact-card-div"> 
        <ContactCard/>
      </div>
      <AllProjects/>
      <Footer/>

     
      
    </div>
  );
};
 
export default ProjectsPage;