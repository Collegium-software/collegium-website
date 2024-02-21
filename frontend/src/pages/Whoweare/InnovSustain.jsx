import "./innovsustain.css";
import sustain from "../../images/WhoWeAre/sustain.jpg";
import Button from "../../components/button/Button";
const InnovSustain = () => {
  return (
    <div className="innov-sustain">
      <div className="innovSustain-container">
        <div className="gradient-div">
          <div className="innovation">
            <h2>IT'S ABOUT INNOVATION</h2>
            <p>
              "We've always done it this way" is a dangerous statement. Instead,
              we ask <strong>"What can we do differently?"</strong>
              <br />
              <br /> Would we change the way we write our contracts? Would we
              make money flow faster and make supply chains more efficient?
              Would we better align all direct and indirect stakeholder
              interests towards just and fair costs? <br />
              <br />
              At Collegium, we said "YES!" Then we built it.
            </p>
          </div>
        </div>

        <div className="gradient-div">
          <div className="sustainability">
            <h2>IT'S ABOUT SUSTAINABILITY</h2>
            <p>
              Buildings need to be Environmentally, Socially, and Financially
              Sustainable. They must serve our communities, do-no-harm to our
              environment, be the least cost for everyone, and provide strong
              financial returns to Owners and Investors.
            </p>
            <div className="sustain-img">
              <img src={sustain} alt="sustainability"></img>
            </div>
            <div className="sustain-button">
              <Button label="Contact Us" to="/contactus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovSustain;
