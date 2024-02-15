import Navbar from "../../../components/navbar/Navbar";
import OurProjectsHero from "./OurProjectsHero";
import ContactCard from "../../../components/contactCard/SadiqContactCard";


import "./projectsPage.css"




import AllProjects from "./AllProjects";
import SFooter from "../../../components/footer/SFooter";



const ProjectsPage = () => {

  return (
    <div className="project-page-container">
      <Navbar />
      <OurProjectsHero />
      <div className="contact-card-div"> 
        <ContactCard/>
      </div>
      <AllProjects/>
      <SFooter/>

     
      
    </div>
  );
};
 
export default ProjectsPage;