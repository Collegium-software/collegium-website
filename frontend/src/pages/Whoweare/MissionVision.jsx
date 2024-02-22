import "./missionvision.css";
import mission from "../../images/WhoWeAre/mission.jpg";
import vision from "../../images/WhoWeAre/vision.jpg";

const MissionVision = () => {
  return (
    <div>
      <div className="mission-vision">
        <div className="mv-main-container">
          <div className="mv-title-gradient">
            <div className="mv-title">
              <h2>
                <span>“</span>
                <br></br>R.Buckminster Fuller
              </h2>
            </div>
          </div>

          <div className="mv-sub-title">
            <p>
              “You never change things by fighting the existing reality. To
              change something, build a new model that makes the old model
              obsolete.”
            </p>
          </div>
          <div className="missionVision-cards">
            <div className="mv-gradient">
              <div className="mission">
                <img src={mission} alt="mission" />
                <div className="grey-mask"></div>
                <div className="mission-text">
                  <h2>Mission</h2>
                  <p>
                    We bring emergent technologies of AI, Machine Learning, and
                    IoT to a new digital process of making buildings in
                    comparison.
                  </p>
                </div>
              </div>
            </div>
            <div className="mv-gradient">
              <div className="vision">
                <img src={vision} alt="vision" />
                <div className="grey-mask"></div>
                <div className="vision-text">
                  <h2>Vision</h2>
                  <p>
                    Changing the Business Model of Design & Construction so we
                    can afford to build our most vital infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
