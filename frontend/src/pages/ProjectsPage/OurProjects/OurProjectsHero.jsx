import "./ourProjectsHero.css";
import Button from "../../../components/button/Button";
const OurProjectsHero = () => {
  return (
    <div>
      <div className="la-heroSection">
        <div className="la-hs-main-container">
          <p className="la-route">Home/Our Projects</p>
          <h1 className="la-hero-title">Our Projects</h1>
          <h2 className="la-hero-subtitle">
            A digital platform uniting a fractured industry
          </h2>
          <p className="la-hero-description">
          Welcome to our Projects section, where we take pride in showcasing the diverse range of construction endeavors we've undertaken, each representing our commitment to excellence, innovation, and client satisfaction. 
          </p>
          <div className="la-herobutton">
            <Button label="Contact Us"to="/contactus"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjectsHero;
