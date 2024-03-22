import "./projects.css";
import Button from "../button/Button";
import ProjectPic1 from "../../images/projectPic1.png";
import ProjectPic2 from "../../images/projectPic2.png";
import ProjectPic3 from "../../images/projectPic3.png";
import project1 from "../../images/projects/project1.png";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";

const Container = ({ imageUrl, label, description }) => {
  console.log("Rendering Card:", label); // Log a message when the Card component renders
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
      <h1>{title1}</h1>
      <h2>{title2}</h2>
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
