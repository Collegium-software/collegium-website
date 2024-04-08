import "./projects.css";
import Button from "../button/Button";

import project1 from "../../images/projects/project1.png";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";

const Container = ({ imageUrl, label, description }) => {
  // console.log("Rendering Card:", label);
  return (
    <div className="container">
      <div
        className="image-Container"
        alt={label}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h4>{description}</h4>
    </div>
  );
};

const Header = ({ title1, title2, label }) => {
  return (
    <header className="projectsHeader">
      <h2>{title1}</h2>
      <h3>{title2}</h3>
      <div className="projectButton">
        <Button color="black" label="Browse All Project" to="/projects" />
      </div>
    </header>
  );
};

const Projects = () => {
  return (
    <div className="ProjectPage">
      <Header
        title1="Projects Panorama"
        title2="A Visual Odyssey Through Our Diverse Creations"
      />
      <div className="projectsContainer">
        <Container
          imageUrl={project1}
          label="Project 1"
          description="SkyRise Residences"
        />
        <Container
          imageUrl={project2}
          label="Project 2"
          description="HarborView Office Complex"
        />
        <Container
          imageUrl={project3}
          label="Project 3"
          description="Golden Gate Bridge"
        />
      </div>
    </div>
  );
};

export default Projects;
export { Container };
