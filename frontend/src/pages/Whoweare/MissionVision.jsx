import "./missionvision.css";

import mv from "../../images/WhoWeAre/mission-vision.jpg";

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
                <img src={mv} alt="mission" />
                <div className="grey-mask"></div>
                <div className="mission-text">
                  <h2>Mission</h2>
                  <p>
                    At Collegium, we revolutionize Real Estate Development by
                    addressing complex projects wihtout using traditional manual
                    processes. Through advanced digital tools, we streamline
                    contract writing, expedite cash flow, optimize supply chain
                    efficiency, and ensure fair costs aligned with stakeholder
                    interests. Our mission is to consistently deliver Real
                    Estate Development projects with unparalleled outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mv-gradient">
              <div className="vision">
                <img src={mv} alt="vision" />
                <div className="grey-mask"></div>
                <div className="vision-text">
                  <h2>Vision</h2>
                  <p>
                    At Collegium, we revolutionize Real Estate Development by
                    addressing complex projects wihtout using traditional manual
                    processes. Through advanced digital tools, we streamline
                    contract writing, expedite cash flow, optimize supply chain
                    efficiency, and ensure fair costs aligned with stakeholder
                    interests. Our mission is to consistently deliver Real
                    Estate Development projects with unparalleled outcomes.
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
