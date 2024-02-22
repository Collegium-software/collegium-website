import {Container} from "../../../components/projects/Projects";
import { Link } from 'react-router-dom';
import "../OurProjects/allProjects.css"

import ProjectPic1 from '../../../images/projectsPage/condo-6804298_1280.jpg'
import ProjectPic2 from '../../../images/projectsPage/urban-2589645_1280.jpg'
import ProjectPic3 from '../../../images/projectsPage/architecture-2576029_1280.jpg'


const AllProjects = () => {
  return (
          
      <div className="projects-gallery-container">

        <div className="projects-page-title">
        <h1>All Projects</h1>
        </div>
      <div className="projects-gallery">
          <Container
         imageUrl={ProjectPic1}
         label="Project 2"
         description={<Link className="no-underline" to="/project1">Castle Crest Condos</Link>}
         />
                
        <Container
         imageUrl={ProjectPic2}
         label="Project 3"
         description={<Link className="no-underline" to="/project2">Horizon Haven.</Link>}
         />
        <Container
         imageUrl={ProjectPic3}
         label="Project 1"
         description={<Link className="no-underline" to="/project3">Harmony Heights</Link>}
         />
      </div>
      </div>
 

    );
}

 
export default AllProjects;

