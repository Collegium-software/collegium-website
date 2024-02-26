import "./careerhero.css";
import careerHero from "../../images/career/career.png";

const CareerHero = () => {
  return (
    <div>
      <div className="career-hero">
        <img src={careerHero} alt="career-hero" />
        <div className="career-hero-text">
          <div className="career-route">
            <p>Home/Career</p>
          </div>
          <div className="career-hero-title">
            <h2>Career</h2>
          </div>
          <div className="career-hero-subtitle">
            <p>Check our opening jobs and join us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
